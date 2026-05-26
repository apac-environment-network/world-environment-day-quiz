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

const Q1_EXPLAINER_EN = 'Japan and Senegal jointly proposed World Environment Day at the 1972 UN Conference on the Human Environment in Stockholm. Sweden hosted; Japan proposed; the UN General Assembly agreed. June\u00A05 has since become the UN\u2019s flagship campaign for environmental awareness, observed by over 150 countries each year. What your MD won\u2019t tell you: the proposal was partly a diplomatic move \u2014 Japan wanted to show environmental leadership after facing international criticism over industrial pollution (Minamata, itai-itai). Every ESG initiative has an origin story; most involve a crisis someone tried to get ahead of.<br><br><a href="https://www.worldenvironmentday.global/about/history" target="_blank" rel="noopener">\u2192 UN World Environment Day \u2014 official history</a>';
const Q1_EXPLAINER_JA = '\u65E5\u672C\u3068\u30BB\u30CD\u30AC\u30EB\u304C1972\u5E74\u306E\u56FD\u9023\u4EBA\u9593\u74B0\u5883\u4F1A\u8B70\uFF08\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\uFF09\u3067\u4E16\u754C\u74B0\u5883\u30C7\u30FC\u3092\u5171\u540C\u63D0\u6848\u3057\u307E\u3057\u305F\u3002\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u304C\u4E3B\u50AC\u3001\u65E5\u672C\u304C\u63D0\u6848\u3001\u56FD\u9023\u7DCF\u4F1A\u304C\u627F\u8A8D\u3002\u4EE5\u6765\u30016\u67085\u65E5\u306F\u56FD\u9023\u65D7\u8239\u306E\u74B0\u5883\u5553\u767A\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3068\u306A\u308A\u3001\u6BCE\u5E74150\u304B\u56FD\u4EE5\u4E0A\u304C\u53C2\u52A0\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u63D0\u6848\u306F\u3001\u4E9C\u6C34\u75C7\u30FB\u30A4\u30BF\u30A4\u30A4\u30BF\u30A4\u75C7\u7B49\u306E\u753A\u5DE5\u516C\u5BB3\u306B\u5BFE\u3059\u308B\u56FD\u969B\u7684\u6279\u5224\u3092\u53D7\u3051\u305F\u65E5\u672C\u304C\u3001\u74B0\u5883\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7\u3092\u793A\u3059\u305F\u3081\u306E\u5916\u4EA4\u6226\u7565\u3067\u3082\u3042\u308A\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u306EESG\u30A4\u30CB\u30B7\u30A2\u30C1\u30D6\u3082\u3001\u5FC5\u305A\u4F55\u304B\u306E\u30AF\u30EA\u30B7\u30B9\u304B\u3089\u59CB\u307E\u3063\u3066\u3044\u307E\u3059\u3002<br><br><a href="https://www.worldenvironmentday.global/about/history" target="_blank" rel="noopener">→ UNEP 世界環境デー — 公式歴史</a>';const Q2_EXPLAINER_EN = 'The Cool Biz campaign, launched in 2005 by the Ministry of the Environment, recommended 28\u00B0C (82.4\u00B0F) as the standard office air-conditioning temperature during summer. The policy also relaxed dress codes: no ties, no jackets. The result: an estimated 1.14 million tonnes of CO\u2082 reduction annually. What makes this genuinely interesting: it was purely voluntary (no fines, no enforcement). Companies just\u2026 did it. The Japanese term for this is \u201Ckeizoku\u201D \u2014 continuous improvement through social consensus, not regulation. Your compliance department has never heard of it.<br><br><a href="https://en.wikipedia.org/wiki/Cool_Biz_campaign" target="_blank" rel="noopener">\u2192 Wikipedia \u2014 Cool Biz campaign</a>';
const Q2_EXPLAINER_JA = '\u30AF\u30FC\u30EB\u30D3\u30BA\u306F\u30012005\u5E74\u306B\u74B0\u5883\u7701\u304C\u59CB\u3081\u305F\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u3067\u3001\u590F\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u6E29\u5EA6\u309228\u2103\u306B\u898F\u5B9A\u3057\u307E\u3059\u300234\u2103\u306E\u5916\u6C17\u4E0B\u3001\u900F\u660E\u6027\u3092\u6301\u3064\u5F37\u3044\u4EBA\u306F\u3053\u306E\u5B9F\u8D28\u7684\u306A\u7121\u610F\u5473\u3055\u3092\u8868\u73FE\u3067\u304D\u307E\u3059\u3002\u30CD\u30AF\u30BF\u30A4\u3068\u30B8\u30E3\u30B1\u30C3\u30C8\u3082\u4FEE\u6B63\u3055\u308C\u307E\u3059\u3002\u7D50\u679C\u3001\u6BCE\u5E74\u7D04114\u4E07\u30C8\u30F3\u306EC\u2460\u2092\u304C\u524A\u6E1B\u3002\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u306E\u60B2\u50B7\u304C\u3042\u308B\u5834\u5408\u3001\u30AA\u30D5\u30A3\u30B9\u306E\u30A8\u30A2\u30B3\u30F3\u8A2D\u5B9A\u306F\u3069\u306E\u3088\u3046\u306B\u753B\u9762\u7684\u306B\u8868\u73FE\u3055\u308C\u307E\u3059\u304B\u3002<br><br><a href="https://en.wikipedia.org/wiki/Cool_Biz_campaign" target="_blank" rel="noopener">→ Wikipedia — クールビズキャンペーン</a>';const Q3_EXPLAINER_EN = '"Mottainai" (\u201Cwhat a waste\u201D) is a Japanese expression that environmental activist and Nobel Peace Prize laureate Wangari Maathai popularised globally. She identified Respect as the fourth R \u2014 for the Earth\u2019s finite resources. The Japanese Ministry of Foreign Affairs officially adopted the Mottainai Campaign, and the concept was promoted at the 2008 G8 Hokkaido Toyako Summit. The existing three Rs (Reduce, Reuse, Recycle) were enshrined in Japanese law in the 2000 Basic Act for Establishing a Sound Material-Cycle Society. Respect was added not by legislation but by cultural consensus \u2014 the hardest kind of regulation to draft.<br><br><a href="https://www.mofa.go.jp/policy/economy/summit/2008/kids/eco/index_02.html" target="_blank" rel="noopener">→ MOFA — Mottainai Campaign</a>';
const Q3_EXPLAINER_JA = '\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u300D\u3068\u3044\u3046\u65E5\u672C\u306E\u8868\u73FE\u3092\u3001\u30CE\u30FC\u30D9\u30EB\u5E73\u548C\u8CCE\u53D7\u8CDE\u8005\u30EF\u30F3\u30AC\u30EA\u30FB\u30DE\u30FC\u30BF\u30A4\u6C0F\u304C\u4E16\u754C\u7684\u306B\u5E83\u3081\u307E\u3057\u305F\u3002\u5F7C\u5973\u306F4\u3064\u76EE\u306ER\u3068\u3057\u3066\u300CRespect\uFF08\u656C\u610F\uFF09\u300D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002\u5916\u52D9\u7701\u306F\u516C\u5F0F\u306B\u300C\u3082\u3063\u305F\u3044\u306A\u3044\u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u300D\u3092\u63A1\u7528\u3057\u30012008\u5E74\u306EG8\u5317\u6D77\u9053\u5FD7\u7126\u30B5\u30DF\u30C3\u30C8\u3067\u63D0\u5021\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306F\u7ACB\u6CD5\u3067\u306F\u306A\u304F\u3001\u6587\u5316\u7684\u30B3\u30F3\u30BB\u30F3\u30B5\u30B9\u306B\u3088\u308B\u3082\u306E\u3067\u3059\u3002<br><br><a href="https://www.mofa.go.jp/policy/economy/summit/2008/kids/eco/index_02.html" target="_blank" rel="noopener">→ 外務省 — もったいないキャンペーン</a>';const Q4_EXPLAINER_EN = 'Japan reports a plastic recycling rate of approximately 85%. This figure has been widely cited in corporate ESG reports and government communications. However, it includes \u201Cthermal recycling\u201D \u2014 incinerating plastic waste to generate energy. Under international standards that measure actual material reprocessing (what the EU calls \u201Cmaterial recycling\u201D), Japan\u2019s real rate is approximately 24%. The remaining ~61% is either landfilled, incinerated without energy recovery, or exported. Japan generates more plastic packaging waste per capita than any country except the United States.<br><br><a href="https://circulareconomy.earth/publications/how-japan-is-using-the-circular-economy-to-recycle-plastics" target="_blank" rel="noopener">→ Circular Economy Earth — Japan plastics analysis</a>';
const Q4_EXPLAINER_JA = '\u65E5\u672C\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u306F\u7D0485%\u3068\u5831\u544A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6570\u5024\u306F\u4F01\u696D\u306EESG\u30EC\u30DD\u30FC\u30C8\u3084\u653F\u5E9C\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u5E83\u304F\u5F15\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u306F\u300C\u30B5\u30FC\u30DE\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u300D\uFF08\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u3092\u7112\u5374\u3057\u3066\u767A\u96FB\uFF09\u3092\u542B\u3093\u3067\u3044\u307E\u3059\u3002\u56FD\u969B\u6A19\u6E96\uFF08\u7269\u8CEA\u30EA\u30B5\u30A4\u30AF\u30EB\uFF09\u3067\u306F\u3001\u65E5\u672C\u306E\u5B9F\u8CEA\u7684\u306A\u30EA\u30B5\u30A4\u30AF\u30EB\u7387\u306F\u7D0424%\u306B\u3059\u304E\u307E\u305B\u3093\u3002\u6B8B\u308A\u306F\u5869\u58D1\u3001\u30A8\u30CD\u30EB\u30AE\u30FC\u56DE\u53CE\u306A\u3057\u3067\u306E\u7112\u5374\u3001\u307E\u305F\u306F\u8F38\u51FA\u3055\u308C\u3066\u3044\u307E\u3059\u3002ESG\u30C7\u30FC\u30BF\u306E\u4E16\u754C\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u6570\u5B57\u306B\u811A\u6CE8\u304C\u3042\u308A\u307E\u3059\u3002<br><br><a href="https://circulareconomy.earth/publications/how-japan-is-using-the-circular-economy-to-recycle-plastics" target="_blank" rel="noopener">→ Circular Economy Earth — 日本プラスチック分析</a>';const Q5_EXPLAINER_EN = 'In 2024, Nomura reported that Japan accounted for nearly 70% of global transition bond issuance. Through its Green Transformation (GX) program, Japan has pioneered transition finance to help hard-to-abate sectors like steel, shipping, and chemicals fund their decarbonisation journey. The Japanese government and major banks are leading global efforts to establish clear frameworks for transition finance, ensuring heavy industries can transition rather than just divesting.<br><br><a href="https://www.nomuraconnects.com/focused-thinking-posts/japan-pioneered-transition-bonds-but-needs-demand-to-grow-the-market" target="_blank" rel="noopener">→ Nomura \u2014 Japan Transition Bonds</a>';
const Q5_EXPLAINER_JA = '2024\u5E74\u306E\u91CE\u6751\u30DB\u30FC\u30EB\u30C7\u30A3\u30F3\u30B0\u30B9\u306E\u5831\u544A\u306B\u3088\u308B\u3068\u3001\u4E16\u754C\u306E\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30DC\u30F3\u30C9\uFF08\u79FB\u884C\u50B5\uFF09\u767A\u884C\u984D\u306E\u7D0470%\u3092\u65E5\u672C\u304C\u5360\u3081\u3066\u3044\u307E\u3059\u3002GX\uFF08\u30B0\u30EA\u30FC\u30F3\u30C8\u30E9\u30F3\u30B9\u30D5\u30A9\u30FC\u30E1\u30FC\u30B7\u30E7\u30F3\uFF09\u653F\u7B56\u306E\u3082\u3068\u3001\u9244\u92FC\u3084\u6D77\u904B\u3001\u5316\u5B66\u3068\u3044\u3063\u305F\u8131\u70AD\u7D20\u5316\u304C\u56F0\u96E3\u306A\u7523\u696D\uFF08Hard-to-abate\u7523\u696D\uFF09\u306E\u79FB\u884C\u3092\u652F\u63F4\u3059\u308B\u305F\u3081\u3001\u65E5\u672C\u306E\u653F\u5E9C\u3084\u30E1\u30AC\u30D0\u30F3\u30AF\u304C\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30FB\u30D5\u30A1\u30A4\u30CA\u30F3\u30B9\u306E\u67A0\u7D44\u307F\u4F5C\u308A\u3092\u4E16\u754C\u7684\u306B\u30EA\u30FC\u30C9\u3057\u3066\u3044\u307E\u3059\u3002<br><br><a href="https://www.nomuraconnects.com/focused-thinking-posts/japan-pioneered-transition-bonds-but-needs-demand-to-grow-the-market" target="_blank" rel="noopener">\u2192 Nomura \u2014 \u65E5\u672C\u306E\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u30DC\u30F3\u30C9</a>';const Q6_EXPLAINER_EN = 'Japan\u2019s Green Transformation (GX) strategy, adopted in February 2023, estimates a need for 150 trillion yen (~USD 1 trillion) in combined public and private investment over 10 years. This is approximately 3% of Japan\u2019s GDP annually, targeting 14\u201316 industrial sectors including hydrogen, offshore wind, ammonia co-firing, next-generation nuclear, and EV batteries. The funding mechanism is a world first: sovereign climate transition bonds (GX JGBs) issued by the government, which will be repaid through future carbon auction revenues (GX-ETS) and a fossil fuel levy starting in 2028. If the carbon price does not rise as projected, the levy will be adjusted. If emitters do not pay, the levy will be adjusted. If the mechanism fails\u2026 well, you know how sovereign debt works.<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ METI — GX Transition Bond Report</a>';
const Q6_EXPLAINER_JA = '\u65E5\u672C\u306EGX\u6226\u7565\u306F\u30012023\u5E742\u6708\u306B\u7B56\u5B9A\u3055\u308C\u300110\u5E74\u9593\u3067150\u5146\u5186\uFF08\u7D041\u5146\u7C73\u30C9\u30EB\uFF09\u306E\u5B98\u6C11\u6295\u8CC7\u304C\u5FC5\u8981\u3068\u898B\u8A08\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u65E5\u672CGDP\u306E\u7D043%\u306B\u76F8\u5F53\u3057\u3001\u6C34\u7D20\u30FB\u6D0B\u4E0A\u98A8\u529B\u30FB\u30A2\u30F3\u30E2\u30CB\u30A2\u6DF7\u71C3\u30FB\u6B21\u4E16\u4EE3\u539F\u5B50\u529B\u30FB\u96FB\u6C17\u81EA\u52D5\u8ECA\u7528\u96FB\u6C60\u306A\u306914\u301C16\u306E\u7523\u696D\u5206\u91CE\u3092\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u8CC7\u91D1\u8ABF\u9054\u6A5F\u69CB\u306F\u4E16\u754C\u521D\u3067\u3059\u3002\u56FD\u304C\u767A\u884C\u3059\u308B\u6C17\u5019\u79FB\u884C\u50B5\u3067\u3001\u5C06\u6765\u306EGX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u53CE\u5165\u30842028\u5E74\u304B\u3089\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1\u3067\u8FD4\u6E09\u3055\u308C\u307E\u3059\u3002<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ 経済産業省 — GX移行債レポート</a>';const Q7_EXPLAINER_EN = 'In 2022\u20132023, Japan\u2019s Financial Services Agency (FSA) introduced some of the world\u2019s strictest anti-greenwashing rules for investment funds. Under the revised guidelines, a fund can only market itself as an \u201CESG Fund\u201D if ESG factors are a primary selection criterion with disclosed targets, reference benchmarks, and ongoing disclosure obligations. Negative screening alone (e.g., \u201Cwe do not invest in tobacco\u201D) is insufficient. The FSA also introduced the world\u2019s first Code of Conduct for ESG Evaluation and Data Providers in December 2022. The motivation: concern that a significant portion of the ~600 trillion yen classified as \u201Csustainable investments\u201D in Japan may not meet international standards.<br><br><a href="https://www.morganlewis.com/pubs/2024/07/esg-investments-the-asia-pacific-regulatory-perspective" target="_blank" rel="noopener">→ Morgan Lewis — ESG APAC Regulatory Perspective</a>';
const Q7_EXPLAINER_JA = '\u91D1\u878D\u5E81\u306F2022\u5E74\u304B\u30892023\u5E74\u306B\u304B\u3051\u3066\u3001\u6295\u8CC7\u4FE1\u8A17\u306B\u5BFE\u3059\u308B\u4E16\u754C\u6700\u53B3\u306E\u30B0\u30EA\u30FC\u30F3\u30A6\u30A9\u30C3\u30B7\u30F3\u30B0\u898F\u5236\u3092\u5C0E\u5165\u3057\u307E\u3057\u305F\u3002\u6539\u8A02\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u306E\u4E0B\u3067\u3001ESG\u3092\u201C\u4E3B\u8981\u306A\u6295\u8CCE\u5224\u65AD\u8981\u7D20\u201D\u3068\u3057\u3001\u76EE\u6A19\u3001\u53C2\u7167\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u3001\u7D99\u7D9A\u7684\u958B\u793A\u3092\u884C\u3046\u5834\u5408\u306E\u307F\u3001\u300CESG\u30D5\u30A1\u30F3\u30C9\u300D\u3092\u540D\u4E57\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30CD\u30AC\u30C6\u30A3\u30D6\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u306E\u307F\u3067\u306F\u4E0D\u5341\u5206\u3067\u3059\u3002\u307E\u305F\u3001ESG\u8A55\u4FA1\u6A5F\u95A2\u306B\u5BFE\u3059\u308B\u4E16\u754C\u521D\u306E\u884C\u52D5\u898F\u7BC4\u3082\u5C0E\u5165\u3057\u307E\u3057\u305F\u3002\u80CC\u666F\u306B\u306F\u3001\u65E5\u672C\u3067\u300C\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u6295\u8CC7\u300D\u3068\u5206\u985E\u3055\u308C\u308B\u7D04600\u5146\u5186\u306E\u3046\u3061\u3001\u8DB3\u308A\u306A\u3044\u3082\u306E\u304C\u5C11\u306A\u304F\u306A\u3044\u3068\u3044\u3046\u8AAE\u616E\u304C\u3042\u308A\u307E\u3059\u3002<br><br><a href="https://www.morganlewis.com/pubs/2024/07/esg-investments-the-asia-pacific-regulatory-perspective" target="_blank" rel="noopener">→ Morgan Lewis — ESG APAC規制の視点</a>';const Q8_EXPLAINER_EN = 'In February 2024, Japan became the world\u2019s first sovereign issuer of climate transition bonds (GX JGBs), raising 20 trillion yen (~USD\u00A0140 billion). Unlike green bonds, which typically finance already-commercialised assets, over 50% of transition bond proceeds are allocated to R&D for future decarbonisation technologies (hydrogen, ammonia, carbon capture, next-gen solar). The repayment mechanism is a genuine closed-loop system: revenue from the GX-ETS carbon auction and a fossil fuel levy (introduced 2028) flows back into a dedicated account to service the bonds. This structure has never been tried at sovereign level. Whether it works depends on three variables: carbon prices rising, emitters paying, and politicians not raiding the account. The odds are not terrible, but they are not great either \u2014 which is, you will note, the story of most climate policy.<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ METI — GX Transition Bond Report</a>';const Q8_EXPLAINER_JA = '2024\u5E742\u6708\u3001\u65E5\u672C\u306F\u4E16\u754C\u521D\u306E\u30BD\u30D6\u30EA\u30F3\u6C17\u5019\u79FB\u884C\u50B5\uFF08GX JGBs\uFF09\u3092\u767A\u884C\u3057\u300120\u5146\u5186\u3092\u8ABF\u9054\u3057\u307E\u3057\u305F\u3002\u30B0\u30EA\u30FC\u30F3\u30DC\u30F3\u30C9\u3068\u7570\u306A\u308A\u3001\u5F53\u8A72\u4E8B\u696D\u306E\u7D5050% \u4EE5\u4E0A\u304C\u5C06\u6765\u306E\u8131\u70AD\u7D20\u6280\u8853\uFF08\u6C34\u7D20\u30FB\u30A2\u30F3\u30E2\u30CB\u30A2\u30FB\u70AD\u7D20\u56DE\u53CE\u30FB\u6B21\u4E16\u4EE3\u592A\u967D\u5149\uFF09\u306E\u7814\u7A76\u958B\u767A\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002\u8FD4\u6E09\u6A5F\u69CB\u306F\u672C\u7269\u306E\u30AF\u30ED\u30FC\u30BA\u30C9\u30EB\u30FC\u30D7\u3067\u3059\u3002GX-ETS\u70AD\u7D20\u30AA\u30FC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u306E\u53CE\u5165\u3068\u30012028\u5E74\u5C0E\u5165\u4E88\u5B9A\u306E\u5316\u77F3\u71C3\u6599\u8CB4\u8CA1\u91D1\u304C\u3001\u50B5\u52D9\u30B5\u30FC\u30D3\u30B9\u306E\u305F\u3081\u306E\u5C02\u7528\u4E88\u7B97\u306B\u6D41\u308C\u5165\u308A\u307E\u3059\u3002\u6210\u529F\u306B\u306F\u3001\u70AD\u7D20\u4FA1\u683C\u304C\u4E0A\u6607\u3057\u3001\u6392\u51FA\u8005\u304C\u652F\u6255\u3044\u3001\u653F\u6CBB\u5BB6\u304C\u4E88\u7B97\u3092\u6D41\u7528\u3057\u306A\u3044\u3053\u3068\u304C\u5FC5\u8981\u3067\u3059\u3002<br><br><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/transition/climate.transition.bond.allocation.impact.report.eng.pdf" target="_blank" rel="noopener">→ 経済産業省 — GX移行債レポート</a>';

export const QUESTIONS: Question[] = [
  {
    id: 1, locale: 'all', correct: 'A',
    en: { title: 'World Environment Day (June&nbsp;5) exists because two countries jointly proposed it to the UN in 1972. Which country is one of them?', options: { A: 'Japan', B: 'Sweden \u2014 they hosted the conference, so they called dibs', C: 'Brazil \u2014 "we have the Amazon, obviously it was us"', D: "A coalition of nations who definitely weren't Japan" }, joke: 'Japan and Senegal jointly proposed it. Sweden hosted the conference. The UN said yes. And now your desk has a recycling bin under it. Circle of life.', explainer: Q1_EXPLAINER_EN },
    ja: { title: '世界環境デー（6月5日）は、1972年にある国が国連に提案したことで誕生しました。その国はどこ？', options: { A: '日本', B: 'スウェーデン —— 「ストックホルムで会議を開いたのはウチだし、ついでに提案者もウチということに」', C: 'ブラジル —— 「アマゾンがあるから環境の話といえばウチでしょ」と本気で思っていた', D: '実は複数国の共同提案で、どの国が最初に言い出したか、今でも国連の議事録をめぐって議論が続いている' }, joke: '日本とセネガルが共同提案し、スウェーデンが主催し、国連が採択。以来、毎年6月5日は150カ国以上が参加する国連の環境啓発キャンペーンに。ちなみにこの提案、当時の日本の産業公害（水俣病やイタイイタイ病）への国際的批判を受けての「環境外交」でもあったそうです。ESGの源流には、いつも誰かの危機対応があるんですね。', explainer: Q1_EXPLAINER_JA },
  },
  {
    id: 2, locale: ['tk'], correct: 'C',
    en: { title: "Japan's <em>Cool Biz</em> campaign recommended office air conditioners be set to what target temperature?", options: { A: '24\u00B0C, because 28\u00B0C was deemed too warm for wearing a full suit', B: 'The temperature that perfectly balances comfort with passive-aggressive thermostat wars', C: '28\u00B0C (82.4\u00B0F)', D: 'Whatever Facilities decides, and they are not budging' }, joke: 'Launched in 2005. Suits were banned. Short sleeves encouraged. Energy consumption dropped. Meanwhile, the office thermostat argument enters its 17th consecutive quarter.', explainer: Q2_EXPLAINER_EN },
    ja: { title: '日本の「クールビズ」キャンペーンで推奨されたオフィスのエアコン設定温度は？', options: { A: '25°C —— 28°Cは暑すぎると不評で、こっそり下げたオフィスが多数', B: 'リモコンが行方不明で、結局誰も設定温度を変えられなかった', C: '28°C', D: '窓際と中央席で体感が違うため、室温28°Cの定義自体が曖昧' }, joke: '2005年開始。スーツ禁止、半袖推奨。結果、年間約114万トンのCO₂削減に。今では「クールビズ」という言葉もすっかり定着し、夏のオフィス風景は一変しました。もっとも、「冷房28°C」を巡る社内の微妙な空気感だけは、20年経った今も変わっていないようですが。', explainer: Q2_EXPLAINER_JA },
  },
  {
    id: 3, locale: 'all', correct: 'B',
    en: { title: 'The Japanese concept <em>Mottainai</em> ("what a waste!") adds a fourth "R" to the classic Reduce, Reuse, Recycle. What is it?', options: { A: 'Regret \u2014 the emotion you feel when you accidentally throw away a recyclable', B: 'Respect', C: 'Returns \u2014 as in, "our ESG fund\'s quarterly"', D: 'Restructuring \u2014 applicable to anything, anywhere, forever' }, joke: 'Nobel laureate Wangari Maathai popularised it. The fourth R is Respect \u2014 for the Earth’s resources. Not to be confused with the typical corporate announcements.', explainer: Q3_EXPLAINER_EN },
    ja: { title: '日本の「もったいない」の精神が3R（Reduce, Reuse, Recycle）に追加した4つ目の「R」とは？', options: { A: 'Relax（リラックス） —— もったいない精神で節約した分、たまにはご褒美を', B: 'Respect（敬意）', C: 'Report（レポート） —— 環境省が毎年「もったいない白書」を発行している', D: 'Really?（リアリー？） —— 観光客が「捨てるのもったいない。Really?」と言った' }, joke: 'ノーベル平和賞受賞者のワンガリ・マータイさんが世界的に広めた言葉です。ケニアの環境活動家だったマータイさんは、日本の「もったいない」という言葉に深く感銘を受け、4つ目のRとしてRespect（敬意）を提唱しました。日本の言葉と精神が、世界の環境運動に影響を与えた、誇らしいエピソードですね。', explainer: Q3_EXPLAINER_JA },
  },
  {
    id: 4, locale: 'all', correct: 'D',
    en: { title: 'Japan reports a plastic recycling rate of about 85%. Under international standards for <em>actual material</em> recycling, the real figure is approximately:', options: { A: 'A rate that varies depending on how you define <em>recycling</em> and <em>plastic</em>', B: '~62% \u2014 and the missing 23% was reclassified as "strategic thermal redeployment"', C: '~85%, because Japan defined recycling to include burning things for electricity', D: '~24%' }, joke: 'The 85% figure includes "thermal recycling" \u2014 i.e., burning plastic for energy. The EU calls this "energy recovery." Welcome to ESG data: where every percentage has a footnote, and that footnote has a sub-footnote.', explainer: Q4_EXPLAINER_EN },
    ja: { title: '日本のプラスチック「リサイクル率」は約85%と報告されていますが、国際基準での <em>実際の材料リサイクル率</em> は約何%？', options: { A: '約50% —— 環境省と経産省で計算方法が違い、数字が一致しない', B: '約62% —— 回収ボックスに入れた時点でリサイクル完了とみなす', C: '約85% —— 燃やして電気を作ることもリサイクルに含めているため', D: '約24%' }, joke: '85%には「サーマルリサイクル」（＝燃やして発電）が含まれています。EUではこれを「エネルギー回収」と呼び、リサイクルとは認めていません。ESGデータの世界へようこそ：すべての数字には脚注があり、その脚注にも脚注があります。', explainer: Q4_EXPLAINER_JA },
  },
  {
    id: 5, locale: 'all', correct: 'A',
    en: { title: 'As of 2024, Japan accounts for approximately what share of the global climate transition bond market?', options: { A: '~70%', B: '~25%, though mostly limited to the domestic retail market', C: '~5%, because Japan historically prefers equity financing for decarbonisation', D: '0% \u2014 Japan missed the filing deadline for the UN\'s climate taxonomy' }, joke: 'The government\'s Green Transformation (GX) program has pioneered the space, helping hard-to-abate sectors fund their decarbonisation journey. The Japanese government and major banks are leading global efforts to establish clear frameworks for transition finance.', explainer: Q5_EXPLAINER_EN },
    ja: { title: '2024年現在、世界の「トランジションボンド（気候移行債）」発行市場において、日本は約何％のシェアを占めているでしょうか？', options: { A: '約70%', B: '約25% —— ただし、大半は国内の個人投資家向け市場に限られている', C: '約5% —— 日本企業は脱炭素化の資金調達において、債券よりも株式発行を好む傾向があるため', D: '0% —— 国連の気候タクソノミー（分類基準）への登録期限に間に合わなかったため' }, joke: '日本のGX（グリーントランスフォーメーション）政策がこの分野を牽引し、鉄鋼や海運など脱炭素化が難しい産業の移行を支援しています。日本は単なる投資撤退ではなく、実体経済の移行を支えるトランジション・ファイナンスの枠組み作りで世界をリードしています。', explainer: Q5_EXPLAINER_JA },
  },
  {
    id: 6, locale: ['tk'], correct: 'C',
    en: { title: "Japan's Green Transformation (GX) strategy estimates how much combined public-private investment over the next 10 years?", options: { A: '50 trillion yen, plus whatever is left in the "miscellaneous" fund', B: '"More than last year\'s budget but less than the GDP of a medium-sized planet"', C: '150 trillion yen (~USD 1 trillion)', D: 'The exact amount that sounds plausible in a pitch book' }, joke: 'That is about 3% of GDP annually, targeting 14\u201316 industrial sectors including hydrogen, offshore wind, and next-generation nuclear. Somewhere in Tokyo, a PM is building a deck titled "Massive Addressable Market."', explainer: Q6_EXPLAINER_EN },
    ja: { title: '日本の「GX（グリーントランスフォーメーション）」戦略が試算する、今後10年間に必要な官民投資総額は？', options: { A: '100兆円 —— 官民折半の原則で、政府50兆円＋企業50兆円', B: '50兆円 —— その後、対象分野が増えるごとに金額が膨らんでいった', C: '150兆円（約1兆米ドル）', D: '200兆円 —— 物価上昇を見越して割り引くかで試算が大きく変わる' }, joke: '年間GDPの約3%を、水素・洋上風力・次世代原子力など14〜16分野に投じる計画です。20兆円のGX経済移行債（世界初のソブリン気候移行債）で資金調達し、将来の炭素課金で返済するという循環型の資金メカニズム。壮大な構想であることは間違いありません。あとは実行あるのみ、ですね。', explainer: Q6_EXPLAINER_JA },
  },
  {
    id: 7, locale: 'all', correct: 'B',
    en: { title: 'Under Japan\'s FSA rules, can a fund market itself as an "ESG Fund" if its <em>only</em> strategy is negative screening (e.g., "we do not invest in tobacco")?', options: { A: 'Yes, provided the fund name also includes "sustainable" or "green"', B: 'No \u2014 ESG must be a primary selection factor with disclosed targets', C: 'Yes, because negative screening qualifies under the 2018 guidance', D: 'No, unless the marketing deck uses a green colour palette and wind turbines' }, joke: 'The FSA tightened rules to combat greenwashing. Simply excluding tobacco and weapons manufacturers no longer cuts it. You need stated targets, reference benchmarks, and ongoing disclosure.', explainer: Q7_EXPLAINER_EN },
    ja: { title: '金融庁の規則では、ネガティブスクリーニング（「タバコには投資しません」など）だけをESG戦略とするファンドを「ESGファンド」と名乗れますか？', options: { A: 'はい —— ファンド名に「サステナブル」「グリーン」等を含めればOK', B: 'いいえ —— ESGが主要な投資判断要素であり、具体的な目標開示が必要', C: 'はい —— ただし「ESGを考慮しています」の一文を目論見書に入れる必要あり', D: 'いいえ —— ただし「ESGに配慮した運用」という表現なら別カテゴリーで可' }, joke: '金融庁は2022〜2023年にかけて、グリーンウォッシング対策としてESGファンドの名称規制を強化しました。単に「タバコと武器を除外しています」だけでは不十分。明確なESG評価基準、参照ベンチマーク、継続的な情報開示が求められます。日本はこの分野で世界最先端の規制を導入した国の一つです。', explainer: Q7_EXPLAINER_JA },
  },
  {
    id: 8, locale: 'all', correct: 'D',
    en: { title: "Japan became the world's first sovereign issuer of climate transition bonds, in February 2024. How will the \u00A520 trillion debt be repaid?", options: { A: 'By issuing additional transition bonds to repay the original ones', B: '"Growth will pay for it" \u2014 a sentence that has never backfired in sovereign debt', C: 'The bonds mature in 2050 alongside the net-zero target', D: 'Revenue from future GX-ETS carbon auctions and the 2028 fossil fuel levy' }, joke: 'A genuine closed-loop mechanism: tax carbon emitters, use the proceeds to repay the bonds that funded decarbonisation. Whether this works depends on carbon prices actually rising, emitters actually paying, and politicians letting the mechanism run.', explainer: Q8_EXPLAINER_EN },
    ja: { title: '日本は2024年2月、世界初のソブリン気候移行債を発行しました。20兆円の債務はどう返済されますか？', options: { A: '新たな移行債を発行して既存の移行債を返済する「循環モデル」', B: '「経済成長が返済をカバーする」—— GDP押し上げ効果が上回る前提', C: '2050年のネットゼロと満期が一致し、「未来への投資」として資産計上', D: '将来のGX-ETS炭素オークション収入と2028年導入の化石燃料課徴金' }, joke: '炭素排出者に課金し、その収入で脱炭素投資のための国債を償還する——理論上は見事なクローズドループです。実際に機能するかは、炭素価格が計画通り上昇するか、排出者がきちんと支払うか、そしてこの仕組みが政治的に長続きするかにかかっています。世界初の試み。日本がどこまで成功させるか、世界中のESG関係者が注目しています。', explainer: Q8_EXPLAINER_JA },
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
