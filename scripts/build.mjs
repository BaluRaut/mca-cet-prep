// Builds the static site into site/ from content/*.mjs. No dependencies.
//   node scripts/build.mjs          validate + build
//   node scripts/build.mjs --check  validate only (exit 1 on errors)
//   node scripts/build.mjs --draft  build even if the study plan names unwritten topics

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { EXAM, SECTIONS } from '../content/sections.mjs';
import { STUDY_PLAN } from '../content/plan.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'site');
const CHECK_ONLY = process.argv.includes('--check');
const DRAFT = process.argv.includes('--draft'); // tolerate plan ids whose topics are not written yet
const REPO_URL = 'https://github.com/BaluRaut/mca-cet-prep';

const errors = [];
const warnings = [];

// ---------- load ----------

for (const section of SECTIONS) {
  const file = join(ROOT, 'content', `${section.id}.mjs`);
  if (!existsSync(file)) {
    warnings.push(`content/${section.id}.mjs does not exist yet`);
    section.topics = [];
    continue;
  }
  const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
  section.topics = mod.default ?? [];
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
  });
  const total = spread.reduce((x, y) => x + y, 0);
  if (total >= 12 && Math.max(...spread) / total > 0.4) {
    warnings.push(`${section.id}: correct answers are skewed across A–D: ${spread.join('/')}`);
  }
}

for (const [wi, week] of STUDY_PLAN.entries()) {
  for (const id of week.topics ?? []) {
    if (!seenIds.has(id)) (CHECK_ONLY || DRAFT ? warnings : errors).push(`plan week ${wi + 1}: unknown topic id "${id}"`);
  }
}
for (const id of seenIds.keys()) {
  if (!STUDY_PLAN.some((w) => w.topics?.includes(id))) warnings.push(`topic "${id}" is not in the study plan`);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
const topicCount = SECTIONS.reduce((n, s) => n + s.topics.length, 0);
const questionCount = SECTIONS.reduce((n, s) => n + s.topics.reduce((m, t) => m + (t.practice?.length ?? 0), 0), 0);
console.log(`${topicCount} topics, ${questionCount} practice questions, ${errors.length} error(s), ${warnings.length} warning(s)`);
if (errors.length) process.exit(1);
if (CHECK_ONLY) process.exit(0);

// ---------- render helpers ----------

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sectionOf = (id) => SECTIONS.find((s) => s.topics.some((t) => t.id === id));
const topicById = (id) => sectionOf(id)?.topics.find((t) => t.id === id);
const codeBlock = (code) => (code ? `<pre class="code"><code>${esc(code.replace(/^\n+|\s+$/g, ''))}</code></pre>` : '');

const NAV = [
  ['index.html', 'Home'],
  ...SECTIONS.map((s) => [`${s.id}.html`, s.short]),
  ['revision.html', 'Revision'],
  ['mock.html', 'Mock test'],
];

function page({ file, title, description, hue = 250, body, scripts = [] }) {
  const nav = NAV.map(([href, label]) =>
    `<a href="${href}"${href === file ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%234f46e5'/%3E%3Ctext x='16' y='22' font-size='15' font-family='system-ui,sans-serif' font-weight='700' text-anchor='middle' fill='white'%3EMC%3C/text%3E%3C/svg%3E">
<script>try{var t=localStorage.getItem('mca:theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="assets/style.css">
</head>
<body style="--hue:${hue}">
<a class="skip" href="#main">Skip to content</a>
<header class="site">
  <div class="wrap bar">
    <a class="brand" href="index.html"><span class="logo" aria-hidden="true">MC</span><span>MCA CET Prep</span></a>
    <button class="theme" type="button" aria-label="Toggle dark mode" title="Toggle dark mode">◐</button>
  </div>
  <nav class="wrap tabs" aria-label="Sections">${nav}</nav>
</header>
<main id="main" class="wrap">
${body}
</main>
<footer class="wrap site-foot">
  <p>Exam pattern and syllabus from the official <a href="${EXAM.brochureUrl}">MAH-MCA-CET ${EXAM.brochureYear} Information Brochure</a> (State CET Cell, Maharashtra). Always confirm dates and rules on <a href="${EXAM.officialSite}">cetcell.mahacet.org</a>.</p>
  <p>Free and open source · <a href="${REPO_URL}">GitHub</a> · Found a wrong answer? <a href="${REPO_URL}/issues">Open an issue</a>.</p>
</footer>
<script src="assets/app.js"></script>
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
}

function renderMcq(p, n, topicId) {
  return `<div class="mcq" data-answer="${p.answer}">
  <p class="q"><span class="qn">Q${n}.</span> ${p.q}</p>
  ${codeBlock(p.code)}
  <div class="opts">${p.options.map((o, i) =>
    `<button class="opt" type="button" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span>${o}</span></button>`).join('')}</div>
  <p class="why" hidden><b>Answer: ${LETTERS[p.answer]}.</b> ${p.why}</p>
</div>`;
}

function renderTopic(t, section, index) {
  const a = t.analogy;
  return `<article class="topic" id="${t.id}" data-topic="${t.id}">
  <header class="topic-head">
    <p class="eyebrow">${section.short} · ${t.syllabus} · Topic ${index + 1} of ${section.topics.length}</p>
    <h2>${t.title}</h2>
    <label class="done-toggle"><input type="checkbox" data-done="${t.id}"> Mark as done</label>
  </header>

  <section class="analogy" aria-label="Analogy">
    <p class="analogy-tag">Think of it like…</p>
    <h3>${a.title}</h3>
    <p>${a.story}</p>
    <table class="map">
      <thead><tr><th scope="col">In everyday life</th><th scope="col">In the exam topic</th></tr></thead>
      <tbody>${a.map.map(([x, y]) => `<tr><td>${x}</td><td>${y}</td></tr>`).join('')}</tbody>
    </table>
  </section>

  <section class="concept">
    <h3>The concept</h3>
    ${t.concept.map((p) => `<p>${p}</p>`).join('\n    ')}
  </section>

  <section class="keypoints">
    <h3>Key points &amp; formulas</h3>
    <ul>${t.keyPoints.map((k) => `<li>${k}</li>`).join('')}</ul>
  </section>

  <section class="example">
    <h3>Worked example</h3>
    <p>${t.example.q}</p>
    ${codeBlock(t.example.code)}
    <details>
      <summary>Show solution</summary>
      <ol>${t.example.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
      <p class="answer"><b>Answer:</b> ${t.example.answer}</p>
    </details>
  </section>

  <div class="tips">
    ${t.shortcut ? `<section class="tip shortcut"><h3>Exam shortcut</h3><p>${t.shortcut}</p></section>` : ''}
    <section class="tip trap"><h3>Common traps</h3><ul>${t.traps.map((x) => `<li>${x}</li>`).join('')}</ul></section>
  </div>

  <section class="practice">
    <h3>Practice <span class="muted">· tap an option to check</span></h3>
    ${t.practice.map((p, i) => renderMcq(p, i + 1, t.id)).join('\n')}
  </section>
  <p class="back"><a href="#top">↑ Back to topic list</a></p>
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

function renderSection(section) {
  const groups = groupBySyllabus(section.topics);
  const toc = [...groups].map(([name, ts]) => `<div class="toc-group">
    <h3>${name}</h3>
    <ul>${ts.map((t) => `<li><a href="#${t.id}" data-chip="${t.id}">${t.title}</a></li>`).join('')}</ul>
  </div>`).join('');
  const qCount = section.topics.reduce((n, t) => n + t.practice.length, 0);
  const body = `<section class="hero" id="top">
  <p class="eyebrow">Section · ${section.questions} questions · ${section.questions * EXAM.marksPerQuestion} marks</p>
  <h1>${section.name}</h1>
  <p class="lede">${section.blurb}</p>
  <div class="analogy small"><p class="analogy-tag">The whole section, in one picture</p><p>${section.analogy}</p></div>
  <p class="official"><b>Official syllabus:</b> ${section.official}</p>
  <div class="progress" data-progress="${section.topics.map((t) => t.id).join(' ')}">
    <div class="bar-track"><div class="bar-fill"></div></div>
    <p><span class="done-count">0</span> of ${section.topics.length} topics done · ${qCount} practice questions · <a href="mock.html#${section.id}">Timed ${section.short} drill →</a></p>
  </div>
</section>
<nav class="toc" aria-label="Topics in this section">${toc}</nav>
${section.topics.map((t, i) => renderTopic(t, section, i)).join('\n')}`;
  return page({
    file: `${section.id}.html`,
    title: `${section.name} · MCA CET Prep`,
    description: `${section.name} for MAH-MCA-CET: every topic explained with an everyday analogy, formulas, worked examples and practice MCQs.`,
    hue: section.hue,
    body,
  });
}

function renderHome() {
  const stats = [
    [EXAM.questions, 'questions'],
    [EXAM.marks, 'marks'],
    [EXAM.minutes, 'minutes'],
    ['0', 'negative marking'],
  ].map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join('');

  const timePlan = { maths: 35, reasoning: 30, english: 12, computer: 10 };
  const cards = SECTIONS.map((s) => `<a class="card" href="${s.id}.html" style="--hue:${s.hue}">
    <span class="card-tag">${s.questions} Q · ${s.questions * EXAM.marksPerQuestion} marks · ~${timePlan[s.id]} min</span>
    <h3>${s.name}</h3>
    <p>${s.blurb}</p>
    <div class="progress" data-progress="${s.topics.map((t) => t.id).join(' ')}">
      <div class="bar-track"><div class="bar-fill"></div></div>
      <p><span class="done-count">0</span> / ${s.topics.length} topics done</p>
    </div>
  </a>`).join('');

  const plan = STUDY_PLAN.map((w, i) => `<tr>
    <th scope="row">Week ${i + 1}</th>
    <td><b>${w.focus}</b>${w.topics?.length ? `<br>${w.topics.filter(topicById).map((id) => {
      const s = sectionOf(id);
      const t = topicById(id);
      return `<a class="chip" style="--hue:${s.hue}" href="${s.id}.html#${id}" data-chip="${id}">${t.title}</a>`;
    }).join(' ')}` : ''}${w.note ? `<br><span class="muted">${w.note}</span>` : ''}</td>
  </tr>`).join('');

  const body = `<section class="hero">
  <p class="eyebrow">MAH-MCA-CET · Maharashtra MCA entrance</p>
  <h1>Every topic, explained with an everyday analogy</h1>
  <p class="lede">Free preparation for the MCA Common Entrance Test. Each of the ${topicCount} topics starts with a picture from daily life (a cricket ball, a local train, a kirana shop) so the concept sticks, then gives the formulas, a worked example, the traps, and practice questions. Finish with a full-length timed mock test.</p>
  <div class="stats">${stats}</div>
</section>

<section>
  <h2>The four sections</h2>
  <div class="cards">${cards}</div>
</section>

<section class="two-col">
  <div>
    <h2>Exam at a glance</h2>
    <ul class="facts">
      <li><b>Pattern:</b> ${EXAM.questions} multiple-choice questions (4 options), ${EXAM.marksPerQuestion} marks each, ${EXAM.marks} marks total.</li>
      <li><b>Time:</b> ${EXAM.minutes} minutes for the whole paper. There is no separate timer per section; you can attempt any question at any time.</li>
      <li><b>Negative marking:</b> none. An unanswered question scores zero.</li>
      <li><b>Mode and medium:</b> ${EXAM.mode}, in ${EXAM.medium} only.</li>
      <li><b>Eligibility:</b> ${EXAM.eligibility}</li>
    </ul>
    <p class="muted">Source: official ${EXAM.brochureYear} brochure. The ${EXAM.brochureYear + 1} brochure may change details; check <a href="${EXAM.officialSite}">cetcell.mahacet.org</a>.</p>
  </div>
  <div>
    <h2>Exam-day strategy</h2>
    <div class="analogy small"><p class="analogy-tag">Think of it like…</p><p>A farmer picking cotton before the rain. Pick the full, easy bolls on every plant first, then come back for the hard ones. Never stand at one stubborn plant while the whole field waits.</p></div>
    <ol class="facts">
      <li><b>Two passes.</b> First pass: answer everything you can do in under a minute; mark the rest. Second pass: return to marked questions.</li>
      <li><b>Leave nothing blank.</b> With no negative marking, a blank is a guaranteed zero. The brochure advises against <i>random</i> guessing, so eliminate the options you know are wrong first, then choose.</li>
      <li><b>Bank time on English and Computer.</b> They are mostly recall: aim for ~12 and ~10 minutes, leaving ~35 for Maths and ~30 for Reasoning.</li>
      <li><b>Paper for reasoning.</b> Draw the family tree, the direction arrows, the seating circle. Solving in your head is where reasoning marks are lost.</li>
    </ol>
  </div>
</section>

<section>
  <h2>8-week study plan</h2>
  <p class="muted">Each week mixes all four sections so nothing goes cold. Topics you tick as done show a check here too.</p>
  <div class="table-wrap"><table class="plan">${plan}</table></div>
</section>

<section class="cta">
  <h2>Ready to test yourself?</h2>
  <p>The mock test draws ${EXAM.questions} questions in the real 30/30/20/20 split, runs a ${EXAM.minutes}-minute timer, and shows a section-wise score with explanations.</p>
  <p><a class="button" href="mock.html">Start a mock test</a> <a class="button ghost" href="revision.html">Quick revision sheet</a></p>
</section>`;
  return page({
    file: 'index.html',
    title: 'MCA CET Prep · MAH-MCA-CET with analogies',
    description: 'Free MAH-MCA-CET preparation: every Maths, Reasoning, English and Computer topic explained with an everyday analogy, plus practice questions and a timed mock test.',
    body,
  });
}

function renderRevision() {
  const body = `<section class="hero">
  <p class="eyebrow">Last-week revision</p>
  <h1>Revision sheet</h1>
  <p class="lede">One line of analogy and the key formulas for every topic. Read it the night before; if a line doesn't trigger the full idea, open that topic again.</p>
  <p><button class="button ghost print" type="button">Print this sheet</button></p>
</section>
${SECTIONS.map((s) => `<section class="rev-section" style="--hue:${s.hue}">
  <h2>${s.name}</h2>
  <div class="rev-grid">${s.topics.map((t) => `<article class="rev">
    <h3><a href="${s.id}.html#${t.id}">${t.title}</a></h3>
    <p class="rev-analogy"><b>${t.analogy.title}:</b> ${t.analogy.oneLine}</p>
    <ul>${t.keyPoints.map((k) => `<li>${k}</li>`).join('')}</ul>
  </article>`).join('')}</div>
</section>`).join('\n')}`;
  return page({
    file: 'revision.html',
    title: 'Revision sheet · MCA CET Prep',
    description: 'One-page MAH-MCA-CET revision: the analogy and key formulas for every topic.',
    body,
  });
}

function renderMock() {
  const body = `<section class="hero">
  <p class="eyebrow">Practice under exam conditions</p>
  <h1>Mock test</h1>
  <p class="lede">Questions are drawn at random from the ${questionCount}-question bank and options are shuffled, so every attempt is different.</p>
</section>
<div id="mock" class="mock"><noscript>The mock test needs JavaScript.</noscript></div>`;
  return page({
    file: 'mock.html',
    title: 'Mock test · MCA CET Prep',
    description: 'Timed MAH-MCA-CET mock test: 100 questions, 90 minutes, section-wise score and explanations.',
    body,
    scripts: ['assets/bank.js', 'assets/mock.js'],
  });
}

function renderBank() {
  const bank = SECTIONS.map((s) => ({
    id: s.id,
    name: s.name,
    short: s.short,
    hue: s.hue,
    questions: s.questions,
    items: s.topics.flatMap((t) => t.practice.map((p, i) => ({
      id: `${t.id}-${i + 1}`,
      topic: t.id,
      topicTitle: t.title,
      q: p.q,
      code: p.code ? esc(p.code.replace(/^\n+|\s+$/g, '')) : undefined,
      options: p.options.map(String),
      answer: p.answer,
      why: p.why,
    }))),
  }));
  return `window.MCA_BANK = ${JSON.stringify({ minutes: EXAM.minutes, marksPerQuestion: EXAM.marksPerQuestion, sections: bank })};\n`;
}

// ---------- write ----------

await rm(OUT, { recursive: true, force: true });
await mkdir(join(OUT, 'assets'), { recursive: true });
await cp(join(ROOT, 'src'), join(OUT, 'assets'), { recursive: true });
await writeFile(join(OUT, 'index.html'), renderHome());
for (const s of SECTIONS) await writeFile(join(OUT, `${s.id}.html`), renderSection(s));
await writeFile(join(OUT, 'revision.html'), renderRevision());
await writeFile(join(OUT, 'mock.html'), renderMock());
await writeFile(join(OUT, 'assets', 'bank.js'), renderBank());
await writeFile(join(OUT, '.nojekyll'), '');
console.log(`built ${2 + SECTIONS.length + 1} pages into site/`);
