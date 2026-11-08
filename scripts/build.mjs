// Builds the static site from content/ into site/ (English) and site/mr/ (Marathi). No dependencies.
//   node scripts/build.mjs          validate + build
//   node scripts/build.mjs --check  validate only (exit 1 on errors)
//   node scripts/build.mjs --draft  build even if the study plan or Marathi translations are incomplete
//   node scripts/build.mjs --redirect https://host   validate, then emit only redirect stubs to that host
//                                     (used by the old GitHub Pages address after the move)

import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { STUDY_PLAN } from '../content/plan.mjs';
import { ABOUT_UI, SITES, UI } from '../content/i18n.mjs';
import { ABOUT, EXAM, FOOT, HOME, HOME_EXTRA, MOCK, PAPERS, SECTIONS, SYLLABUS_MR } from '../content/exam.mjs';
import { OBSERVED_TYPES, PAPER_SOURCES } from '../content/papers.mjs';
import { TERMS } from '../content/terms.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'site');
const CHECK_ONLY = process.argv.includes('--check');
const DRAFT = process.argv.includes('--draft');
const REDIRECT = process.argv.includes('--redirect') ? (process.argv[process.argv.indexOf('--redirect') + 1] ?? '').replace(/\/+$/, '') : null;
if (process.argv.includes('--redirect') && !/^https?:\/\//.test(REDIRECT)) { console.error('--redirect needs a URL'); process.exit(1); }
const LENIENT = CHECK_ONLY || DRAFT; // incomplete plan / translations are warnings, not errors
const REPO_URL = EXAM.repo;

const errors = [];
const warnings = [];
const importFresh = (file) => import(`${pathToFileURL(file).href}?t=${Date.now()}`);

// ---------- load ----------

// A section's topics live in content/<id>.mjs, or split across content/<id>-1.mjs, <id>-2.mjs …
for (const section of SECTIONS) {
  const files = (await readdir(join(ROOT, 'content')))
    .filter((f) => f === `${section.id}.mjs` || (f.startsWith(`${section.id}-`) && f.endsWith('.mjs')))
    .sort();
  section.topics = [];
  if (!files.length) {
    warnings.push(`content/${section.id}.mjs does not exist yet`);
    continue;
  }
  for (const f of files) section.topics.push(...((await importFresh(join(ROOT, 'content', f))).default ?? []));
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

const VOCAB_FILE = join(ROOT, 'content', 'vocab.mjs');
const VOCAB = existsSync(VOCAB_FILE) ? ((await importFresh(VOCAB_FILE)).default ?? []) : null;

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
for (const o of OBSERVED_TYPES) {
  if (o.topic && !seenIds.has(o.topic)) (LENIENT ? warnings : errors).push(`papers: unknown topic id "${o.topic}"`);
}
if (!VOCAB) { if (EXAM.features.words) (LENIENT ? warnings : errors).push('content/vocab.mjs is missing'); }
else {
  const seenWords = new Set();
  VOCAB.forEach((w, i) => {
    const at = `vocab[${i}]${w?.word ? ` (${w.word})` : ''}`;
    if (!/^[a-z][a-z-]*$/.test(w?.word ?? '')) errors.push(`${at}: word must be lowercase letters`);
    if (seenWords.has(w?.word)) errors.push(`${at}: duplicate word`);
    seenWords.add(w?.word);
    if (!['noun', 'verb', 'adj', 'adv'].includes(w?.pos)) errors.push(`${at}.pos: expected noun/verb/adj/adv`);
    for (const k of ['meaning', 'mr', 'eg']) checkHtml(`${at}.${k}`, w?.[k]);
    if (!Array.isArray(w?.syn) || w.syn.length < 2 || w.syn.length > 3) errors.push(`${at}.syn: expected 2–3 synonyms`);
    if (!Array.isArray(w?.ant) || w.ant.length < 1 || w.ant.length > 2) errors.push(`${at}.ant: expected 1–2 antonyms`);
    for (const x of [...(w?.syn ?? []), ...(w?.ant ?? [])]) if (x === w?.word) errors.push(`${at}: a word cannot be its own synonym or antonym`);
  });
}
STUDY_PLAN.forEach((w, i) => { if (!w.focus?.en || !w.focus?.mr) errors.push(`plan week ${i + 1}: focus needs en and mr`); });

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
const topicCount = SECTIONS.reduce((n, s) => n + s.topics.length, 0);
const questionCount = SECTIONS.reduce((n, s) => n + s.topics.reduce((m, t) => m + (t.practice?.length ?? 0), 0), 0);
const translated = SECTIONS.reduce((n, s) => n + s.topics.filter((t) => MR[t.id]).length, 0);
console.log(`${topicCount} topics (${translated} in Marathi), ${questionCount} practice questions, ${VOCAB?.length ?? 0} words, ${errors.length} error(s), ${warnings.length} warning(s)`);
if (errors.length) process.exit(1);
if (CHECK_ONLY) process.exit(0);

// ---------- render helpers ----------

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sectionOf = (id) => SECTIONS.find((s) => s.topics.some((t) => t.id === id));
const topicById = (id) => sectionOf(id)?.topics.find((t) => t.id === id);
const codeBlock = (code) => (code ? `<pre class="code" lang="en"><code>${esc(code.replace(/^\n+|\s+$/g, ''))}</code></pre>` : '');

// Localised views of section metadata and topics. A topic without a translation renders in English.
const sec = (s, lang) => ({ ...s, name: s.name[lang], short: s.short[lang], blurb: s.blurb[lang], official: s.official[lang], analogy: s.analogy[lang] });
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
    ['about.html', T.nav.about],
    ['plan.html', T.nav.plan],
    ...SECTIONS.map((s) => [`${s.id}.html`, sec(s, lang).short]),
    ...(EXAM.features.words ? [['words.html', T.nav.words]] : []),
    ['revision.html', T.nav.revision],
    ['papers.html', T.nav.papers],
    ['mock.html', T.nav.mock],
  ].map(([href, label]) => `<a href="${href}"${href === file ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const other = lang === 'en' ? `mr/${file}` : `../${file}`;
  const otherLang = lang === 'en' ? 'mr' : 'en';
  return `<!doctype html>
<html lang="${T.htmlLang}" data-sw="${up}sw.js" data-site="${EXAM.id}"${EXAM.analytics?.amplitudeKey ? ` data-amp-key="${EXAM.analytics.amplitudeKey}"` : ''}>
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
    <a class="brand" href="index.html"><span class="logo" aria-hidden="true">${EXAM.logo}</span><span>${EXAM.brand[lang]}</span></a>
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
  <p>${FOOT[lang].source}</p>
  <p>${T.footRepo(REPO_URL, EXAM.issues)}</p>
  <p class="foot-sites">${T.footSites} ${SITES.filter((x) => x.id !== EXAM.id).map((x) => `<a href="${x.url}${lang === 'mr' ? 'mr/' : ''}">${x.name[lang]}</a>`).join(' · ')}</p>
  <p class="foot-terms">${FOOT[lang].terms}</p>
</footer>
${scripts.filter((s) => /-data\.js$|\/bank\.js$/.test(s)).map((s) => `<script src="${up}${s}"></script>`).join('\n')}
<script src="${up}assets/app.js"></script>
${scripts.filter((s) => !/-data\.js$|\/bank\.js$/.test(s)).map((s) => `<script src="${up}${s}"></script>`).join('\n')}
</body>
</html>
`;
}

function renderMcq(p, n, lang, topicId) {
  return `<div class="mcq" data-answer="${p.answer}" data-qid="${topicId}-${n}">
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
    ${t.practice.map((p, i) => renderMcq(p, i + 1, lang, t.id)).join('\n')}
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
    title: T.sectionTitle(section.name, EXAM.brand[lang]),
    description: T.sectionDesc(section.name, EXAM.examName),
    hue: section.hue,
    body,
  });
}

// ---------- home ----------




function renderHome(lang) {
  const H = HOME[lang];
  const X = HOME_EXTRA[lang];
  const allTopicIds = SECTIONS.flatMap((s) => s.topics.map((t) => t.id)).join(' ');
  const labels = Object.fromEntries(SECTIONS.map((s) => [s.id, sec(s, lang).short]));
  const stats = [EXAM.questions, EXAM.marks, EXAM.minutes, EXAM.negativeMarks ? `−${EXAM.negativeMarks}` : '0']
    .map((v, i) => `<div class="stat"><b>${v}</b><span>${H.stats[i]}</span></div>`).join('');

  const cards = SECTIONS.map((raw) => {
    const s = sec(raw, lang);
    return `<a class="card" href="${s.id}.html" style="--hue:${s.hue}">
    <span class="card-tag">${H.card(s.questions, s.questions * EXAM.marksPerQuestion, s.minutes)}</span>
    <h3>${s.name}</h3>
    <p>${s.blurb}</p>
    <div class="progress" data-progress="${s.topics.map((t) => t.id).join(' ')}">
      <div class="bar-track"><div class="bar-fill"></div></div>
      <p>${H.cardDone(s.topics.length)}</p>
    </div>
  </a>`;
  }).join('');

  const plan = STUDY_PLAN.map((w, i) => {
    const focus = w.focus[lang];
    const note = w.note?.[lang];
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
  <div class="start-here"><span class="eyebrow">${X.startHere}</span> <a class="button" href="mock.html#diag">${X.diag}</a> <span class="hint">${X.diagHint}</span> <a class="button ghost" href="plan.html">${X.dailyLink}</a></div>
</section>

<section class="you" data-you hidden data-you-topics="${allTopicIds}" data-you-labels="${esc(JSON.stringify(labels))}">
  <h2>${X.you}</h2>
  <div class="stats">
    <div class="stat"><b data-you-done>0</b><span>${X.youDone(topicCount)}</span></div>
    <div class="stat"><b data-you-mock>–</b><span>${X.youMock}</span></div>
    <div class="stat"><b data-you-wrong>0</b><span>${X.youWrong}</span></div>
  </div>
  <p data-you-diag hidden><b>${X.youDiag}:</b> <span data-you-diag-text></span> · <a href="mock.html#diag">${X.retake}</a></p>
  <p data-you-today hidden><b>${X.todayLabel}:</b> <span data-you-today-text></span></p>
  <p><a class="button ghost" href="mock.html#retry" data-you-retry hidden>${X.retry}</a></p>
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
  <h2>${H.plan} <a class="plan-link" href="plan.html">${X.dailyLink}</a></h2>
  <p class="muted">${H.planNote}</p>
  <div class="table-wrap"><table class="plan">${plan}</table></div>
</section>

<section id="exam-day">
  <h2>${X.examDay}</h2>
  <p class="muted">${X.examDayNote}</p>
  <ul class="checklist">${X.checklist.map((c) => `<li>${c}</li>`).join('')}</ul>
</section>

<section class="cta">
  <h2>${H.cta}</h2>
  <p>${H.ctaText}</p>
  <p><a class="button" href="mock.html">${H.ctaMock}</a> <a class="button ghost" href="revision.html">${H.ctaRevision}</a></p>
</section>`;
  return page({ lang, file: 'index.html', title: H.title, description: H.description, body, scripts: ['assets/plan-data.js'] });
}

// ---------- revision + mock ----------

const REVISION = {
  en: {
    eyebrow: 'Last-week revision',
    h1: 'Revision sheet',
    lede: 'One line of analogy and the key formulas for every topic. Read it the night before; if a line doesn\'t trigger the full idea, open that topic again.',
    print: 'Print this sheet',
    title: `Revision sheet · ${EXAM.brand.en}`,
    description: `One-page ${EXAM.examName} revision: the analogy and key formulas for every topic.`,
  },
  mr: {
    eyebrow: 'शेवटच्या आठवड्याची उजळणी',
    h1: 'उजळणी पत्रक',
    lede: 'प्रत्येक विषयाची एका ओळीतील उपमा आणि महत्त्वाची सूत्रे. परीक्षेच्या आदल्या रात्री वाचा; एखादी ओळ वाचून पूर्ण संकल्पना आठवत नसेल, तर तो विषय पुन्हा उघडा.',
    print: 'हे पत्रक प्रिंट करा',
    title: `उजळणी पत्रक · ${EXAM.brand.mr}`,
    description: `${EXAM.examName} ची एका पानावर उजळणी: प्रत्येक विषयाची उपमा आणि महत्त्वाची सूत्रे, मराठीत.`,
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
${renderSpeedMaths(lang)}
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

const SPEED = {
  en: {
    title: 'Speed maths: know these cold',
    note: 'Every value below is a tool you should not have to compute in the hall. The numbers are generated by the build, not typed, so they are exact.',
    squares: 'Squares', cubes: 'Cubes', pow2: 'Powers of 2', frac: 'Fraction ↔ percent', div: 'Divisibility rules', consts: 'Constants and logs', trig: 'Trig values',
    divHead: ['By', 'Rule'],
    divRules: [['2', 'last digit even'], ['3', 'digit sum divisible by 3'], ['4', 'last two digits divisible by 4'], ['5', 'ends in 0 or 5'], ['6', 'divisible by both 2 and 3'], ['8', 'last three digits divisible by 8'], ['9', 'digit sum divisible by 9'], ['11', '(sum of odd-place digits) − (sum of even-place digits) is 0 or a multiple of 11']],
  },
  mr: {
    title: 'झटपट गणित: हे पाठ असलेच पाहिजे',
    note: 'खालील प्रत्येक किंमत तोंडपाठ असावी; परीक्षा हॉलमध्ये ती मोजत बसायची नाही. या संख्या टाइप केलेल्या नाहीत, build ने तयार केलेल्या आहेत, त्यामुळे अचूक आहेत.',
    squares: 'वर्ग', cubes: 'घन', pow2: '2 चे घात', frac: 'अपूर्णांक ↔ टक्केवारी', div: 'विभाज्यतेचे नियम', consts: 'स्थिरांक व लॉग', trig: 'त्रिकोणमितीय किंमती',
    divHead: ['भाजक', 'नियम'],
    divRules: [['2', 'शेवटचा अंक सम'], ['3', 'अंकांची बेरीज 3 ने भाग जाणारी'], ['4', 'शेवटचे दोन अंक 4 ने भाग जाणारे'], ['5', 'शेवटी 0 किंवा 5'], ['6', '2 आणि 3 दोन्हींनी भाग जाणारी'], ['8', 'शेवटचे तीन अंक 8 ने भाग जाणारे'], ['9', 'अंकांची बेरीज 9 ने भाग जाणारी'], ['11', '(विषम स्थानांच्या अंकांची बेरीज) − (सम स्थानांच्या अंकांची बेरीज) 0 किंवा 11 च्या पटीत']],
  },
};

function renderSpeedMaths(lang) {
  const S = SPEED[lang];
  const table = (head, rows) => `<table><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const columns = (pairs, cols) => {
    const rows = [];
    for (let i = 0; i < pairs.length; i += cols) rows.push(pairs.slice(i, i + cols).flat());
    return rows;
  };
  const pct = (x) => `${(100 * x).toFixed(2).replace(/\.?0+$/, '')}%`;
  const squares = Array.from({ length: 30 }, (_, i) => [`${i + 1}²`, String((i + 1) ** 2)]);
  const cubes = Array.from({ length: 15 }, (_, i) => [`${i + 1}³`, String((i + 1) ** 3)]);
  const pow2 = Array.from({ length: 17 }, (_, i) => [`2<sup>${i}</sup>`, String(2 ** i)]);
  const fracs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 20, 25].map((d) => [`1/${d}`, pct(1 / d)]);
  const consts = [['√2', '1.414'], ['√3', '1.732'], ['√5', '2.236'], ['π', '3.1416 ≈ 22/7'], ['e', '2.718'], ['log<sub>10</sub> 2', '0.3010'], ['log<sub>10</sub> 3', '0.4771'], ['log<sub>10</sub> 7', '0.8451'], ['ln 10', '2.3026']];
  const trig = [['sin', '0', '1/2', '1/√2', '√3/2', '1'], ['cos', '1', '√3/2', '1/√2', '1/2', '0'], ['tan', '0', '1/√3', '1', '√3', '—']];
  const card = (title, html) => `<article class="rev"><h3>${title}</h3>${html}</article>`;
  return `<section class="rev-section speed-section">
  <h2>${S.title}</h2>
  <p class="muted">${S.note}</p>
  <div class="speed">
    ${card(S.squares, table(['n', 'n²', 'n', 'n²', 'n', 'n²'], columns(squares, 3)))}
    ${card(S.cubes, table(['n', 'n³', 'n', 'n³', 'n', 'n³'], columns(cubes, 3)))}
    ${card(S.pow2, table(['2ⁿ', '', '2ⁿ', '', '2ⁿ', ''], columns(pow2, 3)))}
    ${card(S.frac, table(['', '%', '', '%'], columns(fracs, 2)))}
    ${card(S.div, table(S.divHead, S.divRules))}
    ${card(S.consts, table(['', ''], consts))}
    ${card(S.trig, table(['', '0°', '30°', '45°', '60°', '90°'], trig))}
  </div>
</section>`;
}


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


function renderPapers(lang) {
  const P = PAPERS[lang];
  const rows = PAPER_SOURCES.map((src) => `<tr>
      <td><b>${src.name[lang]}</b><br><span class="muted">${src.note[lang]}</span></td>
      <td>${src.years[lang]}</td>
      <td><span class="badge badge-${src.kind}">${P.kinds[src.kind]}</span></td>
      <td>${src.access[lang]}<br><a href="${src.url}" rel="noopener">${P.open} ↗</a></td>
    </tr>`).join('');
  const types = OBSERVED_TYPES.map((o) => {
    if (!o.topic) return `<tr><td>${o[lang]}</td><td><span class="badge badge-memory">${P.gap}</span></td></tr>`;
    const s = sectionOf(o.topic);
    return `<tr><td>${o[lang]}</td><td><a class="chip" style="--hue:${s.hue}" href="${s.id}.html#${o.topic}" data-chip="${o.topic}">${view(topicById(o.topic), lang).title}</a></td></tr>`;
  }).join('');
  const body = `<section class="hero">
  <p class="eyebrow">${P.eyebrow}</p>
  <h1>${P.h1}</h1>
  <p class="lede">${P.lede}</p>
</section>
<section>
  <h2>${P.sources}</h2>
  <div class="table-wrap"><table class="plan sources">
    <thead><tr>${P.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  <section class="tip trap"><p>${P.caution}</p></section>
</section>
${OBSERVED_TYPES.length ? `<section>
  <h2>${P.types}</h2>
  <p class="muted">${P.typesNote}</p>
  <div class="table-wrap"><table class="plan">
    <thead><tr>${P.typesHead.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>${types}</tbody>
  </table></div>
</section>` : ''}
<section>
  <h2>${P.howto}</h2>
  <ol class="facts">${P.steps.map(([k, v]) => `<li><b>${k}</b> ${v}</li>`).join('')}</ol>
</section>`;
  return page({ lang, file: 'papers.html', title: P.title, description: P.description, body });
}

const VOCAB_UI = {
  en: {
    title: `Word list · ${EXAM.brand.en}`,
    description: '200 high-frequency exam words with meanings, synonyms, antonyms, Marathi meanings, flashcards and a synonym quiz.',
    eyebrow: 'Vocabulary',
    h1: (n) => `${n} words for the English section`,
    lede: 'The study plan says ten new words a day. Here they are: twenty days of ten, each with its meaning, synonyms, antonyms, Marathi meaning and a sentence. Practise with flashcards, then take the quiz; words you miss collect under “Didn’t know” so you can drill only those.',
    dayNav: 'Jump to a day',
    day: 'Day',
    i18n: { scope: 'Choose words', all: 'All words', unknown: 'Didn’t know', day: 'Day', flashcards: 'Flashcards', quiz: 'Quiz (10 Q)', setupNote: 'Flashcards: see the word, recall the meaning, then check. Quiz: synonym and antonym questions made from the list, in exam style.', empty: 'No words in this set yet.', show: 'Show meaning', knew: 'Knew it', didnt: 'Didn’t know', stop: 'Stop', backToSetup: 'Back', cardsDone: '{n} cards done, {m} marked “didn’t know”.', quizDone: 'Score: {r} / {n}', missed: 'Words to revise:', quizAgain: 'Another 10', synOf: 'Synonym of', antOf: 'Antonym of', next: 'Next →', syn: 'Synonyms', ant: 'Antonyms', markUnknown: 'Didn’t know', marked: '✓ Marked' },
  },
  mr: {
    title: `शब्दसंग्रह · ${EXAM.brand.mr}`,
    description: 'परीक्षेत वारंवार येणारे 200 इंग्रजी शब्द: अर्थ, समानार्थी, विरुद्धार्थी, मराठी अर्थ, flashcards आणि समानार्थी शब्दांची प्रश्नमंजुषा.',
    eyebrow: 'शब्दसंग्रह',
    h1: (n) => `इंग्रजी विभागासाठी ${n} शब्द`,
    lede: 'अभ्यास आराखड्यात रोज दहा नवे शब्द सांगितले आहेत. ते इथे आहेत: वीस दिवस, रोज दहा; प्रत्येकाचा अर्थ, समानार्थी, विरुद्धार्थी, मराठी अर्थ आणि एक वाक्य. आधी flashcards ने सराव करा, मग प्रश्नमंजुषा द्या; चुकलेले शब्द “माहीत नव्हते” मध्ये जमा होतात, म्हणजे फक्त त्यांचाच पुन्हा सराव करता येतो.',
    dayNav: 'दिवस निवडा',
    day: 'दिवस',
    i18n: { scope: 'शब्द निवडा', all: 'सर्व शब्द', unknown: 'माहीत नव्हते', day: 'दिवस', flashcards: 'Flashcards', quiz: 'प्रश्नमंजुषा (10 प्रश्न)', setupNote: 'Flashcards: शब्द पाहा, अर्थ आठवा, मग तपासा. प्रश्नमंजुषा: यादीतून तयार होणारे परीक्षेसारखे समानार्थी/विरुद्धार्थी प्रश्न.', empty: 'या संचात अजून शब्द नाहीत.', show: 'अर्थ दाखवा', knew: 'माहीत होते', didnt: 'माहीत नव्हते', stop: 'थांबवा', backToSetup: 'मागे', cardsDone: '{n} कार्ड पूर्ण, त्यातील {m} “माहीत नव्हते”.', quizDone: 'गुण: {r} / {n}', missed: 'पुन्हा पाहायचे शब्द:', quizAgain: 'आणखी 10', synOf: 'समानार्थी शब्द निवडा:', antOf: 'विरुद्धार्थी शब्द निवडा:', next: 'पुढे →', syn: 'समानार्थी', ant: 'विरुद्धार्थी', markUnknown: 'माहीत नव्हते', marked: '✓ खूण केली' },
  },
};

function renderVocab(lang) {
  const U = VOCAB_UI[lang];
  const list = VOCAB ?? [];
  const days = Math.ceil(list.length / 10);
  const nav = Array.from({ length: days }, (_, i) => `<a href="#day-${i + 1}">${U.day} ${i + 1}</a>`).join('');
  const dayHtml = Array.from({ length: days }, (_, d) => {
    const ws = list.slice(d * 10, d * 10 + 10);
    return `<section class="rev-section" id="day-${d + 1}">
  <h2>${U.day} ${d + 1} <span class="muted" lang="en">· ${ws[0].word} – ${ws[ws.length - 1].word}</span></h2>
  <div class="rev-grid">${ws.map((w) => `<article class="word rev">
    <h3 lang="en">${w.word} <span class="pos">${w.pos}</span></h3>
    <p class="mean">${w.meaning}</p>
    <p><b>${U.i18n.syn}:</b> <span lang="en">${w.syn.join(', ')}</span></p>
    <p><b>${U.i18n.ant}:</b> <span lang="en">${w.ant.join(', ')}</span></p>
    <p class="mr-mean" lang="mr">${w.mr}</p>
    <p class="eg" lang="en"><i>${w.eg}</i></p>
    <button class="toggle" type="button" data-word-toggle="${w.word}" aria-pressed="false">${U.i18n.markUnknown}</button>
  </article>`).join('')}</div>
</section>`;
  }).join('');
  const body = `<section class="hero">
  <p class="eyebrow">${U.eyebrow}</p>
  <h1>${U.h1(list.length)}</h1>
  <p class="lede">${U.lede}</p>
  <div id="vocab-app" class="vocab" data-i18n="${esc(JSON.stringify(U.i18n))}"></div>
  <nav class="day-nav" aria-label="${U.dayNav}">${nav}</nav>
</section>
${dayHtml}`;
  return page({ lang, file: 'words.html', title: U.title, description: U.description, body, scripts: ['assets/vocab-data.js', 'assets/vocab.js'] });
}

// ---------- day-by-day plan ----------
// Generated from the weekly plan: each week's topics spread over days 1–6, day 7 is catch-up
// plus a drill or a full mock; ten words a day for the first twenty days, then word quizzes;
// week 8 is mocks and revision. The build cannot know the student's weakest section, so the
// drill task points at the mock page where the diagnostic result is shown.
const TASK = {
  diag: { en: 'Take the 20-question diagnostic', mr: '20 प्रश्नांची प्रारंभिक चाचणी द्या', href: 'mock.html#diag' },
  words: (d) => ({ en: `Words: Day ${d} (10 new words)`, mr: `शब्द: दिवस ${d} (10 नवे शब्द)`, href: `words.html#day-${d}`, words: true }),
  wordsQuiz: { en: 'Words: a 10-question quiz on all words', mr: 'शब्द: सर्व शब्दांवर 10 प्रश्नांची प्रश्नमंजुषा', href: 'words.html', words: true },
  wordsReview: { en: 'Words: flashcards of the words you didn’t know', mr: 'शब्द: माहीत नव्हते त्या शब्दांची flashcards', href: 'words.html', words: true },
  drill: { en: 'Drill: 10 questions from your weakest section', mr: 'झटपट सराव: सर्वात कमकुवत विभागाचे 10 प्रश्न', href: 'mock.html' },
  retry: { en: 'Retry my mistakes', mr: 'माझ्या चुका पुन्हा सोडवा', href: 'mock.html#retry' },
  catchUp: { en: 'Catch-up: finish any topic left over from this week', mr: 'राहिलेले: या आठवड्यातील उरलेले विषय पूर्ण करा', href: null },
  mock: { en: 'Full mock test (90 min)', mr: 'पूर्ण सराव परीक्षा (90 मिनिटे)', href: 'mock.html' },
  revisit: { en: 'Re-open every topic you got wrong in the last mock and redo its practice', mr: 'शेवटच्या सराव परीक्षेत चुकलेला प्रत्येक विषय पुन्हा उघडा आणि त्याचा सराव पुन्हा सोडवा', href: null },
  revision: { en: 'Read the revision sheet end to end', mr: 'उजळणी पत्रक सुरुवातीपासून शेवटपर्यंत वाचा', href: 'revision.html' },
  speed: { en: 'Speed maths from the revision sheet: squares, cubes, fraction–percent', mr: 'उजळणी पत्रकातील झटपट गणित: वर्ग, घन, अपूर्णांक–टक्केवारी', href: 'revision.html' },
  papers: { en: 'Read the previous-papers guide', mr: 'मागील प्रश्नपत्रिकांचे मार्गदर्शन वाचा', href: 'papers.html' },
  examDay: { en: 'Go through the exam-day checklist, pack hall ticket and ID, and rest', mr: 'परीक्षेच्या दिवसाची यादी तपासा, हॉल तिकीट व ओळखपत्र तयार ठेवा आणि विश्रांती घ्या', href: 'index.html#exam-day' },
};
const FINAL_WEEK = [
  [TASK.revision, TASK.retry],
  [TASK.mock],
  [TASK.revisit, TASK.wordsReview],
  [TASK.mock],
  [TASK.revisit, TASK.speed, TASK.wordsQuiz],
  [TASK.mock, TASK.retry],
  [TASK.revision, TASK.examDay],
];
const DAILY = [];
STUDY_PLAN.forEach((week, wi) => {
  const ids = (week.topics ?? []).filter(topicById);
  const perDay = Array.from({ length: 6 }, () => []);
  ids.forEach((id, i) => perDay[Math.floor((i * 6) / ids.length)].push(id));
  for (let d = 1; d <= 7; d++) {
    const day = wi * 7 + d;
    const tasks = [];
    if (wi === STUDY_PLAN.length - 1) tasks.push(...FINAL_WEEK[d - 1]);
    else {
      if (day === 1) tasks.push(TASK.diag);
      if (day === 22) tasks.push(TASK.papers);
      if (d === 7) tasks.push(TASK.catchUp, [4, 6, 7].includes(wi + 1) ? TASK.mock : TASK.drill, TASK.retry);
      if (day <= 20) tasks.push(TASK.words(day));
      else tasks.push(day % 2 ? TASK.wordsQuiz : TASK.wordsReview);
    }
    DAILY.push({ day, week: wi + 1, topics: d <= 6 ? perDay[d - 1] : [], tasks: tasks.filter((t) => EXAM.features.words || !t.words) });
  }
});

const PLAN_UI = {
  en: {
    title: `Day-by-day plan · ${EXAM.brand.en}`,
    description: `56-day ${EXAM.examName} study plan: one or two topics a day, ten words a day, drills, retries and mock tests, with today highlighted.`,
    eyebrow: '8 weeks · 56 days',
    h1: 'Day-by-day plan',
    lede: 'The weekly plan broken into 56 days: one or two topics a day plus a small daily habit. Press “Start the plan today” and this page highlights today’s row; the home page shows today’s tasks too. Behind by a day? Do today’s row, not yesterday’s: every week ends with a catch-up day.',
    week: 'Week', day: 'Day',
    i18n: { start: 'Start the plan today', startedOn: 'Started on {date}', todayIs: 'Today is Day {n}', complete: 'All 56 days are over. Good luck!', goToday: 'Go to today', reset: 'Reset', confirmReset: 'Clear the start date and the day ticks?', done: 'Day done' },
  },
  mr: {
    title: `दिवसागणिक आराखडा · ${EXAM.brand.mr}`,
    description: `56 दिवसांचा ${EXAM.examName} अभ्यास आराखडा: रोज एक-दोन विषय, रोज दहा शब्द, झटपट सराव, चुकांचा सराव आणि सराव परीक्षा, आजचा दिवस ठळक.`,
    eyebrow: '8 आठवडे · 56 दिवस',
    h1: 'दिवसागणिक आराखडा',
    lede: 'आठवड्याचा आराखडा 56 दिवसांत विभागलेला: रोज एक-दोन विषय आणि एक छोटी रोजची सवय. “आजपासून आराखडा सुरू करा” दाबा, म्हणजे हे पान आजची ओळ ठळक दाखवते; मुख्यपृष्ठावरही आजची कामे दिसतात. एक दिवस मागे पडलात? कालची नव्हे, आजची ओळ पूर्ण करा: प्रत्येक आठवड्याच्या शेवटी राहिलेले भरून काढण्याचा दिवस आहे.',
    week: 'आठवडा', day: 'दिवस',
    i18n: { start: 'आजपासून आराखडा सुरू करा', startedOn: '{date} पासून सुरू', todayIs: 'आज दिवस {n}', complete: 'सर्व 56 दिवस पूर्ण. शुभेच्छा!', goToday: 'आजच्या दिवसाकडे जा', reset: 'पुन्हा सुरू करा', confirmReset: 'सुरुवातीची तारीख आणि दिवसांच्या खुणा पुसायच्या?', done: 'दिवस पूर्ण' },
  },
};

function renderPlan(lang) {
  const P = PLAN_UI[lang];
  const weeks = STUDY_PLAN.map((w, wi) => {
    const focus = w.focus[lang];
    const rows = DAILY.filter((x) => x.week === wi + 1).map((x) => {
      const chips = x.topics.map((id) => {
        const s = sectionOf(id);
        return `<a class="chip" style="--hue:${s.hue}" href="${s.id}.html#${id}" data-chip="${id}">${view(topicById(id), lang).title}</a>`;
      }).join(' ');
      const tasks = x.tasks.map((t) => `<li>${t.href ? `<a href="${t.href}">${t[lang]}</a>` : t[lang]}</li>`).join('');
      return `<tr data-day="${x.day}" id="day-${x.day}">
      <th scope="row">${P.day} ${x.day}<br><label class="day-done"><input type="checkbox" data-day-done="${x.day}" aria-label="${P.i18n.done}"> <span>${P.i18n.done}</span></label></th>
      <td>${chips ? `<p class="chips">${chips}</p>` : ''}<ul class="tasks">${tasks}</ul></td>
    </tr>`;
    }).join('');
    return `<section class="rev-section">
  <h2>${P.week} ${wi + 1} <span class="muted">· ${focus}</span></h2>
  <div class="table-wrap"><table class="plan daily"><tbody>${rows}</tbody></table></div>
</section>`;
  }).join('\n');
  const body = `<section class="hero">
  <p class="eyebrow">${P.eyebrow}</p>
  <h1>${P.h1}</h1>
  <p class="lede">${P.lede}</p>
  <div class="plan-box" data-plan-box data-i18n="${esc(JSON.stringify(P.i18n))}"></div>
</section>
${weeks}`;
  return page({ lang, file: 'plan.html', title: P.title, description: P.description, body, scripts: ['assets/plan-data.js'] });
}

function renderPlanData() {
  const days = DAILY.map((x) => ({
    day: x.day,
    week: x.week,
    topics: x.topics.map((id) => {
      const s = sectionOf(id);
      const t = topicById(id);
      return { id, href: `${s.id}.html#${id}`, hue: s.hue, title: { en: t.title, mr: MR[id]?.title ?? t.title } };
    }),
    tasks: x.tasks.map((t) => ({ en: t.en, mr: t.mr, href: t.href })),
  }));
  const labels = { day: { en: 'Day', mr: 'दिवस' }, complete: { en: PLAN_UI.en.i18n.complete, mr: PLAN_UI.mr.i18n.complete } };
  return `window.MCA_PLAN = ${JSON.stringify({ total: days.length, labels, days })};\n`;
}

function renderAbout(lang) {
  const A = ABOUT[lang];
  const U = ABOUT_UI[lang];
  const sections = SECTIONS.map((raw) => sec(raw, lang));
  const table = `<section>
  <h2>${U.pattern}</h2>
  <div class="table-wrap"><table class="plan sources">
    <thead><tr>${U.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>${sections.map((x) => `<tr><td>${x.name}</td><td>${x.questions}</td><td>${x.questions * EXAM.marksPerQuestion}</td></tr>`).join('')}
    <tr><th scope="row">${U.total}</th><td><b>${EXAM.questions}</b></td><td><b>${EXAM.marks}</b></td></tr></tbody>
  </table></div>
  <ul class="facts">
    <li><b>${U.duration}:</b> ${U.minutes(EXAM.minutes)}</li>
    <li><b>${U.perQ}:</b> ${EXAM.marksPerQuestion}</li>
    <li><b>${U.negative}:</b> ${EXAM.negativeMarks ? U.each(EXAM.negativeMarks) : U.none}</li>
    <li><b>${U.medium}:</b> ${EXAM.medium[lang]}</li>
    <li><b>${U.mode}:</b> ${EXAM.mode[lang]}</li>
    <li><b>${U.eligibility}:</b> ${EXAM.eligibility[lang]}</li>
  </ul>
</section>`;
  const blocks = A.blocks.map((b) => `<section>
  <h2>${b.h}</h2>
  ${(b.p ?? []).map((p) => `<p>${p}</p>`).join('\n  ')}
  ${b.ul ? `<ul class="facts">${b.ul.map((x) => `<li>${x}</li>`).join('')}</ul>` : ''}
  ${b.links ? `<ul class="facts">${b.links.map(([label, href]) => `<li><a href="${href}" rel="noopener">${label}</a></li>`).join('')}</ul>` : ''}
</section>`);
  const hasLinks = A.blocks.length && A.blocks[A.blocks.length - 1].links;
  if (hasLinks) blocks.splice(blocks.length - 1, 0, table); else blocks.push(table);
  const body = `<section class="hero">
  <p class="eyebrow">${A.eyebrow}</p>
  <h1>${A.h1}</h1>
  <p class="lede">${A.lede}</p>
</section>
${blocks.join('\n')}`;
  return page({ lang, file: 'about.html', title: A.title, description: A.description, body });
}

function renderTerms(lang) {
  const R = TERMS[lang];
  const date = new Date(`${TERMS.updated}T00:00:00Z`).toLocaleDateString(lang === 'mr' ? 'mr-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const body = `<section class="hero">
  <p class="eyebrow">${R.eyebrow}</p>
  <h1>${R.h1}</h1>
  <p class="lede">${R.lede}</p>
  <p class="muted">${R.updatedLabel}: ${date}</p>
</section>
<section class="terms">
${R.sections.map((sec) => `  <h2>${sec.h}</h2>\n${sec.p.map((p) => `  <p>${p}</p>`).join('\n')}`).join('\n')}
</section>`;
  return page({ lang, file: 'terms.html', title: R.title, description: R.description, body });
}

function renderBank() {
  const bank = SECTIONS.map((s) => ({
    id: s.id,
    name: s.name,
    short: s.short,
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
  return `window.MCA_BANK = ${JSON.stringify({ minutes: EXAM.minutes, marksPerQuestion: EXAM.marksPerQuestion, negativeMarks: EXAM.negativeMarks, secondsPerQuestion: Math.round((EXAM.minutes * 60) / EXAM.questions), sections: bank })};\n`;
}

// ---------- redirect mode ----------
// The old address keeps every URL working but sends visitors to the new host. Returning
// visitors have the old service worker with the whole site cached, so the new sw.js is a
// kill switch: it clears the caches, unregisters itself and reloads open pages.

const PAGE_FILES = ['index.html', 'about.html', ...SECTIONS.map((s) => `${s.id}.html`), 'plan.html', ...(EXAM.features.words ? ['words.html'] : []), 'revision.html', 'mock.html', 'papers.html', 'terms.html'];
const cleanPath = (rel) => rel.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '');

function redirectStub(target) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${EXAM.brand.en} has moved</title>
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.hash);</script>
<style>body{font:16px/1.6 system-ui,sans-serif;margin:40px auto;max-width:40em;padding:0 16px;color:#222}</style>
</head>
<body>
<p>${EXAM.brand.en} has moved to <a href="${target}">${target}</a>.</p>
<p lang="mr">${EXAM.brand.mr} आता <a href="${target}">${target}</a> इथे आहे.</p>
</body>
</html>
`;
}

if (REDIRECT) {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(join(OUT, 'mr'), { recursive: true });
  for (const dir of ['', 'mr/']) {
    for (const f of PAGE_FILES) await writeFile(join(OUT, `${dir}${f}`), redirectStub(`${REDIRECT}/${cleanPath(`${dir}${f}`)}`));
  }
  // Any other path (deep links, old asset URLs): forward to the same path on the new host.
  await writeFile(join(OUT, '404.html'), redirectStub(`${REDIRECT}/`).replace('<script>', `<script>
var path = location.pathname.replace(new RegExp('^' + ${JSON.stringify(EXAM.oldPathPrefix)} + '(/|$)'), '').replace(/^\\/+/, '').replace(/(^|\\/)index\\.html$/, '$1').replace(/\\.html$/, '');
if (path === '404') path = '';
location.replace(${JSON.stringify(REDIRECT)} + '/' + path + location.search + location.hash);
</script><script>`));
  await writeFile(join(OUT, 'sw.js'), `// Kill switch: the site moved to ${REDIRECT}. Clear the old cache, unregister, reload.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url).catch(() => {});
})()));
`);
  await writeFile(join(OUT, '.nojekyll'), '');
  console.log(`built ${PAGE_FILES.length * 2} redirect stubs to ${REDIRECT} into site/`);
  process.exit(0);
}

// ---------- write ----------

await rm(OUT, { recursive: true, force: true });
await mkdir(join(OUT, 'assets'), { recursive: true });
await mkdir(join(OUT, 'mr'), { recursive: true });
await cp(join(ROOT, 'src'), join(OUT, 'assets'), { recursive: true });

const outputs = []; // published paths; the service worker precaches all of them
async function emit(rel, content) {
  outputs.push(rel);
  await writeFile(join(OUT, rel), content);
}
for (const f of await readdir(join(ROOT, 'src'))) outputs.push(`assets/${f}`);
await emit('assets/bank.js', renderBank());
if (EXAM.features.words) await emit('assets/vocab-data.js', `window.MCA_VOCAB = ${JSON.stringify(VOCAB ?? [])};\n`);
await emit('assets/plan-data.js', renderPlanData());
await writeFile(join(OUT, '.nojekyll'), '');
for (const lang of ['en', 'mr']) {
  const dir = lang === 'en' ? '' : 'mr/';
  await emit(`${dir}index.html`, renderHome(lang));
  await emit(`${dir}about.html`, renderAbout(lang));
  for (const s of SECTIONS) await emit(`${dir}${s.id}.html`, renderSection(s, lang));
  await emit(`${dir}plan.html`, renderPlan(lang));
  if (EXAM.features.words) await emit(`${dir}words.html`, renderVocab(lang));
  await emit(`${dir}revision.html`, renderRevision(lang));
  await emit(`${dir}mock.html`, renderMock(lang));
  await emit(`${dir}papers.html`, renderPapers(lang));
  await emit(`${dir}terms.html`, renderTerms(lang));
}

// Offline support: a service worker that precaches every page and asset. The cache name
// carries a hash of this build, so a new deploy replaces the old cache on the next visit.
// The worker body is hashed with the outputs, so changing either produces a new cache name.
const SW_BODY = `// A response that arrived through a redirect (hosts that map page.html to /page) cannot be
// served from the cache to a navigation request, so store a clean copy of it.
const clean = async (r) => (r.redirected ? new Response(await r.blob(), { status: r.status, statusText: r.statusText, headers: r.headers }) : r);
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map(async (f) => {
    const r = await fetch(f);
    if (!r.ok) throw new Error('precache failed: ' + f);
    await c.put(f, await clean(r));
  }))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Cached copy first (works offline), refreshed from the network in the background.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const cached = await c.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request).then(async (r) => { if (r.ok) c.put(e.request, await clean(r.clone())); return r; }).catch(() => cached);
    return cached || network;
  }));
});
`;
const hash = createHash('sha1');
for (const rel of outputs) hash.update(await readFile(join(OUT, rel)));
hash.update(SW_BODY);
const version = hash.digest('hex').slice(0, 12);
await writeFile(join(OUT, 'sw.js'), `// Generated by scripts/build.mjs
const CACHE = '${EXAM.id}-${version}';
const FILES = ${JSON.stringify(['./', 'mr/', ...outputs])};
${SW_BODY}`);
console.log(`built ${outputs.filter((o) => o.endsWith('.html')).length} pages into site/ and site/mr/ (build ${version})`);
