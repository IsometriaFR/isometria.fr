// Envoie le build préprod (dist/, construit avec CLOUDFLARE_ENV=preprod) comme *version d'aperçu*
// du worker « isometria-preprod », sans toucher à ce que sert https://preprod.isometria.fr.
//
//   node scripts/preview-upload.mjs [alias]     (alias par défaut : la branche git courante)
//
// Deux URLs en sortie :
//   - alias   : https://<alias>-isometria-preprod.<compte>.workers.dev — stable, suit les envois ;
//   - version : https://<id>-isometria-preprod.<compte>.workers.dev — figée sur ce build précis.
// En CI, elles sont aussi écrites dans $GITHUB_OUTPUT (alias_url, version_url).
import { spawnSync } from 'node:child_process';
import { appendFileSync } from 'node:fs';

const git = (...args) => spawnSync('git', args, { encoding: 'utf8' }).stdout?.trim() ?? '';

// Un alias est un label DNS : minuscules, chiffres, tirets, commence par une lettre.
// « <alias>-isometria-preprod » doit tenir en 63 caractères.
function toAlias(name) {
  let alias = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (!/^[a-z]/.test(alias)) alias = `b-${alias}`;
  return alias.slice(0, 40).replace(/-+$/, '');
}

const source = process.argv[2] || git('rev-parse', '--abbrev-ref', 'HEAD');
if (!source || source === 'HEAD') {
  console.error('Alias introuvable : passez-le en argument (ex. « pr-12 » ou un nom de branche).');
  process.exit(1);
}
const alias = toAlias(source);
const message = `aperçu ${alias} @ ${git('rev-parse', '--short', 'HEAD') || 'local'}`;

const upload = spawnSync(
  'npx',
  ['wrangler', 'versions', 'upload', '--preview-alias', alias, '--message', message],
  { encoding: 'utf8', stdio: ['inherit', 'pipe', 'inherit'] },
);
process.stdout.write(upload.stdout ?? '');
if (upload.status !== 0) process.exit(upload.status ?? 1);

const versionUrl = upload.stdout.match(/Version Preview URL: (https:\/\/\S+)/)?.[1];
const aliasUrl = upload.stdout.match(/Version Preview Alias URL: (https:\/\/\S+)/)?.[1];
if (!versionUrl || !aliasUrl) {
  console.error("URLs d'aperçu introuvables dans la sortie de wrangler.");
  process.exit(1);
}

// La version met quelques secondes à être servie partout : on attend qu'elle réponde.
let ready = false;
for (let attempt = 0; attempt < 30 && !ready; attempt++) {
  ready = await fetch(versionUrl)
    .then((res) => res.ok)
    .catch(() => false);
  if (!ready) await new Promise((resolve) => setTimeout(resolve, 2000));
}
if (!ready) {
  console.error(`L'aperçu ne répond pas après 60 s : ${versionUrl}`);
  process.exit(1);
}

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `alias_url=${aliasUrl}\nversion_url=${versionUrl}\n`);
}
console.log(`\nAperçu prêt : ${aliasUrl}\nCe build     : ${versionUrl}`);
console.log(`Lighthouse   : LHCI_URL=${versionUrl} npm run lighthouse`);
