// Résume les passes Lighthouse de .lighthouseci/ en Markdown (passe médiane en performance),
// pour le résumé du job GitHub et le commentaire de PR.
//
//   node scripts/lighthouse-summary.mjs            → Markdown sur stdout
import { readdirSync, readFileSync } from 'node:fs';

const dir = new URL('../.lighthouseci/', import.meta.url);
const read = (name) => JSON.parse(readFileSync(new URL(name, dir), 'utf8'));

let runs = [];
try {
  runs = readdirSync(dir)
    .filter((name) => /^lhr-.+\.json$/.test(name))
    .map(read);
} catch {
  // Pas de dossier : Lighthouse n'a pas tourné.
}
if (runs.length === 0) {
  console.log('_Lighthouse : aucun rapport produit._');
  process.exit(0);
}

runs.sort((a, b) => a.categories.performance.score - b.categories.performance.score);
const median = runs[Math.floor(runs.length / 2)];

// Mêmes seuils que lighthouserc.cjs.
const thresholds = { performance: 90, accessibility: 95, 'best-practices': 95, seo: 95 };
const labels = {
  performance: 'Performance',
  accessibility: 'Accessibilité',
  'best-practices': 'Bonnes pratiques',
  seo: 'SEO',
};

let report;
try {
  report = Object.values(read('links.json'))[0];
} catch {
  // Pas de rapport en ligne (upload désactivé ou échoué).
}

const rows = Object.entries(thresholds).map(([id, min]) => {
  const score = Math.round(median.categories[id].score * 100);
  return `| ${labels[id]} | ${score >= min ? '✅' : '❌'} ${score} | ≥ ${min} |`;
});

console.log(
  [
    `**Lighthouse** (mobile, médiane de ${runs.length} passes) sur ${median.finalDisplayedUrl}`,
    '',
    '| Catégorie | Note | Seuil |',
    '| --- | --- | --- |',
    ...rows,
    ...(report ? ['', `[Rapport complet](${report})`] : []),
  ].join('\n'),
);
