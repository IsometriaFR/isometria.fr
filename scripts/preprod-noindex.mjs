// Après `astro build` : si on construit la préprod (CLOUDFLARE_ENV=preprod),
// on interdit l'indexation (en-tête X-Robots-Tag + robots.txt) pour ne pas
// concurrencer la production dans les moteurs de recherche.
import { appendFile, writeFile } from 'node:fs/promises';

if (process.env.CLOUDFLARE_ENV !== 'preprod') process.exit(0);

const out = new URL('../dist/client/', import.meta.url);
await appendFile(new URL('_headers', out), '\n/*\n  X-Robots-Tag: noindex, nofollow\n');
await writeFile(new URL('robots.txt', out), 'User-agent: *\nDisallow: /\n');
console.log('[preprod] noindex ajouté (_headers + robots.txt)');
