// Lighthouse CI — deux cibles, mêmes seuils :
//   - sans LHCI_URL : le build local `dist/client`, servi par lhci (prod, indexable) ;
//   - avec LHCI_URL : une URL réelle servie par Cloudflare (aperçu de PR/branche ou préprod).
const url = process.env.LHCI_URL;

module.exports = {
  ci: {
    collect: url
      ? {
          url: [url],
          numberOfRuns: 3,
          // Aperçus et préprod sont volontairement en noindex (scripts/preprod-noindex.mjs) :
          // on n'y juge pas l'indexabilité, sinon la note SEO s'effondre pour rien.
          settings: { skipAudits: ['is-crawlable'] },
        }
      : {
          staticDistDir: './dist/client',
          url: ['http://localhost/'],
          numberOfRuns: 3,
        },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9, aggregationMethod: 'median-run' }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
