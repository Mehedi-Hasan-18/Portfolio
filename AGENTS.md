# AGENTS.md

Personal portfolio site (Mehedi Hasan). React 19 + Vite 7 + Tailwind CSS v4, client-side only (no backend).

## Commands (from `Portfolio/`)
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint (`eslint .`), ignores `dist`
- No test framework and no typecheck step exist.

## Tailwind v4 setup (important)
- There is **no `tailwind.config.js`**. Tailwind and daisyui are wired up in `src/index.css` via `@import "tailwindcss";` and `@plugin "daisyui";`.
- Theme/dark mode is set on the `<html>` tag in `index.html` (`data-theme="dark"`).
- `src/App.css` contains a large **block of commented-out** shadcn/`@theme` Tailwind config. Do not treat it as active; if you need global CSS, add to `src/index.css`.

## Path alias gotcha
- `@/*` → `./src/*` is declared in `jsconfig.json` and `components.json`, but it is **NOT configured in `vite.config.js`**, and no source file currently uses `@/` imports (components use relative paths). Don't introduce `@/` imports unless you also add the alias to `vite.config.js`.

## Build quirks
- `vite.config.js` marks `typewriter-effect` as external, but nothing in `src/` imports it — it is a leftover dependency. Don't rely on it.

## Other notes
- `src/utils/sendToWebhook.js` contains a **hardcoded n8n webhook URL** used by the contact chatbot. Don't expose/commit it; guard against shipping secrets.
- `index.html` includes a hardcoded Microsoft Clarity analytics script (`xy3t2io7zp`) — it is the site's tracking, don't remove casually.
- Animation/effect components (ScrambleText, ScrollFloat, SplitText, AnimatedContent, RotatingText, etc.) in `src/Components/` are largely self-contained, near-copies of reactbits-style components; they include their own GSAP/motion-relevant imports.
