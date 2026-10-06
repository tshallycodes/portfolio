# Tshally portfolio

A story-driven portfolio for Chukwuebuka Stephen Tshally-Okeke. Next.js App Router, TypeScript, GSAP and Three.js.

## Run

npm install
npm run dev

## Verify

npm run typecheck
npm run build

## Content

Homepage biography and experience: app/page.tsx
Project case studies: lib/projects.ts
Visual system: app/globals.css
Custom 3D scene: components/hero-scene.tsx

The CV in public/chukwuebuka-tshally-okeke-cv.pdf is the supplied original, unchanged. The website uses July 2027 graduation as directly confirmed; the original PDF still says May 2027.

Only public repository projects are included. Project media comes from public repositories. UPDRS imagery is an evaluation figure. Voyage uses a labelled architecture diagram rather than invented screenshots.

The site respects reduced-motion preferences and includes a manual motion toggle. Three.js loads asynchronously, uses a limited pixel ratio and has a CSS fallback if WebGL is unavailable. No analytics, backend, AI API keys or visitor data collection are needed.

## Deployment

Repository: https://github.com/tshallycodes/portfolio
Preferred production address: https://tshally.vercel.app
Deploy a preview first; promote the reviewed site to production to claim the preferred address if available.

## Interactive components

- `components/agent-explorer.tsx` is a labelled, local project walkthrough. It does not call a model or fabricate live outputs.
- `components/section-dock.tsx` provides section links and page progress using native scrolling.
- `components/skills-evidence.tsx` maps skills to existing public case studies with keyboard-accessible disclosure controls.
- `components/copy-email.tsx` copies the public recruiter email, with visible success or fallback feedback.
- Motion handles user-triggered filtering and walkthrough transitions. The existing GSAP hero animation remains; motion preferences apply to both.
