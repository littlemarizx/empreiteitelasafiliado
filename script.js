/* Empreitei · App do Afiliado — showcase. Lê window.__SHOWCASE (data.js). */
(function () {
  "use strict";

  var DATA = window.__SHOWCASE || { modules: [], shots: [], totals: {} };
  var state = { module: "__all__", query: "" };
  var visible = [];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- Cabeçalho ---------- */
  function stat(value, unit, label) {
    return '<div class="stat"><dt>' + esc(label) + "</dt><dd>" + value +
      (unit ? '<span class="u">' + unit + "</span>" : "") + "</dd></div>";
  }
  $("#stats").innerHTML =
    stat(DATA.totals.shots, "", "Interfaces capturadas") +
    stat(DATA.totals.screens, "", "Telas do app") +
    stat(DATA.totals.modules, "", "Módulos") +
    '<div class="stat"><dt>Atualizado em</dt><dd style="font-size:17px">' + esc(DATA.updatedLabel) + "</dd></div>";

  $("#footer-stats").textContent =
    DATA.totals.shots + " telas · " + DATA.totals.modules + " módulos · atualizado em " + DATA.updatedLabel;

  /* ---------- Abas de módulo ---------- */
  var tabsEl = $("#modules");
  function buildTabs() {
    var html = ['<button data-mod="__all__" class="active" role="tab" aria-selected="true">Visão geral</button>'];
    DATA.modules.forEach(function (m) {
      html.push('<button data-mod="' + esc(m.title) + '" role="tab" aria-selected="false">' + esc(m.title) + "</button>");
    });
    tabsEl.innerHTML = html.join("");
    $$("button", tabsEl).forEach(function (b) {
      b.addEventListener("click", function () {
        state.module = b.getAttribute("data-mod");
        setActiveTab(state.module);
        render();
        var y = $(".nav").offsetTop;
        if (window.scrollY > y) window.scrollTo({ top: y, behavior: "smooth" });
      });
    });
  }
  function setActiveTab(mod) {
    $$("button", tabsEl).forEach(function (x) {
      var on = x.getAttribute("data-mod") === mod;
      x.classList.toggle("active", on);
      x.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  /* ---------- Filtro ---------- */
  function matches(s) {
    if (state.module !== "__all__" && s.module !== state.module) return false;
    var q = state.query.trim().toLowerCase();
    if (!q) return true;
    return [s.label, s.screenTitle, s.module, s.desc, s.route].join(" ").toLowerCase().indexOf(q) !== -1;
  }

  /* ---------- Cards ---------- */
  function cardHtml(s, i) {
    return '<article class="card">' +
      '<div class="card-top"><span class="card-idx">' + pad(s.index) + '</span><span class="card-mod">' + esc(s.module) + "</span></div>" +
      '<button class="shot" data-i="' + i + '" aria-label="Ampliar ' + esc(s.screenTitle + " — " + s.label) + '">' +
        '<span class="device"><span class="screen">' +
          '<img loading="lazy" src="' + esc(s.image) + '" alt="Tela ' + esc(s.screenTitle + " — " + s.label) + ' do app do afiliado">' +
        "</span></span>" +
      "</button>" +
      '<div class="card-body">' +
        '<h4 class="card-title">' + esc(s.label) + "</h4>" +
        '<div class="card-screen">' + esc(s.screenTitle) + "</div>" +
        '<p class="card-desc">' + esc(s.desc) + "</p>" +
      "</div></article>";
  }

  var gallery = $("#gallery");
  function render() {
    visible = [];
    var html = "";

    DATA.modules.forEach(function (mod, mi) {
      if (state.module !== "__all__" && mod.title !== state.module) return;
      var items = DATA.shots.filter(function (s) { return s.module === mod.title && matches(s); });
      if (!items.length) return;

      html += '<section class="module" id="mod-' + mi + '"><div class="module-head">' +
        '<span class="module-num">' + pad(mi + 1) + " / " + pad(DATA.modules.length) + "</span>" +
        "<div><h2>" + esc(mod.title) + "</h2><p>" + esc(mod.description) + "</p></div>" +
        '<span class="count">' + items.length + (items.length === 1 ? " tela" : " telas") + "</span>" +
        "</div>";

      // Nível intermediário: a tela do app, agrupando suas interfaces.
      var groups = [];
      items.forEach(function (s) {
        var g = groups.filter(function (x) { return x.id === s.screenId; })[0];
        if (!g) { g = { id: s.screenId, title: s.screenTitle, items: [] }; groups.push(g); }
        g.items.push(s);
      });

      groups.forEach(function (g) {
        html += '<div class="screen-group"><div class="sg-head"><span class="sg-bar"></span>' +
          "<h3>" + esc(g.title) + "</h3>" +
          '<span class="sg-count">' + g.items.length + (g.items.length === 1 ? " interface" : " interfaces") + "</span>" +
          '</div><div class="grid-cards">';
        g.items.forEach(function (s) {
          html += cardHtml(s, visible.length);
          visible.push(s);
        });
        html += "</div></div>";
      });

      html += "</section>";
    });

    gallery.innerHTML = html || '<div class="empty">Nenhuma tela encontrada para a busca atual.</div>';
    $$("[data-i]", gallery).forEach(function (el) {
      el.addEventListener("click", function () { open(parseInt(el.getAttribute("data-i"), 10)); });
    });
  }

  /* ---------- Visualizador ---------- */
  var viewer = $("#viewer"), vImg = $("#viewer-img");
  var prev = $(".viewer-arrow.prev"), next = $(".viewer-arrow.next");
  var idx = 0, lastFocus = null;

  function open(i) {
    if (i < 0 || i >= visible.length) return;
    var first = viewer.hidden;
    if (first) lastFocus = document.activeElement;
    idx = i;
    var s = visible[i];

    vImg.src = s.image;
    vImg.alt = "Tela " + s.screenTitle + " — " + s.label;
    $("#viewer-module").textContent = s.module;
    $("#viewer-title").textContent = s.label;
    $("#viewer-desc").textContent = s.desc;
    $("#viewer-index").textContent = pad(s.index) + " · " + s.screenTitle;
    $("#viewer-route").textContent = s.route;

    var full = $("#viewer-full");
    full.hidden = !s.fullImage;
    if (s.fullImage) full.href = s.fullImage;

    prev.disabled = i === 0;
    next.disabled = i === visible.length - 1;
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    preload(i + 1); preload(i - 1);
    if (first) setTimeout(function () { $(".viewer-close").focus(); }, 30);
  }
  function preload(i) { if (i >= 0 && i < visible.length) { var im = new Image(); im.src = visible[i].image; } }
  function close() {
    viewer.hidden = true; vImg.src = "";
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function step(d) { var n = idx + d; if (n >= 0 && n < visible.length) open(n); }

  $$("[data-close]", viewer).forEach(function (el) { el.addEventListener("click", close); });
  prev.addEventListener("click", function () { step(-1); });
  next.addEventListener("click", function () { step(1); });

  document.addEventListener("keydown", function (e) {
    if (viewer.hidden) {
      if (e.key === "/" && document.activeElement !== $("#search")) { e.preventDefault(); $("#search").focus(); }
      return;
    }
    if (e.key === "Escape") return close();
    if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      // Prende o foco dentro do modal enquanto ele estiver aberto.
      var f = $$("button, a[href]", viewer).filter(function (n) { return !n.disabled && n.offsetParent !== null; });
      if (!f.length) return;
      var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });

  (function swipe() {
    var x = 0, y = 0;
    var stage = $(".viewer-stage");
    stage.addEventListener("touchstart", function (e) { x = e.touches[0].clientX; y = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - x, dy = e.changedTouches[0].clientY - y;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();

  /* ---------- Busca ---------- */
  $("#search").addEventListener("input", function (e) { state.query = e.target.value; render(); });

  /* ---------- Módulo ativo durante o scroll ----------
     Calculado a cada scroll em vez de IntersectionObserver: o IO só dispara em
     MUDANÇAS de interseção, então voltar ao topo deixava o destaque preso no
     último módulo visitado. */
  var ticking = false;
  function syncActiveTab() {
    ticking = false;
    if (state.module !== "__all__" || state.query) return;

    // Ainda no hero: nenhum módulo específico está em foco.
    if (window.scrollY < gallery.offsetTop - window.innerHeight * 0.4) {
      return setActiveTab("__all__");
    }
    var line = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    $$(".module", gallery).forEach(function (m) { if (m.offsetTop <= line) current = m; });
    var t = current && current.querySelector("h2");
    setActiveTab(t ? t.textContent : "__all__");
  }
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(syncActiveTab);
  }, { passive: true });

  buildTabs();
  render();
})();
