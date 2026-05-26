export type Lang = string;
export type LocCode = string;
export type Screen = 'lang' | 'start' | 'quiz' | 'result';
export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QText {
  title: string;
  options: { A: string; B: string; C: string; D: string };
  joke: string;
  explainer: string;
}

export interface Question {
  id: number;
  locale: 'all' | LocCode[];
  correct: string;
  en: QText;
  ja: QText;
}

export interface Answer {
  qid: number;
  selected: string;
  correct: string;
  isCorrect: boolean;
}

export interface TierDef {
  min: number;
  titleKey: string;
  descKey: string;
  color: string;
}

export type UIStrings = Record<string, string>;

export const UI: Record<Lang, UIStrings> = {
  en: {
    kicker: 'World Environment Day',
    title: 'Quiz \u2014 APAC Edition',
    byline: '8 questions. 1 office. Produced by the Department of Mandatory Fun.',
    changeLanguage: 'Change language',
    selectOffice: 'Select your office',
    office_tk_name: 'Tokyo',
    office_tk_city: 'Japan',
    startQuiz: 'Start quiz',
    privacyNote: 'No personal data collected. One attempt only.',
    questionN: 'Question {n} of {total}',
    correct: 'Correct',
    incorrect: 'Incorrect \u2014 the answer was {answer}',
    back: 'Back',
    next: 'Next',
    seeResults: 'See results',
    yourResults: 'Your results',
    savedResult: 'Your saved result',
    takenOn: 'Taken {date}',
    outOf: 'out of {n}',
    source: 'Source',
    showSource: '▼ Show source',
    hideSource: '▲ Hide source',
    tier_0: 'ESG Specialist',
    tier_0_desc: 'You have read the footnotes. Your colleagues may be nervous around you.',
    tier_1: 'Transition-Literate',
    tier_1_desc: 'Solid working knowledge. May still call thermal recycling \u201Crecycling.\u201D',
    tier_2: 'Greenwashed',
    tier_2_desc: 'You nod knowingly in ESG meetings. You are not fooling anyone.',
    tier_3: 'Stranded Asset',
    tier_3_desc: 'Perhaps avoid the sustainability portion of the client call.',
    copyScore: 'Copy score for Teams',
    retakeQuiz: 'Retake quiz (for fun \u2014 first score is saved)',
    resetQuiz: 'Reset (clear all data)',
    footer: 'Brought to you by APAC Environment Networks',
    shareText: 'World Environment Day Quiz \u2014 {office} office \u00B7 Score: {score}/{total}',
    copied: 'Copied \u2014 paste it into Teams',
  },
  ja: {
    kicker: '\u4E16\u754C\u74B0\u5883\u30C7\u30FC',
    title: '\u30AF\u30A4\u30BA \u2014 APAC\u7248',
    byline: '\u51688\u554F\u30023\u62E0\u70B9\u3002\u4EBA\u4E8B\u90E8\u516C\u8A8D\u306E\u5F37\u5236\u53C2\u52A0\u578B\u30EC\u30AF\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u3002',
    changeLanguage: '\u8A00\u8A9E\u3092\u5909\u66F4',
    selectOffice: '\u62E0\u70B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
    office_tk_name: '\u6771\u4EAC',
    office_tk_city: '\u65E5\u672C',

    startQuiz: '\u30AF\u30A4\u30BA\u3092\u59CB\u3081\u308B',
    privacyNote: '\u500B\u4EBA\u60C5\u5831\u306F\u53CE\u96C6\u3055\u308C\u307E\u305B\u3093\u3002\u56DE\u7B54\u306F1\u56DE\u9650\u308A\u3067\u3059\u3002',
    questionN: '\u7B2C{n}\u554F / \u5168{total}\u554F',
    correct: '\u6B63\u89E3',
    incorrect: '\u4E0D\u6B63\u89E3 \u2014 \u6B63\u89E3\u306F {answer} \u3067\u3057\u305F',
    back: '\u623B\u308B',
    next: '\u6B21\u3078',
    seeResults: '\u7D50\u679C\u3092\u898B\u308B',
    yourResults: '\u7D50\u679C',
    savedResult: '\u4FDD\u5B58\u3055\u308C\u305F\u7D50\u679C',
    takenOn: '\u53D7\u9A13\u65E5: {date}',
    outOf: '{n}\u554F\u4E2D',
    source: '出典',
    showSource: '▼ ソースを表示',
    hideSource: '▲ ソースを隠す',
    tier_0: 'ESG\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8',
    tier_0_desc: '\u811A\u6CE2\u307E\u3067\u8AAD\u7834\u3002\u540C\u508D\u304B\u3089\u6050\u308C\u3089\u308C\u308B\u5B58\u5728\u3002',
    tier_1: '\u79FB\u884C\u91D1\u878D\u30EA\u30C6\u30E9\u30B7\u30FC\u3042\u308A',
    tier_1_desc: '\u5B9F\u7528\u7684\u306A\u77E5\u8B58\u306F\u3042\u308B\u304C\u3001\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u3092\u300C\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\u3068\u547C\u3093\u3067\u3057\u307E\u3046\u3002',
    tier_2: '\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30E3\u30FC\u7591\u60D1',
    tier_2_desc: 'ESG\u4F1A\u8B70\u3067\u3046\u306A\u305A\u304F\u3060\u3051\u3002\u8AB0\u3082\u9A19\u305B\u3066\u3044\u307E\u305B\u3093\u3002',
    tier_3: '\u5EA7\u7901\u8CC7\u7523',
    tier_3_desc: '\u30B5\u30B9\u30C6\u30CA\u30D3\u30EA\u30C6\u30A3\u306E\u8A71\u984C\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u524D\u3067\u51FA\u3055\u306A\u3044\u3088\u3046\u306B\u3002',
    copyScore: '\u30B9\u30B3\u30A2\u3092Teams\u306B\u30B3\u30D4\u30FC',
    retakeQuiz: '\u518D\u53D7\u9A13\uFF08\u304A\u8A66\u3057 \u2014 \u6700\u521D\u306E\u30B9\u30B3\u30A2\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\uFF09',
    resetQuiz: '\u30EA\u30BB\u30C3\u30C8\uFF08\u30C7\u30FC\u30BF\u5168\u6D88\u53BB\uFF09',
    footer: 'APAC\u74B0\u5883\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u304C\u304A\u5C4A\u3051\u3057\u307E\u3059',
    shareText: '\u4E16\u754C\u74B0\u5883\u30C7\u30FC\u30AF\u30A4\u30BA \u2014 {office}\u30AA\u30D5\u30A3\u30B9 \u00B7 \u30B9\u30B3\u30A2: {score}/{total}',
    copied: '\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u2014 Teams\u306B\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044',
  },

};

export function t(strings: UIStrings, key: string, vars?: Record<string, string | number>): string {
  let s = strings[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
}

export const TIERS: TierDef[] = [
  { min: 7, titleKey: 'tier_0', descKey: 'tier_0_desc', color: '#1a7a4c' },
  { min: 4, titleKey: 'tier_1', descKey: 'tier_1_desc', color: '#8b7e14' },
  { min: 2, titleKey: 'tier_2', descKey: 'tier_2_desc', color: '#b85c1a' },
  { min: 0, titleKey: 'tier_3', descKey: 'tier_3_desc', color: '#c1292e' },
];

export function getTier(score: number): TierDef {
  return TIERS.find(t => score >= t.min) ?? TIERS[TIERS.length - 1];
}

const Q1_EXPLAINER_EN = 'Japan proposed World Environment Day at the 1972 UN Conference on the Human Environment in Stockholm. Sweden hosted; Japan proposed; the UN General Assembly agreed. June\u00A05 has since become the UN\u2019s flagship campaign for environmental awareness, observed by over 150 countries each year. What your MD won\u2019t tell you: the proposal was partly a diplomatic move \u2014 Japan wanted to show environmental leadership after facing international criticism over industrial pollution (Minamata, itai-itai). Every ESG initiative has an origin story; most involve a crisis someone tried to get ahead of.<br><br><a href="https://www.worldenvironmentday.global/about/history" target="_blank" rel="noopener">\u2192 UN World Environment Day \u2014 official history</a>';
const Q1_EXPLAINER_JA = '\u65E5\u672C\u306F1972\u5E74\u306E\u56FD\u9023\u4EBA\u9593\u74B0\u5883\u4F1A\u8B70\uFF08\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\uFF09\u3067\u4E16\u754C\u74B0\u5883\u30C7\u30FC\u3092\u63D0\u6848\u3057\u307E\u3057\u305F\u3002\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u304C\u4E3B\u50AC\u3001\u65E5\u672C\u304C\u63D0\u6848\u3001\u56FD\u9023\u7DCF\u4F1A\u304C\u627F\u8A8D\u3002\u4EE5\u6765\u30016\u67085\u65E5\u306F\u56FD\u9023\u65D7\u8239\u306E\u74B0\u5883\u5553\u767A\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3068\u306A\u308A\u3001\u6BCE\u5E74150\u304B\u56FD\u4EE5\u4E0A\u304C\u53C2\u52A0\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u63D0\u6848\u306F\u3001\u4E9C\u6C34\u75C7\u30FB\u30A4\u30BF\u30A4\u30A4\u30BF\u30A4\u75C7\u7B49\u306E\u753A\u5DE5\u516C\u5BB3\u306B\u5BFE\u3059\u308B\u56FD\u969B\u7684\u6279\u5224\u3092\u53D7\u3051\u305F\u65E5\u672C\u304C\u3001\u74B0\u5883\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7\u3092\u793A\u3059\u305F\u3081\u306E\u5916\u4EA4\u6226\u7565\u3067\u3082\u3042\u308A\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u306EESG\u30A4\u30CB\u30B7\u30A2\u30C1\u30D6\u3082\u3001\u5FC5\u305A\u4F55\u304B\u306E\u30AF\u30EA\u30B7\u30B9\u304B\u3089\u59CB\u307E\u3063\u3066\u3044\u307E\u3059\u3002<br><br><a href="https://www.worldenvironmentday.global/about/history" target="_blank" rel="noopener">→ UNEP 世界環境デー — 公式歴史</a>';const Q1_EXPLAINER_ZH = '1972年，日本在斯德哥尔摩联合国人类环境会议上提议设立世界环境日。瑞典主办会议，日本提出动议，联合国大会批准通过。此后每年6月5日成为联合国环境宣传旗舰活动，超过150个国家参与。你知道但董事不会告诉你的是：这一提议部分出于外交策略——日本在经历水俣病、痛痛病等工业污染的国际批评后，希望展示环境领导力。每一个ESG倡议都有起源故事；大多数都始于某场危机。<br><br><a href="https://www.worldenvironmentday.global/about/history" target="_blank" rel="noopener">→ 联合国世界环境日 — 官方历史</a>';const Q2_EXPLAINER_EN = 'The Cool Biz campaign, launched in 2005 by the Ministry of the Environment, mandated 28\u00B0C (82.4\u00B0F) as the standard office air-conditioning temperature during summer. The policy also relaxed dress codes: no ties, no jackets. The result: an estimated 1.14 million tonnes of CO\u2082 reduction annually. What makes this genuinely interesting: it was purely voluntary (no fines, no enforcement). Companies just\u2026 did it. The Japanese term for this is \u201Ckeizoku\u201D \u2014 continuous improvement through social consensus, not regulation. Your compliance department has never heard of it.<br><br><a href="https://en.wikipedia.org/wiki/Cool_Biz_campaign" target="_blank" rel="noopener">\u2192 Wikipedia \u2014 Cool Biz campaign</a>';
const Q2_EXPLAINER_JA = '\u30AF\u30FC\u30EB\u30D3\u30BA\u306F\u30012005\u5E74\u306B\u74B0\u5883\u7701\u304C\u59CB\u3081\u305F\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3067\u3001\u590F\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u6E29\u5EA6\u309228\u2103\u306B\u898F\u5B9A\u3057\u307E\u3059\u300234\u2103\u306E\u5916\u6C17\u4E0B\u3001\u900F\u660E\u6027\u3092\u6301\u3064\u5F37\u3044\u4EBA\u306F\u3053\u306E\u5B9F\u8D28\u7684\u306A\u7121\u610F\u5473\u3055\u3092\u8868\u73FE\u3067\u304D\u307E\u3059\u3002\u30CD\u30AF\u30BF\u30A4\u3068\u30B8\u30E3\u30B1\u30C3\u30C8\u3082\u4FEE\u6B63\u3055\u308C\u307E\u3059\u3002\u7D50\u679C\u3001\u6BCE\u5E74\u7D04114\u4E07\u30C8\u30F3\u306EC\u2460\u2092\u304C\u524A\u6E1B\u3002\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u306E\u60B2\u50B7\u304C\u3042\u308B\u5834\u5408\u3001\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u306F\u3069\u306E\u3088\u3046\u306B\u753B\u9762\u7684\u306B\u8868\u73FE\u3055\u308C\u307E\u3059\u304B\u3002<br><br><a href="https://en.wikipedia.org/wiki/Cool_Biz_campaign" target="_blank" rel="noopener">→ Wikipedia — クールビズキャンペーン</a>';const Q2_EXPLAINER_ZH = '2005年，日本环境省发起"清凉商务"活动，规定夏季办公室空调温度设定为28°C（82.4°F）。同时放宽着装要求：不打领带、不穿外套。结果：每年减排约114万吨二氧化碳。真正有趣之处在于：这完全是自愿性质的（无罚款、无强制执行）。企业就是...照做了。日语管这叫"継続"——通过社会共识而非监管来实现的持续改进。你的合规部门从未听说过这个词。<br><br><a href="https://en.wikipedia.org/wiki/Cool_Biz_campaign" target="_blank" rel="noopener">→ 维基百科 — 清凉商务活动</a>';const Q3_EXPLAINER_EN = '"Mottainai" (\u201Cwhat a waste\u201D) is a Japanese expression that environmental activist and Nobel Peace Prize laureate Wangari Maathai popularised globally. She identified Respect as the fourth R \u2014 for the Earth\u2019s finite resources. The Japanese Ministry of Foreign Affairs officially adopted the Mottainai Campaign, and the concept was promoted at the 2008 G8 Hokkaido Toyako Summit. The existing three Rs (Reduce, Reuse, Recycle) were enshrined in Japanese law in the 2000 Basic Act for Establishing a Sound Material-Cycle Society. Respect was added not by legislation but by cultural consensus \u2014 the hardest kind of regulation to draft.<br><br><a href="https://www.mofa.go.jp/policy/economy/summit/2008/kids/eco/index_02.html" target="_blank" rel="noopener">→ MOFA — Mottainai Campaign</a>';
const Q3_EXPLAINER_JA = '\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u300D\u3068\u3044\u3046\u65E5\u672C\u306E\u8868\u73FE\u3092\u3001\u30CE\u30FC\u30D9\u30EB\u5E73\u548C\u8CCE\u53D7\u8CDE\u8005\u30EF\u30F3\u30AC\u30EA\u30FB\u30DE\u30FC\u30BF\u30A4\u6C0F\u304C\u4E16\u754C\u7684\u306B\u5E83\u3081\u307E\u3057\u305F\u3002\u5F7C\u5973\u306F4\u3064\u76EE\u306ER\u3068\u3057\u3066\u300CRespect\uFF08\u656C\u610F\uFF09\u300D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002\u5916\u52D9\u7701\u306F\u516C\u5F0F\u306B\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u300D\u3092\u63A1\u7528\u3057\u30012008\u5E74\u306EG8\u5317\u6D77\u9053\u5FD7\u7126\u30B5\u30DF\u30C3\u30C8\u3067\u63D0\u5021\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306F\u7ACB\u6CD5\u3067\u306F\u306A\u304F\u3001\u6587\u5316\u7684\u30B3\u30F3\u30BB\u30F3\u30B5\u30B9\u306B\u3088\u308B\u3082\u306E\u3067\u3059\u3002<br><br><a href="https://www.mofa.go.jp/policy/economy/summit/2008/kids/eco/index_02.html" target="_blank" rel="noopener">→ 外務省 — もったいないキャンペーン</a>';const Q3_EXPLAINER_ZH = '"Mottainai（もったいない）"是日语中表达"浪费"的说法，由诺贝尔和平奖得主旺加里·马塔伊推广至全球。她指出第四个R是"Respect（尊重）"——对地球有限资源的尊重。日本外务省官方采纳了"Mottainai运动"，在2008年G8北海道洞爷湖峰会上得到推广。前三个R（Reduce、Reuse、Recycle）通过2000年《循环型社会形成推进基本法》确立。而"Respect"并非通过立法，而是通过文化共识加入的——这是最难起草的"法规"。<br><br><a href="https://www.mofa.go.jp/policy/economy/summit/2008/kids/eco/index_02.html" target="_blank" rel="noopener">→ 外务省 — Mottainai运动</a>';const Q4_EXPLAINER_EN = 'Japan reports a plastic recycling rate of approximately 85%. This figure has been widely cited in corporate ESG reports and government communications. However, it includes \u201Cthermal recycling\u201D \u2014 incinerating plastic waste to generate energy. Under international standards that measure actual material reprocessing (what the EU calls \u201Cmaterial recycling\u201D), Japan\u2019s real rate is approximately 24%. The remaining ~61% is either landfilled, incinerated without energy recovery, or exported. Japan generates more plastic packaging waste per capita than any country except the United States.<br><br><a href="https://circulareconomy.earth/publications/how-japan-is-using-the-circular-economy-to-recycle-plastics" target="_blank" rel="noopener">→ Circular Economy Earth — Japan plastics analysis</a>';
const Q4_EXPLAINER_JA = '\u65E5\u672C\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u306F\u7D0485%\u3068\u5831\u544A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6570\u5024\u306F\u4F01\u696D\u306EESG\u30EC\u30DD\u30FC\u30C8\u3084\u653F\u5E9C\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5E83\u304F\u5F15\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u306F\u300C\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\uFF08\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u3092\u7112\u5374\u3057\u3066\u767A\u96FB\uFF09\u3092\u542B\u3093\u3067\u3044\u307E\u3059\u3002\u56FD\u969B\u6A19\u6E96\uFF08\u7269\u8CEA\u30EA\u30B5\u30A4\u30AF\u30EB\uFF09\u3067\u306F\u3001\u65E5\u672C\u306E\u5B9F\u8CEA\u7684\u306A\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u306F\u7D0424%\u306B\u3059\u304E\u307E\u305B\u3093\u3002\u6B8B\u308A\u306F\u5869\u58D1\u3001\u30A8\u30CD\u30EB\u30AE\u30FC\u56DE\u53CE\u306A\u3057\u3067\u306E\u7112\u5374\u3001\u307E\u305F\u306F\u8F38\u51FA\u3055\u308C\u3066\u3044\u307E\u3059\u3002ESG\u30C7\u30FC\u30BF\u306E\u4E16\u754C\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u6570\u5B57\u306B\u811A\u6CE8\u304C\u3042\u308A\u307E\u3059\u3002<br><br><a href="https://circulareconomy.earth/publications/how-japan-is-using-the-circular-economy-to-recycle-plastics" target="_blank" rel="noopener">→ Circular Economy Earth — 日本プラスチック分析</a>';const Q4_EXPLAINER_ZH = '日本报告的塑料回收率约为85%。这一数字在企业ESG报告和政府宣传中被广泛引用。然而，该数字包括"热回收"——焚烧塑料垃圾发电。按照衡量实际材料再加工的国际标准（欧盟所称的"材料回收"），日本的实际回收率仅为约24%。其余约61%被填埋、无能源回收焚烧或出口。日本人均塑料包装废物产生量仅次于美国。ESG数据的世界里：每一个数字都有脚注。<br><br><a href="https://circulareconomy.earth/publications/how-japan-is-using-the-circular-economy-to-recycle-plastics" target="_blank" rel="noopener">→ Circular Economy Earth — 日本塑料分析</a>';const Q5_EXPLAINER_EN = 'In 2024, MUFG, SMBC, and Mizuho collectively provided approximately USD\u00A0106 billion in fossil fuel financing, accounting for ~12% of the global total. This data comes from the \u201CBanking on Climate Chaos\u201D report (2025 edition), compiled by a coalition of NGOs. All three banks have publicly committed to achieving net-zero financed emissions by 2050 and are members of the Net-Zero Banking Alliance. They also topped the global fossil fuel financing league tables in 2024. This is not hypocrisy, strictly speaking \u2014 it is \u201Ctransition finance,\u201D and it comes with a detailed methodology document you are welcome to read.<br><br><a href="https://energyshiftsea.org/japan-banks-top-global-financiers-of-fossil-fuels-in-2024/" target="_blank" rel="noopener">→ Energy Shift SEA — Japan banks report</a>';
const Q5_EXPLAINER_JA = '2024\u5E74\u3001MUFG\u30FBSMBC\u30FB\u307F\u305A\u307B\u306E3\u884C\u306F\u5408\u8A08\u7D041060\u5104\u7C73\u30C9\u30EB\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u3092\u63D0\u4F9B\u3057\u3001\u4E16\u754C\u306E\u7D0412%\u3092\u5360\u3081\u307E\u3057\u305F\u3002\u3053\u306E\u30C7\u30FC\u30BF\u306FNGO\u9023\u5408\u306E\u300CBanking on Climate Chaos\u300D\u30EC\u30DD\u30FC\u30C8\uFF082025\u5E74\u7248\uFF09\u306B\u3088\u308A\u307E\u3059\u30023\u884C\u3068\u30822050\u5E74\u307E\u3067\u306B\u30CD\u30C3\u30C8\u30BC\u30ED\u3092\u516C\u7D04\u3057\u3066\u304A\u308A\u3001Net-Zero Banking Alliance\u306B\u53C2\u52A0\u3057\u3066\u3044\u307E\u3059\u3002\u540C\u6642\u306B\u30012024\u5E74\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u3067\u4E16\u754C\u30C8\u30C3\u30D7\u3067\u3057\u305F\u3002\u3053\u308C\u306F\u77DB\u76DB\u3067\u306F\u306A\u304F\u3001\u300C\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30FB\u30D5\u30A1\u30A4\u30CA\u30F3\u30B9\u300D\u3067\u3059\u3002<br><br><a href="https://energyshiftsea.org/japan-banks-top-global-financiers-of-fossil-fuels-in-2024/" target="_blank" rel="noopener">→ Energy Shift SEA — 日本の銀行レポート</a>';const Q5_EXPLAINER_ZH = '2024年，三菱日联、三井住友和瑞穗三家银行共提供约1060亿美元化石燃料融资，占全球总额约12%。数据来自NGO联盟编制的"银行助长气候混乱"报告（2025版）。三家银行均公开承诺2050年前实现投融资净零排放，并加入了净零银行联盟。同时，它们在2024年全球化石燃料融资排行榜上高居榜首。严格来说，这不是矛盾——这叫"转型金融"，并附有详细的方法论文件供您参考。<br><br><a href="https://energyshiftsea.org/japan-banks-top-global-financiers-of-fossil-fuels-in-2024/" target="_blank" rel="noopener">→ Energy Shift SEA — 日本银行报告</a>';const Q6_EXPLAINER_EN = 'Japan\u2019s Green Transformation (GX) strategy, adopted in February 2023, estimates a need for 150 trillion yen (~USD 1 trillion) in combined public and private investment over 10 years. This is approximately 3% of Japan\u2019s GDP annually, targeting 14\u201316 industrial sectors including hydrogen, offshore wind, ammonia co-firing, next-generation nuclear, and EV batteries. The funding mechanism is a world first: sovereign climate transition bonds (GX JGBs) issued by the government, which will be repaid through future carbon auction revenues (GX-ETS) and a fossil fuel levy starting in 2028. If the carbon price does not rise as projected, the levy will be adjusted. If emitters do not pay, the levy will be adjusted. If the mechanism fails\u2026 well, you know how sovereign debt works.<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ METI — GX Transition Bond Report</a>';
const Q6_EXPLAINER_JA = '\u65E5\u672C\u306EGX\u6226\u7565\u306F\u30012023\u5E742\u6708\u306B\u7B56\u5B9A\u3055\u308C\u300110\u5E74\u9593\u3067150\u5146\u5186\uFF08\u7D041\u5146\u7C73\u30C9\u30EB\uFF09\u306E\u5B98\u6C11\u6295\u8CC7\u304C\u5FC5\u8981\u3068\u898B\u8A08\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u65E5\u672CGDP\u306E\u7D043%\u306B\u76F8\u5F53\u3057\u3001\u6C34\u7D20\u30FB\u6D0B\u4E0A\u98A8\u529B\u30FB\u30A2\u30F3\u30E2\u30CB\u30A2\u6DF7\u71C3\u30FB\u6B21\u4E16\u4EE3\u539F\u5B50\u529B\u30FB\u96FB\u6C17\u81EA\u52D5\u8ECA\u7528\u96FB\u6C60\u306A\u306914\u301C16\u306E\u7523\u696D\u5206\u91CE\u3092\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u8CC7\u91D1\u8ABF\u9054\u6A5F\u69CB\u306F\u4E16\u754C\u521D\u3067\u3059\u3002\u56FD\u304C\u767A\u884C\u3059\u308B\u6C17\u5019\u79FB\u884C\u50B5\u3067\u3001\u5C06\u6765\u306EGX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u53CE\u5165\u30842028\u5E74\u304B\u3089\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1\u3067\u8FD4\u6E09\u3055\u308C\u307E\u3059\u3002<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ 経済産業省 — GX移行債レポート</a>';const Q6_EXPLAINER_ZH = '日本绿色转型（GX）战略于2023年2月通过，预计未来10年需要150万亿日元（约1万亿美元）的公共和私人投资。这约占日本GDP的每年3%，涉及14-16个工业领域，包括氢能、海上风电、氨混烧、下一代核电和电动汽车电池。其融资机制是全球首创：由政府发行主权气候转型债券（GX JGBs），通过未来的碳配额拍卖收入（GX-ETS）和2028年起征收的化石燃料附加费偿还。如果碳价未如期上涨——调整附加费。如果排放者拒绝缴纳——调整附加费。如果机制失灵...你知道主权债务是怎么回事。<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ 经济产业省 — GX转型债券报告</a>';const Q7_EXPLAINER_EN = 'In 2022\u20132023, Japan\u2019s Financial Services Agency (FSA) introduced some of the world\u2019s strictest anti-greenwashing rules for investment funds. Under the revised guidelines, a fund can only market itself as an \u201CESG Fund\u201D if ESG factors are a primary selection criterion with disclosed targets, reference benchmarks, and ongoing disclosure obligations. Negative screening alone (e.g., \u201Cwe do not invest in tobacco\u201D) is insufficient. The FSA also introduced the world\u2019s first Code of Conduct for ESG Evaluation and Data Providers in December 2022. The motivation: concern that a significant portion of the ~600 trillion yen classified as \u201Csustainable investments\u201D in Japan may not meet international standards.<br><br><a href="https://www.morganlewis.com/pubs/2024/07/esg-investments-the-asia-pacific-regulatory-perspective" target="_blank" rel="noopener">→ Morgan Lewis — ESG APAC Regulatory Perspective</a>';
const Q7_EXPLAINER_JA = '\u91D1\u878D\u5E81\u306F2022\u5E74\u304B\u30892023\u5E74\u306B\u304B\u3051\u3066\u3001\u6295\u8CC7\u4FE1\u8A17\u306B\u5BFE\u3059\u308B\u4E16\u754C\u6700\u53B3\u306E\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30F3\u30B0\u898F\u5236\u3092\u5C0E\u5165\u3057\u307E\u3057\u305F\u3002\u6539\u8A02\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u306E\u4E0B\u3067\u3001ESG\u3092\u201C\u4E3B\u8981\u306A\u6295\u8CCE\u5224\u65AD\u8981\u7D20\u201D\u3068\u3057\u3001\u76EE\u6A19\u3001\u53C2\u7167\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u3001\u7D99\u7D9A\u7684\u958B\u793A\u3092\u884C\u3046\u5834\u5408\u306E\u307F\u3001\u300CESG\u30D5\u30A1\u30F3\u30C9\u300D\u3092\u540D\u4E57\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30CD\u30AC\u30C6\u30A3\u30D6\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u306E\u307F\u3067\u306F\u4E0D\u5341\u5206\u3067\u3059\u3002\u307E\u305F\u3001ESG\u8A55\u4FA1\u6A5F\u95A2\u306B\u5BFE\u3059\u308B\u4E16\u754C\u521D\u306E\u884C\u52D5\u898F\u7BC4\u3082\u5C0E\u5165\u3057\u307E\u3057\u305F\u3002\u80CC\u666F\u306B\u306F\u3001\u65E5\u672C\u3067\u300C\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u6295\u8CC7\u300D\u3068\u5206\u985E\u3055\u308C\u308B\u7D04600\u5146\u5186\u306E\u3046\u3061\u3001\u8DB3\u308A\u306A\u3044\u3082\u306E\u304C\u5C11\u306A\u304F\u306A\u3044\u3068\u3044\u3046\u8AAE\u616E\u304C\u3042\u308A\u307E\u3059\u3002<br><br><a href="https://www.morganlewis.com/pubs/2024/07/esg-investments-the-asia-pacific-regulatory-perspective" target="_blank" rel="noopener">→ Morgan Lewis — ESG APAC規制の視点</a>';const Q7_EXPLAINER_ZH = '2022-2023年，日本金融厅（FSA）出台了全球最严格的基金反漂绿法规。根据修订后的指引，基金只有在ESG因素是主要筛选标准、且披露明确目标、参考基准和持续信息披露义务时，才能自称"ESG基金"。仅做负面筛选（如"我们不投资烟草"）是不够的。FSA还于2022年12月发布了全球首个ESG评估和数据提供商行为准则。背景：日本被归类为"可持续投资"的约600万亿日元中，相当一部分可能不符合国际标准。<br><br><a href="https://www.morganlewis.com/pubs/2024/07/esg-investments-the-asia-pacific-regulatory-perspective" target="_blank" rel="noopener">→ Morgan Lewis — ESG亚太监管视角</a>';const Q8_EXPLAINER_EN = 'In February 2024, Japan became the world\u2019s first sovereign issuer of climate transition bonds (GX JGBs), raising 20 trillion yen (~USD\u00A0140 billion). Unlike green bonds, which typically finance already-commercialised assets, over 50% of transition bond proceeds are allocated to R&D for future decarbonisation technologies (hydrogen, ammonia, carbon capture, next-gen solar). The repayment mechanism is a genuine closed-loop system: revenue from the GX-ETS carbon auction and a fossil fuel levy (introduced 2028) flows back into a dedicated account to service the bonds. This structure has never been tried at sovereign level. Whether it works depends on three variables: carbon prices rising, emitters paying, and politicians not raiding the account. The odds are not terrible, but they are not great either \u2014 which is, you will note, the story of most climate policy.<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ METI — GX Transition Bond Report</a>';const Q8_EXPLAINER_JA = '2024\u5E742\u6708\u3001\u65E5\u672C\u306F\u4E16\u754C\u521D\u306E\u30BD\u30D6\u30EA\u30F3\u6C17\u5019\u79FB\u884C\u50B5\uFF08GX JGBs\uFF09\u3092\u767A\u884C\u3057\u300120\u5146\u5186\u3092\u8ABF\u9054\u3057\u307E\u3057\u305F\u3002\u30B0\u30EA\u30FC\u30F3\u30DC\u30F3\u30C9\u3068\u7570\u306A\u308A\u3001\u5F53\u8A72\u4E8B\u696D\u306E\u7D5050% \u4EE5\u4E0A\u304C\u5C06\u6765\u306E\u8131\u70AD\u7D20\u6280\u8853\uFF08\u6C34\u7D20\u30FB\u30A2\u30F3\u30E2\u30CB\u30A2\u30FB\u70AD\u7D20\u56DE\u53CE\u30FB\u6B21\u4E16\u4EE3\u592A\u967D\u5149\uFF09\u306E\u7814\u7A76\u958B\u767A\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002\u8FD4\u6E09\u6A5F\u69CB\u306F\u672C\u7269\u306E\u30AF\u30ED\u30FC\u30BA\u30C9\u30EB\u30FC\u30D7\u3067\u3059\u3002GX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u306E\u53CE\u5165\u3068\u30012028\u5E74\u5C0E\u5165\u4E88\u5B9A\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1\u304C\u3001\u50B5\u52D9\u30B5\u30FC\u30D3\u30B9\u306E\u305F\u3081\u306E\u5C02\u7528\u4E88\u7B97\u306B\u6D41\u308C\u5165\u308A\u307E\u3059\u3002\u6210\u529F\u306B\u306F\u3001\u70AD\u7D20\u4FA1\u683C\u304C\u4E0A\u6607\u3057\u3001\u6392\u51FA\u8005\u304C\u652F\u6255\u3044\u3001\u653F\u6CBB\u5BB6\u304C\u4E88\u7B97\u3092\u6D41\u7528\u3057\u306A\u3044\u3053\u3068\u304C\u5FC5\u8981\u3067\u3059\u3002<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ 経済産業省 — GX移行債レポート</a>';const Q8_EXPLAINER_ZH = '2024年2月，日本成为全球首个发行主权气候转型债券（GX JGBs）的国家，筹集20万亿日元（约1400亿美元）。与通常为已商业化资产融资的绿色债券不同，转型债券超50%的募集资金用于未来脱碳技术的研发（氢能、氨、碳捕集、下一代太阳能）。还款机制是真正的闭环系统：GX-ETS碳配额拍卖收入和2028年引入的化石燃料附加费流入专用账户用于偿债。这一结构从未在主权层面尝试过。能否奏效取决于三个变量：碳价上涨、排放者付费、政客不挪用账户。<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ 经济产业省 — GX转型债券报告</a>';
const Q9_EXPLAINER_EN = "Singapore's carbon tax was introduced in 2019 at S$5/t, the first in Southeast Asia. It rose to S$25/t in 2024 and heads to S$45/t in 2026–2027, with an ultimate target of S$50–80/t by 2030. The tax covers ~30–40 industrial facilities emitting ≥25,000 tCO₂e/year. Revenue funds decarbonisation—one of the few taxes where the government tells you where the money goes.<br><br><a href=\"https://cwrrr.org/opinions/singapore-hikes-carbon-price-announces-2050-net-zero-target\" target=\"_blank\" rel=\"noopener\">→ CWRR — Singapore carbon tax analysis</a>";
const Q9_EXPLAINER_JA = "シンガポールは2019年、東南アジア初の炭素税をS$5/tで導入。2024年にS$25/tへ、2026〜2027年にS$45/tへ引き上げられ、2030年までにS$50〜80/tを目標としています。課税対象は年間25,000 tCO₂e以上を直接排出する約30〜40施設に限定され、税収は脱炭素化プロジェクトに充てられます。<br><br><a href=\"https://cwrrr.org/opinions/singapore-hikes-carbon-price-announces-2050-net-zero-target\" target=\"_blank\" rel=\"noopener\">→ CWRR — シンガポール炭素税分析</a>";
const Q9_EXPLAINER_ZH = "新加坡于2019年推出碳税，初始税率为每吨S$5，是东南亚首个碳税。2024年上调至S$25/吨，2026–2027年升至S$45/吨，2030年最终目标区间为S$50–80/吨。该税仅适用于年直接排放≥25,000 tCO₂e的约30–40家工业设施。税收用于资助脱碳与绿色转型项目。<br><br><a href=\"https://cwrrr.org/opinions/singapore-hikes-carbon-price-announces-2050-net-zero-target\" target=\"_blank\" rel=\"noopener\">→ CWRR — 新加坡碳税分析</a>";

const Q10_EXPLAINER_EN = "From FY2025, all SGX-listed issuers must report Scope 1 & 2 emissions per ISSB standards adopted by Singapore. From FY2026, large companies (revenue ≥S$1B, assets ≥S$500M) must also report Scope 3. Singapore is among the first Asian jurisdictions to mandate ISSB-aligned climate disclosures across its entire listed market.<br><br><a href=\"https://www.persefoni.com/blog/issb-reporting-singapore\" target=\"_blank\" rel=\"noopener\">→ Persefoni — ISSB reporting in Singapore</a>";
const Q10_EXPLAINER_JA = "2025年度より全SGX上場企業は、シンガポールが採用したISSB基準に従い、スコープ1（直接排出）とスコープ2（購入電力由来の間接排出）の報告が義務付けられます。2026年度からは、売上高10億Sドル以上かつ総資産5億Sドル以上の大規模非上場企業も対象となり、スコープ3（バリューチェーン排出量）の報告も義務化されます。<br><br><a href=\"https://www.persefoni.com/blog/issb-reporting-singapore\" target=\"_blank\" rel=\"noopener\">→ Persefoni — シンガポールISSB報告</a>";
const Q10_EXPLAINER_ZH = "自2025财年起，所有SGX上市发行人须按新加坡采纳的ISSB准则报告范围一（直接排放）和范围二（外购能源排放）。2026财年起，营收≥10亿新元且资产≥5亿新元的大型公司亦须报告范围三（价值链）排放。新加坡是亚洲首批将ISSB气候披露强制适用于全上市市场的司法管辖区之一。<br><br><a href=\"https://www.persefoni.com/blog/issb-reporting-singapore\" target=\"_blank\" rel=\"noopener\">→ Persefoni — 新加坡ISSB报告</a>";

const Q11_EXPLAINER_EN = "Hong Kong's Climate Action Plan 2050 targets carbon neutrality before 2050, with an interim goal of a 50% reduction in carbon emissions by 2035 versus 2005 levels. Four pillars: net-zero electricity generation, green buildings, green transport, and waste reduction.<br><br><a href=\"https://cnsd.gov.hk/en/climate-ready/climate-targets-of-hk\" target=\"_blank\" rel=\"noopener\">→ CNSD — Hong Kong climate targets</a>";
const Q11_EXPLAINER_JA = "香港の「気候行動計画2050」は2050年までのカーボンニュートラル達成を目標とし、2035年までに2005年比で炭素排出量を50%削減する中間目標を設定しています。戦略の柱：ネットゼロ発電、グリーンビル、グリーン輸送、廃棄物削減。<br><br><a href=\"https://cnsd.gov.hk/en/climate-ready/climate-targets-of-hk\" target=\"_blank\" rel=\"noopener\">→ CNSD — 香港気候目標</a>";
const Q11_EXPLAINER_ZH = "香港《气候行动计划2050》提出在2050年前实现碳中和，并设定2035年前将碳排放较2005年水平减少50%的中期目标。战略围绕四大支柱：净零发电、绿色建筑、绿色运输及废物减量。<br><br><a href=\"https://cnsd.gov.hk/en/climate-ready/climate-targets-of-hk\" target=\"_blank\" rel=\"noopener\">→ CNSD — 香港气候目标</a>";

const Q12_EXPLAINER_EN = "The Green and Sustainable Finance Cross-Agency Steering Group was established in 2020. Co-chaired by HKMA and SFC, it coordinates five financial regulators. 2025 priorities: an ISSB-aligned sustainability disclosure roadmap and expanding the Hong Kong Taxonomy for Sustainable Finance to include transition finance elements.<br><br><a href=\"https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/02/20250206-3\" target=\"_blank\" rel=\"noopener\">→ HKMA — Steering Group priorities 2025</a>";
const Q12_EXPLAINER_JA = "グリーン＆サステナブルファイナンス・クロスエージェンシー運営グループは2020年に設立。HKMAとSFCが共同議長を務め、5つの金融規制機関を統括。2025年の優先課題：ISSB準拠のサステナビリティ開示ロードマップの策定と、香港サステナブルファイナンス分類法へのトランジション要素の追加。<br><br><a href=\"https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/02/20250206-3\" target=\"_blank\" rel=\"noopener\">→ HKMA — 運営グループ優先課題2025</a>";
const Q12_EXPLAINER_ZH = "「绿色与可持续金融跨机构督导小组」于2020年成立，由金管局与证监会共同主持，协调五个金融监管机构。2025年优先工作：推进ISSB一致的可持续发展披露路线图，以及为《香港可持续金融分类目录》增添转型要素。<br><br><a href=\"https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/02/20250206-3\" target=\"_blank\" rel=\"noopener\">→ HKMA — 督导小组2025年优先事项</a>";

export const QUESTIONS: Question[] = [
  {
    id: 1, locale: 'all', correct: 'A',
    en: { title: 'World Environment Day (June&nbsp;5) exists because one country proposed it to the UN in 1972. Which country?', options: { A: 'Japan', B: 'Sweden \u2014 they hosted the conference, so they called dibs', C: 'Brazil \u2014 "we have the Amazon, obviously it was us"', D: "A coalition of nations who definitely weren't Japan" }, joke: 'Japan proposed it. Sweden hosted the conference. The UN said yes. And now your desk has a recycling bin under it. Circle of life.', explainer: Q1_EXPLAINER_EN },
    ja: { title: '\u4E16\u754C\u74B0\u5883\u30C7\u30FC\uFF086\u67085\u65E5\uFF09\u306F\u30011972\u5E74\u306B\u3042\u308B\u56FD\u304C\u56FD\u9023\u306B\u63D0\u6848\u3057\u305F\u3053\u3068\u3067\u8A95\u751F\u3057\u307E\u3057\u305F\u3002\u305D\u306E\u56FD\u306F\u3069\u3053\uFF1F', options: { A: '\u65E5\u672C', B: '\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3 \u2014 \u300C\u4F1A\u8B70\u3092\u4E3B\u50AC\u3057\u305F\u306E\u306F\u30A6\u30C1\u306A\u3093\u3067\u300D\u3068\u4E3B\u5F35', C: '\u30D6\u30E9\u30B8\u30EB \u2014 \u300C\u30A2\u30DE\u30BE\u30F3\u3042\u308B\u3057\u3001\u5F53\u7136\u30A6\u30C1\u3063\u3057\u3087\u300D', D: '\u300C\u65E5\u672C\u3067\u306F\u306A\u3044\u300D\u3068\u660E\u78BA\u306B\u4E3B\u5F35\u3059\u308B\u8B0E\u306E\u56FD\u5BB6\u9023\u5408' }, joke: '\u65E5\u672C\u304C\u63D0\u6848\u3057\u3001\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u304C\u4F1A\u8B70\u3092\u4E3B\u50AC\u3057\u3001\u56FD\u9023\u304C\u627F\u8A8D\u3002\u3053\u3046\u3057\u3066\u4ECA\u3001\u3042\u306A\u305F\u306E\u30C7\u30B9\u30AF\u306E\u4E0B\u306B\u306F\u5206\u5225\u7528\u306E\u30B4\u30DF\u7BB1\u304C\u3042\u308B\u3002\u4EBA\u751F\u306E\u8F2A\u3002', explainer: Q1_EXPLAINER_JA },
  },

  {
    id: 2, locale: ['tk'], correct: 'A',
    en: { title: "Japan's <em>Cool Biz</em> campaign mandated office air conditioners be set to what temperature?", options: { A: '28\u00B0C (82.4\u00B0F)', B: '"Whatever Facilities decides, and they are not budging"', C: '24\u00B0C, with a passive-aggressive email from HR if you touch it', D: 'The exact temperature at which your managing director removes his tie, whichever comes first' }, joke: 'Launched in 2005. Suits were banned. Short sleeves encouraged. Energy consumption dropped. Meanwhile, your office thermostat argument enters its 17th consecutive quarter.', explainer: Q2_EXPLAINER_EN },
    ja: { title: '\u65E5\u672C\u306E\u300C\u30AF\u30FC\u30EB\u30D3\u30BA\u300D\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3067\u7FA9\u52D9\u4ED8\u3051\u3089\u308C\u305F\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u6E29\u5EA6\u306F\uFF1F', options: { A: '28\u00B0C', B: '\u300C\u7DCF\u52D9\u90E8\u304C\u6C7A\u3081\u305F\u6E29\u5EA6\u3002\u8AB0\u3082\u9006\u3089\u3048\u306A\u3044\u300D', C: '24\u00B0C \u2014 \u305F\u3060\u3057\u89E6\u308B\u3068\u4EBA\u4E8B\u90E8\u304B\u3089\u300C\u304A\u6C17\u6301\u3061\u30E1\u30FC\u30EB\u300D\u304C\u98DB\u3093\u3067\u304F\u308B', D: 'MD\u304C\u30CD\u30AF\u30BF\u30A4\u3092\u5916\u3057\u305F\u77AC\u9593\u306E\u5BA4\u6E29\u3002\u305D\u308C\u304C\u4F55\u5EA6\u3067\u3042\u308D\u3046\u3068\u3001\u305D\u306E\u6642\u304C\u30AF\u30FC\u30EB\u30D3\u30BA\u958B\u59CB\u3067\u3042\u308B' }, joke: '2005\u5E74\u958B\u59CB\u3002\u30B9\u30FC\u30C4\u7981\u6B62\u3002\u534A\u8896\u63A8\u5968\u3002\u30A8\u30CD\u30EB\u30AE\u30FC\u6D88\u8CBB\u306F\u6E1B\u5C11\u3002\u4E00\u65B9\u3001\u3042\u306A\u305F\u306E\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8AD6\u4E89\u306F17\u56DB\u534A\u671F\u76EE\u306B\u7A81\u5165\u3002', explainer: Q2_EXPLAINER_JA },
  },

  {
    id: 3, locale: 'all', correct: 'A',
    en: { title: 'The Japanese concept <em>Mottainai</em> ("what a waste!") adds a fourth "R" to the classic Reduce, Reuse, Recycle. What is it?', options: { A: 'Respect', B: 'Regret \u2014 the emotion you feel when Compliance rejects your expense report', C: "Returns \u2014 as in, \"our ESG fund's quarterly\"", D: 'Restructuring \u2014 applicable to anything, anywhere, forever' }, joke: 'Nobel laureate Wangari Maathai popularised it. The fourth R is Respect \u2014 for the Earth\u2019s resources. Not to be confused with the quarterly town hall where leadership thanks you for record profits while announcing a hiring freeze.', explainer: Q3_EXPLAINER_EN },
    ja: { title: '\u65E5\u672C\u306E\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u300D\u306E\u7CBE\u795E\u304C3R\uFF08Reduce, Reuse, Recycle\uFF09\u306B\u8FFD\u52A0\u3057\u305F4\u3064\u76EE\u306E\u300CR\u300D\u3068\u306F\uFF1F', options: { A: 'Respect\uFF08\u656C\u610F\uFF09', B: 'Regret\uFF08\u5F8C\u6094\uFF09 \u2014 \u7D4C\u8CBB\u7CBE\u7B97\u304C\u30B3\u30F3\u30D7\u30E9\u306B\u5DEE\u3057\u623B\u3055\u308C\u305F\u6642\u306E\u611F\u60C5', C: 'Returns\uFF08\u30EA\u30BF\u30FC\u30F3\uFF09 \u2014 \u300C\u4ECA\u56DB\u534A\u671F\u306EESG\u30D5\u30A1\u30F3\u30C9\u306E\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u5BFE\u6BD4\u2026\u300D', D: 'Restructuring\uFF08\u30EA\u30B9\u30C8\u30E9\uFF09 \u2014 \u3044\u3064\u3067\u3082\u3001\u3069\u3053\u3067\u3082\u3001\u4F55\u306B\u3067\u3082\u9069\u7528\u53EF\u80FD' }, joke: '\u30CE\u30FC\u30D9\u30EB\u5E73\u548C\u8CCE\u53D7\u8CDE\u8005\u306E\u30EF\u30F3\u30AC\u30EA\u30FB\u30DE\u30FC\u30BF\u30A4\u6C0F\u304C\u4E16\u754C\u7684\u306B\u5E83\u3081\u305F\u6982\u5FF5\u3067\u3059\u30024\u3064\u76EE\u306ER\u306FRespect\uFF08\u5C0A\u656C\uFF09\u2014\u5730\u7403\u306E\u8CC7\u6E90\u3078\u306E\u656C\u610F\u3002\u306A\u304A\u3001\u904E\u53BB\u6700\u9AD8\u76CA\u3092\u767A\u8868\u3057\u3064\u3064\u63A1\u7528\u51CD\u7D50\u3092\u544A\u3052\u308B\u56DB\u534A\u671F\u30BF\u30A6\u30F3\u30DB\u30FC\u30EB\u3068\u306F\u7121\u95A2\u4FC2\u3067\u3059\u3002', explainer: Q3_EXPLAINER_JA },

  },
  {
    id: 4, locale: 'all', correct: 'A',
    en: { title: 'Japan reports a plastic recycling rate of about 85%. Under international standards for <em>actual material</em> recycling, the real figure is approximately:', options: { A: '~24%', B: '~62% \u2014 and the missing 23% was reclassified as "strategic thermal redeployment"', C: '~85%, because Japan defined recycling to include burning things for electricity', D: 'A rate that varies depending on how you define <em>recycling</em>, <em>plastic</em>, and <em>Japan</em>' }, joke: 'The 85% figure includes "thermal recycling" \u2014 i.e., burning plastic for energy. The EU calls this "energy recovery." Welcome to ESG data: where every percentage has a footnote, and that footnote has a sub-footnote.', explainer: Q4_EXPLAINER_EN },
    ja: { title: '\u65E5\u672C\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u300C\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u300D\u306F\u7D0485%\u3068\u5831\u544A\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u56FD\u969B\u6A19\u6E96\u3067\u306E <em>\u5B9F\u969B\u306E\u6750\u6599\u30EA\u30B5\u30A4\u30AF\u30EB\u7387</em> \u306F\u7D04\u4F55%\uFF1F', options: { A: '\u7D0424%', B: '\u7D0462% \u2014 \u6D88\u3048\u305F23%\u306F\u300C\u6226\u7565\u7684\u30B5\u30FC\u30DE\u30EB\u518D\u914D\u7F6E\u300D\u306B\u533A\u5206\u5909\u66F4\u3055\u308C\u307E\u3057\u305F', C: '\u7D0485% \u2014 \u65E5\u672C\u306F\u300C\u71C3\u3084\u3057\u3066\u767A\u96FB\u300D\u3082\u30EA\u30B5\u30A4\u30AF\u30EB\u3068\u5B9A\u7FA9\u3057\u305F\u306E\u3067\u3001\u5B9A\u7FA9\u4E0A\u306F\u6B63\u3057\u3044', D: '\u300C\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\u300C\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u300D\u300C\u65E5\u672C\u300D\u306E\u5B9A\u7FA9\u6B21\u7B2C\u3067\u5909\u52D5\u3059\u308B\u9B54\u6CD5\u306E\u6570\u5B57' }, joke: '85%\u306B\u306F\u300C\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\uFF08\uff1d\u71C3\u3084\u3057\u3066\u767A\u96FB\uFF09\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002EU\u3067\u306F\u3053\u308C\u3092\u300C\u30A8\u30CD\u30EB\u30AE\u30FC\u56DE\u53CE\u300D\u3068\u547C\u3073\u3001\u30EA\u30B5\u30A4\u30AF\u30EB\u3068\u306F\u8A8D\u3081\u3066\u3044\u307E\u305B\u3093\u3002ESG\u30C7\u30FC\u30BF\u306E\u4E16\u754C\u3078\u3088\u3046\u3053\u305D\uFF1A\u3059\u3079\u3066\u306E\u6570\u5B57\u306B\u306F\u811A\u6CE8\u304C\u3042\u308A\u3001\u305D\u306E\u811A\u6CE8\u306B\u3082\u811A\u6CE8\u304C\u3042\u308A\u307E\u3059\u3002', explainer: Q4_EXPLAINER_JA },

  },
  {
    id: 5, locale: 'all', correct: 'A',
    en: { title: "In 2024, Japan's three megabanks (MUFG, SMBC, Mizuho) accounted for what share of <em>global</em> fossil fuel financing?", options: { A: '~12% (USD 106 billion)', B: '"A figure not disclosed, but rest assured our net-zero commitments remain on track"', C: '~3%, because they also financed some solar panels, which mathematically cancels out the LNG terminals', D: "Enough to make your ESG team's quarterly slide deck physically vibrate with tension" }, joke: 'All three have publicly committed to net-zero by 2050. They also topped global fossil fuel financing league tables in 2024. This is not a contradiction \u2014 this is <em>transition finance</em>, and it comes with a detailed methodology document you are welcome to read.', explainer: Q5_EXPLAINER_EN },
    ja: { title: '2024\u5E74\u3001\u65E5\u672C\u306E3\u30E1\u30AC\u30D0\u30F3\u30AF\uFF08MUFG\u3001SMBC\u3001\u307F\u305A\u307B\uFF09\u304C\u5360\u3081\u305F\u4E16\u754C\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u30B7\u30A7\u30A2\u306F\uFF1F', options: { A: '\u7D0412%\uFF081,060\u5104\u7C73\u30C9\u30EB\uFF09', B: '\u300C\u516C\u8868\u3067\u304D\u306A\u3044\u6570\u5B57\u3067\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30BC\u30ED\u76EE\u6A19\u306F\u9806\u8ABF\u3067\u3059\u306E\u3067\u3054\u5B89\u5FC3\u3092\u300D', C: '\u7D043% \u2014 \u30BD\u30FC\u30E9\u30FC\u30D1\u30CD\u30EB\u306B\u3082\u71D5\u8CC7\u3057\u3066\u3044\u308B\u306E\u3067\u3001LNG\u30BF\u30FC\u30DF\u30CA\u30EB\u5206\u3068\u6570\u5B66\u7684\u306B\u76F8\u6E88\u3055\u308C\u307E\u3059', D: 'ESG\u30C1\u30FC\u30E0\u306E\u56DB\u534A\u671F\u30B9\u30E9\u30A4\u30C9\u8CC7\u6599\u304C\u9707\u3048\u51FA\u3059\u30EC\u30D9\u30EB' }, joke: '3\u884C\u3068\u30822050\u5E74\u30CD\u30C3\u30C8\u30BC\u30ED\u3092\u516C\u7D04\u3057\u3066\u3044\u307E\u3059\u3002\u540C\u6642\u306B\u30012024\u5E74\u306E\u5316\u77F3\u71C3\u6599\u71D5\u8CC7\u984D\u3067\u3082\u4E16\u754C\u30C8\u30C3\u30D7\u3067\u3057\u305F\u3002\u3053\u308C\u306F\u77DB\u76DB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u2014\u2014\u3053\u308C\u306F\u300C\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30FB\u30D5\u30A1\u30A4\u30CA\u30F3\u30B9\u300D\u3067\u3059\u3002\u8A73\u7D30\u306A\u65B9\u6CD5\u8AD6\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3082\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\u306E\u3067\u3001\u305C\u3072\u3054\u4E00\u8AAD\u304F\u3060\u3055\u3044\u3002', explainer: Q5_EXPLAINER_JA },

  },
  {
    id: 6, locale: ['tk'], correct: 'A',
    en: { title: "Japan's Green Transformation (GX) strategy estimates how much combined public-private investment over the next 10 years?", options: { A: '150 trillion yen (~USD 1 trillion)', B: '"More than last year\'s budget but less than the GDP of a medium-sized planet"', C: '50 trillion yen, plus whatever is left in the slush fund marked "miscellaneous industrial policy"', D: 'The exact amount that sounds plausible in a pitch book but impossible in a board meeting' }, joke: 'That is about 3% of GDP annually, targeting 14\u201316 industrial sectors including hydrogen, offshore wind, and next-generation nuclear. Somewhere in Tokyo, a PM is building a deck titled "Massive Addressable Market."', explainer: Q6_EXPLAINER_EN },
    ja: { title: '\u65E5\u672C\u306E\u300CGX\uFF08\u30B0\u30EA\u30FC\u30F3\u30C8\u30E9\u30F3\u30B9\u30D5\u30A9\u30FC\u30E1\u30FC\u30B7\u30E7\u30F3\uFF09\u300D\u6226\u7565\u304C\u8A66\u7B97\u3059\u308B\u3001\u4ECA\u5F8C10\u5E74\u9593\u306B\u5FC5\u8981\u306A\u5B98\u6C11\u6295\u8CC7\u7DCF\u984D\u306F\uFF1F', options: { A: '150\u5146\u5186\uFF08\u7D041\u5146\u7C73\u30C9\u30EB\uFF09', B: '\u300C\u6628\u5E74\u306E\u4E88\u7B97\u3088\u308A\u591A\u3044\u304C\u3001\u4E2D\u898F\u6A21\u60D1\u661F\u306EGDP\u3088\u308A\u306F\u5C11\u306A\u3044\u300D', C: '50\u5146\u5186\uFF0B\u300C\u305D\u306E\u4ED6\u7523\u696D\u653F\u7B56\u300D\u3068\u66F8\u304B\u308C\u305F\u4E88\u5099\u8CBB\u306E\u6B8B\u984D', D: '\u30D4\u30C3\u30C1\u30D6\u30C3\u30AF\u3067\u306F\u8AAC\u5F97\u529B\u304C\u3042\u308B\u304C\u3001\u53D6\u7DE1\u5F79\u4F1A\u3067\u306F\u901A\u3089\u306A\u3044\u7D76\u5999\u306A\u91D1\u984D' }, joke: '\u5E74\u9593GDP\u306E\u7D043%\u3092\u3001\u6C34\u7D20\u30FB\u6D0B\u4E0A\u98A8\u529B\u30FB\u6B21\u4E16\u4EE3\u539F\u5B50\u529B\u306A\u306914\u301C16\u306E\u7523\u696D\u5206\u91CE\u306B\u6295\u3058\u308B\u8A08\u753B\u3067\u3059\u3002\u6771\u4EAC\u306E\u3069\u3053\u304B\u3067\u3001\u67D0PM\u304C\u300C\u5DE8\u5927\u306A\u30A2\u30C9\u30EC\u30C3\u30B5\u30D6\u30EB\u30DE\u30FC\u30B1\u30C3\u30C8\u300D\u3068\u984C\u3057\u305F\u30C7\u30C3\u30AF\u3092\u7DE8\u96C6\u4E2D\u3002', explainer: Q6_EXPLAINER_JA },

  },
  {
    id: 7, locale: 'all', correct: 'A',
    en: { title: 'Under Japan\'s FSA rules, can a fund market itself as an "ESG Fund" if its <em>only</em> strategy is negative screening (e.g., "we do not invest in tobacco")?', options: { A: 'No \u2014 ESG must be a primary selection factor with disclosed targets', B: 'Yes, provided the fund name also includes "sustainable," "green," or "future" \u2014 ideally all three', C: 'Yes, because negative screening qualifies under the 2018 guidance, 2021 addendum, and the rule that nobody reads prospectuses', D: 'No, unless the deck uses a green colour palette and a wind turbine photo, in which case the FSA may grant an aesthetic waiver' }, joke: 'The FSA tightened rules to combat greenwashing. Simply excluding tobacco and weapons manufacturers no longer cuts it. You need stated targets, reference benchmarks, and ongoing disclosure. If this makes you uneasy, perhaps review your fund\'s prospectus.', explainer: Q7_EXPLAINER_EN },
    ja: { title: '\u91D1\u878D\u5E81\u306E\u898F\u5247\u3067\u306F\u3001\u30CD\u30AC\u30C6\u30A3\u30D6\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF08\u300C\u30BF\u30D0\u30B3\u306B\u306F\u6295\u8CC7\u3057\u307E\u305B\u3093\u300D\u306A\u3069\uFF09\u3060\u3051\u3092ESG\u6226\u7565\u3068\u3059\u308B\u30D5\u30A1\u30F3\u30C9\u3092\u300CESG\u30D5\u30A1\u30F3\u30C9\u300D\u3068\u540D\u4E57\u308C\u307E\u3059\u304B\uFF1F', options: { A: '\u3044\u3044\u3048 \u2014 ESG\u304C\u4E3B\u8981\u306A\u6295\u8CCE\u5224\u65AD\u8981\u7D20\u3067\u3042\u308A\u3001\u5177\u4F53\u7684\u306A\u76EE\u6A19\u958B\u793A\u304C\u5FC5\u8981', B: '\u306F\u3044 \u2014 \u30D5\u30A1\u30F3\u30C9\u540D\u306B\u300C\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u300D\u300C\u30B0\u30EA\u30FC\u30F3\u300D\u300C\u672A\u6765\u300D\u3092\u542B\u3081\u308C\u3070OK\uFF08\u7406\u60F3\u7684\u306B\u306F3\u3064\u5168\u90E8\uFF09', C: '\u306F\u3044 \u2014 2018\u5E74\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u30012021\u5E74\u8FFD\u52A0\u3001\u305D\u3057\u3066\u300C\u8AB0\u3082\u76EE\u8AD6\u898B\u66F8\u3092\u8AAD\u307E\u306A\u3044\u300D\u3068\u3044\u3046\u4E0D\u6587\u5F8B\u306B\u3088\u308A\u9ED8\u8A8D', D: '\u3044\u3044\u3048 \u2014 \u305F\u3060\u3057\u30B9\u30E9\u30A4\u30C9\u306E\u914D\u8272\u304C\u7DD1\u7CFB\u3067\u98A8\u529B\u767A\u96FB\u306E\u5199\u771F\u304C\u5165\u3063\u3066\u3044\u308C\u3070\u3001\u91D1\u878D\u5E81\u306E\u300C\u7F8E\u7684\u88C1\u91CF\u300D\u306B\u3088\u308A\u7279\u4F8B\u627F\u8A8D\u3055\u308C\u308B\u5834\u5408\u3042\u308A' }, joke: '\u91D1\u878D\u5E81\u306F\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30F3\u30B0\u5BFE\u7B56\u3068\u3057\u3066\u898F\u5247\u3092\u53B3\u683C\u5316\u3057\u307E\u3057\u305F\u3002\u30BF\u30D0\u30B3\u3084\u6B66\u5668\u306E\u9664\u5916\u3060\u3051\u3067\u306FESG\u30D5\u30A1\u30F3\u30C9\u3092\u540D\u4E57\u308C\u307E\u305B\u3093\u3002\u5177\u4F53\u7684\u306A\u76EE\u6A19\u3001\u53C2\u7167\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u3001\u7D99\u7D9A\u7684\u306A\u958B\u793A\u304C\u5FC5\u8981\u3067\u3059\u3002\u4E0D\u5B89\u306B\u306A\u3063\u305F\u65B9\u306F\u3001\u5FA1\u793E\u306E\u76EE\u8AD6\u898B\u66F8\u3092\u518D\u78BA\u8A8D\u3055\u308C\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002', explainer: Q7_EXPLAINER_JA },

  },
  {
    id: 8, locale: 'all', correct: 'A',
    en: { title: "Japan became the world's first sovereign issuer of climate transition bonds, in February 2024. How will the \u00A520 trillion debt be repaid?", options: { A: 'Revenue from future GX-ETS carbon auctions and the 2028 fossil fuel levy', B: '"Growth will pay for it" \u2014 a sentence that has never backfired in the history of sovereign debt', C: 'By issuing additional transition bonds to repay the original ones, in a beautiful ouroboros of sustainable finance', D: "The bonds mature in 2050 alongside the net-zero target, at which point the problem becomes someone else's bonus calculation" }, joke: 'A genuine closed-loop mechanism: tax carbon emitters, use the proceeds to repay the bonds that funded decarbonisation. Whether this works depends on carbon prices actually rising, emitters actually paying, and politicians letting the mechanism run.', explainer: Q8_EXPLAINER_EN },
    ja: { title: '\u65E5\u672C\u306F2024\u5E742\u6708\u3001\u4E16\u754C\u521D\u306E\u30BD\u30D6\u30EA\u30F3\u6C17\u5019\u79FB\u884C\u50B5\u3092\u767A\u884C\u3057\u307E\u3057\u305F\u300220\u5146\u5186\u306E\u50B5\u52D9\u306F\u3069\u3046\u8FD4\u6E09\u3055\u308C\u307E\u3059\u304B\uFF1F', options: { A: '\u5C06\u6765\u306EGX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u53CE\u5165\u30682028\u5E74\u5C0E\u5165\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1', B: '\u300C\u6210\u9577\u304C\u8FD4\u6E09\u3059\u308B\u300D\u2014 \u30BD\u30D6\u30EA\u30F3\u50B5\u52D9\u306E\u6B74\u53F2\u306B\u304A\u3044\u3066\u4E00\u5EA6\u3082\u88CF\u5207\u3089\u308C\u305F\u3053\u3068\u306E\u306A\u3044\u9B54\u6CD5\u306E\u8A00\u8449', C: '\u8FFD\u52A0\u306E\u79FB\u884C\u50B5\u3092\u767A\u884C\u3057\u3066\u65E2\u5B58\u50B5\u3092\u8FD4\u6E09\u3002\u6301\u7D9A\u53EF\u80FD\u306A\u91D1\u878D\u306E\u7F8E\u3057\u304D\u30A6\u30ED\u30DC\u30ED\u30B9', D: '2050\u5E74\u306E\u30CD\u30C3\u30C8\u30BC\u30ED\u76EE\u6A19\u3068\u540C\u6642\u306B\u6E80\u671F\u3092\u8FCE\u3048\u3001\u305D\u306E\u6642\u70B9\u3067\u554F\u984C\u306F\u4ED6\u4EBA\u306E\u30DC\u30FC\u30CA\u30B9\u8A08\u7B97\u306B\u5F15\u304D\u7D99\u304C\u308C\u308B' }, joke: '\u70AD\u7D20\u6392\u51FA\u8005\u306B\u8AB2\u7A0E\u3057\u3001\u305D\u306E\u53CE\u5165\u3067\u8131\u70AD\u7D20\u5316\u6295\u8CC7\u306E\u305F\u3081\u306E\u56FD\u50B5\u3092\u511F\u5374\u3059\u308B\u2014\u2014\u672C\u7269\u306E\u30AF\u30ED\u30FC\u30BA\u30C9\u30EB\u30FC\u30D7\u30FB\u30E1\u30AB\u30CB\u30BA\u30E0\u3067\u3059\u3002\u3053\u308C\u304C\u6A5F\u80FD\u3059\u308B\u304B\u306F\u3001\u70AD\u7D20\u4FA1\u683C\u304C\u5B9F\u969B\u306B\u4E0A\u304C\u308B\u304B\u3001\u6392\u51FA\u8005\u304C\u672C\u5F53\u306B\u652F\u6255\u3046\u304B\u3001\u653F\u6CBB\u5BB6\u304C\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u653E\u7F6E\u3059\u308B\u304B\u306B\u304B\u3063\u3066\u3044\u307E\u3059\u3002', explainer: Q8_EXPLAINER_JA },

  },
];

export const OPTION_KEYS: string[] = ['A', 'B', 'C', 'D'];

export const LOC_NAMES: Record<LocCode, string[]> = {
  tk: ['office_tk_name', 'office_tk_city'],
};

export function filterQuestions(all: Question[], loc: LocCode): Question[] {
  return all.filter(q => q.locale === 'all' || (Array.isArray(q.locale) && q.locale.includes(loc)));
}

export function shuffleQuestionOptions(q: Question): Question {
  const keys: OptionKey[] = ['A', 'B', 'C', 'D'];
  const shuffled = [...keys] as OptionKey[];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const rebuildOptions = (opts: Record<string, string>) => {
    const r: Record<string, string> = {};
    for (let i = 0; i < 4; i++) r[keys[i]] = opts[shuffled[i]];
    return r;
  };
  return {
    ...q,
    correct: keys[shuffled.indexOf(q.correct as OptionKey)] ?? q.correct,
    en: { ...q.en, options: rebuildOptions(q.en.options) as { A: string; B: string; C: string; D: string } },
    ja: { ...q.ja, options: rebuildOptions(q.ja.options) as { A: string; B: string; C: string; D: string } },

  };
}

export function loadStored(): { location: LocCode; answers: Answer[]; score: number; timestamp: string; lang: Lang } | null {
  try { const raw = localStorage.getItem('wed2026_quiz'); return raw ? JSON.parse(raw) : null; }
  catch { return null; }
}

export function saveResult(location: LocCode, answers: Answer[], score: number, lang: Lang): void {
  localStorage.setItem('wed2026_quiz', JSON.stringify({ location, answers, score, timestamp: new Date().toISOString(), lang }));
}

export function formatDate(iso: string, lang?: Lang): string {
  const d = new Date(iso);
  const day = d.getDate(), year = d.getFullYear();
  const locale = lang === 'ja' ? 'ja-JP' : 'en-GB';
  const month = d.toLocaleString(locale, { month: 'long' });
  const isEn = !lang || lang === 'en';
  const s = isEn ? ([1,21,31].includes(day) ? 'st' : [2,22].includes(day) ? 'nd' : [3,23].includes(day) ? 'rd' : 'th') : '';
  return isEn ? `${day}${s} ${month} ${year}` : `${month} ${day}, ${year}`;
}

function generateUuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export function getUid(): string {
  let uid = localStorage.getItem('wed2026_uid');
  if (!uid) { uid = generateUuid(); localStorage.setItem('wed2026_uid', uid); }
  return uid;
}
