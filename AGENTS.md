# AGENTS.md — World Environment Day Quiz

## What this project is

A **World Environment Day quiz** about Japanese sustainable finance and environmental policy, built for an internal employee event at a large financial firm in **Tokyo**.

**8 multiple-choice questions.** Factual answers verified against government sources. Tokyo-only, EN/JA bilingual. Static web app hosted on GitHub Pages, also deliverable via Microsoft Teams.

## Directory layout

```
├── AGENTS.md                                    ← this file
├── index.html                                   ← WEB APP: quiz entry point, Alpine templates
├── app.js                                       ← Compiled bundle (esbuild from src/ TypeScript)
├── alpine.min.js                                ← Vendored Alpine.js v3
├── src/
│   ├── data.ts                                  ← Types, translations, questions, helper functions
│   └── app.ts                                   ← Alpine component registration
├── __tests__/
│   └── data.test.ts                             ← Vitest tests
├── package.json                                 ← Build & test scripts
├── vitest.config.ts                             ← Vitest config
├── tsconfig.json                                ← TypeScript config
└── docs/
    ├── source-material/
    │   ├── Fact-Checking Report: All Proposed Quiz Questions.md   ← verified answers with source links
    │   └── Japan Green Finance Quiz Development.md                ← original strategic report
    ├── publication_drafts/
    │   ├── 01-facilitator-script.md             ← FULL version: questions, answers, scoring
    │   └── 02-participant-questions.md          ← QUESTIONS ONLY: safe for Teams chat or slides
    └── research/
        ├── HUMOR-RESEARCH.md                    ← JA vs EN humor analysis memo
        ├── CONTENT-ISSUES-SUMMARY.md            ← diagnosis of earlier content problems
        ├── JA_REVIEW_REQUEST.md                 ← review request doc for Japanese colleagues
        └── JA_REVIEW_SPREADSHEET.tsv            ← side-by-side EN/JA for review
```

## Delivery channels

| Channel | When to use | Source |
|---------|-------------|--------|
| **GitHub Pages** | Primary. QR code in office, self-serve. | `index.html` |
| **MS Teams chat** | Backup. Paste one question at a time. | `docs/publication_drafts/02-participant-questions.md` |
| **MS Teams screen share** | Live-hosted trivia with facilitator reading answers. | `docs/publication_drafts/01-facilitator-script.md` |

## Rules for the quiz

### Tone
- Professional, educational, conservative. This is a large financial firm. No memes, no sarcasm, no mockery of specific roles or departments.
- The *facts* are sacred. All correct answers are verified against government sources.

### Number of questions
- **8 questions.** Tokyo-only (locale: 'all' or ['tk']).
- 6 questions common to all, 2 Tokyo-specific.

### Architecture (web app)
- **Single HTML file + TypeScript.** Edit `src/data.ts` and `src/app.ts`. Build with `npm run build` (esbuild → `app.js`).
- **Location selector** at start (Tokyo) determines which question subset the user sees.
- **Score is stored** in `localStorage`. Users can replay for fun after seeing results (first score is saved).
- **Share button** copies a formatted score line for pasting into Teams.
- No backend required. Works offline.

### How to edit
1. Edit `src/data.ts`. Questions are in the `QUESTIONS` array.
2. Each question: `{ id, locale, correct, en: { title, options: {A,B,C,D}, joke, explainer }, ja: { ... } }`.
3. Options must use keys `A`, `B`, `C`, `D`.
4. Build: `npm run build` (esbuild `src/app.ts` → `app.js`).
5. Test locally: open `index.html` in a browser.
6. Run tests: `npm test`.
7. Mirror question changes to `docs/publication_drafts/`.

### What NOT to do
- Do NOT alter the verified facts. The fact-checking report is the ground truth.
- Do NOT make the tone sarcastic or mocking.
- Do NOT increase the question count without being asked.
- Do NOT require a backend. The quiz must work offline/localStorage-only.
- Do NOT collect personal data. Only `location` + `score` + `answers`.
- Do NOT add office-specific questions (SG/HK) without first restoring locale support.

### GitHub Pages deployment
1. Push to `main` branch.
2. GitHub Pages serves from root of `main`.
3. Result: `https://apac-environment-network.github.io/world-environment-day-quiz/`

## Bootstrap for new agents

1. Read this file first.
2. Read `docs/source-material/Japan Green Finance Quiz Development.md` for topic depth.
3. Read `docs/source-material/Fact-Checking Report: All Proposed Quiz Questions.md` for verified answer bank.
4. Read `index.html` to see the web app.
5. Read `src/data.ts` — questions are in the `QUESTIONS` array.
6. Read `docs/publication_drafts/01-facilitator-script.md` for Teams facilitator version.
7. Read `docs/publication_drafts/02-participant-questions.md` for Teams participant version.
