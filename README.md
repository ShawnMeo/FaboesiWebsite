# Faboesi

The website for Faboesi, raw Surinamese honey, at [faboesi.com](https://faboesi.com).
Plain static HTML in Dutch: no framework, no build step, no dependencies.

## Layout

```
index.html              home
produkten.html          honey types
andere-produkten.html   other bee products
puur-natuur.html        honey and health
about.html              about us
winkels.html            where to buy
winkels-map/            interactive shop map, standalone (see its own README)
Assets/
  css/styles.css        the one stylesheet, shared by every page
  js/script.js          the one script, shared by every page
  images/               product, about and page photography
seo/seo-plan.md         target keywords and recommended metadata
```

## Run it locally

Open `index.html` in a browser. Every link and asset path is relative, so the
site works straight from disk.

The shop map is the same: open `winkels-map/index.html`. It needs an internet
connection for the map tiles.

## Deploy

The Cloudflare Pages project `faboesi` is connected to this repo and publishes
`main` as it is, from the repo root. **A merge to `main` is a deploy.** Work goes
on a branch and through a pull request, and the merge is the release.

## Notes

- **Everything committed is public.** Pages serves the whole repo root, so
  `.gitignore`, `seo/seo-plan.md` and this README are all reachable on
  faboesi.com. Keep nothing private in the repo.
- **The footer is written out in each of the six pages.** A footer change is six
  edits; there is no shared include.
- **Design sources are ignored, not stored.** The Blender and Photoshop files,
  `textures/`, the catalogue PDFs and the price-list images sit in the same
  folder but are listed in `.gitignore`, so GitHub has no copy of them.
- **The shop map is not linked from the site yet.** Its data was taken from
  `winkels.html` on 2026-07-13; `winkels-map/check_updates.py` pulls the list
  again.
