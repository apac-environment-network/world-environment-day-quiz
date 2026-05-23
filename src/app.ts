import {
  t, UI, Lang, LocCode, Screen, Question, Answer, TierDef, QText,
  getTier, filterQuestions, formatDate, saveResult, loadStored, shuffleQuestionOptions,
  QUESTIONS, OPTION_KEYS, LOC_NAMES,
} from './data';

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
  readonly version: string;
};

const saved = loadStored();

document.addEventListener('alpine:init', () => {
  Alpine.data('quiz', () => ({
    // ---- state ----
    screen: (saved ? 'result' : 'lang') as Screen,
    _langPick: (saved?.lang ?? 'en') as Lang,
    lang: (saved?.lang ?? 'en') as Lang,
    location: null as LocCode | null,
    questions: [] as Question[],
    currentIndex: 0,
    answers: [] as Answer[],
    answered: false,
    lastAnswerCorrect: false,
    savedResult: saved != null,
    savedTimestamp: saved ? formatDate(saved.timestamp) : '',
    _lastKey: null as string | null,
    toastVisible: false,
    toastText: '',
    showExplainer: false,
    OPTION_KEYS,
    SHOW_BRAND: true,

    // ---- helpers ----
    t(key: string, vars?: Record<string, string | number>): string {
      return t(UI[this.lang] ?? UI.en, key, vars);
    },

    // ---- computed ----
    get currentQuestion(): Question {
      return this.questions[this.currentIndex];
    },
    get currentText(): QText {
      const q = this.currentQuestion;
      if (!q) return { title: '', options: { A: '', B: '', C: '', D: '' }, joke: '', explainer: '' };
      return q[this.lang as 'en' | 'ja' | 'zh'] ?? q.en;
    },
    get totalQuestions(): number {
      return this.questions.length || 8;
    },
    get score(): number {
      if (saved && this.savedResult) return saved.score;
      return this.answers.filter((a: Answer) => a.isCorrect).length;
    },
    get tier(): TierDef {
      return getTier(this.score);
    },
    get resultLocation(): string {
      const loc = saved && this.savedResult ? saved.location : this.location;
      if (!loc) return '';
      const keys = LOC_NAMES[loc];
      return keys ? t(UI[this.lang] ?? UI.en, keys[0]) : '';
    },

    // ---- location ----
    selectLocation(loc: LocCode): void { this.location = loc; },

    startQuiz(): void {
      if (!this.location) return;
      this.lang = this._langPick;
      this.questions = filterQuestions(QUESTIONS, this.location).map(shuffleQuestionOptions);
      this.currentIndex = 0;
      this.answers = [];
      this.answered = false;
      this.screen = 'quiz';
    },

    // ---- progress ----
    progressClass(i: number): Record<string, boolean> {
      const cls: Record<string, boolean> = {};
      if (i < this.currentIndex) {
        const a = this.answers[i];
        cls[a?.isCorrect ? 'correct' : 'wrong'] = true;
      } else if (i === this.currentIndex) {
        cls.current = true;
      }
      return cls;
    },

    // ---- answering ----
    optionClass(key: string): Record<string, boolean> {
      if (!this.answered) return {};
      const q = this.currentQuestion;
      const isKey = this._lastKey === key;
      return { locked: true, correct: key === q.correct, wrong: isKey && key !== q.correct };
    },

    selectAnswer(key: string): void {
      if (this.answered) return;
      this.answered = true;
      this._lastKey = key;
      const q = this.currentQuestion;
      const correct = key === q.correct;
      this.lastAnswerCorrect = correct;
      this.answers.push({ qid: q.id, selected: key, correct: q.correct, isCorrect: correct });
      this.showExplainer = false;
      this.$nextTick(() => {
        const el = (this as any).$refs?.reveal as HTMLElement | undefined;
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    },

    toggleExplainer(): void {
      this.showExplainer = !this.showExplainer;
    },

    nextQuestion(): void {
      this.currentIndex++;
      if (this.currentIndex >= this.questions.length) {
        this.finishQuiz();
      } else {
        this.answered = false;
        this._lastKey = null;
        this.showExplainer = false;
        window.scrollTo(0, 0);
      }
    },

    goBack(): void {
      if (this.currentIndex <= 0 || this.answered) return;
      this.currentIndex--;
      this.answers.pop();
      this.showExplainer = false;
      window.scrollTo(0, 0);
    },

    finishQuiz(): void {
      const score = this.answers.filter((a: Answer) => a.isCorrect).length;
      saveResult(this.location!, this.answers, score, this.lang);
      this.savedResult = true;
      this.savedTimestamp = formatDate(new Date().toISOString());
      this.screen = 'result';
    },

    // ---- share ----
    copyScore(): void {
      const loc = saved && this.savedResult ? saved.location : this.location;
      const labelKeys = LOC_NAMES[loc as LocCode];
      const label = labelKeys ? t(UI[this.lang] ?? UI.en, labelKeys[0]) : (loc ?? '');
      const text = t(UI[this.lang] ?? UI.en, 'shareText', { office: label, score: this.score, total: this.totalQuestions });

      navigator.clipboard.writeText(text).then(() => this.showToast(t(UI[this.lang] ?? UI.en, 'copied')))
        .catch(() => {
          const ta = document.createElement('textarea'); ta.value = text;
          document.body.appendChild(ta); ta.select(); document.execCommand('copy');
          document.body.removeChild(ta);
          this.showToast(t(UI[this.lang] ?? UI.en, 'copied'));
        });
    },

    retakeQuiz(): void {
      this.screen = 'lang';
      this._langPick = 'en';
      this.location = null;
      this.questions = [];
      this.currentIndex = 0;
      this.answers = [];
      this.answered = false;
      this._lastKey = null;
    },

    showToast(msg: string): void {
      this.toastText = msg;
      this.toastVisible = true;
      setTimeout(() => { this.toastVisible = false; }, 2000);
    },
  }));
});
