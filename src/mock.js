// Mock test: full paper (real section split, real time limit) or a 10-question section drill.
// Questions stay in English (the exam's only medium); the Marathi page adds a Marathi meaning
// on demand and Marathi explanations in the review.
(function () {
  'use strict';

  var BANK = window.MCA_BANK;
  var root = document.getElementById('mock');
  var store = window.MCA_STORE;
  var LANG = document.documentElement.lang === 'mr' ? 'mr' : 'en';
  var LETTERS = 'ABCD';
  var DRILL_SIZE = 10;
  var DRILL_MINUTES = 10;
  var test = null;
  var tick = null;

  var TEXT = {
    en: {
      fullTitle: 'Full mock test',
      fullDesc: function (n, split, min) { return n + ' questions in the real split (' + split + '), ' + min + ' minutes, one timer for the whole paper, no negative marking.'; },
      fullStart: 'Start full mock',
      fullLabel: 'Full mock',
      drillTitle: function (s) { return s + ' drill'; },
      drillDesc: function (n, name, min, bank) { return n + ' random ' + name + ' questions, ' + min + ' minutes. Bank: ' + bank + ' questions.'; },
      drillStart: function (s) { return 'Start ' + s + ' drill'; },
      recent: 'Your recent attempts',
      recentHead: ['Date', 'Test', 'Score', '%'],
      savedLocal: 'Saved only in this browser.',
      timeLeft: 'Time left',
      jump: 'Jump to section',
      submit: 'Submit',
      meta: function (i, n, s, t) { return 'Question ' + i + ' of ' + n + ' · ' + s + ' · ' + t; },
      options: 'Options',
      prev: '← Prev',
      clear: 'Clear',
      mark: 'Mark for review',
      unmark: 'Unmark & next',
      next: 'Next →',
      allQuestions: 'All questions',
      question: 'Question ',
      legend: '<span class="l-ans">Answered</span><span class="l-mark">Marked for review</span><span>Not answered</span><span>Keys: 1–4 to choose, ← → to move</span>',
      confirmBlank: function (n) { return n + ' question(s) are unanswered. There is no negative marking, so a blank is a sure zero. Submit anyway?'; },
      confirm: 'Submit the test?',
      timeUp: 'Time is up',
      result: 'Result',
      summary: function (c, n, pct, time) { return c + ' correct of ' + n + ' · ' + pct + '% · time used ' + time; },
      scoreHead: ['Section', 'Right', 'Wrong', 'Skipped', 'Marks'],
      revisit: 'Topics to revisit',
      revisitNote: 'Where you answered wrongly, most mistakes first.',
      review: 'Review answers',
      filterLabel: 'Filter answers',
      filters: ['All', 'Wrong', 'Skipped', 'Correct'],
      notAnswered: 'Not answered.',
      yours: 'Your answer:',
      correct: 'Correct:',
      again: 'Take another test',
      meaning: null,
    },
    mr: {
      fullTitle: 'पूर्ण सराव परीक्षा',
      fullDesc: function (n, split, min) { return 'खऱ्या परीक्षेच्या विभागणीत ' + n + ' प्रश्न (' + split + '), ' + min + ' मिनिटे, संपूर्ण पेपरसाठी एकच टायमर, निगेटिव्ह मार्किंग नाही.'; },
      fullStart: 'पूर्ण परीक्षा सुरू करा',
      fullLabel: 'पूर्ण परीक्षा',
      drillTitle: function (s) { return s + ': झटपट सराव'; },
      drillDesc: function (n, name, min, bank) { return name + ' चे ' + n + ' यादृच्छिक प्रश्न, ' + min + ' मिनिटे. संग्रहात ' + bank + ' प्रश्न.'; },
      drillStart: function (s) { return s + ' सराव सुरू करा'; },
      recent: 'तुमचे अलीकडचे प्रयत्न',
      recentHead: ['दिनांक', 'परीक्षा', 'गुण', '%'],
      savedLocal: 'फक्त याच ब्राउझरमध्ये जतन केले आहे.',
      timeLeft: 'उरलेला वेळ',
      jump: 'विभागाकडे जा',
      submit: 'सबमिट करा',
      meta: function (i, n, s, t) { return 'प्रश्न ' + i + ' / ' + n + ' · ' + s + ' · ' + t; },
      options: 'पर्याय',
      prev: '← मागे',
      clear: 'उत्तर पुसा',
      mark: 'पुन्हा पाहण्यासाठी खूण',
      unmark: 'खूण काढा व पुढे',
      next: 'पुढे →',
      allQuestions: 'सर्व प्रश्न',
      question: 'प्रश्न ',
      legend: '<span class="l-ans">उत्तर दिले</span><span class="l-mark">पुन्हा पाहण्यासाठी खूण</span><span>उत्तर दिले नाही</span><span>कीबोर्ड: 1–4 पर्याय, ← → प्रश्न बदला</span>',
      confirmBlank: function (n) { return n + ' प्रश्नांची उत्तरे दिलेली नाहीत. निगेटिव्ह मार्किंग नसल्यामुळे रिकामा प्रश्न म्हणजे खात्रीचा शून्य. तरीही सबमिट करायचे?'; },
      confirm: 'परीक्षा सबमिट करायची?',
      timeUp: 'वेळ संपली',
      result: 'निकाल',
      summary: function (c, n, pct, time) { return n + ' पैकी ' + c + ' बरोबर · ' + pct + '% · लागलेला वेळ ' + time; },
      scoreHead: ['विभाग', 'बरोबर', 'चूक', 'सोडलेले', 'गुण'],
      revisit: 'पुन्हा अभ्यासायचे विषय',
      revisitNote: 'जिथे उत्तर चुकले ते विषय, सर्वाधिक चुका आधी.',
      review: 'उत्तरांचा आढावा',
      filterLabel: 'उत्तरे निवडा',
      filters: ['सर्व', 'चुकलेले', 'सोडलेले', 'बरोबर'],
      notAnswered: 'उत्तर दिले नाही.',
      yours: 'तुमचे उत्तर:',
      correct: 'बरोबर उत्तर:',
      again: 'पुन्हा परीक्षा द्या',
      meaning: 'मराठी अर्थ पाहा',
    },
  }[LANG];

  // Bank fields are either plain strings or { en, mr } objects.
  function L(value) { return value && typeof value === 'object' ? value[LANG] : value; }

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

  function modeLabel(mode) {
    return mode === 'full' ? TEXT.fullLabel : TEXT.drillTitle(L(sectionById(mode).short));
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    return m + ':' + String(s % 60).padStart(2, '0');
  }

  function meaning(item) {
    if (!TEXT.meaning || !item.qMr) return '';
    return '<details class="q-help"><summary>' + TEXT.meaning + '</summary>' + item.qMr + '</details>';
  }

  // ---------- setup ----------

  function showSetup() {
    test = null;
    clearInterval(tick);
    window.removeEventListener('beforeunload', guardLeave);
    root.innerHTML = '';

    var fullCount = BANK.sections.reduce(function (n, s) { return n + Math.min(s.questions, s.items.length); }, 0);
    var split = BANK.sections.map(function (s) { return Math.min(s.questions, s.items.length) + ' ' + L(s.short); }).join(', ');
    var grid = el('div', { class: 'mock-setup' });

    var full = el('div', { class: 'mode full' }, '<h3>' + TEXT.fullTitle + '</h3><p>' + TEXT.fullDesc(fullCount, split, BANK.minutes) + '</p>');
    full.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { start('full'); } }, TEXT.fullStart));
    grid.appendChild(full);

    BANK.sections.forEach(function (s) {
      var card = el('div', { class: 'mode', id: s.id, style: '--hue:' + s.hue },
        '<h3>' + TEXT.drillTitle(L(s.short)) + '</h3><p>' + TEXT.drillDesc(Math.min(DRILL_SIZE, s.items.length), L(s.name), DRILL_MINUTES, s.items.length) + '</p>');
      card.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { start(s.id); } }, TEXT.drillStart(L(s.short))));
      grid.appendChild(card);
    });
    root.appendChild(grid);

    var history = store.get('mca:mocks', []);
    if (history.length) {
      var rows = history.slice(-8).reverse().map(function (h) {
        var label = h.mode && (h.mode === 'full' || sectionById(h.mode)) ? modeLabel(h.mode) : h.label;
        return '<tr><td>' + new Date(h.at).toLocaleDateString(LANG === 'mr' ? 'mr-IN' : undefined) + '</td><td>' + label + '</td><td>' +
          h.score + ' / ' + h.max + '</td><td>' + Math.round(100 * h.score / h.max) + '%</td></tr>';
      }).join('');
      root.appendChild(el('section', {},
        '<h2>' + TEXT.recent + '</h2><div class="table-wrap"><table class="score-table"><thead><tr>' +
        TEXT.recentHead.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
        rows + '</tbody></table></div><p class="muted">' + TEXT.savedLocal + '</p>'));
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
        questions.push({ section: s.id, item: item, order: order, answer: order.indexOf(item.answer), chosen: null, marked: false });
      });
    });
    test = {
      mode: mode,
      questions: questions,
      current: 0,
      startedAt: Date.now(),
      endsAt: Date.now() + (mode === 'full' ? BANK.minutes : DRILL_MINUTES) * 60000,
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
    var section = sectionById(q.section);
    root.innerHTML = '';

    var bar = el('div', { class: 'exam-bar' });
    bar.appendChild(el('span', { class: 'timer', role: 'timer', 'aria-label': TEXT.timeLeft }));
    if (test.mode === 'full') {
      var tabs = el('div', { class: 'sec-tabs', role: 'group', 'aria-label': TEXT.jump });
      BANK.sections.forEach(function (s) {
        var first = test.questions.findIndex(function (x) { return x.section === s.id; });
        if (first < 0) return;
        tabs.appendChild(el('button', {
          class: 'sec-tab', type: 'button', 'aria-pressed': String(s.id === q.section),
          onclick: function () { go(first); },
        }, L(s.short)));
      });
      bar.appendChild(tabs);
    }
    bar.appendChild(el('button', { class: 'button', type: 'button', onclick: confirmSubmit }, TEXT.submit));
    root.appendChild(bar);

    var card = el('div', { class: 'exam-q', style: '--hue:' + section.hue });
    card.appendChild(el('p', { class: 'meta' }, TEXT.meta(test.current + 1, test.questions.length, L(section.short), L(q.item.topicTitle))));
    card.appendChild(el('p', { class: 'q', lang: 'en' }, q.item.q));
    if (meaning(q.item)) card.appendChild(el('div', {}, meaning(q.item)));
    if (q.item.code) card.appendChild(el('pre', { class: 'code' }, '<code>' + q.item.code + '</code>'));
    var group = el('div', { role: 'radiogroup', 'aria-label': TEXT.options, lang: 'en' });
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
    nav.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { go(test.current - 1); } }, TEXT.prev));
    var right = el('span');
    right.appendChild(el('button', { class: 'button ghost', type: 'button', onclick: function () { q.chosen = null; renderExam(); } }, TEXT.clear));
    right.appendChild(el('button', {
      class: 'button ghost', type: 'button',
      onclick: function () { q.marked = !q.marked; go(test.current + 1); },
    }, q.marked ? TEXT.unmark : TEXT.mark));
    right.appendChild(el('button', { class: 'button', type: 'button', onclick: function () { go(test.current + 1); } }, TEXT.next));
    nav.appendChild(right);
    card.appendChild(nav);
    root.appendChild(card);

    var palette = el('div', { class: 'palette', role: 'group', 'aria-label': TEXT.allQuestions });
    test.questions.forEach(function (x, i) {
      palette.appendChild(el('button', { class: 'pal', type: 'button', 'data-i': String(i), 'aria-label': TEXT.question + (i + 1), onclick: function () { go(i); } }, String(i + 1)));
    });
    root.appendChild(palette);
    root.appendChild(el('div', { class: 'legend' }, TEXT.legend));
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
    if (window.confirm(unanswered ? TEXT.confirmBlank(unanswered) : TEXT.confirm)) finish(false);
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
    history.push({ at: Date.now(), mode: t.mode, label: modeLabel(t.mode), score: score, max: max });
    store.set('mca:mocks', history.slice(-30));

    root.innerHTML = '';
    var head = el('section', {},
      '<p class="eyebrow">' + (timedOut ? TEXT.timeUp : TEXT.result) + '</p>' +
      '<p class="result-score">' + score + ' / ' + max + '</p>' +
      '<p class="muted">' + TEXT.summary(correct, t.questions.length, Math.round(100 * correct / t.questions.length),
        fmtTime(Math.min(Date.now(), t.endsAt) - t.startedAt)) + '</p>');
    var rows = BANK.sections.filter(function (s) { return per[s.id]; }).map(function (s) {
      var p = per[s.id];
      return '<tr><td>' + L(s.name) + '</td><td>' + p.right + '</td><td>' + p.wrong + '</td><td>' + p.skipped + '</td><td>' + p.right * m + ' / ' + p.total * m + '</td></tr>';
    }).join('');
    head.appendChild(el('div', { class: 'table-wrap' },
      '<table class="score-table"><thead><tr>' + TEXT.scoreHead.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + rows + '</tbody></table>'));
    root.appendChild(head);

    var weak = {};
    t.questions.forEach(function (q) {
      if (q.chosen !== null && q.chosen !== q.answer) {
        weak[q.item.topic] = { title: L(q.item.topicTitle), section: q.section, n: (weak[q.item.topic] ? weak[q.item.topic].n : 0) + 1 };
      }
    });
    var weakList = Object.keys(weak).sort(function (a, b) { return weak[b].n - weak[a].n; });
    if (weakList.length) {
      root.appendChild(el('section', {}, '<h2>' + TEXT.revisit + '</h2><p class="muted">' + TEXT.revisitNote + '</p><p>' + weakList.map(function (id) {
        var s = sectionById(weak[id].section);
        return '<a class="chip" style="--hue:' + s.hue + '" href="' + s.id + '.html#' + id + '">' + weak[id].title + ' (' + weak[id].n + ')</a>';
      }).join(' ') + '</p>'));
    }

    var review = el('section', { class: 'review' }, '<h2>' + TEXT.review + '</h2>');
    var filter = el('div', { class: 'filter', role: 'group', 'aria-label': TEXT.filterLabel });
    var list = el('div');
    ['all', 'no', 'skip', 'ok'].forEach(function (key, i) {
      filter.appendChild(el('button', {
        class: 'sec-tab', type: 'button', 'aria-pressed': String(i === 0),
        onclick: function (e) {
          filter.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === e.currentTarget)); });
          list.querySelectorAll('.review-item').forEach(function (r) { r.hidden = key !== 'all' && !r.classList.contains(key); });
        },
      }, TEXT.filters[i]));
    });
    review.appendChild(filter);
    t.questions.forEach(function (q, i) {
      var state = q.chosen === null ? 'skip' : q.chosen === q.answer ? 'ok' : 'no';
      var s = sectionById(q.section);
      var opt = function (k) { return LETTERS[k] + '. ' + q.item.options[q.order[k]]; };
      list.appendChild(el('div', { class: 'review-item ' + state },
        '<p class="meta muted">Q' + (i + 1) + ' · ' + L(s.short) + ' · <a href="' + s.id + '.html#' + q.item.topic + '">' + L(q.item.topicTitle) + '</a></p>' +
        '<p lang="en">' + q.item.q + '</p>' + (LANG === 'mr' && q.item.qMr ? '<p class="q-help">' + q.item.qMr + '</p>' : '') +
        (q.item.code ? '<pre class="code"><code>' + q.item.code + '</code></pre>' : '') +
        '<p>' + (state === 'skip' ? '<b>' + TEXT.notAnswered + '</b>' : '<b>' + TEXT.yours + '</b> ' + opt(q.chosen) + (state === 'ok' ? ' ✓' : ' ✗')) +
        (state !== 'ok' ? '<br><b>' + TEXT.correct + '</b> ' + opt(q.answer) : '') + '</p>' +
        '<p class="why">' + L(q.item.why) + '</p>'));
    });
    review.appendChild(list);
    root.appendChild(review);
    var again = el('button', { class: 'button', type: 'button', onclick: function () { showSetup(); root.scrollIntoView(); } }, TEXT.again);
    root.appendChild(el('p')).appendChild(again);
    root.scrollIntoView();
  }

  showSetup();
})();
