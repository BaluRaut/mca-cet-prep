// Mock test: full paper (real section split, real time limit) or a 10-question section drill.
(function () {
  'use strict';

  var BANK = window.MCA_BANK;
  var root = document.getElementById('mock');
  var store = window.MCA_STORE;
  var LETTERS = 'ABCD';
  var DRILL_SIZE = 10;
  var DRILL_MINUTES = 10;
  var test = null;
  var tick = null;

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

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sectionById(id) {
    return BANK.sections.filter(function (s) { return s.id === id; })[0];
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    return m + ':' + String(s % 60).padStart(2, '0');
  }

  // ---------- setup ----------

  function showSetup() {
    test = null;
    clearInterval(tick);
    window.removeEventListener('beforeunload', guardLeave);
    root.innerHTML = '';

    var fullCount = BANK.sections.reduce(function (n, s) { return n + Math.min(s.questions, s.items.length); }, 0);
    var grid = el('div', { class: 'mock-setup' });

    var full = el('div', { class: 'mode full' },
      '<h3>Full mock test</h3><p>' + fullCount + ' questions in the real split (' +
      BANK.sections.map(function (s) { return Math.min(s.questions, s.items.length) + ' ' + s.short; }).join(', ') +
      '), ' + BANK.minutes + ' minutes, one timer for the whole paper, no negative marking.</p>');
    full.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { start('full'); } }, 'Start full mock'));
    grid.appendChild(full);

    BANK.sections.forEach(function (s) {
      var card = el('div', { class: 'mode', id: s.id, style: '--hue:' + s.hue },
        '<h3>' + s.short + ' drill</h3><p>' + Math.min(DRILL_SIZE, s.items.length) + ' random ' + s.name +
        ' questions, ' + DRILL_MINUTES + ' minutes. Bank: ' + s.items.length + ' questions.</p>');
      card.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { start(s.id); } }, 'Start ' + s.short + ' drill'));
      grid.appendChild(card);
    });
    root.appendChild(grid);

    var history = store.get('mca:mocks', []);
    if (history.length) {
      var rows = history.slice(-8).reverse().map(function (h) {
        return '<tr><td>' + new Date(h.at).toLocaleDateString() + '</td><td>' + h.label + '</td><td>' + h.score + ' / ' + h.max +
          '</td><td>' + Math.round(100 * h.score / h.max) + '%</td></tr>';
      }).join('');
      root.appendChild(el('section', {},
        '<h2>Your recent attempts</h2><div class="table-wrap"><table class="score-table"><thead><tr><th>Date</th><th>Test</th><th>Score</th><th>%</th></tr></thead><tbody>' +
        rows + '</tbody></table></div><p class="muted">Saved only in this browser.</p>'));
    }

    var target = location.hash.slice(1);
    if (target && document.getElementById(target)) document.getElementById(target).scrollIntoView();
  }

  function start(mode) {
    var questions = [];
    BANK.sections.forEach(function (s) {
      var need = mode === 'full' ? s.questions : (mode === s.id ? DRILL_SIZE : 0);
      shuffle(s.items).slice(0, need).forEach(function (item) {
        var order = shuffle([0, 1, 2, 3]);
        questions.push({ section: s.id, item: item, order: order, answer: order.indexOf(item.answer), chosen: null, marked: false, seen: false });
      });
    });
    var minutes = mode === 'full' ? BANK.minutes : DRILL_MINUTES;
    test = {
      mode: mode,
      label: mode === 'full' ? 'Full mock' : sectionById(mode).short + ' drill',
      questions: questions,
      current: 0,
      startedAt: Date.now(),
      endsAt: Date.now() + minutes * 60000,
    };
    window.addEventListener('beforeunload', guardLeave);
    tick = setInterval(updateTimer, 1000);
    renderExam();
    root.scrollIntoView();
  }

  function guardLeave(event) { event.preventDefault(); event.returnValue = ''; }

  // ---------- exam ----------

  function updateTimer() {
    if (!test) return;
    var left = test.endsAt - Date.now();
    var t = root.querySelector('.timer');
    if (t) {
      t.textContent = '⏱ ' + fmtTime(left);
      t.classList.toggle('low', left < 5 * 60000);
    }
    if (left <= 0) finish(true);
  }

  function renderExam() {
    var q = test.questions[test.current];
    q.seen = true;
    var section = sectionById(q.section);
    root.innerHTML = '';

    var bar = el('div', { class: 'exam-bar' });
    bar.appendChild(el('span', { class: 'timer', role: 'timer', 'aria-label': 'Time left' }));
    if (test.mode === 'full') {
      var tabs = el('div', { class: 'sec-tabs', role: 'group', 'aria-label': 'Jump to section' });
      BANK.sections.forEach(function (s) {
        var first = test.questions.findIndex(function (x) { return x.section === s.id; });
        if (first < 0) return;
        tabs.appendChild(el('button', {
          class: 'sec-tab', type: 'button', 'aria-pressed': String(s.id === q.section),
          onclick: function () { go(first); },
        }, s.short));
      });
      bar.appendChild(tabs);
    }
    bar.appendChild(el('button', { class: 'button', type: 'button', onclick: confirmSubmit }, 'Submit'));
    root.appendChild(bar);

    var card = el('div', { class: 'exam-q', style: '--hue:' + section.hue });
    card.appendChild(el('p', { class: 'meta' }, 'Question ' + (test.current + 1) + ' of ' + test.questions.length + ' · ' + section.short + ' · ' + q.item.topicTitle));
    card.appendChild(el('p', { class: 'q' }, q.item.q));
    if (q.item.code) card.appendChild(el('pre', { class: 'code' }, '<code>' + q.item.code + '</code>'));
    var group = el('div', { role: 'radiogroup', 'aria-label': 'Options' });
    q.order.forEach(function (orig, i) {
      var id = 'opt-' + i;
      var label = el('label', { class: 'choice', for: id });
      var input = el('input', { type: 'radio', name: 'choice', id: id, value: String(i) });
      input.checked = q.chosen === i;
      input.addEventListener('change', function () { q.chosen = i; paintPalette(); });
      label.appendChild(input);
      label.appendChild(el('span', {}, '<b>' + LETTERS[i] + '.</b> ' + q.item.options[orig]));
      group.appendChild(label);
    });
    card.appendChild(group);

    var nav = el('div', { class: 'exam-nav' });
    nav.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { go(test.current - 1); } }, '← Prev'));
    var right = el('span');
    right.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { q.chosen = null; renderExam(); } }, 'Clear'));
    right.appendChild(el('button', {
      class: 'button ghost', type: 'button',
      onclick: function () { q.marked = !q.marked; go(test.current + 1); },
    }, q.marked ? 'Unmark & next' : 'Mark for review'));
    right.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { go(test.current + 1); } }, 'Next →'));
    nav.appendChild(right);
    card.appendChild(nav);
    root.appendChild(card);

    var palette = el('div', { class: 'palette', role: 'group', 'aria-label': 'All questions' });
    test.questions.forEach(function (x, i) {
      palette.appendChild(el('button', { class: 'pal', type: 'button', 'data-i': String(i), 'aria-label': 'Question ' + (i + 1), onclick: function () { go(i); } }, String(i + 1)));
    });
    root.appendChild(palette);
    root.appendChild(el('div', { class: 'legend' }, '<span class="l-ans">Answered</span><span class="l-mark">Marked for review</span><span>Not answered</span><span>Keys: 1–4 to choose, ← → to move</span>'));
    paintPalette();
    updateTimer();
  }

  function paintPalette() {
    root.querySelectorAll('.pal').forEach(function (b) {
      var x = test.questions[Number(b.dataset.i)];
      b.classList.toggle('answered', x.chosen !== null && !x.marked);
      b.classList.toggle('marked', x.marked);
      b.classList.toggle('current', Number(b.dataset.i) === test.current);
    });
  }

  function go(i) {
    if (i < 0 || i >= test.questions.length) return;
    test.current = i;
    renderExam();
  }

  document.addEventListener('keydown', function (event) {
    if (!test || event.target.matches('input, textarea, select') || event.metaKey || event.ctrlKey || event.altKey) return;
    var q = test.questions[test.current];
    if (/^[1-4]$/.test(event.key)) { q.chosen = Number(event.key) - 1; renderExam(); }
    else if (event.key === 'ArrowRight') go(test.current + 1);
    else if (event.key === 'ArrowLeft') go(test.current - 1);
  });

  function confirmSubmit() {
    var unanswered = test.questions.filter(function (x) { return x.chosen === null; }).length;
    var msg = unanswered
      ? unanswered + ' question(s) are unanswered. There is no negative marking, so a blank is a sure zero. Submit anyway?'
      : 'Submit the test?';
    if (window.confirm(msg)) finish(false);
  }

  // ---------- result ----------

  function finish(timedOut) {
    clearInterval(tick);
    window.removeEventListener('beforeunload', guardLeave);
    var t = test;
    test = null;
    var per = {};
    var correct = 0;
    t.questions.forEach(function (q) {
      var s = per[q.section] || (per[q.section] = { total: 0, right: 0, wrong: 0, skipped: 0 });
      s.total++;
      if (q.chosen === null) s.skipped++;
      else if (q.chosen === q.answer) { s.right++; correct++; }
      else s.wrong++;
    });
    var m = BANK.marksPerQuestion;
    var score = correct * m;
    var max = t.questions.length * m;
    var history = store.get('mca:mocks', []);
    history.push({ at: Date.now(), label: t.label, score: score, max: max });
    store.set('mca:mocks', history.slice(-30));

    root.innerHTML = '';
    var head = el('section', {},
      (timedOut ? '<p class="eyebrow">Time is up</p>' : '<p class="eyebrow">Result</p>') +
      '<p class="result-score">' + score + ' / ' + max + '</p>' +
      '<p class="muted">' + correct + ' correct of ' + t.questions.length + ' · ' + Math.round(100 * correct / t.questions.length) +
      '% · time used ' + fmtTime(Math.min(Date.now(), t.endsAt) - t.startedAt) + '</p>');
    var rows = BANK.sections.filter(function (s) { return per[s.id]; }).map(function (s) {
      var p = per[s.id];
      return '<tr><td>' + s.name + '</td><td>' + p.right + '</td><td>' + p.wrong + '</td><td>' + p.skipped + '</td><td>' + p.right * m + ' / ' + p.total * m + '</td></tr>';
    }).join('');
    head.appendChild(el('div', { class: 'table-wrap' },
      '<table class="score-table"><thead><tr><th>Section</th><th>Right</th><th>Wrong</th><th>Skipped</th><th>Marks</th></tr></thead><tbody>' + rows + '</tbody></table>'));
    root.appendChild(head);

    var weak = {};
    t.questions.forEach(function (q) {
      if (q.chosen !== null && q.chosen !== q.answer) weak[q.item.topic] = { title: q.item.topicTitle, section: q.section, n: (weak[q.item.topic] ? weak[q.item.topic].n : 0) + 1 };
    });
    var weakList = Object.keys(weak).sort(function (a, b) { return weak[b].n - weak[a].n; });
    if (weakList.length) {
      root.appendChild(el('section', {}, '<h2>Topics to revisit</h2><p class="muted">Where you answered wrongly, most mistakes first.</p><p>' + weakList.map(function (id) {
        var s = sectionById(weak[id].section);
        return '<a class="chip" style="--hue:' + s.hue + '" href="' + s.id + '.html#' + id + '">' + weak[id].title + ' (' + weak[id].n + ')</a>';
      }).join(' ') + '</p>'));
    }

    var review = el('section', { class: 'review' }, '<h2>Review answers</h2>');
    var filter = el('div', { class: 'filter', role: 'group', 'aria-label': 'Filter answers' });
    var list = el('div');
    [['all', 'All'], ['no', 'Wrong'], ['skip', 'Skipped'], ['ok', 'Correct']].forEach(function (f, i) {
      filter.appendChild(el('button', {
        class: 'sec-tab', type: 'button', 'aria-pressed': String(i === 0),
        onclick: function (e) {
          filter.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === e.currentTarget)); });
          list.querySelectorAll('.review-item').forEach(function (r) { r.hidden = f[0] !== 'all' && !r.classList.contains(f[0]); });
        },
      }, f[1]));
    });
    review.appendChild(filter);
    t.questions.forEach(function (q, i) {
      var state = q.chosen === null ? 'skip' : q.chosen === q.answer ? 'ok' : 'no';
      var s = sectionById(q.section);
      var opt = function (k) { return LETTERS[k] + '. ' + q.item.options[q.order[k]]; };
      list.appendChild(el('div', { class: 'review-item ' + state },
        '<p class="meta muted">Q' + (i + 1) + ' · ' + s.short + ' · <a href="' + s.id + '.html#' + q.item.topic + '">' + q.item.topicTitle + '</a></p>' +
        '<p>' + q.item.q + '</p>' + (q.item.code ? '<pre class="code"><code>' + q.item.code + '</code></pre>' : '') +
        '<p>' + (state === 'skip' ? '<b>Not answered.</b>' : '<b>Your answer:</b> ' + opt(q.chosen) + (state === 'ok' ? ' ✓' : ' ✗')) +
        (state !== 'ok' ? '<br><b>Correct:</b> ' + opt(q.answer) : '') + '</p>' +
        '<p class="why">' + q.item.why + '</p>'));
    });
    review.appendChild(list);
    root.appendChild(review);
    root.appendChild(el('p', {}, '<button class="button" type="button">Take another test</button>'));
    root.lastChild.firstChild.addEventListener('click', function () { showSetup(); root.scrollIntoView(); });
    root.scrollIntoView();
  }

  showSetup();
})();
