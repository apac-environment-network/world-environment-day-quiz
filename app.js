"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/data.ts
  function t(strings, key, vars) {
    let s = strings[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
    return s;
  }
  function getTier(score) {
    return TIERS.find((t2) => score >= t2.min) ?? TIERS[TIERS.length - 1];
  }
  function filterQuestions(all, loc) {
    return all.filter((q) => q.locale === "all" || Array.isArray(q.locale) && q.locale.includes(loc));
  }
  function shuffleQuestionOptions(q) {
    const keys = ["A", "B", "C", "D"];
    const shuffled = [...keys];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const rebuildOptions = (opts) => {
      const r = {};
      for (let i = 0; i < 4; i++) r[keys[i]] = opts[shuffled[i]];
      return r;
    };
    return {
      ...q,
      correct: keys[shuffled.indexOf(q.correct)],
      en: { ...q.en, options: rebuildOptions(q.en.options) },
      ja: { ...q.ja, options: rebuildOptions(q.ja.options) },
      zh: { ...q.zh, options: rebuildOptions(q.zh.options) }
    };
  }
  function loadStored() {
    try {
      const raw = localStorage.getItem("wed2026_quiz");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  function saveResult(location, answers, score, lang) {
    localStorage.setItem("wed2026_quiz", JSON.stringify({ location, answers, score, timestamp: (/* @__PURE__ */ new Date()).toISOString(), lang }));
  }
  function formatDate(iso) {
    const d = new Date(iso);
    const day = d.getDate(), month = d.toLocaleString("en-GB", { month: "long" }), year = d.getFullYear();
    const s = [1, 21, 31].includes(day) ? "st" : [2, 22].includes(day) ? "nd" : [3, 23].includes(day) ? "rd" : "th";
    return `${day}${s} ${month} ${year}`;
  }
  var UI, TIERS, Q1_EXPLAINER_EN, Q1_EXPLAINER_JA, Q1_EXPLAINER_ZH, Q2_EXPLAINER_EN, Q2_EXPLAINER_JA, Q2_EXPLAINER_ZH, Q3_EXPLAINER_EN, Q3_EXPLAINER_JA, Q3_EXPLAINER_ZH, Q4_EXPLAINER_EN, Q4_EXPLAINER_JA, Q4_EXPLAINER_ZH, Q5_EXPLAINER_EN, Q5_EXPLAINER_JA, Q5_EXPLAINER_ZH, Q6_EXPLAINER_EN, Q6_EXPLAINER_JA, Q6_EXPLAINER_ZH, Q7_EXPLAINER_EN, Q7_EXPLAINER_JA, Q7_EXPLAINER_ZH, Q8_EXPLAINER_EN, Q8_EXPLAINER_JA, Q8_EXPLAINER_ZH, QUESTIONS, OPTION_KEYS, LOC_NAMES;
  var init_data = __esm({
    "src/data.ts"() {
      "use strict";
      UI = {
        en: {
          kicker: "World Environment Day",
          title: "Quiz \u2014 APAC Edition",
          byline: "8 questions. 3 offices. Produced by the Department of Mandatory Fun.",
          changeLanguage: "Change language",
          selectOffice: "Select your office",
          office_tk_name: "Tokyo",
          office_tk_city: "Japan",
          office_sg_name: "Singapore",
          office_sg_city: "Singapore",
          office_hk_name: "Hong Kong",
          office_hk_city: "Hong Kong SAR",
          startQuiz: "Start quiz",
          privacyNote: "No personal data collected. One attempt only.",
          questionN: "Question {n} of {total}",
          correct: "Correct",
          incorrect: "Incorrect \u2014 the answer was {answer}",
          back: "Back",
          next: "Next",
          seeResults: "See results",
          yourResults: "Your results",
          savedResult: "Your saved result",
          takenOn: "Taken {date}",
          outOf: "out of {n}",
          source: "Source",
          tier_0: "ESG Specialist",
          tier_0_desc: "You have read the footnotes. Your colleagues may be nervous around you.",
          tier_1: "Transition-Literate",
          tier_1_desc: "Solid working knowledge. May still call thermal recycling \u201Crecycling.\u201D",
          tier_2: "Greenwashed",
          tier_2_desc: "You nod knowingly in ESG meetings. You are not fooling anyone.",
          tier_3: "Stranded Asset",
          tier_3_desc: "Perhaps avoid the sustainability portion of the client call.",
          copyScore: "Copy score for Teams",
          retakeQuiz: "Retake quiz (for fun \u2014 first score is saved)",
          footer: "Brought to you by APAC Environment Networks",
          shareText: "World Environment Day Quiz \u2014 {office} office \xB7 Score: {score}/{total}",
          copied: "Copied \u2014 paste it into Teams"
        },
        ja: {
          kicker: "\u4E16\u754C\u74B0\u5883\u30C7\u30FC",
          title: "\u30AF\u30A4\u30BA \u2014 APAC\u7248",
          byline: "\u51688\u554F\u30023\u62E0\u70B9\u3002\u4EBA\u4E8B\u90E8\u516C\u8A8D\u306E\u5F37\u5236\u53C2\u52A0\u578B\u30EC\u30AF\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u3002",
          changeLanguage: "\u8A00\u8A9E\u3092\u5909\u66F4",
          selectOffice: "\u62E0\u70B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
          office_tk_name: "\u6771\u4EAC",
          office_tk_city: "\u65E5\u672C",
          office_sg_name: "\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB",
          office_sg_city: "\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB",
          office_hk_name: "\u9999\u6E2F",
          office_hk_city: "\u9999\u6E2F\u7279\u5225\u884C\u653F\u533A",
          startQuiz: "\u30AF\u30A4\u30BA\u3092\u59CB\u3081\u308B",
          privacyNote: "\u500B\u4EBA\u60C5\u5831\u306F\u53CE\u96C6\u3055\u308C\u307E\u305B\u3093\u3002\u56DE\u7B54\u306F1\u56DE\u9650\u308A\u3067\u3059\u3002",
          questionN: "\u7B2C{n}\u554F / \u5168{total}\u554F",
          correct: "\u6B63\u89E3",
          incorrect: "\u4E0D\u6B63\u89E3 \u2014 \u6B63\u89E3\u306F {answer} \u3067\u3057\u305F",
          back: "\u623B\u308B",
          next: "\u6B21\u3078",
          seeResults: "\u7D50\u679C\u3092\u898B\u308B",
          yourResults: "\u7D50\u679C",
          savedResult: "\u4FDD\u5B58\u3055\u308C\u305F\u7D50\u679C",
          takenOn: "\u53D7\u9A13\u65E5: {date}",
          outOf: "{n}\u554F\u4E2D",
          source: "\u51FA\u5178",
          tier_0: "ESG\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8",
          tier_0_desc: "\u811A\u6CE2\u307E\u3067\u8AAD\u7834\u3002\u540C\u508D\u304B\u3089\u6050\u308C\u3089\u308C\u308B\u5B58\u5728\u3002",
          tier_1: "\u79FB\u884C\u91D1\u878D\u30EA\u30C6\u30E9\u30B7\u30FC\u3042\u308A",
          tier_1_desc: "\u5B9F\u7528\u7684\u306A\u77E5\u8B58\u306F\u3042\u308B\u304C\u3001\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u3092\u300C\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\u3068\u547C\u3093\u3067\u3057\u307E\u3046\u3002",
          tier_2: "\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30E3\u30FC\u7591\u60D1",
          tier_2_desc: "ESG\u4F1A\u8B70\u3067\u3046\u306A\u305A\u304F\u3060\u3051\u3002\u8AB0\u3082\u9A19\u305B\u3066\u3044\u307E\u305B\u3093\u3002",
          tier_3: "\u5EA7\u7901\u8CC7\u7523",
          tier_3_desc: "\u30B5\u30B9\u30C6\u30CA\u30D3\u30EA\u30C6\u30A3\u306E\u8A71\u984C\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u524D\u3067\u51FA\u3055\u306A\u3044\u3088\u3046\u306B\u3002",
          copyScore: "\u30B9\u30B3\u30A2\u3092Teams\u306B\u30B3\u30D4\u30FC",
          retakeQuiz: "\u518D\u53D7\u9A13\uFF08\u304A\u8A66\u3057 \u2014 \u6700\u521D\u306E\u30B9\u30B3\u30A2\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\uFF09",
          footer: "APAC\u74B0\u5883\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u304C\u304A\u5C4A\u3051\u3057\u307E\u3059",
          shareText: "\u4E16\u754C\u74B0\u5883\u30C7\u30FC\u30AF\u30A4\u30BA \u2014 {office}\u30AA\u30D5\u30A3\u30B9 \xB7 \u30B9\u30B3\u30A2: {score}/{total}",
          copied: "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u2014 Teams\u306B\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044"
        },
        zh: {
          kicker: "\u4E16\u754C\u73AF\u5883\u65E5",
          title: "\u7B54\u9898 \u2014 APAC\u7248",
          byline: "8\u9053\u9898\u30023\u4E2A\u529E\u516C\u5BA4\u3002\u7531\u201C\u5F3A\u5236\u5A31\u4E50\u90E8\u201D\u5236\u4F5C\u3002",
          changeLanguage: "\u5207\u6362\u8BED\u8A00",
          selectOffice: "\u9009\u62E9\u60A8\u7684\u529E\u516C\u5BA4",
          office_tk_name: "\u4E1C\u4EAC",
          office_tk_city: "\u65E5\u672C",
          office_sg_name: "\u65B0\u52A0\u5761",
          office_sg_city: "\u65B0\u52A0\u5761",
          office_hk_name: "\u9999\u6E2F",
          office_hk_city: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
          startQuiz: "\u5F00\u59CB\u7B54\u9898",
          privacyNote: "\u4E0D\u6536\u96C6\u4E2A\u4EBA\u6570\u636E\u3002\u4EC5\u9650\u4E00\u6B21\u4F5C\u7B54\u3002",
          questionN: "\u7B2C{n}\u9898 / \u5171{total}\u9898",
          correct: "\u6B63\u786E",
          incorrect: "\u9519\u8BEF \u2014 \u6B63\u786E\u7B54\u6848\u662F {answer}",
          back: "\u8FD4\u56DE",
          next: "\u4E0B\u4E00\u9898",
          seeResults: "\u67E5\u770B\u7ED3\u679C",
          yourResults: "\u60A8\u7684\u6210\u7EE9",
          savedResult: "\u5DF2\u4FDD\u5B58\u7684\u6210\u7EE9",
          takenOn: "\u7B54\u9898\u65E5\u671F: {date}",
          outOf: "\u5171{n}\u9898",
          source: "\u6765\u6E90",
          tier_0: "ESG\u4E13\u5BB6",
          tier_0_desc: "\u4F60\u8BFB\u4E86\u811A\u6CE8\u3002\u540C\u4E8B\u4EEC\u5F00\u59CB\u6015\u4F60\u4E86\u3002",
          tier_1: "\u8F6C\u578B\u91D1\u878D\u7D20\u517B",
          tier_1_desc: "\u6709\u624E\u5B9E\u7684\u77E5\u8BC6\u50A8\u5907\u3002\u4F46\u53EF\u80FD\u4ECD\u7136\u628A\u201C\u70ED\u56DE\u6536\u201D\u53EB\u4F5C\u201C\u56DE\u6536\u201D\u3002",
          tier_2: "\u6F02\u7EFF\u5ACC\u7591",
          tier_2_desc: "\u4F60\u5728ESG\u4F1A\u8BAE\u4E0A\u9891\u9891\u70B9\u5934\u3002\u6CA1\u4EBA\u88AB\u9A97\u5230\u3002",
          tier_3: "\u6401\u6D6C\u8D44\u4EA7",
          tier_3_desc: "\u5EFA\u8BAE\u5728\u5BA2\u6237\u9762\u524D\u907F\u514D\u8C08\u8BBA\u53EF\u6301\u7EED\u53D1\u5C55\u8BDD\u9898\u3002",
          copyScore: "\u590D\u5236\u6210\u7EE9\u5230Teams",
          retakeQuiz: "\u91CD\u505A\uFF08\u4EC5\u4F9B\u5A31\u4E50 \u2014 \u9996\u6B21\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF09",
          footer: "\u7531 APAC \u73AF\u5883\u7F51\u7EDC\u4E3A\u60A8\u5448\u732E",
          shareText: "\u4E16\u754C\u73AF\u5883\u65E5\u7B54\u9898 \u2014 {office}\u529E\u516C\u5BA4 \xB7 \u6210\u7EE9: {score}/{total}",
          copied: "\u5DF2\u590D\u5236 \u2014 \u7C98\u8D34\u5230Teams\u4E2D\u5206\u4EAB"
        }
      };
      TIERS = [
        { min: 7, titleKey: "tier_0", descKey: "tier_0_desc", color: "#1a7a4c" },
        { min: 4, titleKey: "tier_1", descKey: "tier_1_desc", color: "#8b7e14" },
        { min: 2, titleKey: "tier_2", descKey: "tier_2_desc", color: "#b85c1a" },
        { min: 0, titleKey: "tier_3", descKey: "tier_3_desc", color: "#c1292e" }
      ];
      Q1_EXPLAINER_EN = 'Japan proposed World Environment Day at the 1972 UN Conference on the Human Environment in Stockholm. Sweden hosted; Japan proposed; the UN General Assembly agreed. June\xA05 has since become the UN\u2019s flagship campaign for environmental awareness, observed by over 150 countries each year. What your MD won\u2019t tell you: the proposal was partly a diplomatic move \u2014 Japan wanted to show environmental leadership after facing international criticism over industrial pollution (Minamata, itai-itai). Every ESG initiative has an origin story; most involve a crisis someone tried to get ahead of.<br><br><a href="https://www.worldenvironmentday.global/about/history" target="_blank" rel="noopener">\u2192 UN World Environment Day \u2014 official history</a>';
      Q1_EXPLAINER_JA = "\u65E5\u672C\u306F1972\u5E74\u306E\u56FD\u9023\u4EBA\u9593\u74B0\u5883\u4F1A\u8B70\uFF08\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\uFF09\u3067\u4E16\u754C\u74B0\u5883\u30C7\u30FC\u3092\u63D0\u6848\u3057\u307E\u3057\u305F\u3002\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u304C\u4E3B\u50AC\u3001\u65E5\u672C\u304C\u63D0\u6848\u3001\u56FD\u9023\u7DCF\u4F1A\u304C\u627F\u8A8D\u3002\u4EE5\u6765\u30016\u67085\u65E5\u306F\u56FD\u9023\u65D7\u8239\u306E\u74B0\u5883\u5553\u767A\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3068\u306A\u308A\u3001\u6BCE\u5E74150\u304B\u56FD\u4EE5\u4E0A\u304C\u53C2\u52A0\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u63D0\u6848\u306F\u3001\u4E9C\u6C34\u75C7\u30FB\u30A4\u30BF\u30A4\u30A4\u30BF\u30A4\u75C7\u7B49\u306E\u753A\u5DE5\u516C\u5BB3\u306B\u5BFE\u3059\u308B\u56FD\u969B\u7684\u6279\u5224\u3092\u53D7\u3051\u305F\u65E5\u672C\u304C\u3001\u74B0\u5883\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7\u3092\u793A\u3059\u305F\u3081\u306E\u5916\u4EA4\u6226\u7565\u3067\u3082\u3042\u308A\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u306EESG\u30A4\u30CB\u30B7\u30A2\u30C1\u30D6\u3082\u3001\u5FC5\u305A\u4F55\u304B\u306E\u30AF\u30EA\u30B7\u30B9\u304B\u3089\u59CB\u307E\u3063\u3066\u3044\u307E\u3059\u3002";
      Q1_EXPLAINER_ZH = "1972\u5E74\uFF0C\u65E5\u672C\u5728\u65AF\u5FB7\u54E5\u5C14\u6469\u8054\u5408\u56FD\u4EBA\u7C7B\u73AF\u5883\u4F1A\u8BAE\u4E0A\u63D0\u8BAE\u8BBE\u7ACB\u4E16\u754C\u73AF\u5883\u65E5\u3002\u745E\u5178\u4E3B\u529E\u4F1A\u8BAE\uFF0C\u65E5\u672C\u63D0\u51FA\u52A8\u8BAE\uFF0C\u8054\u5408\u56FD\u5927\u4F1A\u6279\u51C6\u901A\u8FC7\u3002\u6B64\u540E\u6BCF\u5E746\u67085\u65E5\u6210\u4E3A\u8054\u5408\u56FD\u73AF\u5883\u5BA3\u4F20\u65D7\u8230\u6D3B\u52A8\uFF0C\u8D85\u8FC7150\u4E2A\u56FD\u5BB6\u53C2\u4E0E\u3002\u4F60\u77E5\u9053\u4F46\u8463\u4E8B\u4E0D\u4F1A\u544A\u8BC9\u4F60\u7684\u662F\uFF1A\u8FD9\u4E00\u63D0\u8BAE\u90E8\u5206\u51FA\u4E8E\u5916\u4EA4\u7B56\u7565\u2014\u2014\u65E5\u672C\u5728\u7ECF\u5386\u6C34\u4FE3\u75C5\u3001\u75DB\u75DB\u75C5\u7B49\u5DE5\u4E1A\u6C61\u67D3\u7684\u56FD\u9645\u6279\u8BC4\u540E\uFF0C\u5E0C\u671B\u5C55\u793A\u73AF\u5883\u9886\u5BFC\u529B\u3002\u6BCF\u4E00\u4E2AESG\u5021\u8BAE\u90FD\u6709\u8D77\u6E90\u6545\u4E8B\uFF1B\u5927\u591A\u6570\u90FD\u59CB\u4E8E\u67D0\u573A\u5371\u673A\u3002";
      Q2_EXPLAINER_EN = 'The Cool Biz campaign, launched in 2005 by the Ministry of the Environment, mandated 28\xB0C (82.4\xB0F) as the standard office air-conditioning temperature during summer. The policy also relaxed dress codes: no ties, no jackets. The result: an estimated 1.14 million tonnes of CO\u2082 reduction annually. What makes this genuinely interesting: it was purely voluntary (no fines, no enforcement). Companies just\u2026 did it. The Japanese term for this is \u201Ckeizoku\u201D \u2014 continuous improvement through social consensus, not regulation. Your compliance department has never heard of it.<br><br><a href="https://en.wikipedia.org/wiki/Cool_Biz_campaign" target="_blank" rel="noopener">\u2192 Wikipedia \u2014 Cool Biz campaign</a>';
      Q2_EXPLAINER_JA = "\u30AF\u30FC\u30EB\u30D3\u30BA\u306F\u30012005\u5E74\u306B\u74B0\u5883\u7701\u304C\u59CB\u3081\u305F\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3067\u3001\u590F\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u6E29\u5EA6\u309228\u2103\u306B\u898F\u5B9A\u3057\u307E\u3059\u300234\u2103\u306E\u5916\u6C17\u4E0B\u3001\u900F\u660E\u6027\u3092\u6301\u3064\u5F37\u3044\u4EBA\u306F\u3053\u306E\u5B9F\u8D28\u7684\u306A\u7121\u610F\u5473\u3055\u3092\u8868\u73FE\u3067\u304D\u307E\u3059\u3002\u30CD\u30AF\u30BF\u30A4\u3068\u30B8\u30E3\u30B1\u30C3\u30C8\u3082\u4FEE\u6B63\u3055\u308C\u307E\u3059\u3002\u7D50\u679C\u3001\u6BCE\u5E74\u7D04114\u4E07\u30C8\u30F3\u306EC\u2460\u2092\u304C\u524A\u6E1B\u3002\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u306E\u60B2\u50B7\u304C\u3042\u308B\u5834\u5408\u3001\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u306F\u3069\u306E\u3088\u3046\u306B\u753B\u9762\u7684\u306B\u8868\u73FE\u3055\u308C\u307E\u3059\u304B\u3002";
      Q2_EXPLAINER_ZH = '2005\u5E74\uFF0C\u65E5\u672C\u73AF\u5883\u7701\u53D1\u8D77"\u6E05\u51C9\u5546\u52A1"\u6D3B\u52A8\uFF0C\u89C4\u5B9A\u590F\u5B63\u529E\u516C\u5BA4\u7A7A\u8C03\u6E29\u5EA6\u8BBE\u5B9A\u4E3A28\xB0C\uFF0882.4\xB0F\uFF09\u3002\u540C\u65F6\u653E\u5BBD\u7740\u88C5\u8981\u6C42\uFF1A\u4E0D\u6253\u9886\u5E26\u3001\u4E0D\u7A7F\u5916\u5957\u3002\u7ED3\u679C\uFF1A\u6BCF\u5E74\u51CF\u6392\u7EA6114\u4E07\u5428\u4E8C\u6C27\u5316\u78B3\u3002\u771F\u6B63\u6709\u8DA3\u4E4B\u5904\u5728\u4E8E\uFF1A\u8FD9\u5B8C\u5168\u662F\u81EA\u613F\u6027\u8D28\u7684\uFF08\u65E0\u7F5A\u6B3E\u3001\u65E0\u5F3A\u5236\u6267\u884C\uFF09\u3002\u4F01\u4E1A\u5C31\u662F...\u7167\u505A\u4E86\u3002\u65E5\u8BED\u7BA1\u8FD9\u53EB"\u7D99\u7D9A"\u2014\u2014\u901A\u8FC7\u793E\u4F1A\u5171\u8BC6\u800C\u975E\u76D1\u7BA1\u6765\u5B9E\u73B0\u7684\u6301\u7EED\u6539\u8FDB\u3002\u4F60\u7684\u5408\u89C4\u90E8\u95E8\u4ECE\u672A\u542C\u8BF4\u8FC7\u8FD9\u4E2A\u8BCD\u3002';
      Q3_EXPLAINER_EN = '"Mottainai" (\u201Cwhat a waste\u201D) is a Japanese expression that environmental activist and Nobel Peace Prize laureate Wangari Maathai popularised globally. She identified Respect as the fourth R \u2014 for the Earth\u2019s finite resources. The Japanese Ministry of Foreign Affairs officially adopted the Mottainai Campaign, and the concept was promoted at the 2008 G8 Hokkaido Toyako Summit. The existing three Rs (Reduce, Reuse, Recycle) were enshrined in Japanese law in the 2000 Basic Act for Establishing a Sound Material-Cycle Society. Respect was added not by legislation but by cultural consensus \u2014 the hardest kind of regulation to draft.<br><br><a href="https://www.mofa.go.jp/policy/economy/summit/2008/kids/eco/index_02.html" target="_blank" rel="noopener">\u2192 MOFA \u2014 Mottainai Campaign</a>';
      Q3_EXPLAINER_JA = "\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u300D\u3068\u3044\u3046\u65E5\u672C\u306E\u8868\u73FE\u3092\u3001\u30CE\u30FC\u30D9\u30EB\u5E73\u548C\u8CCE\u53D7\u8CDE\u8005\u30EF\u30F3\u30AC\u30EA\u30FB\u30DE\u30FC\u30BF\u30A4\u6C0F\u304C\u4E16\u754C\u7684\u306B\u5E83\u3081\u307E\u3057\u305F\u3002\u5F7C\u5973\u306F4\u3064\u76EE\u306ER\u3068\u3057\u3066\u300CRespect\uFF08\u656C\u610F\uFF09\u300D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002\u5916\u52D9\u7701\u306F\u516C\u5F0F\u306B\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u300D\u3092\u63A1\u7528\u3057\u30012008\u5E74\u306EG8\u5317\u6D77\u9053\u5FD7\u7126\u30B5\u30DF\u30C3\u30C8\u3067\u63D0\u5021\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306F\u7ACB\u6CD5\u3067\u306F\u306A\u304F\u3001\u6587\u5316\u7684\u30B3\u30F3\u30BB\u30F3\u30B5\u30B9\u306B\u3088\u308B\u3082\u306E\u3067\u3059\u3002";
      Q3_EXPLAINER_ZH = '"Mottainai\uFF08\u3082\u3063\u305F\u3044\u306A\u3044\uFF09"\u662F\u65E5\u8BED\u4E2D\u8868\u8FBE"\u6D6A\u8D39"\u7684\u8BF4\u6CD5\uFF0C\u7531\u8BFA\u8D1D\u5C14\u548C\u5E73\u5956\u5F97\u4E3B\u65FA\u52A0\u91CC\xB7\u9A6C\u5854\u4F0A\u63A8\u5E7F\u81F3\u5168\u7403\u3002\u5979\u6307\u51FA\u7B2C\u56DB\u4E2AR\u662F"Respect\uFF08\u5C0A\u91CD\uFF09"\u2014\u2014\u5BF9\u5730\u7403\u6709\u9650\u8D44\u6E90\u7684\u5C0A\u91CD\u3002\u65E5\u672C\u5916\u52A1\u7701\u5B98\u65B9\u91C7\u7EB3\u4E86"Mottainai\u8FD0\u52A8"\uFF0C\u57282008\u5E74G8\u5317\u6D77\u9053\u6D1E\u7237\u6E56\u5CF0\u4F1A\u4E0A\u5F97\u5230\u63A8\u5E7F\u3002\u524D\u4E09\u4E2AR\uFF08Reduce\u3001Reuse\u3001Recycle\uFF09\u901A\u8FC72000\u5E74\u300A\u5FAA\u73AF\u578B\u793E\u4F1A\u5F62\u6210\u63A8\u8FDB\u57FA\u672C\u6CD5\u300B\u786E\u7ACB\u3002\u800C"Respect"\u5E76\u975E\u901A\u8FC7\u7ACB\u6CD5\uFF0C\u800C\u662F\u901A\u8FC7\u6587\u5316\u5171\u8BC6\u52A0\u5165\u7684\u2014\u2014\u8FD9\u662F\u6700\u96BE\u8D77\u8349\u7684"\u6CD5\u89C4"\u3002';
      Q4_EXPLAINER_EN = 'Japan reports a plastic recycling rate of approximately 85%. This figure has been widely cited in corporate ESG reports and government communications. However, it includes \u201Cthermal recycling\u201D \u2014 incinerating plastic waste to generate energy. Under international standards that measure actual material reprocessing (what the EU calls \u201Cmaterial recycling\u201D), Japan\u2019s real rate is approximately 24%. The remaining ~61% is either landfilled, incinerated without energy recovery, or exported. Japan generates more plastic packaging waste per capita than any country except the United States.<br><br><a href="https://circulareconomy.earth/publications/how-japan-is-using-the-circular-economy-to-recycle-plastics" target="_blank" rel="noopener">\u2192 Circular Economy Earth \u2014 Japan plastics analysis</a>';
      Q4_EXPLAINER_JA = "\u65E5\u672C\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u306F\u7D0485%\u3068\u5831\u544A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6570\u5024\u306F\u4F01\u696D\u306EESG\u30EC\u30DD\u30FC\u30C8\u3084\u653F\u5E9C\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5E83\u304F\u5F15\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u306F\u300C\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\uFF08\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u3092\u7112\u5374\u3057\u3066\u767A\u96FB\uFF09\u3092\u542B\u3093\u3067\u3044\u307E\u3059\u3002\u56FD\u969B\u6A19\u6E96\uFF08\u7269\u8CEA\u30EA\u30B5\u30A4\u30AF\u30EB\uFF09\u3067\u306F\u3001\u65E5\u672C\u306E\u5B9F\u8CEA\u7684\u306A\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u306F\u7D0424%\u306B\u3059\u304E\u307E\u305B\u3093\u3002\u6B8B\u308A\u306F\u5869\u58D1\u3001\u30A8\u30CD\u30EB\u30AE\u30FC\u56DE\u53CE\u306A\u3057\u3067\u306E\u7112\u5374\u3001\u307E\u305F\u306F\u8F38\u51FA\u3055\u308C\u3066\u3044\u307E\u3059\u3002ESG\u30C7\u30FC\u30BF\u306E\u4E16\u754C\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u6570\u5B57\u306B\u811A\u6CE8\u304C\u3042\u308A\u307E\u3059\u3002";
      Q4_EXPLAINER_ZH = '\u65E5\u672C\u62A5\u544A\u7684\u5851\u6599\u56DE\u6536\u7387\u7EA6\u4E3A85%\u3002\u8FD9\u4E00\u6570\u5B57\u5728\u4F01\u4E1AESG\u62A5\u544A\u548C\u653F\u5E9C\u5BA3\u4F20\u4E2D\u88AB\u5E7F\u6CDB\u5F15\u7528\u3002\u7136\u800C\uFF0C\u8BE5\u6570\u5B57\u5305\u62EC"\u70ED\u56DE\u6536"\u2014\u2014\u711A\u70E7\u5851\u6599\u5783\u573E\u53D1\u7535\u3002\u6309\u7167\u8861\u91CF\u5B9E\u9645\u6750\u6599\u518D\u52A0\u5DE5\u7684\u56FD\u9645\u6807\u51C6\uFF08\u6B27\u76DF\u6240\u79F0\u7684"\u6750\u6599\u56DE\u6536"\uFF09\uFF0C\u65E5\u672C\u7684\u5B9E\u9645\u56DE\u6536\u7387\u4EC5\u4E3A\u7EA624%\u3002\u5176\u4F59\u7EA661%\u88AB\u586B\u57CB\u3001\u65E0\u80FD\u6E90\u56DE\u6536\u711A\u70E7\u6216\u51FA\u53E3\u3002\u65E5\u672C\u4EBA\u5747\u5851\u6599\u5305\u88C5\u5E9F\u7269\u4EA7\u751F\u91CF\u4EC5\u6B21\u4E8E\u7F8E\u56FD\u3002ESG\u6570\u636E\u7684\u4E16\u754C\u91CC\uFF1A\u6BCF\u4E00\u4E2A\u6570\u5B57\u90FD\u6709\u811A\u6CE8\u3002';
      Q5_EXPLAINER_EN = 'In 2024, MUFG, SMBC, and Mizuho collectively provided approximately USD\xA0106 billion in fossil fuel financing, accounting for ~12% of the global total. This data comes from the \u201CBanking on Climate Chaos\u201D report (2025 edition), compiled by a coalition of NGOs. All three banks have publicly committed to achieving net-zero financed emissions by 2050 and are members of the Net-Zero Banking Alliance. They also topped the global fossil fuel financing league tables in 2024. This is not hypocrisy, strictly speaking \u2014 it is \u201Ctransition finance,\u201D and it comes with a detailed methodology document you are welcome to read.<br><br><a href="https://energyshiftsea.org/japan-banks-top-global-financiers-of-fossil-fuels-in-2024/" target="_blank" rel="noopener">\u2192 Energy Shift SEA \u2014 Japan banks report</a>';
      Q5_EXPLAINER_JA = "2024\u5E74\u3001MUFG\u30FBSMBC\u30FB\u307F\u305A\u307B\u306E3\u884C\u306F\u5408\u8A08\u7D041060\u5104\u7C73\u30C9\u30EB\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u3092\u63D0\u4F9B\u3057\u3001\u4E16\u754C\u306E\u7D0412%\u3092\u5360\u3081\u307E\u3057\u305F\u3002\u3053\u306E\u30C7\u30FC\u30BF\u306FNGO\u9023\u5408\u306E\u300CBanking on Climate Chaos\u300D\u30EC\u30DD\u30FC\u30C8\uFF082025\u5E74\u7248\uFF09\u306B\u3088\u308A\u307E\u3059\u30023\u884C\u3068\u30822050\u5E74\u307E\u3067\u306B\u30CD\u30C3\u30C8\u30BC\u30ED\u3092\u516C\u7D04\u3057\u3066\u304A\u308A\u3001Net-Zero Banking Alliance\u306B\u53C2\u52A0\u3057\u3066\u3044\u307E\u3059\u3002\u540C\u6642\u306B\u30012024\u5E74\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u3067\u4E16\u754C\u30C8\u30C3\u30D7\u3067\u3057\u305F\u3002\u3053\u308C\u306F\u77DB\u76DB\u3067\u306F\u306A\u304F\u3001\u300C\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30FB\u30D5\u30A1\u30A4\u30CA\u30F3\u30B9\u300D\u3067\u3059\u3002";
      Q5_EXPLAINER_ZH = '2024\u5E74\uFF0C\u4E09\u83F1\u65E5\u8054\u3001\u4E09\u4E95\u4F4F\u53CB\u548C\u745E\u7A57\u4E09\u5BB6\u94F6\u884C\u5171\u63D0\u4F9B\u7EA61060\u4EBF\u7F8E\u5143\u5316\u77F3\u71C3\u6599\u878D\u8D44\uFF0C\u5360\u5168\u7403\u603B\u989D\u7EA612%\u3002\u6570\u636E\u6765\u81EANGO\u8054\u76DF\u7F16\u5236\u7684"\u94F6\u884C\u52A9\u957F\u6C14\u5019\u6DF7\u4E71"\u62A5\u544A\uFF082025\u7248\uFF09\u3002\u4E09\u5BB6\u94F6\u884C\u5747\u516C\u5F00\u627F\u8BFA2050\u5E74\u524D\u5B9E\u73B0\u6295\u878D\u8D44\u51C0\u96F6\u6392\u653E\uFF0C\u5E76\u52A0\u5165\u4E86\u51C0\u96F6\u94F6\u884C\u8054\u76DF\u3002\u540C\u65F6\uFF0C\u5B83\u4EEC\u57282024\u5E74\u5168\u7403\u5316\u77F3\u71C3\u6599\u878D\u8D44\u6392\u884C\u699C\u4E0A\u9AD8\u5C45\u699C\u9996\u3002\u4E25\u683C\u6765\u8BF4\uFF0C\u8FD9\u4E0D\u662F\u77DB\u76FE\u2014\u2014\u8FD9\u53EB"\u8F6C\u578B\u91D1\u878D"\uFF0C\u5E76\u9644\u6709\u8BE6\u7EC6\u7684\u65B9\u6CD5\u8BBA\u6587\u4EF6\u4F9B\u60A8\u53C2\u8003\u3002';
      Q6_EXPLAINER_EN = 'Japan\u2019s Green Transformation (GX) strategy, adopted in February 2023, estimates a need for 150 trillion yen (~USD 1 trillion) in combined public and private investment over 10 years. This is approximately 3% of Japan\u2019s GDP annually, targeting 14\u201316 industrial sectors including hydrogen, offshore wind, ammonia co-firing, next-generation nuclear, and EV batteries. The funding mechanism is a world first: sovereign climate transition bonds (GX JGBs) issued by the government, which will be repaid through future carbon auction revenues (GX-ETS) and a fossil fuel levy starting in 2028. If the carbon price does not rise as projected, the levy will be adjusted. If emitters do not pay, the levy will be adjusted. If the mechanism fails\u2026 well, you know how sovereign debt works.<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">\u2192 METI \u2014 GX Transition Bond Report</a>';
      Q6_EXPLAINER_JA = "\u65E5\u672C\u306EGX\u6226\u7565\u306F\u30012023\u5E742\u6708\u306B\u7B56\u5B9A\u3055\u308C\u300110\u5E74\u9593\u3067150\u5146\u5186\uFF08\u7D041\u5146\u7C73\u30C9\u30EB\uFF09\u306E\u5B98\u6C11\u6295\u8CC7\u304C\u5FC5\u8981\u3068\u898B\u8A08\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u65E5\u672CGDP\u306E\u7D043%\u306B\u76F8\u5F53\u3057\u3001\u6C34\u7D20\u30FB\u6D0B\u4E0A\u98A8\u529B\u30FB\u30A2\u30F3\u30E2\u30CB\u30A2\u6DF7\u71C3\u30FB\u6B21\u4E16\u4EE3\u539F\u5B50\u529B\u30FB\u96FB\u6C17\u81EA\u52D5\u8ECA\u7528\u96FB\u6C60\u306A\u306914\u301C16\u306E\u7523\u696D\u5206\u91CE\u3092\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u8CC7\u91D1\u8ABF\u9054\u6A5F\u69CB\u306F\u4E16\u754C\u521D\u3067\u3059\u3002\u56FD\u304C\u767A\u884C\u3059\u308B\u6C17\u5019\u79FB\u884C\u50B5\u3067\u3001\u5C06\u6765\u306EGX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u53CE\u5165\u30842028\u5E74\u304B\u3089\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1\u3067\u8FD4\u6E09\u3055\u308C\u307E\u3059\u3002";
      Q6_EXPLAINER_ZH = "\u65E5\u672C\u7EFF\u8272\u8F6C\u578B\uFF08GX\uFF09\u6218\u7565\u4E8E2023\u5E742\u6708\u901A\u8FC7\uFF0C\u9884\u8BA1\u672A\u676510\u5E74\u9700\u8981150\u4E07\u4EBF\u65E5\u5143\uFF08\u7EA61\u4E07\u4EBF\u7F8E\u5143\uFF09\u7684\u516C\u5171\u548C\u79C1\u4EBA\u6295\u8D44\u3002\u8FD9\u7EA6\u5360\u65E5\u672CGDP\u7684\u6BCF\u5E743%\uFF0C\u6D89\u53CA14-16\u4E2A\u5DE5\u4E1A\u9886\u57DF\uFF0C\u5305\u62EC\u6C22\u80FD\u3001\u6D77\u4E0A\u98CE\u7535\u3001\u6C28\u6DF7\u70E7\u3001\u4E0B\u4E00\u4EE3\u6838\u7535\u548C\u7535\u52A8\u6C7D\u8F66\u7535\u6C60\u3002\u5176\u878D\u8D44\u673A\u5236\u662F\u5168\u7403\u9996\u521B\uFF1A\u7531\u653F\u5E9C\u53D1\u884C\u4E3B\u6743\u6C14\u5019\u8F6C\u578B\u503A\u5238\uFF08GX JGBs\uFF09\uFF0C\u901A\u8FC7\u672A\u6765\u7684\u78B3\u914D\u989D\u62CD\u5356\u6536\u5165\uFF08GX-ETS\uFF09\u548C2028\u5E74\u8D77\u5F81\u6536\u7684\u5316\u77F3\u71C3\u6599\u9644\u52A0\u8D39\u507F\u8FD8\u3002\u5982\u679C\u78B3\u4EF7\u672A\u5982\u671F\u4E0A\u6DA8\u2014\u2014\u8C03\u6574\u9644\u52A0\u8D39\u3002\u5982\u679C\u6392\u653E\u8005\u62D2\u7EDD\u7F34\u7EB3\u2014\u2014\u8C03\u6574\u9644\u52A0\u8D39\u3002\u5982\u679C\u673A\u5236\u5931\u7075...\u4F60\u77E5\u9053\u4E3B\u6743\u503A\u52A1\u662F\u600E\u4E48\u56DE\u4E8B\u3002";
      Q7_EXPLAINER_EN = 'In 2022\u20132023, Japan\u2019s Financial Services Agency (FSA) introduced some of the world\u2019s strictest anti-greenwashing rules for investment funds. Under the revised guidelines, a fund can only market itself as an \u201CESG Fund\u201D if ESG factors are a primary selection criterion with disclosed targets, reference benchmarks, and ongoing disclosure obligations. Negative screening alone (e.g., \u201Cwe do not invest in tobacco\u201D) is insufficient. The FSA also introduced the world\u2019s first Code of Conduct for ESG Evaluation and Data Providers in December 2022. The motivation: concern that a significant portion of the ~600 trillion yen classified as \u201Csustainable investments\u201D in Japan may not meet international standards.<br><br><a href="https://www.morganlewis.com/pubs/2024/07/esg-investments-the-asia-pacific-regulatory-perspective" target="_blank" rel="noopener">\u2192 Morgan Lewis \u2014 ESG APAC Regulatory Perspective</a>';
      Q7_EXPLAINER_JA = "\u91D1\u878D\u5E81\u306F2022\u5E74\u304B\u30892023\u5E74\u306B\u304B\u3051\u3066\u3001\u6295\u8CC7\u4FE1\u8A17\u306B\u5BFE\u3059\u308B\u4E16\u754C\u6700\u53B3\u306E\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30F3\u30B0\u898F\u5236\u3092\u5C0E\u5165\u3057\u307E\u3057\u305F\u3002\u6539\u8A02\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u306E\u4E0B\u3067\u3001ESG\u3092\u201C\u4E3B\u8981\u306A\u6295\u8CCE\u5224\u65AD\u8981\u7D20\u201D\u3068\u3057\u3001\u76EE\u6A19\u3001\u53C2\u7167\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u3001\u7D99\u7D9A\u7684\u958B\u793A\u3092\u884C\u3046\u5834\u5408\u306E\u307F\u3001\u300CESG\u30D5\u30A1\u30F3\u30C9\u300D\u3092\u540D\u4E57\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30CD\u30AC\u30C6\u30A3\u30D6\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u306E\u307F\u3067\u306F\u4E0D\u5341\u5206\u3067\u3059\u3002\u307E\u305F\u3001ESG\u8A55\u4FA1\u6A5F\u95A2\u306B\u5BFE\u3059\u308B\u4E16\u754C\u521D\u306E\u884C\u52D5\u898F\u7BC4\u3082\u5C0E\u5165\u3057\u307E\u3057\u305F\u3002\u80CC\u666F\u306B\u306F\u3001\u65E5\u672C\u3067\u300C\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u6295\u8CC7\u300D\u3068\u5206\u985E\u3055\u308C\u308B\u7D04600\u5146\u5186\u306E\u3046\u3061\u3001\u8DB3\u308A\u306A\u3044\u3082\u306E\u304C\u5C11\u306A\u304F\u306A\u3044\u3068\u3044\u3046\u8AAE\u616E\u304C\u3042\u308A\u307E\u3059\u3002";
      Q7_EXPLAINER_ZH = '2022-2023\u5E74\uFF0C\u65E5\u672C\u91D1\u878D\u5385\uFF08FSA\uFF09\u51FA\u53F0\u4E86\u5168\u7403\u6700\u4E25\u683C\u7684\u57FA\u91D1\u53CD\u6F02\u7EFF\u6CD5\u89C4\u3002\u6839\u636E\u4FEE\u8BA2\u540E\u7684\u6307\u5F15\uFF0C\u57FA\u91D1\u53EA\u6709\u5728ESG\u56E0\u7D20\u662F\u4E3B\u8981\u7B5B\u9009\u6807\u51C6\u3001\u4E14\u62AB\u9732\u660E\u786E\u76EE\u6807\u3001\u53C2\u8003\u57FA\u51C6\u548C\u6301\u7EED\u4FE1\u606F\u62AB\u9732\u4E49\u52A1\u65F6\uFF0C\u624D\u80FD\u81EA\u79F0"ESG\u57FA\u91D1"\u3002\u4EC5\u505A\u8D1F\u9762\u7B5B\u9009\uFF08\u5982"\u6211\u4EEC\u4E0D\u6295\u8D44\u70DF\u8349"\uFF09\u662F\u4E0D\u591F\u7684\u3002FSA\u8FD8\u4E8E2022\u5E7412\u6708\u53D1\u5E03\u4E86\u5168\u7403\u9996\u4E2AESG\u8BC4\u4F30\u548C\u6570\u636E\u63D0\u4F9B\u5546\u884C\u4E3A\u51C6\u5219\u3002\u80CC\u666F\uFF1A\u65E5\u672C\u88AB\u5F52\u7C7B\u4E3A"\u53EF\u6301\u7EED\u6295\u8D44"\u7684\u7EA6600\u4E07\u4EBF\u65E5\u5143\u4E2D\uFF0C\u76F8\u5F53\u4E00\u90E8\u5206\u53EF\u80FD\u4E0D\u7B26\u5408\u56FD\u9645\u6807\u51C6\u3002';
      Q8_EXPLAINER_EN = "In February 2024, Japan became the world\u2019s first sovereign issuer of climate transition bonds (GX JGBs), raising 20 trillion yen (~USD\xA0140 billion). Unlike green bonds, which typically finance already-commercialised assets, over 50% of transition bond proceeds are allocated to R&D for future decarbonisation technologies (hydrogen, ammonia, carbon capture, next-gen solar). The repayment mechanism is a genuine closed-loop system: revenue from the GX-ETS carbon auction and a fossil fuel levy (introduced 2028) flows back into a dedicated account to service the bonds. This structure has never been tried at sovereign level. Whether it works depends on three variables: carbon prices rising, emitters paying, and politicians not raiding the account. The odds are not terrible, but they are not great either \u2014 which is, you will note, the story of most climate policy.";
      Q8_EXPLAINER_JA = "2024\u5E742\u6708\u3001\u65E5\u672C\u306F\u4E16\u754C\u521D\u306E\u30BD\u30D6\u30EA\u30F3\u6C17\u5019\u79FB\u884C\u50B5\uFF08GX JGBs\uFF09\u3092\u767A\u884C\u3057\u300120\u5146\u5186\u3092\u8ABF\u9054\u3057\u307E\u3057\u305F\u3002\u30B0\u30EA\u30FC\u30F3\u30DC\u30F3\u30C9\u3068\u7570\u306A\u308A\u3001\u5F53\u8A72\u4E8B\u696D\u306E\u7D5050% \u4EE5\u4E0A\u304C\u5C06\u6765\u306E\u8131\u70AD\u7D20\u6280\u8853\uFF08\u6C34\u7D20\u30FB\u30A2\u30F3\u30E2\u30CB\u30A2\u30FB\u70AD\u7D20\u56DE\u53CE\u30FB\u6B21\u4E16\u4EE3\u592A\u967D\u5149\uFF09\u306E\u7814\u7A76\u958B\u767A\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002\u8FD4\u6E09\u6A5F\u69CB\u306F\u672C\u7269\u306E\u30AF\u30ED\u30FC\u30BA\u30C9\u30EB\u30FC\u30D7\u3067\u3059\u3002GX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u306E\u53CE\u5165\u3068\u30012028\u5E74\u5C0E\u5165\u4E88\u5B9A\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1\u304C\u3001\u50B5\u52D9\u30B5\u30FC\u30D3\u30B9\u306E\u305F\u3081\u306E\u5C02\u7528\u4E88\u7B97\u306B\u6D41\u308C\u5165\u308A\u307E\u3059\u3002\u6210\u529F\u306B\u306F\u3001\u70AD\u7D20\u4FA1\u683C\u304C\u4E0A\u6607\u3057\u3001\u6392\u51FA\u8005\u304C\u652F\u6255\u3044\u3001\u653F\u6CBB\u5BB6\u304C\u4E88\u7B97\u3092\u6D41\u7528\u3057\u306A\u3044\u3053\u3068\u304C\u5FC5\u8981\u3067\u3059\u3002";
      Q8_EXPLAINER_ZH = "2024\u5E742\u6708\uFF0C\u65E5\u672C\u6210\u4E3A\u5168\u7403\u9996\u4E2A\u53D1\u884C\u4E3B\u6743\u6C14\u5019\u8F6C\u578B\u503A\u5238\uFF08GX JGBs\uFF09\u7684\u56FD\u5BB6\uFF0C\u7B79\u96C620\u4E07\u4EBF\u65E5\u5143\uFF08\u7EA61400\u4EBF\u7F8E\u5143\uFF09\u3002\u4E0E\u901A\u5E38\u4E3A\u5DF2\u5546\u4E1A\u5316\u8D44\u4EA7\u878D\u8D44\u7684\u7EFF\u8272\u503A\u5238\u4E0D\u540C\uFF0C\u8F6C\u578B\u503A\u5238\u8D8550%\u7684\u52DF\u96C6\u8D44\u91D1\u7528\u4E8E\u672A\u6765\u8131\u78B3\u6280\u672F\u7684\u7814\u53D1\uFF08\u6C22\u80FD\u3001\u6C28\u3001\u78B3\u6355\u96C6\u3001\u4E0B\u4E00\u4EE3\u592A\u9633\u80FD\uFF09\u3002\u8FD8\u6B3E\u673A\u5236\u662F\u771F\u6B63\u7684\u95ED\u73AF\u7CFB\u7EDF\uFF1AGX-ETS\u78B3\u914D\u989D\u62CD\u5356\u6536\u5165\u548C2028\u5E74\u5F15\u5165\u7684\u5316\u77F3\u71C3\u6599\u9644\u52A0\u8D39\u6D41\u5165\u4E13\u7528\u8D26\u6237\u7528\u4E8E\u507F\u503A\u3002\u8FD9\u4E00\u7ED3\u6784\u4ECE\u672A\u5728\u4E3B\u6743\u5C42\u9762\u5C1D\u8BD5\u8FC7\u3002\u80FD\u5426\u594F\u6548\u53D6\u51B3\u4E8E\u4E09\u4E2A\u53D8\u91CF\uFF1A\u78B3\u4EF7\u4E0A\u6DA8\u3001\u6392\u653E\u8005\u4ED8\u8D39\u3001\u653F\u5BA2\u4E0D\u632A\u7528\u8D26\u6237\u3002";
      QUESTIONS = [
        {
          id: 1,
          locale: "all",
          correct: "A",
          en: { title: "World Environment Day (June&nbsp;5) exists because one country proposed it to the UN in 1972. Which country?", options: { A: "Japan", B: "Sweden \u2014 they hosted the conference, so they called dibs", C: 'Brazil \u2014 "we have the Amazon, obviously it was us"', D: "A coalition of nations who definitely weren't Japan" }, joke: "Japan proposed it. Sweden hosted the conference. The UN said yes. And now your desk has a recycling bin under it. Circle of life.", explainer: Q1_EXPLAINER_EN },
          ja: { title: "\u4E16\u754C\u74B0\u5883\u30C7\u30FC\uFF086\u67085\u65E5\uFF09\u306F\u30011972\u5E74\u306B\u3042\u308B\u56FD\u304C\u56FD\u9023\u306B\u63D0\u6848\u3057\u305F\u3053\u3068\u3067\u8A95\u751F\u3057\u307E\u3057\u305F\u3002\u305D\u306E\u56FD\u306F\u3069\u3053\uFF1F", options: { A: "\u65E5\u672C", B: "\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3 \u2014 \u300C\u4F1A\u8B70\u3092\u4E3B\u50AC\u3057\u305F\u306E\u306F\u30A6\u30C1\u306A\u3093\u3067\u300D\u3068\u4E3B\u5F35", C: "\u30D6\u30E9\u30B8\u30EB \u2014 \u300C\u30A2\u30DE\u30BE\u30F3\u3042\u308B\u3057\u3001\u5F53\u7136\u30A6\u30C1\u3063\u3057\u3087\u300D", D: "\u300C\u65E5\u672C\u3067\u306F\u306A\u3044\u300D\u3068\u660E\u78BA\u306B\u4E3B\u5F35\u3059\u308B\u8B0E\u306E\u56FD\u5BB6\u9023\u5408" }, joke: "\u65E5\u672C\u304C\u63D0\u6848\u3057\u3001\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u304C\u4F1A\u8B70\u3092\u4E3B\u50AC\u3057\u3001\u56FD\u9023\u304C\u627F\u8A8D\u3002\u3053\u3046\u3057\u3066\u4ECA\u3001\u3042\u306A\u305F\u306E\u30C7\u30B9\u30AF\u306E\u4E0B\u306B\u306F\u5206\u5225\u7528\u306E\u30B4\u30DF\u7BB1\u304C\u3042\u308B\u3002\u4EBA\u751F\u306E\u8F2A\u3002", explainer: Q1_EXPLAINER_JA },
          zh: { title: "\u4E16\u754C\u73AF\u5883\u65E5\uFF086\u67085\u65E5\uFF09\u662F\u56E0\u4E3A\u67D0\u4E2A\u56FD\u5BB6\u57281972\u5E74\u5411\u8054\u5408\u56FD\u63D0\u8BAE\u800C\u8BDE\u751F\u7684\u3002\u8FD9\u662F\u54EA\u4E2A\u56FD\u5BB6\uFF1F", options: { A: "\u65E5\u672C", B: "\u745E\u5178 \u2014 \u201C\u6211\u4EEC\u4E3B\u529E\u7684\u4F1A\u8BAE\uFF0C\u5F53\u7136\u5F97\u7531\u6211\u4EEC\u6765\u53D6\u540D\u201D", C: "\u5DF4\u897F \u2014 \u201C\u6211\u4EEC\u6709\u4E9A\u9A6C\u900A\uFF0C\u663E\u7136\u662F\u6211\u4EEC\u201D", D: "\u201C\u7EDD\u5BF9\u4E0D\u662F\u65E5\u672C\u201D\u7684\u795E\u79D8\u56FD\u5BB6\u8054\u76DF" }, joke: "\u65E5\u672C\u63D0\u8BAE\u3001\u745E\u5178\u4E3B\u529E\u3001\u8054\u5408\u56FD\u6279\u51C6\u3002\u4E8E\u662F\u4F60\u7684\u529E\u516C\u684C\u4E0B\u73B0\u5728\u591A\u4E86\u4E00\u53EA\u56DE\u6536\u7BB1\u3002\u751F\u547D\u7684\u5FAA\u73AF\u3002", explainer: Q1_EXPLAINER_ZH }
        },
        {
          id: 2,
          locale: "all",
          correct: "A",
          en: { title: "Japan's <em>Cool Biz</em> campaign mandated office air conditioners be set to what temperature?", options: { A: "28\xB0C (82.4\xB0F)", B: '"Whatever Facilities decides, and they are not budging"', C: "24\xB0C, with a passive-aggressive email from HR if you touch it", D: "The exact temperature at which your managing director removes his tie, whichever comes first" }, joke: "Launched in 2005. Suits were banned. Short sleeves encouraged. Energy consumption dropped. Meanwhile, your office thermostat argument enters its 17th consecutive quarter.", explainer: Q2_EXPLAINER_EN },
          ja: { title: "\u65E5\u672C\u306E\u300C\u30AF\u30FC\u30EB\u30D3\u30BA\u300D\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3067\u7FA9\u52D9\u4ED8\u3051\u3089\u308C\u305F\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u6E29\u5EA6\u306F\uFF1F", options: { A: "28\xB0C", B: "\u300C\u7DCF\u52D9\u90E8\u304C\u6C7A\u3081\u305F\u6E29\u5EA6\u3002\u8AB0\u3082\u9006\u3089\u3048\u306A\u3044\u300D", C: "24\xB0C \u2014 \u305F\u3060\u3057\u89E6\u308B\u3068\u4EBA\u4E8B\u90E8\u304B\u3089\u300C\u304A\u6C17\u6301\u3061\u30E1\u30FC\u30EB\u300D\u304C\u98DB\u3093\u3067\u304F\u308B", D: "MD\u304C\u30CD\u30AF\u30BF\u30A4\u3092\u5916\u3057\u305F\u77AC\u9593\u306E\u5BA4\u6E29\u3002\u305D\u308C\u304C\u4F55\u5EA6\u3067\u3042\u308D\u3046\u3068\u3001\u305D\u306E\u6642\u304C\u30AF\u30FC\u30EB\u30D3\u30BA\u958B\u59CB\u3067\u3042\u308B" }, joke: "2005\u5E74\u958B\u59CB\u3002\u30B9\u30FC\u30C4\u7981\u6B62\u3002\u534A\u8896\u63A8\u5968\u3002\u30A8\u30CD\u30EB\u30AE\u30FC\u6D88\u8CBB\u306F\u6E1B\u5C11\u3002\u4E00\u65B9\u3001\u3042\u306A\u305F\u306E\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8AD6\u4E89\u306F17\u56DB\u534A\u671F\u76EE\u306B\u7A81\u5165\u3002", explainer: Q2_EXPLAINER_JA },
          zh: { title: "\u65E5\u672C\u7684\u201C\u6E05\u51C9\u5546\u52A1\u201D\u6D3B\u52A8\u89C4\u5B9A\u529E\u516C\u5BA4\u7A7A\u8C03\u5E94\u8BBE\u5B9A\u4E3A\u591A\u5C11\u5EA6\uFF1F", options: { A: "28\xB0C\uFF0882.4\xB0F\uFF09", B: "\u201C\u540E\u52E4\u90E8\u8BF4\u4E86\u7B97\uFF0C\u522B\u60F3\u8BA9\u4ED6\u4EEC\u6539\u53D8\u4E3B\u610F\u201D", C: "24\xB0C\uFF0C\u4F46\u53EA\u8981\u4F60\u52A8\u4E00\u4E0B\uFF0C\u4EBA\u529B\u90E8\u5C31\u4F1A\u53D1\u6765\u4E00\u5C01\u9634\u9633\u602A\u6C14\u7684\u90AE\u4EF6", D: "\u603B\u7ECF\u7406\u89E3\u5F00\u9886\u5E26\u90A3\u4E00\u523B\u7684\u5BA4\u6E29\u2014\u2014\u4EE5\u5148\u5230\u4E3A\u51C6" }, joke: "2005\u5E74\u542F\u52A8\u3002\u897F\u88C5\u88AB\u7981\u6B62\u3002\u77ED\u8896\u88AB\u9F13\u52B1\u3002\u80FD\u6E90\u6D88\u8017\u4E0B\u964D\u3002\u4F46\u4F60\u529E\u516C\u5BA4\u7684\u7A7A\u8C03\u4E89\u8BBA\u5DF2\u7ECF\u8FDB\u5165\u7B2C17\u4E2A\u5B63\u5EA6\u4E86\u3002", explainer: Q2_EXPLAINER_ZH }
        },
        {
          id: 3,
          locale: "all",
          correct: "A",
          en: { title: 'The Japanese concept <em>Mottainai</em> ("what a waste!") adds a fourth "R" to the classic Reduce, Reuse, Recycle. What is it?', options: { A: "Respect", B: "Regret \u2014 the emotion you feel when Compliance rejects your expense report", C: `Returns \u2014 as in, "our ESG fund's quarterly"`, D: "Restructuring \u2014 applicable to anything, anywhere, forever" }, joke: "Nobel laureate Wangari Maathai popularised it. The fourth R is Respect \u2014 for the Earth\u2019s resources. Not to be confused with the quarterly town hall where leadership thanks you for record profits while announcing a hiring freeze.", explainer: Q3_EXPLAINER_EN },
          ja: { title: "\u65E5\u672C\u306E\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u300D\u306E\u7CBE\u795E\u304C3R\uFF08Reduce, Reuse, Recycle\uFF09\u306B\u8FFD\u52A0\u3057\u305F4\u3064\u76EE\u306E\u300CR\u300D\u3068\u306F\uFF1F", options: { A: "Respect\uFF08\u656C\u610F\uFF09", B: "Regret\uFF08\u5F8C\u6094\uFF09 \u2014 \u7D4C\u8CBB\u7CBE\u7B97\u304C\u30B3\u30F3\u30D7\u30E9\u306B\u5DEE\u3057\u623B\u3055\u308C\u305F\u6642\u306E\u611F\u60C5", C: "Returns\uFF08\u30EA\u30BF\u30FC\u30F3\uFF09 \u2014 \u300C\u4ECA\u56DB\u534A\u671F\u306EESG\u30D5\u30A1\u30F3\u30C9\u306E\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u5BFE\u6BD4\u2026\u300D", D: "Restructuring\uFF08\u30EA\u30B9\u30C8\u30E9\uFF09 \u2014 \u3044\u3064\u3067\u3082\u3001\u3069\u3053\u3067\u3082\u3001\u4F55\u306B\u3067\u3082\u9069\u7528\u53EF\u80FD" }, joke: "\u30CE\u30FC\u30D9\u30EB\u5E73\u548C\u8CCE\u53D7\u8CDE\u8005\u306E\u30EF\u30F3\u30AC\u30EA\u30FB\u30DE\u30FC\u30BF\u30A4\u6C0F\u304C\u4E16\u754C\u7684\u306B\u5E83\u3081\u305F\u6982\u5FF5\u3067\u3059\u30024\u3064\u76EE\u306ER\u306FRespect\uFF08\u5C0A\u656C\uFF09\u2014\u5730\u7403\u306E\u8CC7\u6E90\u3078\u306E\u656C\u610F\u3002\u306A\u304A\u3001\u904E\u53BB\u6700\u9AD8\u76CA\u3092\u767A\u8868\u3057\u3064\u3064\u63A1\u7528\u51CD\u7D50\u3092\u544A\u3052\u308B\u56DB\u534A\u671F\u30BF\u30A6\u30F3\u30DB\u30FC\u30EB\u3068\u306F\u7121\u95A2\u4FC2\u3067\u3059\u3002", explainer: Q3_EXPLAINER_JA },
          zh: { title: "\u65E5\u8BED\u201CMottainai\uFF08\u3082\u3063\u305F\u3044\u306A\u3044\uFF09\u201D\u2014\u2014\u201C\u592A\u6D6A\u8D39\u4E86\u201D\u2014\u2014\u5728\u7ECF\u5178\u7684Reduce\u3001Reuse\u3001Recycle\u4E4B\u5916\u589E\u52A0\u4E86\u7B2C\u56DB\u4E2A\u201CR\u201D\u3002\u662F\u4EC0\u4E48\uFF1F", options: { A: "Respect\uFF08\u5C0A\u91CD\uFF09", B: "Regret\uFF08\u6094\u6068\uFF09 \u2014 \u5408\u89C4\u90E8\u62D2\u7EDD\u4F60\u7684\u7ECF\u8D39\u62A5\u9500\u65F6\u7684\u90A3\u79CD\u611F\u89C9", C: "Returns\uFF08\u6536\u76CA\uFF09 \u2014 \u201C\u8FD9\u4E2A\u5B63\u5EA6\u6211\u4EEC\u7684ESG\u57FA\u91D1\u2026\u201D", D: "Restructuring\uFF08\u91CD\u7EC4\uFF09 \u2014 \u4EC0\u4E48\u65F6\u5019\u3001\u4EC0\u4E48\u5730\u65B9\u3001\u4EC0\u4E48\u4E8B\u90FD\u80FD\u7528" }, joke: "\u8D79\u571F\u5F97\u5C14\u5E73\u723E\u5956\u5F97\u4E3B\u65FA\u52A0\u91CC\xB7\u9A6C\u5854\u4F0A\u5C06\u5176\u63A8\u5E7F\u81F3\u5168\u7403\u3002\u7B2C\u56DB\u4E2AR\u662F\u201C\u5C0A\u91CD\u201D\u2014\u2014\u5C0A\u91CD\u5730\u7403\u7684\u8D44\u6E90\u3002\u4E0D\u8981\u548C\u90A3\u79CD\u5728\u53D1\u5E03\u521B\u7EAA\u5F6C\u5229\u540C\u65F6\u5BA3\u5E03\u62DB\u8058\u51BB\u7ED3\u7684\u5B63\u5EA6\u5168\u5458\u5927\u4F1A\u6DF7\u4E3A\u4E00\u8C08\u3002", explainer: Q3_EXPLAINER_ZH }
        },
        {
          id: 4,
          locale: "all",
          correct: "A",
          en: { title: "Japan reports a plastic recycling rate of about 85%. Under international standards for <em>actual material</em> recycling, the real figure is approximately:", options: { A: "~24%", B: '~62% \u2014 and the missing 23% was reclassified as "strategic thermal redeployment"', C: "~85%, because Japan defined recycling to include burning things for electricity", D: "A rate that varies depending on how you define <em>recycling</em>, <em>plastic</em>, and <em>Japan</em>" }, joke: 'The 85% figure includes "thermal recycling" \u2014 i.e., burning plastic for energy. The EU calls this "energy recovery." Welcome to ESG data: where every percentage has a footnote, and that footnote has a sub-footnote.', explainer: Q4_EXPLAINER_EN },
          ja: { title: "\u65E5\u672C\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u300C\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u300D\u306F\u7D0485%\u3068\u5831\u544A\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u56FD\u969B\u6A19\u6E96\u3067\u306E <em>\u5B9F\u969B\u306E\u6750\u6599\u30EA\u30B5\u30A4\u30AF\u30EB\u7387</em> \u306F\u7D04\u4F55%\uFF1F", options: { A: "\u7D0424%", B: "\u7D0462% \u2014 \u6D88\u3048\u305F23%\u306F\u300C\u6226\u7565\u7684\u30B5\u30FC\u30DE\u30EB\u518D\u914D\u7F6E\u300D\u306B\u533A\u5206\u5909\u66F4\u3055\u308C\u307E\u3057\u305F", C: "\u7D0485% \u2014 \u65E5\u672C\u306F\u300C\u71C3\u3084\u3057\u3066\u767A\u96FB\u300D\u3082\u30EA\u30B5\u30A4\u30AF\u30EB\u3068\u5B9A\u7FA9\u3057\u305F\u306E\u3067\u3001\u5B9A\u7FA9\u4E0A\u306F\u6B63\u3057\u3044", D: "\u300C\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\u300C\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u300D\u300C\u65E5\u672C\u300D\u306E\u5B9A\u7FA9\u6B21\u7B2C\u3067\u5909\u52D5\u3059\u308B\u9B54\u6CD5\u306E\u6570\u5B57" }, joke: "85%\u306B\u306F\u300C\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\uFF08\uFF1D\u71C3\u3084\u3057\u3066\u767A\u96FB\uFF09\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002EU\u3067\u306F\u3053\u308C\u3092\u300C\u30A8\u30CD\u30EB\u30AE\u30FC\u56DE\u53CE\u300D\u3068\u547C\u3073\u3001\u30EA\u30B5\u30A4\u30AF\u30EB\u3068\u306F\u8A8D\u3081\u3066\u3044\u307E\u305B\u3093\u3002ESG\u30C7\u30FC\u30BF\u306E\u4E16\u754C\u3078\u3088\u3046\u3053\u305D\uFF1A\u3059\u3079\u3066\u306E\u6570\u5B57\u306B\u306F\u811A\u6CE8\u304C\u3042\u308A\u3001\u305D\u306E\u811A\u6CE8\u306B\u3082\u811A\u6CE8\u304C\u3042\u308A\u307E\u3059\u3002", explainer: Q4_EXPLAINER_JA },
          zh: { title: "\u65E5\u672C\u62A5\u544A\u5851\u6599\u56DE\u6536\u7387\u7EA685%\u3002\u4F46\u6309\u56FD\u9645\u6807\u51C6\u7684\u201C\u5B9E\u9645\u6750\u6599\u56DE\u6536\u201D\u7B97\uFF0C\u771F\u5B9E\u6570\u5B57\u7EA6\u4E3A\uFF1A", options: { A: "\u7EA624%", B: "\u7EA662% \u2014 \u4E22\u5931\u768423%\u88AB\u91CD\u65B0\u5206\u7C7B\u4E3A\u201C\u6218\u7565\u6027\u70ED\u56DE\u6536\u201D", C: "\u7EA685% \u2014 \u56E0\u4E3A\u65E5\u672C\u5C06\u201C\u70E7\u5783\u573E\u53D1\u7535\u201D\u4E5F\u5B9A\u4E49\u4E3A\u56DE\u6536\uFF0C\u6240\u4EE5\u5B9A\u4E49\u4E0A\u6CA1\u9519", D: "\u53D6\u51B3\u4E8E\u4F60\u600E\u4E48\u5B9A\u4E49\u201C\u56DE\u6536\u201D\u201C\u5851\u6599\u201D\u548C\u201C\u65E5\u672C\u201D" }, joke: "85%\u5305\u62EC\u201C\u70ED\u56DE\u6536\u201D\u2014\u2014\u5373\u70E7\u5851\u6599\u53D1\u7535\u3002\u6B27\u76DF\u79F0\u8FD9\u4E3A\u201C\u80FD\u6E90\u56DE\u6536\u201D\uFF0C\u4E0D\u627F\u8BA4\u662F\u56DE\u6536\u3002\u6B22\u8FCE\u6765\u5230ESG\u6570\u636E\u7684\u4E16\u754C\uFF1A\u6BCF\u4E2A\u6570\u5B57\u90FD\u6709\u811A\u6CE8\uFF0C\u811A\u6CE8\u4E0B\u9762\u8FD8\u6709\u5B50\u811A\u6CE8\u3002", explainer: Q4_EXPLAINER_ZH }
        },
        {
          id: 5,
          locale: "all",
          correct: "A",
          en: { title: "In 2024, Japan's three megabanks (MUFG, SMBC, Mizuho) accounted for what share of <em>global</em> fossil fuel financing?", options: { A: "~12% (USD 106 billion)", B: '"A figure not disclosed, but rest assured our net-zero commitments remain on track"', C: "~3%, because they also financed some solar panels, which mathematically cancels out the LNG terminals", D: "Enough to make your ESG team's quarterly slide deck physically vibrate with tension" }, joke: "All three have publicly committed to net-zero by 2050. They also topped global fossil fuel financing league tables in 2024. This is not a contradiction \u2014 this is <em>transition finance</em>, and it comes with a detailed methodology document you are welcome to read.", explainer: Q5_EXPLAINER_EN },
          ja: { title: "2024\u5E74\u3001\u65E5\u672C\u306E3\u30E1\u30AC\u30D0\u30F3\u30AF\uFF08MUFG\u3001SMBC\u3001\u307F\u305A\u307B\uFF09\u304C\u5360\u3081\u305F\u4E16\u754C\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u30B7\u30A7\u30A2\u306F\uFF1F", options: { A: "\u7D0412%\uFF081,060\u5104\u7C73\u30C9\u30EB\uFF09", B: "\u300C\u516C\u8868\u3067\u304D\u306A\u3044\u6570\u5B57\u3067\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30BC\u30ED\u76EE\u6A19\u306F\u9806\u8ABF\u3067\u3059\u306E\u3067\u3054\u5B89\u5FC3\u3092\u300D", C: "\u7D043% \u2014 \u30BD\u30FC\u30E9\u30FC\u30D1\u30CD\u30EB\u306B\u3082\u71D5\u8CC7\u3057\u3066\u3044\u308B\u306E\u3067\u3001LNG\u30BF\u30FC\u30DF\u30CA\u30EB\u5206\u3068\u6570\u5B66\u7684\u306B\u76F8\u6E88\u3055\u308C\u307E\u3059", D: "ESG\u30C1\u30FC\u30E0\u306E\u56DB\u534A\u671F\u30B9\u30E9\u30A4\u30C9\u8CC7\u6599\u304C\u9707\u3048\u51FA\u3059\u30EC\u30D9\u30EB" }, joke: "3\u884C\u3068\u30822050\u5E74\u30CD\u30C3\u30C8\u30BC\u30ED\u3092\u516C\u7D04\u3057\u3066\u3044\u307E\u3059\u3002\u540C\u6642\u306B\u30012024\u5E74\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u984D\u3067\u3082\u4E16\u754C\u30C8\u30C3\u30D7\u3067\u3057\u305F\u3002\u3053\u308C\u306F\u77DB\u76DB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u2014\u2014\u3053\u308C\u306F\u300C\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30FB\u30D5\u30A1\u30A4\u30CA\u30F3\u30B9\u300D\u3067\u3059\u3002\u8A73\u7D30\u306A\u65B9\u6CD5\u8AD6\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3082\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\u306E\u3067\u3001\u305C\u3072\u3054\u4E00\u8AAD\u304F\u3060\u3055\u3044\u3002", explainer: Q5_EXPLAINER_JA },
          zh: { title: "2024\u5E74\uFF0C\u65E5\u672C\u4E09\u5927\u94F6\u884C\uFF08MUFG\u3001SMBC\u3001\u745E\u7A57\uFF09\u5360\u5168\u7403\u5316\u77F3\u71C3\u6599\u878D\u8D44\u7684\u6BD4\u4F8B\u662F\uFF1F", options: { A: "\u7EA612%\uFF081060\u4EBF\u7F8E\u5143\uFF09", B: "\u201C\u8FD9\u4E2A\u6570\u5B57\u4E0D\u65B9\u4FBF\u62AB\u9732\uFF0C\u4F46\u8BF7\u653E\u5FC3\uFF0C\u6211\u4EEC\u7684\u51C0\u96F6\u627F\u8BFA\u6B63\u5728\u987A\u5229\u63A8\u8FDB\u201D", C: "\u7EA63% \u2014 \u56E0\u4E3A\u4ED6\u4EEC\u4E5F\u878D\u8D44\u4E86\u592A\u9633\u80FD\u677F\uFF0C\u6570\u5B66\u4E0A\u6070\u597D\u62B5\u6D88\u4E86LNG\u7EC8\u7AEF\u7684\u90E8\u5206", D: "\u591F\u8BA9ESG\u56E2\u961F\u7684\u5B63\u5EA6\u6C47\u62A5PPT\u7D27\u5F20\u5230\u53D1\u6296" }, joke: "\u4E09\u5BB6\u94F6\u884C\u5747\u516C\u5F00\u627F\u8BFA2050\u5E74\u5B9E\u73B0\u51C0\u96F6\u6392\u653E\u3002\u540C\u65F6\uFF0C\u4ED6\u4EEC\u57282024\u5E74\u5168\u7403\u5316\u77F3\u71C3\u6599\u878D\u8D44\u699C\u4E0A\u540D\u5217\u524D\u8305\u3002\u8FD9\u4E0D\u662F\u77DB\u76FE\u2014\u2014\u8FD9\u53EB\u201C\u8F6C\u578B\u91D1\u878D\u201D\uFF0C\u9644\u6709\u8BE6\u7EC6\u7684\u65B9\u6CD5\u8BBA\u6587\u4EF6\u4F9B\u60A8\u53C2\u9605\u3002", explainer: Q5_EXPLAINER_ZH }
        },
        {
          id: 6,
          locale: "all",
          correct: "A",
          en: { title: "Japan's Green Transformation (GX) strategy estimates how much combined public-private investment over the next 10 years?", options: { A: "150 trillion yen (~USD 1 trillion)", B: `"More than last year's budget but less than the GDP of a medium-sized planet"`, C: '50 trillion yen, plus whatever is left in the slush fund marked "miscellaneous industrial policy"', D: "The exact amount that sounds plausible in a pitch book but impossible in a board meeting" }, joke: 'That is about 3% of GDP annually, targeting 14\u201316 industrial sectors including hydrogen, offshore wind, and next-generation nuclear. Somewhere in Tokyo, a PM is building a deck titled "Massive Addressable Market."', explainer: Q6_EXPLAINER_EN },
          ja: { title: "\u65E5\u672C\u306E\u300CGX\uFF08\u30B0\u30EA\u30FC\u30F3\u30C8\u30E9\u30F3\u30B9\u30D5\u30A9\u30FC\u30E1\u30FC\u30B7\u30E7\u30F3\uFF09\u300D\u6226\u7565\u304C\u8A66\u7B97\u3059\u308B\u3001\u4ECA\u5F8C10\u5E74\u9593\u306B\u5FC5\u8981\u306A\u5B98\u6C11\u6295\u8CC7\u7DCF\u984D\u306F\uFF1F", options: { A: "150\u5146\u5186\uFF08\u7D041\u5146\u7C73\u30C9\u30EB\uFF09", B: "\u300C\u6628\u5E74\u306E\u4E88\u7B97\u3088\u308A\u591A\u3044\u304C\u3001\u4E2D\u898F\u6A21\u60D1\u661F\u306EGDP\u3088\u308A\u306F\u5C11\u306A\u3044\u300D", C: "50\u5146\u5186\uFF0B\u300C\u305D\u306E\u4ED6\u7523\u696D\u653F\u7B56\u300D\u3068\u66F8\u304B\u308C\u305F\u4E88\u5099\u8CBB\u306E\u6B8B\u984D", D: "\u30D4\u30C3\u30C1\u30D6\u30C3\u30AF\u3067\u306F\u8AAC\u5F97\u529B\u304C\u3042\u308B\u304C\u3001\u53D6\u7DE1\u5F79\u4F1A\u3067\u306F\u901A\u3089\u306A\u3044\u7D76\u5999\u306A\u91D1\u984D" }, joke: "\u5E74\u9593GDP\u306E\u7D043%\u3092\u3001\u6C34\u7D20\u30FB\u6D0B\u4E0A\u98A8\u529B\u30FB\u6B21\u4E16\u4EE3\u539F\u5B50\u529B\u306A\u306914\u301C16\u306E\u7523\u696D\u5206\u91CE\u306B\u6295\u3058\u308B\u8A08\u753B\u3067\u3059\u3002\u6771\u4EAC\u306E\u3069\u3053\u304B\u3067\u3001\u67D0PM\u304C\u300C\u5DE8\u5927\u306A\u30A2\u30C9\u30EC\u30C3\u30B5\u30D6\u30EB\u30DE\u30FC\u30B1\u30C3\u30C8\u300D\u3068\u984C\u3057\u305F\u30C7\u30C3\u30AF\u3092\u7DE8\u96C6\u4E2D\u3002", explainer: Q6_EXPLAINER_JA },
          zh: { title: "\u65E5\u672C\u7684\u7EFF\u8272\u8F6C\u578B\uFF08GX\uFF09\u6218\u7565\u4F30\u7B97\u672A\u676510\u5E74\u9700\u8981\u591A\u5C11\u5B98\u6C11\u5408\u8BA1\u6295\u8D44\uFF1F", options: { A: "150\u4E07\u4EBF\u65E5\u5143\uFF08\u7EA61\u4E07\u4EBF\u7F8E\u5143\uFF09", B: "\u201C\u6BD4\u53BB\u5E74\u9884\u7B97\u591A\uFF0C\u4F46\u6BD4\u4E2D\u7B49\u884C\u661F\u7684GDP\u5C11\u201D", C: "50\u4E07\u4EBF\u65E5\u5143\uFF0C\u518D\u52A0\u4E0A\u201C\u5176\u4ED6\u4EA7\u4E1A\u653F\u7B56\u201D\u6807\u7B7E\u4E0B\u5269\u4E0B\u7684\u4EFB\u610F\u9884\u7B97", D: "\u5728\u62DB\u80A1\u8BF4\u660E\u4E66\u4E2D\u542C\u8D77\u6765\u5F88\u806A\u660E\uFF0C\u4F46\u5728\u8463\u4E8B\u4F1A\u4E0A\u7EDD\u5BF9\u901A\u4E0D\u8FC7\u7684\u7CBE\u5999\u91D1\u989D" }, joke: "\u7EA6\u5360GDP\u76843%\uFF0C\u9762\u541114-16\u4E2A\u4EA7\u4E1A\u9886\u57DF\uFF0C\u5305\u62EC\u6C22\u80FD\u3001\u6D77\u4E0A\u98CE\u7535\u3001\u6C21\u6DF7\u71C3\u3001\u4E0B\u4E00\u4EE3\u6838\u7535\u3001\u7535\u52A8\u6C7D\u8F66\u7535\u6C60\u7B49\u3002\u4E1C\u4EAC\u67D0\u5730\uFF0C\u4E00\u4F4D\u9879\u76EE\u7ECF\u7406\u6B63\u5728\u7F16\u8F91\u540D\u4E3A\u201C\u5E9E\u5927\u7684\u53EF\u89E6\u8FBE\u5E02\u573A\u201D\u7684PPT\u3002", explainer: Q6_EXPLAINER_ZH }
        },
        {
          id: 7,
          locale: "all",
          correct: "A",
          en: { title: `Under Japan's FSA rules, can a fund market itself as an "ESG Fund" if its <em>only</em> strategy is negative screening (e.g., "we do not invest in tobacco")?`, options: { A: "No \u2014 ESG must be a primary selection factor with disclosed targets", B: 'Yes, provided the fund name also includes "sustainable," "green," or "future" \u2014 ideally all three', C: "Yes, because negative screening qualifies under the 2018 guidance, 2021 addendum, and the rule that nobody reads prospectuses", D: "No, unless the deck uses a green colour palette and a wind turbine photo, in which case the FSA may grant an aesthetic waiver" }, joke: "The FSA tightened rules to combat greenwashing. Simply excluding tobacco and weapons manufacturers no longer cuts it. You need stated targets, reference benchmarks, and ongoing disclosure. If this makes you uneasy, perhaps review your fund's prospectus.", explainer: Q7_EXPLAINER_EN },
          ja: { title: "\u91D1\u878D\u5E81\u306E\u898F\u5247\u3067\u306F\u3001\u30CD\u30AC\u30C6\u30A3\u30D6\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF08\u300C\u30BF\u30D0\u30B3\u306B\u306F\u6295\u8CC7\u3057\u307E\u305B\u3093\u300D\u306A\u3069\uFF09\u3060\u3051\u3092ESG\u6226\u7565\u3068\u3059\u308B\u30D5\u30A1\u30F3\u30C9\u3092\u300CESG\u30D5\u30A1\u30F3\u30C9\u300D\u3068\u540D\u4E57\u308C\u307E\u3059\u304B\uFF1F", options: { A: "\u3044\u3044\u3048 \u2014 ESG\u304C\u4E3B\u8981\u306A\u6295\u8CCE\u5224\u65AD\u8981\u7D20\u3067\u3042\u308A\u3001\u5177\u4F53\u7684\u306A\u76EE\u6A19\u958B\u793A\u304C\u5FC5\u8981", B: "\u306F\u3044 \u2014 \u30D5\u30A1\u30F3\u30C9\u540D\u306B\u300C\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u300D\u300C\u30B0\u30EA\u30FC\u30F3\u300D\u300C\u672A\u6765\u300D\u3092\u542B\u3081\u308C\u3070OK\uFF08\u7406\u60F3\u7684\u306B\u306F3\u3064\u5168\u90E8\uFF09", C: "\u306F\u3044 \u2014 2018\u5E74\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u30012021\u5E74\u8FFD\u52A0\u3001\u305D\u3057\u3066\u300C\u8AB0\u3082\u76EE\u8AD6\u898B\u66F8\u3092\u8AAD\u307E\u306A\u3044\u300D\u3068\u3044\u3046\u4E0D\u6587\u5F8B\u306B\u3088\u308A\u9ED8\u8A8D", D: "\u3044\u3044\u3048 \u2014 \u305F\u3060\u3057\u30B9\u30E9\u30A4\u30C9\u306E\u914D\u8272\u304C\u7DD1\u7CFB\u3067\u98A8\u529B\u767A\u96FB\u306E\u5199\u771F\u304C\u5165\u3063\u3066\u3044\u308C\u3070\u3001\u91D1\u878D\u5E81\u306E\u300C\u7F8E\u7684\u88C1\u91CF\u300D\u306B\u3088\u308A\u7279\u4F8B\u627F\u8A8D\u3055\u308C\u308B\u5834\u5408\u3042\u308A" }, joke: "\u91D1\u878D\u5E81\u306F\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30F3\u30B0\u5BFE\u7B56\u3068\u3057\u3066\u898F\u5247\u3092\u53B3\u683C\u5316\u3057\u307E\u3057\u305F\u3002\u30BF\u30D0\u30B3\u3084\u6B66\u5668\u306E\u9664\u5916\u3060\u3051\u3067\u306FESG\u30D5\u30A1\u30F3\u30C9\u3092\u540D\u4E57\u308C\u307E\u305B\u3093\u3002\u5177\u4F53\u7684\u306A\u76EE\u6A19\u3001\u53C2\u7167\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u3001\u7D99\u7D9A\u7684\u306A\u958B\u793A\u304C\u5FC5\u8981\u3067\u3059\u3002\u4E0D\u5B89\u306B\u306A\u3063\u305F\u65B9\u306F\u3001\u5FA1\u793E\u306E\u76EE\u8AD6\u898B\u66F8\u3092\u518D\u78BA\u8A8D\u3055\u308C\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002", explainer: Q7_EXPLAINER_JA },
          zh: { title: "\u636E\u65E5\u672C\u91D1\u878D\u5385\uFF08FSA\uFF09\u89C4\u5219\uFF0C\u5982\u679C\u57FA\u91D1\u552F\u4E00\u7684\u7B56\u7565\u662F\u6D88\u6781\u7B5B\u9009\uFF08\u5982\u201C\u6211\u4EEC\u4E0D\u6295\u8D44\u70DF\u8349\u201D\uFF09\uFF0C\u53EF\u4EE5\u81EA\u79F0\u201CESG\u57FA\u91D1\u201D\u5417\uFF1F", options: { A: "\u4E0D\u53EF\u4EE5 \u2014 ESG\u5FC5\u987B\u662F\u4E3B\u8981\u7B5B\u9009\u56E0\u7D20\uFF0C\u5E76\u62AB\u9732\u5177\u4F53\u76EE\u6807", B: "\u53EF\u4EE5\uFF0C\u53EA\u8981\u57FA\u91D1\u540D\u79F0\u5305\u542B\u201C\u53EF\u6301\u7EED\u201D\u201C\u7EFF\u8272\u201D\u6216\u201C\u672A\u6765\u201D\u2014\u2014\u7406\u60F3\u60C5\u51B5\u4E0B\u4E09\u4E2A\u90FD\u7528", C: "\u53EF\u4EE5\uFF0C\u56E0\u4E3A\u6D88\u6781\u7B5B\u9009\u7B26\u54082018\u5E74\u6307\u5F15\u30012021\u5E74\u8865\u5145\u89C4\u5219\uFF0C\u4EE5\u53CA\u201C\u6CA1\u4EBA\u8BFB\u62DB\u80A1\u8BF4\u660E\u4E66\u201D\u7684\u4E0D\u6210\u6587\u89C4\u77E9", D: "\u4E0D\u53EF\u4EE5\uFF0C\u9664\u975EPPT\u91C7\u7528\u7EFF\u8272\u914D\u8272\u5E76\u52A0\u4E0A\u98CE\u673A\u56FE\u7247\u2014\u2014\u90A3\u6837\u91D1\u878D\u5385\u53EF\u80FD\u4F1A\u6839\u636E\u201C\u5BA1\u7F8E\u88C1\u91CF\u201D\u7ED9\u4E88\u7279\u4F8B" }, joke: "FSA\u52A0\u4E25\u4E86\u53CD\u6F02\u7EFF\u89C4\u5219\u3002\u5355\u7EAF\u6392\u9664\u70DF\u8349\u548C\u6B66\u5668\u5236\u9020\u5546\u5DF2\u4E0D\u591F\u3002\u4F60\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u3001\u53C2\u8003\u57FA\u51C6\u548C\u6301\u7EED\u7684\u4FE1\u606F\u62AB\u9732\u3002\u5982\u679C\u8FD9\u8BA9\u4F60\u611F\u5230\u4E0D\u5B89\uFF0C\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u5BA1\u89C6\u4E00\u4E0B\u4F60\u7684\u57FA\u91D1\u62DB\u80A1\u8BF4\u660E\u4E66\u3002", explainer: Q7_EXPLAINER_ZH }
        },
        {
          id: 8,
          locale: "all",
          correct: "A",
          en: { title: "Japan became the world's first sovereign issuer of climate transition bonds, in February 2024. How will the \xA520 trillion debt be repaid?", options: { A: "Revenue from future GX-ETS carbon auctions and the 2028 fossil fuel levy", B: '"Growth will pay for it" \u2014 a sentence that has never backfired in the history of sovereign debt', C: "By issuing additional transition bonds to repay the original ones, in a beautiful ouroboros of sustainable finance", D: "The bonds mature in 2050 alongside the net-zero target, at which point the problem becomes someone else's bonus calculation" }, joke: "A genuine closed-loop mechanism: tax carbon emitters, use the proceeds to repay the bonds that funded decarbonisation. Whether this works depends on carbon prices actually rising, emitters actually paying, and politicians letting the mechanism run.", explainer: Q8_EXPLAINER_EN },
          ja: { title: "\u65E5\u672C\u306F2024\u5E742\u6708\u3001\u4E16\u754C\u521D\u306E\u30BD\u30D6\u30EA\u30F3\u6C17\u5019\u79FB\u884C\u50B5\u3092\u767A\u884C\u3057\u307E\u3057\u305F\u300220\u5146\u5186\u306E\u50B5\u52D9\u306F\u3069\u3046\u8FD4\u6E09\u3055\u308C\u307E\u3059\u304B\uFF1F", options: { A: "\u5C06\u6765\u306EGX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u53CE\u5165\u30682028\u5E74\u5C0E\u5165\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1", B: "\u300C\u6210\u9577\u304C\u8FD4\u6E09\u3059\u308B\u300D\u2014 \u30BD\u30D6\u30EA\u30F3\u50B5\u52D9\u306E\u6B74\u53F2\u306B\u304A\u3044\u3066\u4E00\u5EA6\u3082\u88CF\u5207\u3089\u308C\u305F\u3053\u3068\u306E\u306A\u3044\u9B54\u6CD5\u306E\u8A00\u8449", C: "\u8FFD\u52A0\u306E\u79FB\u884C\u50B5\u3092\u767A\u884C\u3057\u3066\u65E2\u5B58\u50B5\u3092\u8FD4\u6E09\u3002\u6301\u7D9A\u53EF\u80FD\u306A\u91D1\u878D\u306E\u7F8E\u3057\u304D\u30A6\u30ED\u30DC\u30ED\u30B9", D: "2050\u5E74\u306E\u30CD\u30C3\u30C8\u30BC\u30ED\u76EE\u6A19\u3068\u540C\u6642\u306B\u6E80\u671F\u3092\u8FCE\u3048\u3001\u305D\u306E\u6642\u70B9\u3067\u554F\u984C\u306F\u4ED6\u4EBA\u306E\u30DC\u30FC\u30CA\u30B9\u8A08\u7B97\u306B\u5F15\u304D\u7D99\u304C\u308C\u308B" }, joke: "\u70AD\u7D20\u6392\u51FA\u8005\u306B\u8AB2\u7A0E\u3057\u3001\u305D\u306E\u53CE\u5165\u3067\u8131\u70AD\u7D20\u5316\u6295\u8CC7\u306E\u305F\u3081\u306E\u56FD\u50B5\u3092\u511F\u5374\u3059\u308B\u2014\u2014\u672C\u7269\u306E\u30AF\u30ED\u30FC\u30BA\u30C9\u30EB\u30FC\u30D7\u30FB\u30E1\u30AB\u30CB\u30BA\u30E0\u3067\u3059\u3002\u3053\u308C\u304C\u6A5F\u80FD\u3059\u308B\u304B\u306F\u3001\u70AD\u7D20\u4FA1\u683C\u304C\u5B9F\u969B\u306B\u4E0A\u304C\u308B\u304B\u3001\u6392\u51FA\u8005\u304C\u672C\u5F53\u306B\u652F\u6255\u3046\u304B\u3001\u653F\u6CBB\u5BB6\u304C\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u653E\u7F6E\u3059\u308B\u304B\u306B\u304B\u3063\u3066\u3044\u307E\u3059\u3002", explainer: Q8_EXPLAINER_JA },
          zh: { title: "2024\u5E742\u6708\uFF0C\u65E5\u672C\u6210\u4E3A\u5168\u7403\u9996\u4E2A\u53D1\u884C\u6C14\u5019\u8F6C\u578B\u503A\u5238\u7684\u4E3B\u6743\u56FD\u5BB6\u300220\u4E07\u4EBF\u65E5\u5143\u7684\u503A\u52A1\u5C06\u5982\u4F55\u507F\u8FD8\uFF1F", options: { A: "\u6765\u81EA\u672A\u6765GX-ETS\u78B3\u62CD\u5356\u6536\u5165\u548C2028\u5E74\u5F15\u5165\u7684\u5316\u77F3\u71C3\u6599\u9644\u52A0\u7A0E", B: "\u201C\u589E\u957F\u4F1A\u8FD8\u6E05\u7684\u201D\u2014\u2014\u8FD9\u53E5\u8BDD\u5728\u4E3B\u6743\u503A\u52A1\u53F2\u4E0A\u4ECE\u672A\u51FA\u8FC7\u5DEE\u9519", C: "\u53D1\u884C\u66F4\u591A\u8F6C\u578B\u503A\u5238\u6765\u507F\u8FD8\u539F\u6709\u503A\u5238\u2014\u2014\u53EF\u6301\u7EED\u91D1\u878D\u4E2D\u7684\u7F8E\u4E3D\u73AF", D: "\u503A\u5238\u57282050\u5E74\u4E0E\u51C0\u96F6\u76EE\u6807\u540C\u65F6\u5230\u671F\uFF0C\u5230\u65F6\u95EE\u9898\u53D8\u6210\u522B\u4EBA\u7684\u5956\u91D1\u8BA1\u7B97\u95EE\u9898" }, joke: "\u771F\u6B63\u7684\u95ED\u73AF\u673A\u5236\uFF1A\u5411\u78B3\u6392\u653E\u8005\u5F81\u7A0E\uFF0C\u6536\u5165\u7528\u4E8E\u507F\u8FD8\u4E3A\u8131\u78B3\u5316\u878D\u8D44\u7684\u503A\u5238\u3002\u80FD\u5426\u6210\u529F\u53D6\u51B3\u4E8E\u78B3\u4EF7\u662F\u5426\u771F\u6B63\u4E0A\u6DA8\u3001\u6392\u653E\u8005\u662F\u5426\u771F\u6B63\u652F\u4ED8\u3001\u4EE5\u53CA\u653F\u5BA2\u662F\u5426\u8BA9\u673A\u5236\u81EA\u7531\u8FD0\u884C\u3002", explainer: Q8_EXPLAINER_ZH }
        }
      ];
      OPTION_KEYS = ["A", "B", "C", "D"];
      LOC_NAMES = {
        tk: ["office_tk_name", "office_tk_city"],
        sg: ["office_sg_name", "office_sg_city"],
        hk: ["office_hk_name", "office_hk_city"]
      };
    }
  });

  // src/app.ts
  var require_app = __commonJS({
    "src/app.ts"() {
      init_data();
      var saved = loadStored();
      document.addEventListener("alpine:init", () => {
        Alpine.data("quiz", () => ({
          // ---- state ----
          screen: saved ? "result" : "lang",
          _langPick: saved?.lang ?? "en",
          lang: saved?.lang ?? "en",
          location: null,
          questions: [],
          currentIndex: 0,
          answers: [],
          answered: false,
          lastAnswerCorrect: false,
          savedResult: saved != null,
          savedTimestamp: saved ? formatDate(saved.timestamp) : "",
          _lastKey: null,
          toastVisible: false,
          toastText: "",
          showExplainer: false,
          OPTION_KEYS,
          SHOW_BRAND: true,
          // ---- helpers ----
          t(key, vars) {
            return t(UI[this.lang] ?? UI.en, key, vars);
          },
          // ---- computed ----
          get currentQuestion() {
            return this.questions[this.currentIndex];
          },
          get currentText() {
            const q = this.currentQuestion;
            if (!q) return { title: "", options: { A: "", B: "", C: "", D: "" }, joke: "", explainer: "" };
            return q[this.lang] ?? q.en;
          },
          get totalQuestions() {
            return this.questions.length || 8;
          },
          get score() {
            if (saved && this.savedResult) return saved.score;
            return this.answers.filter((a) => a.isCorrect).length;
          },
          get tier() {
            return getTier(this.score);
          },
          get resultLocation() {
            const loc = saved && this.savedResult ? saved.location : this.location;
            if (!loc) return "";
            const keys = LOC_NAMES[loc];
            return keys ? t(UI[this.lang] ?? UI.en, keys[0]) : "";
          },
          // ---- location ----
          selectLocation(loc) {
            this.location = loc;
          },
          startQuiz() {
            if (!this.location) return;
            this.lang = this._langPick;
            this.questions = filterQuestions(QUESTIONS, this.location).map(shuffleQuestionOptions);
            this.currentIndex = 0;
            this.answers = [];
            this.answered = false;
            this.screen = "quiz";
          },
          // ---- progress ----
          progressClass(i) {
            const cls = {};
            if (i < this.currentIndex) {
              const a = this.answers[i];
              cls[a?.isCorrect ? "correct" : "wrong"] = true;
            } else if (i === this.currentIndex) {
              cls.current = true;
            }
            return cls;
          },
          // ---- answering ----
          optionClass(key) {
            if (!this.answered) return {};
            const q = this.currentQuestion;
            const isKey = this._lastKey === key;
            return { locked: true, correct: key === q.correct, wrong: isKey && key !== q.correct };
          },
          selectAnswer(key) {
            if (this.answered) return;
            this.answered = true;
            this._lastKey = key;
            const q = this.currentQuestion;
            const correct = key === q.correct;
            this.lastAnswerCorrect = correct;
            this.answers.push({ qid: q.id, selected: key, correct: q.correct, isCorrect: correct });
            this.showExplainer = false;
            this.$nextTick(() => {
              const el = this.$refs?.reveal;
              if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
          },
          toggleExplainer() {
            this.showExplainer = !this.showExplainer;
          },
          nextQuestion() {
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
          goBack() {
            if (this.currentIndex <= 0 || this.answered) return;
            this.currentIndex--;
            this.answers.pop();
            this.showExplainer = false;
            window.scrollTo(0, 0);
          },
          finishQuiz() {
            const score = this.answers.filter((a) => a.isCorrect).length;
            saveResult(this.location, this.answers, score, this.lang);
            this.savedResult = true;
            this.savedTimestamp = formatDate((/* @__PURE__ */ new Date()).toISOString());
            this.screen = "result";
          },
          // ---- share ----
          copyScore() {
            const loc = saved && this.savedResult ? saved.location : this.location;
            const labelKeys = LOC_NAMES[loc];
            const label = labelKeys ? t(UI[this.lang] ?? UI.en, labelKeys[0]) : loc ?? "";
            const text = t(UI[this.lang] ?? UI.en, "shareText", { office: label, score: this.score, total: this.totalQuestions });
            navigator.clipboard.writeText(text).then(() => this.showToast(t(UI[this.lang] ?? UI.en, "copied"))).catch(() => {
              const ta = document.createElement("textarea");
              ta.value = text;
              document.body.appendChild(ta);
              ta.select();
              document.execCommand("copy");
              document.body.removeChild(ta);
              this.showToast(t(UI[this.lang] ?? UI.en, "copied"));
            });
          },
          retakeQuiz() {
            this.screen = "lang";
            this._langPick = "en";
            this.location = null;
            this.questions = [];
            this.currentIndex = 0;
            this.answers = [];
            this.answered = false;
            this._lastKey = null;
          },
          showToast(msg) {
            this.toastText = msg;
            this.toastVisible = true;
            setTimeout(() => {
              this.toastVisible = false;
            }, 2e3);
          }
        }));
      });
    }
  });
  require_app();
})();
