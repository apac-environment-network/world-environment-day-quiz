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


<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
