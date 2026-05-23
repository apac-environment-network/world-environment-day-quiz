# AGENTS.md — World Environment Day Quiz

## What this project is

A **World Environment Day quiz** about Japanese sustainable finance and environmental policy, built for an internal employee event at a large financial firm across APAC offices (**Tokyo, Singapore, Hong Kong**).

The quiz was originally 24 serious, highly-sourced questions. Feedback: "too serious." It has been rewritten as **8 multiple-choice questions with a dry, silly tone** — factual answers intact, wrong answers turned into finance-insider jokes. It is now a **static web app** hosted on GitHub Pages, also deliverable via Microsoft Teams.

## Directory layout

```
web_quiz/
├── AGENTS.md                                          ← this file
├── index.html                                         ← WEB APP: quiz entry point, Alpine templates
├── app.js                                             ← Compiled bundle (esbuild from src/ TypeScript)
├── alpine.min.js                                      ← Vendored Alpine.js v3 (46KB)
├── src/
│   ├── data.ts                                        ← Types, translations, questions, helper functions
│   └── app.ts                                         ← Alpine component registration
├── __tests__/
│   └── data.test.ts                                   ← Vitest tests (100% coverage)
├── package.json                                       ← Build & test scripts
├── vitest.config.ts                                   ← Vitest config (V8 coverage)
├── tsconfig.json                                      ← TypeScript config
├── Japan Green Finance Quiz Development.md             ← SOURCE MATERIAL (read-only) — the original strategic report
├── Fact-Checking Report: All Proposed Quiz Questions.md ← SOURCE MATERIAL (read-only) — verified answers with source links
├── RESEARCH-GROWTH.md                                 ← UNRELATED (dsar-engine project, ignore)
├── RESEARCH-JAPAN.md                                  ← UNRELATED (dsar-engine project, ignore)
└── publication_drafts/
    ├── 01-facilitator-script.md       ← FULL version: questions, answers, joke comments, scoring
    └── 02-participant-questions.md    ← QUESTIONS ONLY: safe to paste into Teams chat or put on slides
```

## Delivery channels

| Channel | When to use | Source |
|---------|-------------|--------|
| **GitHub Pages** | Primary. QR code in office, self-serve. Works on phones. | `index.html` |
| **MS Teams chat** | Backup / if GitHub blocked. Paste one question at a time. | `02-participant-questions.md` |
| **MS Teams screen share** | Live-hosted trivia with facilitator reading answers. | `01-facilitator-script.md` |

## Rules for the quiz

### Tone
- **Silly-funny, not absurd.** It's a big finance firm. No memes, no emoji overload (the 🌏 in the title is the ceiling). Think dry corporate gallows humour, not open-mic night.
- Jokes should land with all audiences: front office, middle office, IT, HR. Finance-insider gags work (ESG slide decks, Compliance expense reports, bonus calculations, transition finance footnotes) but keep them surface-level enough that non-traders get them too.
- The *facts* are sacred. All correct answers are verified against government sources. Wrong answers are the joke vehicle — never the correct answer.

### Number of questions
- **8 questions.** Not 24.
- Currently all 8 are common to all offices (Japan/SG/HK sees the same quiz).
- Placeholder structure exists in `index.html` for office-specific questions (see `ALL_QUESTIONS` array, `locale` field).

### Architecture (web app)
- **Single HTML file + TypeScript.** Edit `src/data.ts` (questions, translations, helpers) and `src/app.ts` (Alpine component). Build with `npm run build` (esbuild → `app.js`).
- **Location selector** at start (Tokyo / Singapore / Hong Kong) determines which question subset the user sees.
- **Answers are logged** to an optional GitHub repo via PAT (disabled by default — require config).
- **Score is stored** in `localStorage`. A cookie-like flag prevents retakes. Users can replay for fun after seeing results (first score is saved).
- **Share button** copies a formatted score line for pasting into Teams.

### Adding office-specific questions (SG / HK)

The `ALL_QUESTIONS` array in `index.html` has a `locale` field:

```js
{ locale: 'all', ... }             // everyone sees this
{ locale: ['sg', 'hk'], ... }       // only Singapore and Hong Kong see this
{ locale: ['tk'], ... }             // only Tokyo sees this
```

To add SG/HK questions:
1. Research and fact-check each topic (use a similar format to the Fact-Checking Report).
2. Add question objects to `ALL_QUESTIONS` with `locale: ['sg']` or `['hk']` as appropriate.
3. Ensure the total questions per office remains balanced (every office sees 8).
4. Update `01-facilitator-script.md` and `02-participant-questions.md` to note the locale branching.
5. Test: the filter in `initLocationScreen()` picks the right subset.

**Suggested SG topics (unverified, need research):**
- Carbon tax rate (current ~S$25/tCO2e, rising to S$50-80 by 2030)
- Green Plan 2030 targets (solar deployment, EV charging, tree planting)
- MAS green finance taxonomy
- SGX mandatory climate reporting

**Suggested HK topics (unverified, need research):**
- SFC ESG fund naming and disclosure rules
- HKMA green bond grant scheme
- Green and Sustainable Finance Cross-Agency Steering Group
- Hong Kong's Climate Action Plan 2050 targets

### GitHub Pages deployment

1. Create a new repo named `world-environment-day-quiz` on github.com.
2. Push this repo to GitHub:
   ```bash
   git remote add origin git@github.com:<user>/world-environment-day-quiz.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages in repo Settings → Pages → deploy from `main` branch, root folder.
4. Result: `https://<user>.github.io/world-environment-day-quiz/`
5. Generate a QR code pointing to that URL. Print and place in office common areas.

### Response logging (optional — GitHub API backend)

Configure `GITHUB_CONFIG` at the top of `index.html`:
- Create a **fine-grained PAT** with `contents:write` on a private repo.
- Set `enabled: true`, fill in `token`, `owner`, `repo`.
- Each quiz submission commits a JSON file to `responses/` in that repo.
- For stats: count files, group by `location` field.
- **Security note:** the PAT is visible in page source. Scope it to one repo, no read access, short expiry (7 days). Worst case: someone spams JSON files into a throwaway repo.

### What NOT to do
- Do NOT alter the verified facts. The fact-checking report is the ground truth.
- Do NOT make the tone "meme-tier." Keep it finance-professional funny.
- Do NOT create a single file that mixes facilitator answers with participant-facing content.
- Do NOT touch `RESEARCH-GROWTH.md` or `RESEARCH-JAPAN.md` — those belong to a different project (dsar-engine).
- Do NOT increase the question count without being asked.
- Do NOT require a backend. The quiz must work offline/localStorage-only. Backend is optional logging.
- Do NOT collect personal data. No names, no emails, no user IDs. Only `location` + `score` + `answers`.

## How to work on this

### Editing the web quiz
1. Edit `src/data.ts`. The questions are in the `QUESTIONS` array.
2. Match the structure: `{ id, locale, en, ja, zh, options, correct, joke, explain }`.
3. Options must use keys `A`, `B`, `C`, `D`.
4. Build: `npm run build` (esbuild `src/app.ts` → `app.js`).
5. Test locally: open `index.html` in a browser.
6. Run tests: `npm test`.
7. Mirror changes to `01-facilitator-script.md` and `02-participant-questions.md`.

### Editing the Teams versions
1. Read the source files first: `Japan Green Finance Quiz Development.md` for context, `Fact-Checking Report` for verified answers.
2. Edit `01-facilitator-script.md` (the master). Write Q first, then correct answer, then 3 joke wrong answers.
3. Mirror the Q and A/B/C/D choices into `02-participant-questions.md`. Do NOT copy the correct answer or joke commentary into the participant file.

## Bootstrap for new agents

If you are an AI agent newly assigned to this folder:

1. Read this file first.
2. Read `Japan Green Finance Quiz Development.md` (the strategic report) for topic depth.
3. Read `Fact-Checking Report: All Proposed Quiz Questions.md` for the verified answer bank.
4. Read `index.html` to see the web app. Questions are in `src/data.ts` (`QUESTIONS` array) and Alpine templates are in `index.html`.
5. Read `publication_drafts/01-facilitator-script.md` to see the Teams facilitator version.
6. Read `publication_drafts/02-participant-questions.md` to see the Teams participant version.
7. Identify what action is needed (add SG/HK questions, change tone, fix a bug, format for a new platform).
8. Propose changes in `publication_drafts/` — never overwrite the source files.

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
