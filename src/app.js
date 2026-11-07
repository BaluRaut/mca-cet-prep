// Shared page behaviour: theme toggle, practice MCQs, "mark as done" progress.
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
    var verdict = picked === answer ? (MR ? '✓ बरोबर. ' : '✓ Correct. ') : (MR ? '✗ चुकले. ' : '✗ Not quite. ');
    why.insertAdjacentText('afterbegin', verdict);
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

  // Switching language keeps you on the same topic.
  var langLink = document.querySelector('.lang-switch');
  if (langLink) {
    langLink.addEventListener('click', function () {
      if (location.hash) langLink.href = langLink.href.split('#')[0] + location.hash;
    });
  }

  var printBtn = document.querySelector('.print');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  paint();
})();
