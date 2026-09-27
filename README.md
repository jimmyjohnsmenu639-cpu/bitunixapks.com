# Bitunix APK — Premium Landing Site

A premium, mobile-first static website for the **Bitunix APK download guide** — built with pure HTML/CSS/JS, zero dependencies, ready for **GitHub Pages**.

## What's inside

- **Hero + download card** — version, file size, update date, official download CTA
- **Install guide** — 6 steps with CSS phone mockups (no image assets needed)
- **Safety checklist** — do / don't cards
- **APK vs Play Store** comparison table
- **Version changelog** timeline (v3.53.0 → v3.46.0)
- **Features grid**, **troubleshooting accordion**, **12-question FAQ accordion**
- **SEO built-in** — meta tags + `SoftwareApplication` & `FAQPage` JSON-LD schema
- Fully responsive (mobile-first, the audience is on Android phones)

## Deploy to GitHub Pages (5 minutes)

1. Create a **new public repository** on github.com (e.g. `bitunix-apk`), **without** README/license.
2. In this folder, run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/bitunix-apk.git
git branch -M main
git push -u origin main
```

3. On github.com → your repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/(root)` → Save.
4. Your site goes live at `https://YOUR-USERNAME.github.io/bitunix-apk/` within a minute or two.

## Monthly freshness update (SEO weapon)

1. Check the Play Store listing for the new version number, size & date.
2. Update in `index.html`: the download card stats, the changelog timeline, the FAQ answer #1, and every "Last checked" date.
3. Commit & push — GitHub Pages redeploys automatically.

## Files

| File | Purpose |
|---|---|
| `index.html` | All content + SEO meta + JSON-LD schema |
| `styles.css` | Premium dark-theme design system |
| `script.js` | Accordions, mobile nav, scroll reveal, active nav |
