/* ═══════════════════════════════════════════════════
   Reformas y Proyectos J.A.G — Demo comercial
   Sin dependencias externas.
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Aviso de demo ──────────────────────────── */
  var strip = document.getElementById('demoStrip');
  var stripClose = document.getElementById('demoClose');
  if (strip && stripClose) {
    stripClose.addEventListener('click', function () { strip.hidden = true; });
  }

  /* ── Menú móvil ─────────────────────────────── */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  }

  if (nav && navToggle) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar al pulsar un enlace del menú
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    // Cerrar al tocar fuera
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (!e.target.closest('#nav') && !e.target.closest('#navToggle')) closeNav();
    });
  }

  /* ── Sombra del header al hacer scroll ──────── */
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('site-header--scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll reveal ──────────────────────────── */
  var revealables = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ── Formulario de presupuesto ──────────────── */
  var form = document.getElementById('quoteForm');
  if (!form) return;

  var okPanel = document.getElementById('formOk');
  var submitBtn = document.getElementById('submitBtn');

  var rules = [
    { input: 'f-nombre', error: 'e-nombre', msg: 'Escribe tu nombre.',
      valid: function (v) { return v.trim().length >= 2; } },
    { input: 'f-tel', error: 'e-tel', msg: 'Escribe un teléfono válido (9 dígitos).',
      valid: function (v) { return v.replace(/[\s.\-()+]/g, '').length >= 9; } },
    { input: 'f-tipo', error: 'e-tipo', msg: 'Elige qué quieres reformar.',
      valid: function (v) { return v !== ''; } }
  ];

  function setFieldState(rule, isValid) {
    var input = document.getElementById(rule.input);
    var error = document.getElementById(rule.error);
    var field = input.closest('.field');

    field.classList.toggle('field--invalid', !isValid);
    input.setAttribute('aria-invalid', String(!isValid));

    if (isValid) {
      error.hidden = true;
      error.textContent = '';
      input.removeAttribute('aria-describedby');
    } else {
      error.hidden = false;
      error.textContent = rule.msg;
      input.setAttribute('aria-describedby', rule.error);
    }
  }

  // Validación al salir del campo (no en cada tecla)
  rules.forEach(function (rule) {
    var input = document.getElementById(rule.input);
    input.addEventListener('blur', function () {
      if (input.value === '' && !input.dataset.touched) return;
      input.dataset.touched = '1';
      setFieldState(rule, rule.valid(input.value));
    });
    input.addEventListener('input', function () {
      // Si ya estaba en error, lo limpiamos en cuanto sea válido
      if (input.closest('.field').classList.contains('field--invalid') && rule.valid(input.value)) {
        setFieldState(rule, true);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstInvalid = null;
    rules.forEach(function (rule) {
      var input = document.getElementById(rule.input);
      var isValid = rule.valid(input.value);
      input.dataset.touched = '1';
      setFieldState(rule, isValid);
      if (!isValid && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // DEMO: no hay backend. Simulamos el envío y mostramos confirmación.
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    window.setTimeout(function () {
      form.querySelectorAll('.field').forEach(function (f) { f.hidden = true; });
      submitBtn.hidden = true;
      var legal = form.querySelector('.formcard__legal');
      if (legal) legal.hidden = true;
      okPanel.hidden = false;
      okPanel.focus && okPanel.focus();
    }, reduceMotion ? 0 : 700);
  });
})();
