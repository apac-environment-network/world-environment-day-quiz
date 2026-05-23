import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  t, UI, TIERS, getTier,
  QUESTIONS, filterQuestions, shuffleQuestionOptions, getUid,
  OPTION_KEYS, LOC_NAMES,
  loadStored, saveResult, formatDate,
} from '../src/data';

// ==========================================================
// t() — translation helper
// ==========================================================
describe('t()', () => {
  it('returns the string for an existing key', () => {
    expect(t(UI.en, 'kicker')).toBe('World Environment Day');
  });

  it('returns the key itself when key is missing', () => {
    expect(t(UI.en, 'nonexistent_key_xyz')).toBe('nonexistent_key_xyz');
  });

  it('interpolates a single variable', () => {
    expect(t(UI.en, 'questionN', { n: 3, total: 8 })).toBe('Question 3 of 8');
  });

  it('interpolates multiple variables', () => {
    expect(t(UI.en, 'shareText', { office: 'Tokyo', score: 6, total: 8 }))
      .toBe('World Environment Day Quiz \u2014 Tokyo office \u00B7 Score: 6/8');
  });

  it('handles missing vars gracefully (no replacement)', () => {
    expect(t(UI.en, 'questionN')).toBe('Question {n} of {total}');
  });

  it('works with Japanese translations', () => {
    expect(t(UI.ja, 'correct')).toBe('\u6B63\u89E3');
    expect(t(UI.ja, 'questionN', { n: 1, total: 8 })).toBe('\u7B2C1\u554F / \u51688\u554F');
  });

  it('works with Chinese translations', () => {
    expect(t(UI.zh, 'correct')).toBe('\u6B63\u786E');
    expect(t(UI.zh, 'questionN', { n: 1, total: 8 })).toBe('\u7B2C1\u9898 / \u51718\u9898');
  });
});

// ==========================================================
// UI completeness — all locales have same keys
// ==========================================================
describe('UI translations', () => {
  const enKeys = Object.keys(UI.en).sort();
  const jaKeys = Object.keys(UI.ja).sort();
  const zhKeys = Object.keys(UI.zh).sort();

  it('ja has all en keys', () => {
    expect(jaKeys).toEqual(enKeys);
  });

  it('zh has all en keys', () => {
    expect(zhKeys).toEqual(enKeys);
  });

  it('no key has empty string', () => {
    for (const lang of ['en', 'ja', 'zh']) {
      for (const [k, v] of Object.entries(UI[lang])) {
        expect(v, `${lang}.${k} is empty`).toBeTruthy();
      }
    }
  });
});

// ==========================================================
// getTier() — score tiers
// ==========================================================
describe('getTier()', () => {
  it('returns tier_0 for score 8', () => {
    expect(getTier(8).titleKey).toBe('tier_0');
  });

  it('returns tier_0 for score 7', () => {
    expect(getTier(7).titleKey).toBe('tier_0');
  });

  it('returns tier_1 for score 6', () => {
    expect(getTier(6).titleKey).toBe('tier_1');
  });

  it('returns tier_1 for score 4', () => {
    expect(getTier(4).titleKey).toBe('tier_1');
  });

  it('returns tier_2 for score 3', () => {
    expect(getTier(3).titleKey).toBe('tier_2');
  });

  it('returns tier_2 for score 2', () => {
    expect(getTier(2).titleKey).toBe('tier_2');
  });

  it('returns tier_3 for score 1', () => {
    expect(getTier(1).titleKey).toBe('tier_3');
  });

  it('returns tier_3 for score 0', () => {
    expect(getTier(0).titleKey).toBe('tier_3');
  });

  it('TIERS array is sorted descending', () => {
    for (let i = 1; i < TIERS.length; i++) {
      expect(TIERS[i - 1].min).toBeGreaterThan(TIERS[i].min);
    }
  });

  it('all tiers have non-empty titles and descriptions', () => {
    for (const t of TIERS) {
      expect(UI.en[t.titleKey]).toBeTruthy();
      expect(UI.en[t.descKey]).toBeTruthy();
    }
  });

  it('returns fallback tier for impossible negative score', () => {
    const t = getTier(-1);
    expect(t.titleKey).toBe('tier_3');
    expect(t.min).toBe(0);
  });
});

// ==========================================================
// filterQuestions() — locale filtering
// ==========================================================
describe('filterQuestions()', () => {
  it('returns all questions for tk location', () => {
    const result = filterQuestions(QUESTIONS, 'tk');
    expect(result).toHaveLength(8);
  });

  it('returns all questions for sg location', () => {
    const result = filterQuestions(QUESTIONS, 'sg');
    expect(result).toHaveLength(8);
  });

  it('returns all questions for hk location', () => {
    const result = filterQuestions(QUESTIONS, 'hk');
    expect(result).toHaveLength(8);
  });

  it('questions have valid locale patterns', () => {
    for (const q of QUESTIONS) {
      expect(['all', 'tk', 'sg', 'hk']).toContain(
        Array.isArray(q.locale) ? q.locale[0] : q.locale
      );
    }
  });

  it('handles array locale matching', () => {
    const testQs = [
      QUESTIONS[0],
      { ...QUESTIONS[0], id: 'test1', locale: ['tk', 'sg'] },
      { ...QUESTIONS[0], id: 'test2', locale: ['sg', 'hk'] },
    ] as any[];
    const r1 = filterQuestions(testQs as any, 'tk');
    expect(r1).toHaveLength(2);
    const r2 = filterQuestions(testQs as any, 'hk');
    expect(r2).toHaveLength(2);
    const r3 = filterQuestions(testQs as any, 'sg');
    expect(r3).toHaveLength(3);
  });
});

// ==========================================================
// shuffleQuestionOptions() — option randomization
// ==========================================================
describe('shuffleQuestionOptions()', () => {
  it('preserves correct answer content across shuffle', () => {
    const q = QUESTIONS[0];
    const shuffled = shuffleQuestionOptions(q);
    const correctKey = shuffled.correct;
    expect(shuffled.en.options[correctKey]).toBe(q.en.options[q.correct]);
    expect(shuffled.ja.options[correctKey]).toBe(q.ja.options[q.correct]);
    expect(shuffled.zh.options[correctKey]).toBe(q.zh.options[q.correct]);
  });

  it('has all 4 options after shuffle', () => {
    const shuffled = shuffleQuestionOptions(QUESTIONS[0]);
    expect(Object.keys(shuffled.en.options)).toEqual(['A', 'B', 'C', 'D']);
    expect(Object.keys(shuffled.ja.options)).toEqual(['A', 'B', 'C', 'D']);
    expect(Object.keys(shuffled.zh.options)).toEqual(['A', 'B', 'C', 'D']);
  });

  it('does not lose or duplicate option values', () => {
    const q = QUESTIONS[0];
    const shuffled = shuffleQuestionOptions(q);
    const vals = Object.values(q.en.options).sort();
    const shufVals = Object.values(shuffled.en.options).sort();
    expect(shufVals).toEqual(vals);
  });
});

// ==========================================================
// getUid() — per-browser UUID
// ==========================================================
describe('getUid()', () => {
  beforeEach(() => { localStorage.clear(); });
  it('returns a string on first call', () => {
    const uid = getUid();
    expect(typeof uid).toBe('string');
    expect(uid.length).toBeGreaterThan(10);
  });
  it('returns the same ID on subsequent calls (sticky)', () => {
    const a = getUid();
    const b = getUid();
    expect(a).toBe(b);
  });
  it('persists across reloads (localStorage)', () => {
    const a = getUid();
    // simulate page reload
    localStorage.setItem('wed2026_uid', a);
    const b = getUid();
    expect(a).toBe(b);
  });
});

// ==========================================================
// QUESTIONS data integrity
// ==========================================================
describe('QUESTIONS data', () => {
  it('has exactly 12 questions (6 common, 2 tk, 2 sg, 2 hk)', () => {
    expect(QUESTIONS).toHaveLength(12);
  });

  it('each question has required fields', () => {
    for (const q of QUESTIONS) {
      expect(q.id).toBeGreaterThan(0);
      expect(q.correct).toMatch(/^[A-D]$/);
      expect(q.en).toBeDefined();
      expect(q.ja).toBeDefined();
      expect(q.zh).toBeDefined();
    }
  });

  it('each QText has title, options, joke, explainer', () => {
    for (const q of QUESTIONS) {
      for (const lang of ['en', 'ja', 'zh']) {
        const text = q[lang as 'en' | 'ja' | 'zh'];
        expect(text.title, `Q${q.id} ${lang} title`).toBeTruthy();
        expect(text.joke, `Q${q.id} ${lang} joke`).toBeTruthy();
        expect(text.explainer, `Q${q.id} ${lang} explainer`).toBeTruthy();
        for (const k of ['A', 'B', 'C', 'D']) {
          expect(text.options[k], `Q${q.id} ${lang} option ${k}`).toBeTruthy();
        }
      }
    }
  });

  it('each question has unique ids', () => {
    const ids = QUESTIONS.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ==========================================================
// OPTION_KEYS & LOC_NAMES
// ==========================================================
describe('constants', () => {
  it('OPTION_KEYS is A, B, C, D', () => {
    expect(OPTION_KEYS).toEqual(['A', 'B', 'C', 'D']);
  });

  it('LOC_NAMES has entries for tk, sg, hk', () => {
    expect(LOC_NAMES.tk).toEqual(['office_tk_name', 'office_tk_city']);
    expect(LOC_NAMES.sg).toEqual(['office_sg_name', 'office_sg_city']);
    expect(LOC_NAMES.hk).toEqual(['office_hk_name', 'office_hk_city']);
  });
});

// ==========================================================
// loadStored() / saveResult()
// ==========================================================
describe('localStorage helpers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('loadStored returns null when nothing stored', () => {
    expect(loadStored()).toBeNull();
  });

  it('saveResult stores data and loadStored retrieves it', () => {
    const answers = [{ qid: 1, selected: 'A', correct: 'A', isCorrect: true }];
    saveResult('tk', answers, 1, 'en');
    const stored = loadStored();
    expect(stored).not.toBeNull();
    expect(stored!.location).toBe('tk');
    expect(stored!.score).toBe(1);
    expect(stored!.lang).toBe('en');
    expect(stored!.answers).toEqual(answers);
    expect(stored!.timestamp).toBeTruthy();
  });

  it('saveResult works with different languages', () => {
    saveResult('sg', [], 5, 'ja');
    const stored = loadStored();
    expect(stored!.lang).toBe('ja');
    expect(stored!.location).toBe('sg');
    expect(stored!.score).toBe(5);
  });

  it('loadStored handles corrupted JSON gracefully', () => {
    localStorage.setItem('wed2026_quiz', '{corrupted');
    expect(loadStored()).toBeNull();
  });
});

// ==========================================================
// formatDate()
// ==========================================================
describe('formatDate()', () => {
  it('formats a date with "st" suffix', () => {
    const d = new Date(2026, 4, 1); // May 1
    expect(formatDate(d.toISOString())).toBe('1st May 2026');
  });

  it('formats a date with "nd" suffix', () => {
    const d = new Date(2026, 4, 2);
    expect(formatDate(d.toISOString())).toBe('2nd May 2026');
  });

  it('formats a date with "rd" suffix', () => {
    const d = new Date(2026, 4, 3);
    expect(formatDate(d.toISOString())).toBe('3rd May 2026');
  });

  it('formats a date with "th" suffix', () => {
    const d = new Date(2026, 4, 10);
    expect(formatDate(d.toISOString())).toBe('10th May 2026');
  });

  it('handles 11th, 12th, 13th correctly', () => {
    expect(formatDate(new Date(2026, 4, 11).toISOString())).toBe('11th May 2026');
    expect(formatDate(new Date(2026, 4, 12).toISOString())).toBe('12th May 2026');
    expect(formatDate(new Date(2026, 4, 13).toISOString())).toBe('13th May 2026');
  });

  it('handles 21st, 22nd, 23rd, 31st', () => {
    expect(formatDate(new Date(2026, 4, 21).toISOString())).toBe('21st May 2026');
    expect(formatDate(new Date(2026, 4, 22).toISOString())).toBe('22nd May 2026');
    expect(formatDate(new Date(2026, 4, 23).toISOString())).toBe('23rd May 2026');
    expect(formatDate(new Date(2026, 0, 31).toISOString())).toBe('31st January 2026');
  });

  it('works across different months', () => {
    expect(formatDate(new Date(2026, 6, 4).toISOString())).toBe('4th July 2026');
    expect(formatDate(new Date(2026, 11, 25).toISOString())).toBe('25th December 2026');
  });
});
