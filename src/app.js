// Shared page behaviour: theme toggle, practice MCQs, "mark as done" progress,
// the mistake bank, the "your progress" strip on the home page, and offline caching.
(function () {
  'use strict';

  var MR = document.documentElement.lang === 'mr';
  var store = {
    get: function (key, fallback) {
      try { var v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode: progress just isn't saved */ }
    },
  };
  window.MCA_STORE = store;

  // Questions answered wrongly anywhere on the site, by bank id ("<topic>-<n>").
  // A correct answer anywhere removes the question again.
  var wrong = new Set(store.get('mca:wrong', []));
  window.MCA_WRONG = {
    add: function (id) { wrong.add(id); store.set('mca:wrong', Array.from(wrong)); },
    remove: function (id) { if (wrong.delete(id)) store.set('mca:wrong', Array.from(wrong)); },
    has: function (id) { return wrong.has(id); },
    list: function () { return Array.from(wrong); },
  };

  // Theme: follows the system until the user picks one.
  var themeBtn = document.querySelector('.theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var root = document.documentElement;
      var current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('mca:theme', next); } catch (e) { /* ignore */ }
    });
  }

  // Practice questions: first tap locks the answer and shows the explanation.
  document.addEventListener('click', function (event) {
    var btn = event.target.closest('.mcq .opt');
    if (!btn || btn.disabled) return;
    var mcq = btn.closest('.mcq');
    var answer = Number(mcq.dataset.answer);
    var picked = Number(btn.dataset.i);
    mcq.querySelectorAll('.opt').forEach(function (b) {
      b.disabled = true;
      var i = Number(b.dataset.i);
      if (i === answer) b.classList.add('is-right');
      else if (i === picked) b.classList.add('is-wrong');
    });
    var why = mcq.querySelector('.why');
    why.hidden = false;
    var right = picked === answer;
    why.insertAdjacentText('afterbegin', right ? (MR ? '✓ बरोबर. ' : '✓ Correct. ') : (MR ? '✗ चुकले. ' : '✗ Not quite. '));
    if (mcq.dataset.qid) { if (right) window.MCA_WRONG.remove(mcq.dataset.qid); else window.MCA_WRONG.add(mcq.dataset.qid); }
  });

  // Topic progress, saved per browser.
  var done = new Set(store.get('mca:done', []));

  function paint() {
    document.querySelectorAll('[data-done]').forEach(function (box) { box.checked = done.has(box.dataset.done); });
    document.querySelectorAll('[data-chip]').forEach(function (el) { el.classList.toggle('is-done', done.has(el.dataset.chip)); });
    document.querySelectorAll('[data-progress]').forEach(function (el) {
      var ids = el.dataset.progress.split(' ').filter(Boolean);
      var count = ids.filter(function (id) { return done.has(id); }).length;
      el.querySelector('.done-count').textContent = count;
      el.querySelector('.bar-fill').style.width = ids.length ? (100 * count / ids.length) + '%' : '0';
    });
  }

  document.addEventListener('change', function (event) {
    var box = event.target.closest('[data-done]');
    if (!box) return;
    if (box.checked) done.add(box.dataset.done); else done.delete(box.dataset.done);
    store.set('mca:done', Array.from(done));
    paint();
  });

  // Home page: "your progress" strip, shown only once there is something to show.
  var you = document.querySelector('[data-you]');
  if (you) {
    var labels = JSON.parse(you.dataset.youLabels || '{}');
    var mocks = store.get('mca:mocks', []);
    var diag = store.get('mca:diag', null);
    var topicIds = (you.dataset.youTopics || '').split(' ').filter(Boolean);
    var doneCount = topicIds.filter(function (id) { return done.has(id); }).length;
    var anything = doneCount || mocks.length || diag || wrong.size;
    if (anything) {
      you.hidden = false;
      you.querySelector('[data-you-done]').textContent = doneCount;
      you.querySelector('[data-you-wrong]').textContent = wrong.size;
      if (mocks.length) {
        var last = mocks[mocks.length - 1];
        you.querySelector('[data-you-mock]').textContent = last.score + '/' + last.max;
      }
      if (diag && diag.per) {
        var parts = Object.keys(labels).filter(function (id) { return diag.per[id]; }).map(function (id) {
          return labels[id] + ' ' + diag.per[id].right + '/' + diag.per[id].total;
        });
        you.querySelector('[data-you-diag]').hidden = false;
        you.querySelector('[data-you-diag-text]').textContent = parts.join(' · ');
      }
      var retry = you.querySelector('[data-you-retry]');
      if (retry && wrong.size) retry.hidden = false;
    }
  }

  // Switching language keeps you on the same topic.
  var langLink = document.querySelector('.lang-switch');
  if (langLink) {
    langLink.addEventListener('click', function () {
      if (location.hash) langLink.href = langLink.href.split('#')[0] + location.hash;
    });
  }

  var printBtn = document.querySelector('.print');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  // Offline: after the first visit the whole site is cached, so it opens without data.
  if ('serviceWorker' in navigator && document.documentElement.dataset.sw) {
    navigator.serviceWorker.register(document.documentElement.dataset.sw).catch(function () { /* unsupported or blocked */ });
  }

  paint();
})();
