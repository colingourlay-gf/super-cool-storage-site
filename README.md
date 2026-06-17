# Super Cool Storage — marketing one-pager

A single-page marketing site for the demo company **Super Cool Storage**, served as a static
site by a tiny Express server (Railway-friendly).

## Run locally
```bash
npm install
npm start          # http://localhost:3000
```

## Deploy to Railway
Railway auto-detects Node (Nixpacks), runs `npm install`, then `npm start`, and injects `PORT`.

- **From the repo:** push this folder to a GitHub repo and "Deploy from GitHub repo" in Railway.
- **From the CLI:**
  ```bash
  npm i -g @railway/cli
  railway login
  railway init        # create/link a project
  railway up          # build & deploy
  ```
Then add a custom domain in Railway → Settings → Networking (e.g. `supercoolstorage.com`).

## Notes
- **Reservations link:** all "Reserve" buttons point at `window.RESERVE_URL` (set near the top of
  `public/index.html`), currently `https://dev-cust.getakiba.io`. Change it to the real
  reservations subdomain when ready.
- **Conversion tracking:** the Akiba first-party beacon is embedded in `<head>`
  (`akiba.js`, `data-key=ak_…`). It captures marketing-site page views/UTM. For the cross-domain
  visitor→conversion stitch to work, the reservations portal must live on a **subdomain of this
  site's primary domain** (shared first-party cookie). On separate domains the beacon still tracks
  this site, but won't auto-stitch to portal conversions.
- Brand assets are in `public/assets/` and `public/` (favicons).
