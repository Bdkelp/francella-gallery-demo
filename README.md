# The Art of Francella — Digital Gallery Redesign Concept

Pitch-ready static website prototype for GitHub Pages.

## What is included

- `index.html` — main entrance / homepage
- `art.html` — gallery concept
- `tattoos.html` — tattoo studio concept
- `tattoo-inquiry.html` — guided tattoo inquiry prototype
- `dreadful-things.html` — Dreadful Things ecommerce concept
- `story.html` — artist story / exhibition concept
- `visit.html` — physical location / visit concept
- `concept.html` — strategy + wireframes + commerce architecture
- `styles.css` — shared visual system
- `app.js` — motion, navigation, demo modals, inquiry demo behavior
- `assets/` — local demo assets
- `404.html` — graceful fallback for bad links
- `.nojekyll` — tells GitHub Pages to serve the static site directly

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload **the contents of this folder** to the repository root — not the enclosing folder itself.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. GitHub will publish the site at the Pages URL shown in that screen.

The homepage must remain named `index.html`.

## Client-facing links

Send Francella the root GitHub Pages URL first. That opens the immersive homepage.

The concept / wireframe presentation is available at:

`/concept.html`

## Important demo notes

- The main navigation and internal rooms are connected and work as static pages.
- Prototype-only actions intentionally show a demo message instead of submitting data or creating an order.
- The tattoo inquiry form does **not** send information in this concept build.
- The current Shopify catalog is linked only where the concept intentionally hands off to the existing live store.
- Several public Francella images are currently referenced from her public website / indexed public sources. For production, replace these with original high-resolution files supplied and approved by Francella.
- `assets/tattoo-cat.webp` is packaged locally.

## Production phase after approval

1. Obtain approved high-resolution portraits, artwork, tattoo portfolio, exhibition, studio and Dreadful Things photography.
2. Confirm Shopify theme / catalog architecture and all fulfillment integrations.
3. Confirm Francella's tattoo review, consultation, deposit and scheduling workflow.
4. Connect the inquiry form to the chosen CRM/email workflow.
5. Rebuild commerce discovery while preserving Shopify checkout and fulfillment.
6. Connect analytics, SEO, accessibility and production forms.

## Creative rule

**Do not decorate Francella's brand. Reveal it.**

Every image should establish identity, prove caliber, deepen the environment, or move the visitor toward collecting, booking, shopping or visiting.

## Image assets

All imagery used by the prototype is now stored locally in `assets/`; the presentation does not hotlink Shopify, Bing, or editorial image servers. See `ASSET_SOURCES.md` for provenance and production replacement notes. The only intentional external links are the current live catalog and Google Maps directions.

