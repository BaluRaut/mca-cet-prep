// Word list tools: flashcards and an auto-generated synonym/antonym quiz over any scope
// (one day's ten words, all words, or the words you marked as not known).
(function () {
  'use strict';

  var V = window.MCA_VOCAB;
  var app = document.getElementById('vocab-app');
  if (!V || !app) return;
  var T = JSON.parse(app.dataset.i18n);
  var store = window.MCA_STORE;
  var LANG = document.documentElement.lang === 'mr' ? 'mr' : 'en';
  var PER_DAY = 10;
  var QUIZ_SIZE = 10;
  var unknown = new Set(store.get('mca:words', []));
  var view = 'setup';
  var scope = 'all';

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === 'class') node.className = attrs[k];
      else if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), attrs[k]);
      else node.setAttribute(k, attrs[k]);
    }
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function fmt(str, vars) { return str.replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; }); }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function saveUnknown() {
    store.set('mca:words', Array.from(unknown));
    document.querySelectorAll('[data-unknown-count]').forEach(function (n) { n.textContent = unknown.size; });
  }

  function words() {
    if (scope === 'unknown') return V.filter(function (w) { return unknown.has(w.word); });
    if (scope === 'all') return V;
    var d = Number(scope);
    return V.slice((d - 1) * PER_DAY, d * PER_DAY);
  }

  function scopeLabel() {
    if (scope === 'all') return T.all;
    if (scope === 'unknown') return T.unknown;
    return T.day + ' ' + scope;
  }

  function back(html) {
    return '<p class="mean">' + html.meaning + '</p>' +
      '<p><b>' + T.syn + ':</b> ' + html.syn.join(', ') + ' · <b>' + T.ant + ':</b> ' + html.ant.join(', ') + '</p>' +
      '<p class="mr-mean" lang="mr">' + html.mr + '</p><p class="eg" lang="en"><i>' + html.eg + '</i></p>';
  }

  // ---------- setup ----------

  function showSetup() {
    view = 'setup';
    app.innerHTML = '';
    var days = Math.ceil(V.length / PER_DAY);
    var select = el('select', { 'aria-label': T.scope, class: 'scope' });
    select.appendChild(el('option', { value: 'all' }, T.all + ' (' + V.length + ')'));
    select.appendChild(el('option', { value: 'unknown' }, T.unknown + ' (' + unknown.size + ')'));
    for (var d = 1; d <= days; d++) select.appendChild(el('option', { value: String(d) }, T.day + ' ' + d));
    select.value = scope;
    select.addEventListener('change', function () { scope = select.value; });
    var row = el('div', { class: 'vocab-controls' });
    row.appendChild(select);
    row.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { startCards(); } }, T.flashcards));
    row.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { startQuiz(); } }, T.quiz));
    app.appendChild(row);
    app.appendChild(el('p', { class: 'muted' }, T.setupNote));
  }

  // ---------- flashcards ----------

  var cards, cardIndex, cardShown;

  function startCards() {
    cards = shuffle(words());
    if (!cards.length) { alert(T.empty); return; }
    cardIndex = 0;
    cardShown = false;
    renderCard();
  }

  function renderCard() {
    view = 'cards';
    app.innerHTML = '';
    if (cardIndex >= cards.length) {
      var missed = cards.filter(function (w) { return unknown.has(w.word); }).length;
      app.appendChild(el('div', { class: 'flash done' }, '<p class="eyebrow">' + scopeLabel() + '</p><h3>' + fmt(T.cardsDone, { n: cards.length, m: missed }) + '</h3>'));
      app.appendChild(el('p', {}, '')).appendChild(el('button', { class: 'button', type: 'button', onclick: showSetup }, T.backToSetup));
      return;
    }
    var w = cards[cardIndex];
    var card = el('div', { class: 'flash', role: 'group' },
      '<p class="eyebrow">' + scopeLabel() + ' · ' + (cardIndex + 1) + ' / ' + cards.length + '</p>' +
      '<h3 lang="en">' + w.word + ' <span class="pos">' + w.pos + '</span></h3>' +
      '<div class="flash-back"' + (cardShown ? '' : ' hidden') + '>' + back(w) + '</div>');
    var row = el('div', { class: 'vocab-controls' });
    if (!cardShown) {
      row.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { cardShown = true; renderCard(); } }, T.show));
    } else {
      row.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { unknown.delete(w.word); saveUnknown(); next(); } }, T.knew));
      row.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { unknown.add(w.word); saveUnknown(); next(); } }, T.didnt));
    }
    row.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: showSetup }, T.stop));
    card.appendChild(row);
    app.appendChild(card);
    function next() { cardIndex++; cardShown = false; renderCard(); }
  }

  // ---------- quiz ----------

  var quiz, quizIndex, quizRight;

  function makeQuestion(w, pool) {
    var synonym = Math.random() < 0.5 || !w.ant.length;
    var correct = synonym ? w.syn[Math.floor(Math.random() * w.syn.length)] : w.ant[Math.floor(Math.random() * w.ant.length)];
    var taken = {};
    [w.word].concat(w.syn, w.ant).forEach(function (x) { taken[x] = true; });
    var distractors = [];
    shuffle(pool).some(function (o) {
      if (o.word === w.word) return false;
      var cands = shuffle(o.syn.concat(o.ant));
      for (var i = 0; i < cands.length; i++) {
        if (!taken[cands[i]]) { distractors.push(cands[i]); taken[cands[i]] = true; break; }
      }
      return distractors.length === 3;
    });
    var options = shuffle([correct].concat(distractors));
    return { word: w, synonym: synonym, options: options, answer: options.indexOf(correct), chosen: null };
  }

  function startQuiz() {
    var pool = words();
    if (pool.length < 4) { alert(T.empty); return; }
    quiz = shuffle(pool).slice(0, QUIZ_SIZE).map(function (w) { return makeQuestion(w, V); });
    quizIndex = 0;
    quizRight = 0;
    renderQuiz();
  }

  function renderQuiz() {
    view = 'quiz';
    app.innerHTML = '';
    if (quizIndex >= quiz.length) {
      var missedWords = quiz.filter(function (q) { return q.chosen !== q.answer; }).map(function (q) { return q.word.word; });
      var box = el('div', { class: 'flash done' }, '<p class="eyebrow">' + scopeLabel() + '</p><h3>' + fmt(T.quizDone, { r: quizRight, n: quiz.length }) + '</h3>' +
        (missedWords.length ? '<p>' + T.missed + ' <b lang="en">' + missedWords.join(', ') + '</b></p>' : ''));
      app.appendChild(box);
      var row = el('div', { class: 'vocab-controls' });
      row.appendChild(el('button', { class: 'button', type: 'button', onclick: startQuiz }, T.quizAgain));
      row.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: showSetup }, T.backToSetup));
      app.appendChild(row);
      return;
    }
    var q = quiz[quizIndex];
    var card = el('div', { class: 'flash' },
      '<p class="eyebrow">' + scopeLabel() + ' · ' + (quizIndex + 1) + ' / ' + quiz.length + '</p>' +
      '<h3>' + (q.synonym ? T.synOf : T.antOf) + ' <span lang="en">' + q.word.word.toUpperCase() + '</span></h3>');
    var opts = el('div', { class: 'opts', lang: 'en' });
    q.options.forEach(function (o, i) {
      var b = el('button', { class: 'opt', type: 'button', 'data-i': String(i) }, '<span class="letter">' + 'ABCD'[i] + '</span><span>' + o + '</span>');
      if (q.chosen !== null) {
        b.disabled = true;
        if (i === q.answer) b.classList.add('is-right');
        else if (i === q.chosen) b.classList.add('is-wrong');
      } else {
        b.addEventListener('click', function () {
          q.chosen = i;
          if (i === q.answer) { quizRight++; unknown.delete(q.word.word); } else unknown.add(q.word.word);
          saveUnknown();
          renderQuiz();
        });
      }
      opts.appendChild(b);
    });
    card.appendChild(opts);
    if (q.chosen !== null) {
      card.appendChild(el('div', { class: 'why' }, (q.chosen === q.answer ? '✓ ' : '✗ ') + '<b lang="en">' + q.word.word + '</b>: ' + q.word.meaning + ' <span lang="mr">(' + q.word.mr + ')</span>'));
      var row = el('div', { class: 'vocab-controls' });
      row.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { quizIndex++; renderQuiz(); } }, T.next));
      card.appendChild(row);
    }
    app.appendChild(card);
  }

  // "Didn't know" buttons on the static list below.
  document.addEventListener('click', function (event) {
    var b = event.target.closest('[data-word-toggle]');
    if (!b) return;
    var w = b.dataset.wordToggle;
    if (unknown.has(w)) unknown.delete(w); else unknown.add(w);
    saveUnknown();
    paintList();
  });

  function paintList() {
    document.querySelectorAll('[data-word-toggle]').forEach(function (b) {
      var on = unknown.has(b.dataset.wordToggle);
      b.setAttribute('aria-pressed', String(on));
      b.textContent = on ? T.marked : T.markUnknown;
    });
  }

  // #day-7 in the URL preselects that day.
  var m = /^#day-(\d+)$/.exec(location.hash);
  if (m) scope = m[1];
  paintList();
  saveUnknown();
  showSetup();
})();
