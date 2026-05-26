# Content-side Issues, Findings & Proposed Solutions

**Status: Diagnosis complete. JA rewrite pending.**

---

## The Problem

English quiz shown to British colleague → loved it.  
Same quiz, Japanese translation shown to Japanese colleagues → "offensive," "super arrogant."

## Root Cause

| | British humor | Japanese humor |
|---|---|---|
| **Structure** | Solo deadpan → you detect the irony | Boke + tsukkomi → someone must react for it to be a joke |
| **Target** | Soto: institutions, bosses, power | Uchi: self, own group, never authority |
| **Function** | Aggressive intimacy — sharper = closer | Celebratory warmth — 笑う門には福来る |
| **Delivery** | Sarcasm, irony, satire | Puns, wordplay, shared recognition (あるある) |
| **Satire of authority** | Core tradition (ancient Greece → today) | Nearly absent; reads as disrespect, breaks 和 |

**Sources:** Göran Vaage (大阪大学), DMM英会話, McGraw & Warner *The Humor Code*, Frontiers in Psychology (2019), r/AskAJapanese

## Why the JA Translation Failed — 5 Points

1. **No tsukkomi.** Quiz has one voice. Japanese needs someone saying "それ違うでしょ！" to mark absurdity as joke. Without it, the narrator is just 「ただの変な人」— a rude stranger.

2. **Soto-targeted mockery.** Mocking MDs, HR, Facilities, regulators reads as genuine disrespect. In British English it's bonding. In Japanese it's an attack.

3. **Sarcasm mistranslated as contempt.** "Growth will pay for it — never backfired" → JA reader takes this as: *this person thinks Japanese policy is a joke.*

4. **Stranger-intimacy violation.** Japanese humor happens among friends/family. A quiz narrator making sharp remarks to a stranger = too familiar, inappropriate.

5. **Critical, not celebratory.** The quiz mocks everything. Japanese humor celebrates shared experience.

**Confirmed by research:** McGraw & Warner on why they chose Japan for their global humor study — *「かの地ほど僕らと異なる笑いを持つ国を、僕はほかに知らない」* ("I know of no country whose humor differs from ours as much as Japan's.") These two cultures are at opposite ends of the spectrum. Direct translation was structurally impossible.

## Proposed Solution — 6 Design Principles for JA Rewrite

1. **Make the reader the tsukkomi.** Wrong answers = earnest-but-absurd *boke* statements the reader instinctively wants to correct. Laugh comes from mental 「いや、違うでしょ！」

2. **Target uchi, never soto.** Mock "私たちの業界" (our industry) collectively, never a specific role or department. Humor about shared *situations*, not *people*.

3. **Warm, affiliative tone.** Narrator is a peer who's also confused/amused. です・ます体, never keigo for humor (keigo + sarcasm = contempt in JA).

4. **Aruaru (あるある) recognition.** Wrong answers should trigger "Oh, that exact thing happens!" — not "That's harsh."

5. **Explainer as punchline.** Let the factual explainer deliver discovery and satisfaction. Japanese favors indirect delivery. The options set up an "aha" that lands in the explainer.

6. **Add dajare/wordplay.** At least 2-3 questions need a language-play layer that only works in Japanese.

## Concrete Example (Q2: Cool Biz)

**Current JA (fails):**
> D: 「MDがネクタイを外した瞬間の室温。それが何度であろうと、その時がクールビズ開始である」
> *Mocks a superior → reads as disrespect.*

**Rewrite direction:**
> D: 「『室温28℃』と言われても、日当たりの良い席と窓際では体感温度が全然違うので、結局誰も正解を知らない」
> *Mocks the situation (office thermostat chaos), not a person. Aruaru energy. Uchi.*

---

## Remaining Work

| Step | Status |
|------|--------|
| Research diagnosis | Done (HUMOR-RESEARCH.md) |
| Rewrite JA options + jokes for all 8 questions | Done (2026-05-26) |
| Review JA rewrite with Japanese colleagues | Pending |
| Update publication_drafts (facilitator + participant) | Pending |
| Clean up dead explainer constants (Q9-Q12, all ZH) | Pending (harmless clutter) |

### Rewrite summary

Applied 6 design principles to all 8 questions:
1. **Reader as tsukkomi** — wrong answers are earnest boke the reader wants to correct
2. **Uchi-targeted** — mock shared situations, never specific roles (MD/HR/Facilities removed)
3. **Warm, affiliative tone** — です・ます体, narrator is a peer
4. **Aruaru recognition** — wrong answers trigger "oh yes, that happens" not "that's harsh"
5. **Explainer delivers reward** — warm, factual, often celebratory
6. **Wordplay where possible** — Q3 uses R-word play (Relax/Report/Really?)

Build passes, 46/46 tests pass. Ready for Japanese colleague review.
