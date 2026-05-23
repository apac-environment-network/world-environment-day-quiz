# World Environment Day Quiz — Agent Instructions

This is a static web quiz hosted on GitHub Pages. See `AGENTS.md` for full project context.

## Build & Test

```bash
npm install          # Install dependencies
npm run build        # Compile TypeScript → app.js (esbuild)
npm test             # Run Vitest suite
npm run coverage     # Run tests with coverage report
```

## Git Workflow

- Work on feature branches (`git checkout -b feature/<name>`), never commit directly to main
- Pre-commit hook runs tests + build automatically
- Commit to main only for stable, tested changes
- Push to GitHub when done

## Conventions

- Edit `src/data.ts` for questions and translations
- Edit `src/app.ts` for Alpine component logic
- Edit `index.html` for HTML templates and CSS
- Run `npm run build` after any TypeScript change
- Keep app.js in sync (pre-commit hook does this)
