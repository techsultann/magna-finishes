# Magna Finishes Global Limited — website

A Next.js 15 (App Router, React 19) marketing site for Magna Finishes Global
Limited, with a paint-drip design system pulled from the company logo, a
contact form, and a sticky WhatsApp button.

## What's inside

- `app/` — routes, layout, global styles, and the `/api/contact` route
- `components/` — Header, Hero, About, Services, BeforeAfter (drag-to-compare),
  SocialProof, Testimonials, Contact, ContactForm, WhatsAppFab, Footer
- `public/logo.jpg` — the company logo, also used as the emblem/favicon source
- `Dockerfile` — optional container build using Next's `standalone` output

## 1. Install prerequisites (one time)

You need **Node.js 18.18 or later** (Node 20 LTS recommended) and npm.

Check what you have:

```bash
node -v
npm -v
```

If Node isn't installed, or the version is too old:

**macOS (Homebrew):**
```bash
brew install node@20
```

**Windows:** download the LTS installer from https://nodejs.org and run it.

**Linux (nvm, recommended on any distro):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc   # or restart your terminal
nvm install 20
nvm use 20
```

## 2. Get the project onto your machine

If you downloaded this as a folder/zip, unzip it and `cd` into it:

```bash
cd path/to/magna-finishes
```

## 3. Install dependencies

```bash
npm install
```

This reads `package.json` and installs Next.js 15, React 19, Tailwind CSS,
and TypeScript into `node_modules/`.

## 4. Run it locally

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. The dev server hot-reloads
as you edit files in `app/` and `components/`.

Stop it anytime with `Ctrl + C`.

## 5. Before you go live — swap the placeholders

- **WhatsApp number** — open `components/WhatsAppFab.tsx` and replace
  `WHATSAPP_NUMBER` with the real number in international format, digits
  only (e.g. a Nigerian `0803 123 4567` becomes `2348031234567`).
- **Before/after photos** — `components/BeforeAfter.tsx` currently uses a
  CSS gradient stand-in. Swap it for real job photos (see the comment in
  that file, or replace the two gradient `<div>`s with `next/image`).
- **Email delivery** — `app/api/contact/route.ts` validates and logs
  submissions but doesn't send email yet, so the build works with zero
  setup. To actually receive enquiries at
  `magnafinishesglobal@gmail.com`, follow the commented example in that
  file to wire up an email provider (Resend, Postmark, or SMTP), then add
  the provider's API key to a local `.env` file (copy `.env.example`).
- **Testimonials, stats and trusted-by names** in `components/Testimonials.tsx`
  and `components/SocialProof.tsx` are written as realistic placeholders —
  replace with real client quotes and figures.

## 6. Build for production

```bash
npm run build
npm run start
```

`npm run build` compiles an optimized production build (this also
type-checks and lints). `npm run start` serves that build on
**http://localhost:3000**.

## 7. Deploy / self-host

This project sets `output: "standalone"` in `next.config.mjs`, which is the
configuration Next.js recommends for self-hosting on any Node server
(see the official guide: https://nextjs.org/docs/app/guides/self-hosting).

**Option A — a VPS or your own server, no Docker:**
```bash
npm ci
npm run build
npm run start          # or run server.js from .next/standalone with a process manager like pm2
```

**Option B — Docker (uses the included Dockerfile):**
```bash
docker build -t magna-finishes .
docker run -p 3000:3000 magna-finishes
```

**Option C — a platform like Vercel:**
Push the project to a Git repository and import it in Vercel; no extra
config needed, `output: "standalone"` is safe there too.

## Troubleshooting

- **`npm install` fails on Node version** — you likely have an old Node.
  Re-check `node -v` and upgrade per step 1.
- **Port 3000 already in use** — run `npm run dev -- -p 3001` and use that
  port instead.
- **Fonts don't load in a fully offline environment** — this project uses
  `next/font/google` (Archivo Black, Work Sans, IBM Plex Mono), which
  downloads and self-hosts the font files at build time. The very first
  `npm run dev` or `npm run build` needs internet access once; after that,
  the fonts are cached locally.
