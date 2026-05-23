# Lab Notebook — Puppeteer Integration Test

**Date:** 23 May 2026  
**Test target:** `https://apac-environment-network.github.io/world-environment-day-quiz/`

---

## Test Flow

| Step | Screen | Action | Result |
|------|--------|--------|--------|
| 1 | Language | Load URL | Language selector renders: English/日本語/中文 |
| 2 | Language | Click "English" | Transitions to start screen with office selector |
| 3 | Start | Click Tokyo card | Tokyo selected, "Start quiz" enabled |
| 4 | Start | Click "Start quiz" | Quiz screen loads, Q1 with 8 progress dots |
| 5 | Quiz Q1 | Click option A (Japan) | Reveal box shows "CORRECT" with joke text |
| 6 | Quiz Q1 | Click quiz Next | Q2 loads with "← Back" visible |
| 7 | Quiz Q2–Q7 | Click A, Next each | Sequential advancement works |
| 8 | Quiz Q8 | Click A, "See results" | Results screen loads |
| 9 | Results | Verify | 7/8, tier "ESG Specialist", timestamp, office=Tokyo, localStorage persisted |

---

## Discoveries

### GOTCHA 1: `x-show` screens cause Puppeteer selector collisions
**Severity:** Testing-only (no user impact)

Both `screen='start'` and `screen='quiz'` use `x-show` (not `x-if`/`x-teleport`), so DOM contains both screens simultaneously. `button.btn-primary` resolves to the *Start quiz* button (DOM order) not the Next button. Clicking it calls `startQuiz()`, resetting quiz state to Q1.

**Fix for testing:** Use scoped selectors:
- Quiz Next: `div[x-show*="quiz"] button.btn-primary`
- Quiz option: `.option-btn` (only in quiz screen, but safe)

**Consider:** This is only a testing issue. Real users can't see/crash the hidden Start button because `x-show` renders `display:none`.

### GOTCHA 2: All 8 correct answers are `'A'`
**Severity:** Critical (user-impacting)

`data.ts` line 208-250: every question has `correct: 'A'`. The facilitator script (Teams version) uses A for all answers as a convention (facilitator just says "A"). For the web app, this makes the quiz trivial — click A every time for 8/8.

**Fix needed:** Shuffle option order per question at quiz start. Track which key maps to the correct answer after shuffle.

### GOTCHA 3: Stale `app.js` on GitHub Pages
**Severity:** Medium

Testing revealed the footer text was the old version ("All facts verified against official sources...") despite updating `data.ts`. The compiled `app.js` in the GitHub Pages deployment is stale because the footer was updated *after* the initial build/push.

**Fix:** Rebuild and push after any `src/data.ts` or `src/app.ts` change. Pre-commit hook handles this.

### GOTCHA 4: Page "wiggle" on content size change
**Severity:** Low (cosmetic)

When switching questions or toggling explainer, the `#app` container height changes abruptly because no `min-height` is set. Content reflows cause layout shift.

**Suggested fix:** Add `min-height: 480px` (or similar) to `#app`, or add a CSS transition on height.

---

## Verified Working

- [x] Language toggle (en → ja → zh) with translations
- [x] Office/location selector (cards + validation)
- [x] Quiz progression (1→2→3→...→8)
- [x] Reveal box (correct/incorrect verdict + joke)
- [x] Explainer toggle (show/hide source)
- [x] Back button (pre-answer, Q2+)
- [x] Progress dots (correct/wrong styling)
- [x] Results screen (score, tier, date formatting)
- [x] localStorage persistence (`wed2026_quiz`)
- [x] Retake protection (first score saved)
- [x] GitHub Pages deployment (`.nojekyll` required)
