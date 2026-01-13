# Copilot Instructions for trockenbau-leyer

## Project Overview

- This is a Next.js 16 project using the app directory structure, React 19, and Tailwind CSS 4 for styling.
- The codebase is organized by page routes under `app/`, with subfolders for major site sections (e.g., `leistungen/`, `privat/`, etc.).
- Shared UI components are in `components/`, with further grouping for homepage sections in `components/pgHome/`.
- Static assets (fonts, images, SVGs) are in `public/`.

## Key Workflows

- **Development:** Use `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`) to start the local server at http://localhost:3000.
- **Build:** Use `npm run build` to create a production build.
- **Linting:** Run `npm run lint` to check code style and errors. ESLint is configured with Next.js core web vitals and custom ignores in `eslint.config.mjs`.
- **Routing:** All routing is file-based under `app/`. Nested folders represent nested routes.
- **Styling:** Tailwind CSS is configured via `postcss.config.mjs` and loaded in `app/globals.css`.
- **Font Loading:** Custom fonts are stored in `public/fonts/` and loaded via Next.js font optimization.

## Patterns & Conventions

- **Component Structure:** Prefer functional React components. Shared components go in `components/`, page-specific ones in subfolders.
- **Imports:** Use path aliases (`@/*`) as defined in `jsconfig.json` for cleaner imports.
- **No API routes:** There are no custom API routes or backend logic in this codebase.
- **No tests:** No test setup or test files are present.
- **No state management library:** State is managed locally within React components.
- **No custom server logic:** All logic is client-side and static.

## Integration Points

- **External dependencies:** Only Next.js, React, ReactDOM, Tailwind CSS, and ESLint (with Next.js config) are used.
- **No third-party services:** No analytics, authentication, or external APIs are integrated.

## Examples

- To add a new page, create a new folder and `page.js` under `app/` (e.g., `app/new-section/page.js`).
- To add a new homepage section, add a component to `components/pgHome/` and import it in the relevant page.
- To use a custom font, place the `.woff2` file in `public/fonts/` and configure it in your CSS or Next.js font loader.

## References

- See `README.md` for basic setup and deployment instructions.
- See `eslint.config.mjs` for linting rules and ignores.
- See `jsconfig.json` for path alias configuration.
- See `postcss.config.mjs` for Tailwind CSS setup.

---

For questions about project structure or conventions, review this file and the referenced configs before making changes. If a pattern is unclear, ask for clarification or check for recent updates in the config files.
