// Builds the static site from content/ into site/ (English) and site/mr/ (Marathi). No dependencies.
//   node scripts/build.mjs          validate + build
//   node scripts/build.mjs --check  validate only (exit 1 on errors)
//   node scripts/build.mjs --draft  build even if the study plan or Marathi translations are incomplete

import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { EXAM, SECTIONS } from '../content/sections.mjs';
import { STUDY_PLAN } from '../content/plan.mjs';
import { PLAN_MR, SECTION_MR, SYLLABUS_MR, UI } from '../content/i18n.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'site');
const CHECK_ONLY = process.argv.includes('--check');
const DRAFT = process.argv.includes('--draft');
const LENIENT = CHECK_ONLY || DRAFT; // incomplete plan / translations are warnings, not errors
const REPO_URL = 'https://github.com/BaluRaut/mca-cet-prep';

const errors = [];
const warnings = [];
const importFresh = (file) => import(`${pathToFileURL(file).href}?t=${Date.now()}`);

// ---------- load ----------

for (const section of SECTIONS) {
  const file = join(ROOT, 'content', `${section.id}.mjs`);
  if (!existsSync(file)) {
    warnings.push(`content/${section.id}.mjs does not exist yet`);
    section.topics = [];
    continue;
  }
  section.topics = (await importFresh(file)).default ?? [];
}

// Marathi: every content/mr/<section-id>*.mjs exports { [topicId]: translation }.
const MR = {};
const MR_DIR = join(ROOT, 'content', 'mr');
const mrFiles = existsSync(MR_DIR) ? (await readdir(MR_DIR)).filter((f) => f.endsWith('.mjs')).sort() : [];
for (const f of mrFiles) {
  const part = (await importFresh(join(MR_DIR, f))).default ?? {};
  for (const [id, tr] of Object.entries(part)) {
    if (MR[id]) errors.push(`mr/${f}: topic "${id}" is translated twice`);
    MR[id] = { ...tr, _file: f };
  }
}

// ---------- validate ----------

const LETTERS = ['A', 'B', 'C', 'D'];
const seenIds = new Map();

// A bare "<" that does not open a tag means someone wrote "a < b" instead of "a &lt; b".
const BARE_LT = /<(?![a-zA-Z/!])/;
const ALLOWED_TAGS = new Set(['b', 'i', 'u', 'em', 'strong', 'sup', 'sub', 'code', 'br', 'span', 'small', 'mark', 'kbd', 'ul', 'ol', 'li', 'p', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'pre']);

function checkHtml(where, value) {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push(`${where}: expected a non-empty string`);
    return;
  }
  if (BARE_LT.test(value)) errors.push(`${where}: bare "<" — write &lt; (or move code into a "code" field)`);
  for (const [, tag] of value.matchAll(/<\/?([a-zA-Z0-9]+)/g)) {
    if (!ALLOWED_TAGS.has(tag.toLowerCase())) errors.push(`${where}: tag <${tag}> is not allowed`);
  }
}

function checkList(where, list, min) {
  if (!Array.isArray(list) || list.length < min) {
    errors.push(`${where}: expected at least ${min} item(s)`);
    return;
  }
  list.forEach((item, i) => checkHtml(`${where}[${i}]`, item));
}

for (const section of SECTIONS) {
  const spread = [0, 0, 0, 0];
  section.topics.forEach((t, ti) => {
    const at = `${section.id}[${ti}]${t?.id ? ` (${t.id})` : ''}`;
    if (!t || typeof t !== 'object') return errors.push(`${at}: not an object`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id ?? '')) errors.push(`${at}: id must be kebab-case`);
    if (seenIds.has(t.id)) errors.push(`${at}: duplicate id, also in ${seenIds.get(t.id)}`);
    seenIds.set(t.id, section.id);
    checkHtml(`${at}.title`, t.title);
    checkHtml(`${at}.syllabus`, t.syllabus);
    if (!SYLLABUS_MR[t.syllabus]) errors.push(`${at}.syllabus: add a Marathi name for "${t.syllabus}" to SYLLABUS_MR in content/i18n.mjs`);

    const a = t.analogy ?? {};
    checkHtml(`${at}.analogy.title`, a.title);
    checkHtml(`${at}.analogy.oneLine`, a.oneLine);
    checkHtml(`${at}.analogy.story`, a.story);
    if (!Array.isArray(a.map) || a.map.length < 2) errors.push(`${at}.analogy.map: expected at least 2 rows`);
    else a.map.forEach((row, i) => {
      if (!Array.isArray(row) || row.length !== 2) return errors.push(`${at}.analogy.map[${i}]: expected [everyday, concept]`);
      row.forEach((cell, j) => checkHtml(`${at}.analogy.map[${i}][${j}]`, cell));
    });

    checkList(`${at}.concept`, t.concept, 1);
    checkList(`${at}.keyPoints`, t.keyPoints, 1);
    const ex = t.example ?? {};
    checkHtml(`${at}.example.q`, ex.q);
    checkList(`${at}.example.steps`, ex.steps, 1);
    checkHtml(`${at}.example.answer`, ex.answer);
    if (t.shortcut !== undefined) checkHtml(`${at}.shortcut`, t.shortcut);
    checkList(`${at}.traps`, t.traps, 1);

    if (!Array.isArray(t.practice) || t.practice.length < 3) errors.push(`${at}.practice: expected at least 3 questions`);
    (t.practice ?? []).forEach((p, pi) => {
      const pat = `${at}.practice[${pi}]`;
      checkHtml(`${pat}.q`, p.q);
      if (p.code !== undefined && typeof p.code !== 'string') errors.push(`${pat}.code: expected a string`);
      if (!Array.isArray(p.options) || p.options.length !== 4) errors.push(`${pat}.options: expected exactly 4`);
      else {
        p.options.forEach((o, oi) => checkHtml(`${pat}.options[${oi}]`, String(o)));
        if (new Set(p.options.map(String)).size !== 4) errors.push(`${pat}.options: duplicate option`);
      }
      if (!Number.isInteger(p.answer) || p.answer < 0 || p.answer > 3) errors.push(`${pat}.answer: must be 0–3`);
      else spread[p.answer]++;
      checkHtml(`${pat}.why`, p.why);
    });

    checkTranslation(t);
  });
  const total = spread.reduce((x, y) => x + y, 0);
  if (total >= 12 && Math.max(...spread) / total > 0.4) {
    warnings.push(`${section.id}: correct answers are skewed across A–D: ${spread.join('/')}`);
  }
}

// The Marathi translation must mirror the English topic's shape so that row i, step i and
// question i line up. Missing translations fall back to English only in --draft/--check.
function checkTranslation(t) {
  const tr = MR[t.id];
  if (!tr) {
    (LENIENT ? warnings : errors).push(`mr: topic "${t.id}" has no Marathi translation`);
    return;
  }
  const at = `mr/${tr._file} (${t.id})`;
  const sameLength = (key, en, mr) => {
    if (!Array.isArray(mr) || mr.length !== en.length) errors.push(`${at}.${key}: expected ${en.length} item(s), got ${Array.isArray(mr) ? mr.length : 'none'}`);
  };
  checkHtml(`${at}.title`, tr.title);
  const a = tr.analogy ?? {};
  for (const k of ['title', 'oneLine', 'story']) checkHtml(`${at}.analogy.${k}`, a[k]);
  sameLength('analogy.map', t.analogy.map, a.map);
  (a.map ?? []).forEach((row, i) => {
    if (!Array.isArray(row) || row.length !== 2) return errors.push(`${at}.analogy.map[${i}]: expected [everyday, concept]`);
    row.forEach((cell, j) => checkHtml(`${at}.analogy.map[${i}][${j}]`, cell));
  });
  for (const k of ['concept', 'keyPoints', 'traps']) {
    sameLength(k, t[k], tr[k]);
    (tr[k] ?? []).forEach((s, i) => checkHtml(`${at}.${k}[${i}]`, s));
  }
  checkHtml(`${at}.example.q`, tr.example?.q);
  sameLength('example.steps', t.example.steps, tr.example?.steps);
  (tr.example?.steps ?? []).forEach((s, i) => checkHtml(`${at}.example.steps[${i}]`, s));
  checkHtml(`${at}.example.answer`, tr.example?.answer);
  if (!!t.shortcut !== !!tr.shortcut) errors.push(`${at}.shortcut: present in one language only`);
  if (tr.shortcut) checkHtml(`${at}.shortcut`, tr.shortcut);
  sameLength('practice', t.practice, tr.practice);
  (tr.practice ?? []).forEach((p, i) => {
    if (p.q !== undefined && p.q !== '') checkHtml(`${at}.practice[${i}].q`, p.q);
    checkHtml(`${at}.practice[${i}].why`, p.why);
  });
}

for (const id of Object.keys(MR)) {
  if (!seenIds.has(id)) errors.push(`mr/${MR[id]._file}: unknown topic id "${id}"`);
}

for (const [wi, week] of STUDY_PLAN.entries()) {
  for (const id of week.topics ?? []) {
    if (!seenIds.has(id)) (LENIENT ? warnings : errors).push(`plan week ${wi + 1}: unknown topic id "${id}"`);
  }
}
for (const id of seenIds.keys()) {
  if (!STUDY_PLAN.some((w) => w.topics?.includes(id))) warnings.push(`topic "${id}" is not in the study plan`);
}
if (PLAN_MR.length !== STUDY_PLAN.length) errors.push('i18n PLAN_MR must have one entry per study-plan week');

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
const topicCount = SECTIONS.reduce((n, s) => n + s.topics.length, 0);
const questionCount = SECTIONS.reduce((n, s) => n + s.topics.reduce((m, t) => m + (t.practice?.length ?? 0), 0), 0);
const translated = SECTIONS.reduce((n, s) => n + s.topics.filter((t) => MR[t.id]).length, 0);
console.log(`${topicCount} topics (${translated} in Marathi), ${questionCount} practice questions, ${errors.length} error(s), ${warnings.length} warning(s)`);
if (errors.length) process.exit(1);
if (CHECK_ONLY) process.exit(0);

// ---------- render helpers ----------

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sectionOf = (id) => SECTIONS.find((s) => s.topics.some((t) => t.id === id));
const topicById = (id) => sectionOf(id)?.topics.find((t) => t.id === id);
const codeBlock = (code) => (code ? `<pre class="code" lang="en"><code>${esc(code.replace(/^\n+|\s+$/g, ''))}</code></pre>` : '');

// Localised views of section metadata and topics. A topic without a translation renders in English.
const sec = (s, lang) => (lang === 'mr' ? { ...s, ...SECTION_MR[s.id] } : s);
function view(t, lang) {
  const tr = lang === 'mr' ? MR[t.id] : null;
  if (lang === 'mr') t = { ...t, syllabus: SYLLABUS_MR[t.syllabus] ?? t.syllabus };
  if (!tr) return { ...t, enTitle: null, practice: t.practice.map((p) => ({ ...p, qHelp: null })) };
  return {
    ...t,
    title: tr.title,
    enTitle: t.title,
    analogy: tr.analogy,
    concept: tr.concept,
    keyPoints: tr.keyPoints,
    example: { ...tr.example, code: t.example.code },
    shortcut: tr.shortcut,
    traps: tr.traps,
    practice: t.practice.map((p, i) => ({ ...p, qHelp: tr.practice[i].q || null, why: tr.practice[i].why })),
  };
}

function page({ lang, file, title, description, hue = 250, body, scripts = [] }) {
  const T = UI[lang];
  const up = lang === 'en' ? '' : '../';
  const nav = [
    ['index.html', T.nav.home],
    ...SECTIONS.map((s) => [`${s.id}.html`, sec(s, lang).short]),
    ['revision.html', T.nav.revision],
    ['mock.html', T.nav.mock],
  ].map(([href, label]) => `<a href="${href}"${href === file ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const other = lang === 'en' ? `mr/${file}` : `../${file}`;
  const otherLang = lang === 'en' ? 'mr' : 'en';
  return `<!doctype html>
<html lang="${T.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<link rel="alternate" hreflang="${otherLang}" href="${other}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%234f46e5'/%3E%3Ctext x='16' y='22' font-size='15' font-family='system-ui,sans-serif' font-weight='700' text-anchor='middle' fill='white'%3EMC%3C/text%3E%3C/svg%3E">
<script>try{var t=localStorage.getItem('mca:theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="${up}assets/style.css">
</head>
<body style="--hue:${hue}">
<a class="skip" href="#main">${T.skip}</a>
<header class="site">
  <div class="wrap bar">
    <a class="brand" href="index.html"><span class="logo" aria-hidden="true">MC</span><span>${T.brand}</span></a>
    <span class="bar-actions">
      <a class="lang-switch" href="${other}" hreflang="${otherLang}" lang="${otherLang}" title="${T.otherLang.title}">${T.otherLang.label}</a>
      <button class="theme" type="button" aria-label="${T.themeLabel}" title="${T.themeLabel}">◐</button>
    </span>
  </div>
  <nav class="wrap tabs" aria-label="${T.sectionsLabel}">${nav}</nav>
</header>
<main id="main" class="wrap">
${body}
</main>
<footer class="wrap site-foot">
  <p>${T.footSource(EXAM.brochureUrl, EXAM.brochureYear, EXAM.officialSite)}</p>
  <p>${T.footRepo(REPO_URL)}</p>
</footer>
<script src="${up}assets/app.js"></script>
${scripts.map((s) => `<script src="${up}${s}"></script>`).join('\n')}
</body>
</html>
`;
}

function renderMcq(p, n, lang) {
  return `<div class="mcq" data-answer="${p.answer}">
  <p class="q" lang="en"><span class="qn">Q${n}.</span> ${p.q}</p>
  ${p.qHelp ? `<p class="q-help">${p.qHelp}</p>` : ''}
  ${codeBlock(p.code)}
  <div class="opts" lang="en">${p.options.map((o, i) =>
    `<button class="opt" type="button" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span>${o}</span></button>`).join('')}</div>
  <p class="why" hidden><b>${UI[lang].answer}: ${LETTERS[p.answer]}.</b> ${p.why}</p>
</div>`;
}

function renderTopic(t, section, index, lang) {
  const T = UI[lang];
  const a = t.analogy;
  return `<article class="topic" id="${t.id}" data-topic="${t.id}">
  <header class="topic-head">
    <p class="eyebrow">${T.topicEyebrow(section.short, t.syllabus, index + 1, section.topics.length)}</p>
    <h2>${t.title}</h2>
    ${t.enTitle ? `<p class="en-title" lang="en">${t.enTitle}</p>` : ''}
    <label class="done-toggle"><input type="checkbox" data-done="${t.id}"> ${T.markDone}</label>
  </header>

  <section class="analogy" aria-label="${T.analogyLabel}">
    <p class="analogy-tag">${T.analogyTag}</p>
    <h3>${a.title}</h3>
    <p>${a.story}</p>
    <table class="map">
      <thead><tr><th scope="col">${T.mapHead[0]}</th><th scope="col">${T.mapHead[1]}</th></tr></thead>
      <tbody>${a.map.map(([x, y]) => `<tr><td>${x}</td><td>${y}</td></tr>`).join('')}</tbody>
    </table>
  </section>

  <section class="concept">
    <h3>${T.concept}</h3>
    ${t.concept.map((p) => `<p>${p}</p>`).join('\n    ')}
  </section>

  <section class="keypoints">
    <h3>${T.keyPoints}</h3>
    <ul>${t.keyPoints.map((k) => `<li>${k}</li>`).join('')}</ul>
  </section>

  <section class="example">
    <h3>${T.example}</h3>
    <p>${t.example.q}</p>
    ${codeBlock(t.example.code)}
    <details>
      <summary>${T.showSolution}</summary>
      <ol>${t.example.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
      <p class="answer"><b>${T.answer}:</b> ${t.example.answer}</p>
    </details>
  </section>

  <div class="tips">
    ${t.shortcut ? `<section class="tip shortcut"><h3>${T.shortcut}</h3><p>${t.shortcut}</p></section>` : ''}
    <section class="tip trap"><h3>${T.traps}</h3><ul>${t.traps.map((x) => `<li>${x}</li>`).join('')}</ul></section>
  </div>

  <section class="practice">
    <h3>${T.practice} <span class="muted">· ${T.practiceHint}</span></h3>
    ${t.practice.map((p, i) => renderMcq(p, i + 1, lang)).join('\n')}
  </section>
  <p class="back"><a href="#top">${T.backToTop}</a></p>
</article>`;
}

function groupBySyllabus(topics) {
  const groups = new Map();
  for (const t of topics) {
    if (!groups.has(t.syllabus)) groups.set(t.syllabus, []);
    groups.get(t.syllabus).push(t);
  }
  return groups;
}

function renderSection(rawSection, lang) {
  const T = UI[lang];
  const section = sec(rawSection, lang);
  const topics = section.topics.map((t) => view(t, lang));
  const groups = groupBySyllabus(topics);
  const toc = [...groups].map(([name, ts]) => `<div class="toc-group">
    <h3>${name}</h3>
    <ul>${ts.map((t) => `<li><a href="#${t.id}" data-chip="${t.id}">${t.title}</a></li>`).join('')}</ul>
  </div>`).join('');
  const qCount = topics.reduce((n, t) => n + t.practice.length, 0);
  const body = `<section class="hero" id="top">
  <p class="eyebrow">${T.sectionEyebrow(section.questions, section.questions * EXAM.marksPerQuestion)}</p>
  <h1>${section.name}</h1>
  <p class="lede">${section.blurb}</p>
  <div class="analogy small"><p class="analogy-tag">${T.sectionPicture}</p><p>${section.analogy}</p></div>
  <p class="official"><b>${T.official}:</b> ${section.official}</p>
  <div class="progress" data-progress="${topics.map((t) => t.id).join(' ')}">
    <div class="bar-track"><div class="bar-fill"></div></div>
    <p>${T.progress(topics.length, qCount, section.short).replace('DRILL', section.id)}</p>
  </div>
</section>
<nav class="toc" aria-label="${T.topicsLabel}">${toc}</nav>
${topics.map((t, i) => renderTopic(t, section, i, lang)).join('\n')}`;
  return page({
    lang,
    file: `${section.id}.html`,
    title: T.sectionTitle(section.name),
    description: T.sectionDesc(section.name),
    hue: section.hue,
    body,
  });
}

// ---------- home ----------

const TIME_PLAN = { maths: 35, reasoning: 30, english: 12, computer: 10 };

const HOME = {
  en: {
    title: 'MCA CET Prep · MAH-MCA-CET with analogies',
    description: 'Free MAH-MCA-CET preparation: every Maths, Reasoning, English and Computer topic explained with an everyday analogy, plus practice questions and a timed mock test.',
    eyebrow: 'MAH-MCA-CET · Maharashtra MCA entrance',
    h1: 'Every topic, explained with an everyday analogy',
    lede: (n) => `Free preparation for the MCA Common Entrance Test. Each of the ${n} topics starts with a picture from daily life (a cricket ball, a local train, a kirana shop) so the concept sticks, then gives the formulas, a worked example, the traps, and practice questions. Finish with a full-length timed mock test. <a href="mr/index.html" lang="mr" hreflang="mr">हे संकेतस्थळ मराठीतही वाचा →</a>`,
    stats: ['questions', 'marks', 'minutes', 'negative marking'],
    sections: 'The four sections',
    card: (q, m, min) => `${q} Q · ${m} marks · ~${min} min`,
    cardDone: (n) => `<span class="done-count">0</span> / ${n} topics done`,
    glance: 'Exam at a glance',
    facts: [
      ['Pattern', `${EXAM.questions} multiple-choice questions (4 options), ${EXAM.marksPerQuestion} marks each, ${EXAM.marks} marks total.`],
      ['Time', `${EXAM.minutes} minutes for the whole paper. There is no separate timer per section; you can attempt any question at any time.`],
      ['Negative marking', 'none. An unanswered question scores zero.'],
      ['Mode and medium', `${EXAM.mode}, in ${EXAM.medium} only.`],
      ['Eligibility', EXAM.eligibility],
    ],
    source: `Source: official ${EXAM.brochureYear} brochure. The ${EXAM.brochureYear + 1} brochure may change details; check <a href="${EXAM.officialSite}">cetcell.mahacet.org</a>.`,
    strategy: 'Exam-day strategy',
    strategyTag: 'Think of it like…',
    strategyAnalogy: 'A farmer picking cotton before the rain. Pick the full, easy bolls on every plant first, then come back for the hard ones. Never stand at one stubborn plant while the whole field waits.',
    strategySteps: [
      ['Two passes.', 'First pass: answer everything you can do in under a minute; mark the rest. Second pass: return to marked questions.'],
      ['Leave nothing blank.', 'With no negative marking, a blank is a guaranteed zero. The brochure advises against <i>random</i> guessing, so eliminate the options you know are wrong first, then choose.'],
      ['Bank time on English and Computer.', 'They are mostly recall: aim for ~12 and ~10 minutes, leaving ~35 for Maths and ~30 for Reasoning.'],
      ['Paper for reasoning.', 'Draw the family tree, the direction arrows, the seating circle. Solving in your head is where reasoning marks are lost.'],
    ],
    plan: '8-week study plan',
    planNote: 'Each week mixes all four sections so nothing goes cold. Topics you tick as done show a check here too.',
    week: (i) => `Week ${i}`,
    cta: 'Ready to test yourself?',
    ctaText: `The mock test draws ${EXAM.questions} questions in the real 30/30/20/20 split, runs a ${EXAM.minutes}-minute timer, and shows a section-wise score with explanations.`,
    ctaMock: 'Start a mock test',
    ctaRevision: 'Quick revision sheet',
  },
  mr: {
    title: 'MCA CET तयारी · प्रत्येक विषय उपमेसह, मराठीत',
    description: 'MAH-MCA-CET ची मोफत तयारी मराठीत: गणित, तर्कशक्ती, इंग्रजी आणि संगणकाचा प्रत्येक विषय रोजच्या जीवनातील उपमेने समजावलेला, सराव प्रश्न आणि वेळेसह सराव परीक्षा.',
    eyebrow: 'MAH-MCA-CET · महाराष्ट्र MCA प्रवेश परीक्षा',
    h1: 'प्रत्येक विषय, रोजच्या जीवनातील उपमेने',
    lede: (n) => `MCA सामाईक प्रवेश परीक्षेची मोफत तयारी, मराठीत. सर्व ${n} विषयांची सुरुवात रोजच्या आयुष्यातील एका चित्राने होते (क्रिकेटचा चेंडू, लोकल ट्रेन, किराणा दुकान), त्यामुळे संकल्पना पक्की बसते. नंतर सूत्रे, सोडवलेले उदाहरण, नेहमीच्या चुका आणि सराव प्रश्न. शेवटी पूर्ण वेळेची सराव परीक्षा. <b>परीक्षा फक्त इंग्रजीत असते</b>, म्हणून प्रश्न इंग्रजीतच ठेवले आहेत आणि प्रत्येक प्रश्नाखाली त्याचा मराठी अर्थ दिला आहे.`,
    stats: ['प्रश्न', 'गुण', 'मिनिटे', 'निगेटिव्ह मार्किंग'],
    sections: 'चार विभाग',
    card: (q, m, min) => `${q} प्रश्न · ${m} गुण · ~${min} मिनिटे`,
    cardDone: (n) => `<span class="done-count">0</span> / ${n} विषय पूर्ण`,
    glance: 'परीक्षा एका नजरेत',
    facts: [
      ['स्वरूप', `${EXAM.questions} बहुपर्यायी प्रश्न (4 पर्याय), प्रत्येकी ${EXAM.marksPerQuestion} गुण, एकूण ${EXAM.marks} गुण.`],
      ['वेळ', `संपूर्ण पेपरसाठी ${EXAM.minutes} मिनिटे. प्रत्येक विभागासाठी वेगळा टायमर नाही; कोणताही प्रश्न केव्हाही सोडवता येतो.`],
      ['निगेटिव्ह मार्किंग', 'नाही. न सोडवलेल्या प्रश्नाला शून्य गुण.'],
      ['पद्धत व माध्यम', 'ऑनलाइन (संगणकावर), केवळ इंग्रजी माध्यम.'],
      ['पात्रता', 'कोणतीही पदवी (B.E./B.Tech/B.Sc/B.Com/B.Voc/BCA इ.), शक्यतो 12वी किंवा पदवी स्तरावर गणितासह, किमान 50% गुण (महाराष्ट्रातील राखीव प्रवर्ग, EWS व दिव्यांग उमेदवारांसाठी 45%). अंतिम वर्षातील विद्यार्थीही परीक्षा देऊ शकतात.'],
    ],
    source: `स्रोत: अधिकृत ${EXAM.brochureYear} माहितीपुस्तिका. ${EXAM.brochureYear + 1} च्या माहितीपुस्तिकेत बदल असू शकतात; <a href="${EXAM.officialSite}">cetcell.mahacet.org</a> वर तपासा.`,
    strategy: 'परीक्षेच्या दिवशीची रणनीती',
    strategyTag: 'असं समजा…',
    strategyAnalogy: 'पाऊस येण्याआधी कापूस वेचणारा शेतकरी. आधी प्रत्येक झाडावरची पूर्ण उमललेली, सहज हाती येणारी बोंडं वेचायची, आणि अवघड बोंडांसाठी नंतर परत यायचं. एका हट्टी झाडापाशी उभं राहून संपूर्ण शेत थांबवायचं नाही.',
    strategySteps: [
      ['दोन फेऱ्या.', 'पहिली फेरी: एका मिनिटात सुटणारे सगळे प्रश्न सोडवा, बाकीच्यांवर खूण करा. दुसरी फेरी: खूण केलेल्या प्रश्नांकडे परत या.'],
      ['एकही प्रश्न सोडू नका.', 'निगेटिव्ह मार्किंग नसल्यामुळे रिकामा प्रश्न म्हणजे खात्रीचा शून्य. माहितीपुस्तिका <i>अंदाधुंद</i> अंदाज न लावण्याचा सल्ला देते, म्हणून आधी नक्की चुकीचे पर्याय बाद करा, मग निवडा.'],
      ['इंग्रजी व संगणकात वेळ वाचवा.', 'हे विभाग मुख्यतः आठवणीवर आधारित आहेत: सुमारे 12 व 10 मिनिटे ठेवा, म्हणजे गणितासाठी ~35 आणि तर्कशक्तीसाठी ~30 मिनिटे उरतात.'],
      ['तर्कशक्तीसाठी कागद वापरा.', 'वंशवृक्ष, दिशांचे बाण, बैठकीचे वर्तुळ काढा. डोक्यातच सोडवल्यामुळे तर्कशक्तीचे गुण जातात.'],
    ],
    plan: '8 आठवड्यांचा अभ्यास आराखडा',
    planNote: 'प्रत्येक आठवड्यात चारही विभाग मिसळले आहेत, म्हणजे कोणताही विषय विसरला जात नाही. तुम्ही पूर्ण म्हणून खूण केलेले विषय इथेही ✓ सह दिसतात.',
    week: (i) => `आठवडा ${i}`,
    cta: 'स्वतःची परीक्षा घ्यायला तयार?',
    ctaText: `सराव परीक्षेत खऱ्या परीक्षेप्रमाणे 30/30/20/20 विभागणीत ${EXAM.questions} प्रश्न येतात, ${EXAM.minutes} मिनिटांचा टायमर चालतो, आणि शेवटी विभागवार गुण व स्पष्टीकरणे दिसतात.`,
    ctaMock: 'सराव परीक्षा सुरू करा',
    ctaRevision: 'झटपट उजळणी पत्रक',
  },
};

function renderHome(lang) {
  const H = HOME[lang];
  const stats = [EXAM.questions, EXAM.marks, EXAM.minutes, '0']
    .map((v, i) => `<div class="stat"><b>${v}</b><span>${H.stats[i]}</span></div>`).join('');

  const cards = SECTIONS.map((raw) => {
    const s = sec(raw, lang);
    return `<a class="card" href="${s.id}.html" style="--hue:${s.hue}">
    <span class="card-tag">${H.card(s.questions, s.questions * EXAM.marksPerQuestion, TIME_PLAN[s.id])}</span>
    <h3>${s.name}</h3>
    <p>${s.blurb}</p>
    <div class="progress" data-progress="${s.topics.map((t) => t.id).join(' ')}">
      <div class="bar-track"><div class="bar-fill"></div></div>
      <p>${H.cardDone(s.topics.length)}</p>
    </div>
  </a>`;
  }).join('');

  const plan = STUDY_PLAN.map((w, i) => {
    const focus = lang === 'mr' ? PLAN_MR[i].focus : w.focus;
    const note = lang === 'mr' ? PLAN_MR[i].note : w.note;
    const chips = (w.topics ?? []).filter(topicById).map((id) => {
      const s = sectionOf(id);
      return `<a class="chip" style="--hue:${s.hue}" href="${s.id}.html#${id}" data-chip="${id}">${view(topicById(id), lang).title}</a>`;
    }).join(' ');
    return `<tr>
    <th scope="row">${H.week(i + 1)}</th>
    <td><b>${focus}</b>${chips ? `<br>${chips}` : ''}${note ? `<br><span class="muted">${note}</span>` : ''}</td>
  </tr>`;
  }).join('');

  const body = `<section class="hero">
  <p class="eyebrow">${H.eyebrow}</p>
  <h1>${H.h1}</h1>
  <p class="lede">${H.lede(topicCount)}</p>
  <div class="stats">${stats}</div>
</section>

<section>
  <h2>${H.sections}</h2>
  <div class="cards">${cards}</div>
</section>

<section class="two-col">
  <div>
    <h2>${H.glance}</h2>
    <ul class="facts">${H.facts.map(([k, v]) => `<li><b>${k}:</b> ${v}</li>`).join('')}</ul>
    <p class="muted">${H.source}</p>
  </div>
  <div>
    <h2>${H.strategy}</h2>
    <div class="analogy small"><p class="analogy-tag">${H.strategyTag}</p><p>${H.strategyAnalogy}</p></div>
    <ol class="facts">${H.strategySteps.map(([k, v]) => `<li><b>${k}</b> ${v}</li>`).join('')}</ol>
  </div>
</section>

<section>
  <h2>${H.plan}</h2>
  <p class="muted">${H.planNote}</p>
  <div class="table-wrap"><table class="plan">${plan}</table></div>
</section>

<section class="cta">
  <h2>${H.cta}</h2>
  <p>${H.ctaText}</p>
  <p><a class="button" href="mock.html">${H.ctaMock}</a> <a class="button ghost" href="revision.html">${H.ctaRevision}</a></p>
</section>`;
  return page({ lang, file: 'index.html', title: H.title, description: H.description, body });
}

// ---------- revision + mock ----------

const REVISION = {
  en: {
    eyebrow: 'Last-week revision',
    h1: 'Revision sheet',
    lede: 'One line of analogy and the key formulas for every topic. Read it the night before; if a line doesn\'t trigger the full idea, open that topic again.',
    print: 'Print this sheet',
    title: 'Revision sheet · MCA CET Prep',
    description: 'One-page MAH-MCA-CET revision: the analogy and key formulas for every topic.',
  },
  mr: {
    eyebrow: 'शेवटच्या आठवड्याची उजळणी',
    h1: 'उजळणी पत्रक',
    lede: 'प्रत्येक विषयाची एका ओळीतील उपमा आणि महत्त्वाची सूत्रे. परीक्षेच्या आदल्या रात्री वाचा; एखादी ओळ वाचून पूर्ण संकल्पना आठवत नसेल, तर तो विषय पुन्हा उघडा.',
    print: 'हे पत्रक प्रिंट करा',
    title: 'उजळणी पत्रक · MCA CET तयारी',
    description: 'MAH-MCA-CET ची एका पानावर उजळणी: प्रत्येक विषयाची उपमा आणि महत्त्वाची सूत्रे, मराठीत.',
  },
};

function renderRevision(lang) {
  const R = REVISION[lang];
  const body = `<section class="hero">
  <p class="eyebrow">${R.eyebrow}</p>
  <h1>${R.h1}</h1>
  <p class="lede">${R.lede}</p>
  <p><button class="button ghost print" type="button">${R.print}</button></p>
</section>
${SECTIONS.map((raw) => {
    const s = sec(raw, lang);
    return `<section class="rev-section" style="--hue:${s.hue}">
  <h2>${s.name}</h2>
  <div class="rev-grid">${s.topics.map((raw2) => {
      const t = view(raw2, lang);
      return `<article class="rev">
    <h3><a href="${s.id}.html#${t.id}">${t.title}</a></h3>
    <p class="rev-analogy"><b>${t.analogy.title}:</b> ${t.analogy.oneLine}</p>
    <ul>${t.keyPoints.map((k) => `<li>${k}</li>`).join('')}</ul>
  </article>`;
    }).join('')}</div>
</section>`;
  }).join('\n')}`;
  return page({ lang, file: 'revision.html', title: R.title, description: R.description, body });
}

const MOCK = {
  en: {
    eyebrow: 'Practice under exam conditions',
    h1: 'Mock test',
    lede: (n) => `Questions are drawn at random from the ${n}-question bank and options are shuffled, so every attempt is different.`,
    title: 'Mock test · MCA CET Prep',
    description: 'Timed MAH-MCA-CET mock test: 100 questions, 90 minutes, section-wise score and explanations.',
    noscript: 'The mock test needs JavaScript.',
  },
  mr: {
    eyebrow: 'परीक्षेसारख्या वातावरणात सराव',
    h1: 'सराव परीक्षा',
    lede: (n) => `${n} प्रश्नांच्या संग्रहातून प्रश्न यादृच्छिक पद्धतीने निवडले जातात आणि पर्यायांचा क्रमही बदलतो, त्यामुळे प्रत्येक वेळी नवी परीक्षा. प्रश्न खऱ्या परीक्षेप्रमाणे इंग्रजीत; हवे तेव्हा मराठी अर्थ पाहता येतो.`,
    title: 'सराव परीक्षा · MCA CET तयारी',
    description: 'वेळेसह MAH-MCA-CET सराव परीक्षा: 100 प्रश्न, 90 मिनिटे, विभागवार गुण आणि मराठी स्पष्टीकरणे.',
    noscript: 'सराव परीक्षेसाठी JavaScript आवश्यक आहे.',
  },
};

function renderMock(lang) {
  const M = MOCK[lang];
  const body = `<section class="hero">
  <p class="eyebrow">${M.eyebrow}</p>
  <h1>${M.h1}</h1>
  <p class="lede">${M.lede(questionCount)}</p>
</section>
<div id="mock" class="mock"><noscript>${M.noscript}</noscript></div>`;
  return page({ lang, file: 'mock.html', title: M.title, description: M.description, body, scripts: ['assets/bank.js', 'assets/mock.js'] });
}

function renderBank() {
  const bank = SECTIONS.map((s) => ({
    id: s.id,
    name: { en: s.name, mr: SECTION_MR[s.id].name },
    short: { en: s.short, mr: SECTION_MR[s.id].short },
    hue: s.hue,
    questions: s.questions,
    items: s.topics.flatMap((t) => {
      const tr = MR[t.id];
      return t.practice.map((p, i) => ({
        id: `${t.id}-${i + 1}`,
        topic: t.id,
        topicTitle: { en: t.title, mr: tr?.title ?? t.title },
        q: p.q,
        qMr: tr?.practice[i].q || undefined,
        code: p.code ? esc(p.code.replace(/^\n+|\s+$/g, '')) : undefined,
        options: p.options.map(String),
        answer: p.answer,
        why: { en: p.why, mr: tr?.practice[i].why ?? p.why },
      }));
    }),
  }));
  return `window.MCA_BANK = ${JSON.stringify({ minutes: EXAM.minutes, marksPerQuestion: EXAM.marksPerQuestion, sections: bank })};\n`;
}

// ---------- write ----------

await rm(OUT, { recursive: true, force: true });
await mkdir(join(OUT, 'assets'), { recursive: true });
await mkdir(join(OUT, 'mr'), { recursive: true });
await cp(join(ROOT, 'src'), join(OUT, 'assets'), { recursive: true });
await writeFile(join(OUT, 'assets', 'bank.js'), renderBank());
await writeFile(join(OUT, '.nojekyll'), '');
let pages = 0;
for (const lang of ['en', 'mr']) {
  const dir = lang === 'en' ? OUT : join(OUT, 'mr');
  await writeFile(join(dir, 'index.html'), renderHome(lang));
  for (const s of SECTIONS) await writeFile(join(dir, `${s.id}.html`), renderSection(s, lang));
  await writeFile(join(dir, 'revision.html'), renderRevision(lang));
  await writeFile(join(dir, 'mock.html'), renderMock(lang));
  pages += 3 + SECTIONS.length;
}
console.log(`built ${pages} pages into site/ and site/mr/`);
