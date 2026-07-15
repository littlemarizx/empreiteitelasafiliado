/* Empreitei · App do Afiliado — Product Showcase. Camada visual compartilhada
   com o showcase do prestador; lê window.__DEMO_DATA (gerado por scripts/showcase/build.js). */
(function () {
  "use strict";
  var DATA = window.__DEMO_DATA || { sections: [], screens: [], coverage: {} };
  var state = { module: "__all__", query: "", view: "grid" };
  var visible = [];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(t) { return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  /* A descrição de cada módulo vem do próprio data.js (sections[].description),
     gerado a partir do mapa de telas — nada é duplicado aqui. */
  var DESCRIPTIONS = {};
  (DATA.sections || []).forEach(function (s) { DESCRIPTIONS[s.title] = s.description; });

  var sectionNumber = {};
  (DATA.sections || []).forEach(function (s, i) { sectionNumber[s.title] = i + 1; });
  var cov = DATA.coverage || {};
  var TOTAL_SECTIONS = (DATA.sections || []).length;
  var pctCov = cov.planned ? Math.round((cov.captured / cov.planned) * 100) : 0;

  /* Achata módulo → tela oficial → interface. Cada card é uma INTERFACE, mas
     carrega o contexto da tela oficial do escopo à qual pertence. */
  var ALL = [];
  (DATA.screens || []).forEach(function (s) {
    (s.views || []).forEach(function (v) {
      ALL.push({
        id: v.id, label: v.label, state: v.state, viewOrder: v.viewOrder,
        image: v.image, fullImage: v.fullImage, captured: v.captured,
        captureError: v.captureError, reachedBy: v.reachedBy, params: v.params,
        screenId: s.id, screenTitle: s.screenTitle, sectionTitle: s.sectionTitle,
        route: s.route, documentOrder: s.documentOrder, screenOrder: s.screenOrder,
        implementationStatus: s.implementationStatus, captureMethod: s.captureMethod,
        viewCount: s.viewCount,
      });
    });
  });

  /* ---------- Hero: telemetria + composição ---------- */
  function tm(v, u, label) { return '<div class="tm"><b>' + v + (u ? '<span class="u">' + u + "</span>" : "") + "</b><span>" + label + "</span></div>"; }
  $("#telemetry").innerHTML =
    tm(cov.planned || ALL.length, "", "Interfaces") +
    tm(cov.screens || 0, "", "Telas") +
    tm(TOTAL_SECTIONS, "", "Módulos") +
    tm(pctCov, "%", "Cobertura");

  function screenById(id) { return ALL.filter(function (s) { return s.screenId === id && s.captured; })[0]; }
  function firstCaptured() { return ALL.filter(function (s) { return s.captured; }); }
  (function buildHeroStage() {
    var caps = firstCaptured();
    var main = screenById("dashboard") || caps[0];
    var b1 = screenById("links") || caps[1] || main;
    var b2 = screenById("comissoes") || screenById("conta") || caps[2] || main;
    if (!main) return;
    function phone(cls, sc) { return '<div class="hero-phone ' + cls + '"><div class="screen"><img src="' + esc(sc.image) + '" alt=""></div></div>'; }
    $("#hero-stage").innerHTML =
      '<span class="halo"></span>' +
      phone("b1", b1) + phone("b2", b2) + phone("main", main) +
      '<div class="hero-chip c1"><span class="ic"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/></svg></span><div><b>' + (cov.planned || ALL.length) + '</b><span>interfaces mapeadas</span></div></div>' +
      '<div class="hero-chip c2"><span class="ic"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></span><div><b>' + TOTAL_SECTIONS + '</b><span>módulos</span></div></div>' +
      '<div class="hero-chip c3"><span class="ic"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M3 20h5"/><path d="m16 4 4 4-11 11H5v-4L16 4z"/></svg></span><div><b>iOS + Android</b><span>plataformas</span></div></div>';
  })();

  /* ---------- Tabs de módulos ---------- */
  var tabsEl = $("#modules");
  function buildTabs() {
    var html = ['<button data-mod="__all__" class="active">Todas as telas</button>'];
    (DATA.sections || []).forEach(function (s) { html.push('<button data-mod="' + esc(s.title) + '">' + esc(s.title) + "</button>"); });
    tabsEl.innerHTML = html.join("");
    $$("button", tabsEl).forEach(function (b) {
      b.addEventListener("click", function () {
        state.module = b.getAttribute("data-mod");
        $$("button", tabsEl).forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        b.scrollIntoView({ inline: "center", block: "nearest" });
        var y = $(".navbar").offsetTop - 60;
        if (window.scrollY > y) window.scrollTo({ top: y, behavior: "smooth" });
        render();
      });
    });
  }
  $(".tabs-prev").addEventListener("click", function () { tabsEl.scrollBy({ left: -260, behavior: "smooth" }); });
  $(".tabs-next").addEventListener("click", function () { tabsEl.scrollBy({ left: 260, behavior: "smooth" }); });
  (function dragScroll(el) {
    var down = false, moved = false, sx = 0, sl = 0;
    el.addEventListener("pointerdown", function (e) { down = true; moved = false; sx = e.clientX; sl = el.scrollLeft; });
    el.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - sx;
      if (Math.abs(dx) > 5) { moved = true; el.scrollLeft = sl - dx; }
    });
    window.addEventListener("pointerup", function () { down = false; });
    // Só bloqueia o clique se realmente houve arraste (não rouba o clique dos filtros).
    el.addEventListener("click", function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  })(tabsEl);

  /* ---------- Filtro ---------- */
  function matches(sc) {
    if (state.module !== "__all__" && sc.sectionTitle !== state.module) return false;
    var q = state.query.trim().toLowerCase();
    if (!q) return true;
    return [sc.screenTitle, sc.sectionTitle, sc.route, sc.state, sc.label].join(" ").toLowerCase().indexOf(q) !== -1;
  }

  /* ---------- Cards ---------- */
  function badge(sc) {
    if (sc.captured) return '<span class="badge ok"><span class="b-dot"></span>Capturada</span>';
    if (sc.implementationStatus === "pending") return '<span class="badge pending"><span class="b-dot"></span>Pendente</span>';
    return '<span class="badge error"><span class="b-dot"></span>Erro</span>';
  }
  function cardHtml(sc, index) {
    var idx = pad2(sc.documentOrder) + "." + pad2(sc.screenOrder) + "." + pad2(sc.viewOrder);
    var stage;
    if (sc.captured) {
      stage = '<div class="stage"><div class="device" data-index="' + index + '"><span class="island"></span>' +
        '<div class="screen"><img loading="lazy" src="' + esc(sc.image) + '" alt="' + esc(sc.screenTitle) + '"></div>' +
        '<span class="view-hint">Ver tela completa</span></div></div>';
    } else {
      stage = '<div class="stage blank"><div class="device"><div class="screen"><span class="wire"></span><span class="wire-scan"></span>' +
        '<div class="blank-inner"><span class="bi-ic"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>' +
        '<b>Aguardando<br>implementação</b><span>Prevista no escopo</span></div></div></div></div>';
    }
    var route = sc.route && sc.route !== "—"
      ? '<div class="card-route"><span>' + esc(sc.route) + '</span><button data-copy="' + esc(sc.route) + '">copiar</button></div>' : "";
    var cta = sc.captured
      ? '<button class="card-cta" data-index="' + index + '"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg> Visualizar interface</button>' : "";
    return '<article class="card' + (sc.captured ? "" : " is-blank") + '">' +
      '<div class="card-bar"><span class="card-idx mono">' + idx + "</span>" + badge(sc) + "</div>" +
      stage +
      '<div class="card-body">' +
        '<div class="card-module">' + esc(sc.screenTitle) + "</div>" +
        '<h3 class="card-title">' + esc(sc.label) + "</h3>" +
        '<div class="card-state">' + esc(sc.state && sc.state !== "—" ? sc.state : "Prevista no escopo") + "</div>" +
        route + cta +
      "</div></article>";
  }

  var gallery = $("#gallery");
  function render() {
    gallery.className = "gallery is-" + state.view;
    visible = [];
    var html = "";
    (DATA.sections || []).forEach(function (section) {
      if (state.module !== "__all__" && section.title !== state.module) return;
      var items = ALL.filter(function (sc) { return sc.sectionTitle === section.title && matches(sc); });
      if (!items.length) return;
      var n = sectionNumber[section.title];
      var pct = section.planned ? Math.round((section.captured / section.planned) * 100) : 0;
      html += '<section class="section"><span class="section-node"></span><div class="section-head">' +
        '<span class="sh-num mono">' + pad2(n) + " / " + pad2(TOTAL_SECTIONS) + "</span>" +
        '<div class="sh-text"><h2>' + esc(section.title) + "</h2>" +
        (DESCRIPTIONS[section.title] ? "<p>" + esc(DESCRIPTIONS[section.title]) + "</p>" : "") + "</div>" +
        '<div class="sh-meta"><span class="sh-count">' + section.captured + " / " + section.planned + " interfaces · " + pct + "%</span>" +
        '<span class="sh-bar"><i style="width:' + pct + '%"></i></span></div>' +
        "</div>";

      // Nível intermediário: uma tela oficial do escopo por vez, na ordem do documento.
      var byScreen = [];
      items.forEach(function (sc) {
        var g = byScreen.filter(function (x) { return x.id === sc.screenId; })[0];
        if (!g) { g = { id: sc.screenId, title: sc.screenTitle, route: sc.route, total: sc.viewCount, items: [] }; byScreen.push(g); }
        g.items.push(sc);
      });

      byScreen.forEach(function (g) {
        var label = g.items.length === 1 ? "1 interface" : g.items.length + " interfaces";
        html += '<div class="screen-group">' +
          '<div class="sg-head"><span class="sg-line"></span>' +
            '<h3 class="sg-title">' + esc(g.title) + "</h3>" +
            '<span class="sg-count mono">' + label + "</span>" +
          "</div><div class=\"grid\">";
        g.items.forEach(function (sc) {
          var vi = sc.captured ? visible.length : -1;
          if (sc.captured) visible.push(sc);
          html += cardHtml(sc, vi);
        });
        html += "</div></div>";
      });
      html += "</section>";
    });
    gallery.innerHTML = html || '<div class="empty">Nenhuma tela encontrada para a busca atual.</div>';

    var shown = ALL.filter(matches).length;
    $("#counter").textContent = shown + " de " + ALL.length + " interfaces";

    $$("[data-index]", gallery).forEach(function (el) {
      var i = parseInt(el.getAttribute("data-index"), 10); if (i < 0) return;
      el.addEventListener("click", function (e) { e.preventDefault(); openModal(i); });
    });
    $$("[data-copy]", gallery).forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        var v = el.getAttribute("data-copy");
        if (navigator.clipboard) navigator.clipboard.writeText(v);
        var t = el.textContent; el.textContent = "copiado ✓"; setTimeout(function () { el.textContent = t; }, 1200);
      });
    });
  }

  /* ---------- Visualizador (modal) ---------- */
  var modal = $("#modal"), mImg = $("#modal-img"), mScreen = $(".viewer-screen"), mDevice = $("#viewer-device");
  var mHint = $("#modal-hint"), mIndex = 0, lastFocus = null;
  var arrowPrev = $(".viewer-arrow.prev"), arrowNext = $(".viewer-arrow.next");

  function updHint() { var s = mScreen.scrollHeight - mScreen.clientHeight > 12; mHint.classList.toggle("hide", !s || mScreen.scrollTop > 8); }
  mScreen.addEventListener("scroll", updHint);
  function preload(i) { if (i < 0 || i >= visible.length) return; var s = visible[i]; var im = new Image(); im.src = s.fullImage || s.image; }
  function row(k, v) { return '<div class="row"><span>' + esc(k) + "</span><b>" + esc(v || "—") + "</b></div>"; }

  function renderThumbs() {
    var from = Math.max(0, mIndex - 3), to = Math.min(visible.length - 1, mIndex + 3);
    var html = "";
    for (var i = from; i <= to; i++) html += '<img loading="lazy" data-t="' + i + '" class="' + (i === mIndex ? "active" : "") + '" src="' + esc(visible[i].image) + '" alt="">';
    var el = $("#modal-thumbs"); el.innerHTML = html;
    $$("img", el).forEach(function (t) { t.addEventListener("click", function () { openModal(parseInt(t.getAttribute("data-t"), 10)); }); });
  }

  function openModal(i) {
    if (i < 0 || i >= visible.length) return;
    var first = modal.hidden;
    if (first) lastFocus = document.activeElement;
    mIndex = i; var sc = visible[i];
    var full = sc.fullImage || sc.image;
    mDevice.classList.add("loading");
    mImg.onload = function () { mDevice.classList.remove("loading"); mScreen.scrollTop = 0; updHint(); };
    mImg.src = full;
    $("#modal-index").textContent = pad2(sc.documentOrder) + "." + pad2(sc.screenOrder) + "." + pad2(sc.viewOrder);
    $("#modal-module").textContent = sc.sectionTitle + "  ·  " + sc.screenTitle;
    $("#modal-title").textContent = sc.label;
    $("#modal-badges").innerHTML = badge(sc);
    var desc = sc.state && sc.state !== "—" ? sc.state : (DESCRIPTIONS[sc.sectionTitle] || "");
    var dEl = $("#modal-desc"); dEl.textContent = desc; dEl.style.display = desc ? "" : "none";
    // Progresso dentro da TELA OFICIAL (o que o documento chama de "a tela").
    var sibs = visible.filter(function (x) { return x.screenId === sc.screenId; });
    var pos = sibs.indexOf(sc) + 1;
    $("#modal-progress").textContent = "Interface " + pos + " de " + sibs.length + " · " + sc.screenTitle +
      "   (" + (i + 1) + "/" + visible.length + " no total)";
    $("#modal-progress-bar").style.width = Math.round((pos / sibs.length) * 100) + "%";
    $("#modal-tech").innerHTML =
      row("ID", sc.id) + row("Rota", sc.route) +
      row("Params", sc.params ? JSON.stringify(sc.params) : "—") +
      row("Como foi alcançada", sc.reachedBy) +
      row("Método", sc.captureMethod || "playwright") +
      row("Viewport", "390 × 844") + row("Estado", sc.state) + row("Status", sc.captured ? "capturada" : sc.implementationStatus) +
      '<button class="copy" data-copy="' + esc(sc.route) + '">Copiar rota</button>';
    $("#modal-tech .copy").addEventListener("click", function (e) {
      var v = e.target.getAttribute("data-copy"); if (navigator.clipboard) navigator.clipboard.writeText(v);
      e.target.textContent = "Rota copiada ✓"; setTimeout(function () { e.target.textContent = "Copiar rota"; }, 1200);
    });
    $("#modal-download").href = full;
    arrowPrev.disabled = i === 0; arrowNext.disabled = i === visible.length - 1;
    $(".vd-btn.nav-prev").disabled = i === 0; $(".vd-btn.nav-next").disabled = i === visible.length - 1;
    modal.hidden = false; document.body.style.overflow = "hidden";
    renderThumbs(); updHint();
    preload(i + 1); preload(i - 1);
    if (first) setTimeout(function () { $(".viewer-close").focus(); }, 30);
  }
  function closeModal() { modal.hidden = true; mImg.src = ""; document.body.style.overflow = ""; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  function stepModal(d) { var n = mIndex + d; if (n >= 0 && n < visible.length) openModal(n); }

  $$("[data-close]", modal).forEach(function (el) { el.addEventListener("click", closeModal); });
  arrowPrev.addEventListener("click", function () { stepModal(-1); });
  arrowNext.addEventListener("click", function () { stepModal(1); });
  $(".vd-btn.nav-prev").addEventListener("click", function () { stepModal(-1); });
  $(".vd-btn.nav-next").addEventListener("click", function () { stepModal(1); });

  // teclado + focus trap
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key === "ArrowLeft") stepModal(-1);
    else if (e.key === "ArrowRight") stepModal(1);
    else if (e.key === "Tab") {
      var f = $$('button, a[href], [tabindex]:not([tabindex="-1"])', modal).filter(function (n) { return !n.disabled && n.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // swipe mobile
  (function () {
    var sx = 0, sy = 0;
    mDevice.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    mDevice.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) stepModal(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();

  /* ---------- Busca ---------- */
  var search = $("#search");
  search.addEventListener("input", function () { state.query = search.value; render(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== search && modal.hidden) { e.preventDefault(); search.focus(); }
    else if (e.key === "Escape" && document.activeElement === search) { search.value = ""; state.query = ""; render(); search.blur(); }
  });

  /* ---------- View toggle ---------- */
  $$(".view-toggle button").forEach(function (b) {
    b.addEventListener("click", function () {
      state.view = b.getAttribute("data-view");
      $$(".view-toggle button").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active"); render();
    });
  });

  /* ---------- Modo técnico ---------- */
  var techBtn = $("#tech-toggle");
  techBtn.addEventListener("click", function () {
    var on = document.documentElement.dataset.tech === "on";
    document.documentElement.dataset.tech = on ? "off" : "on";
    techBtn.setAttribute("aria-pressed", on ? "false" : "true");
  });

  /* ---------- Footer ---------- */
  $("#footer-stats").textContent = (cov.captured || 0) + " interfaces · " + (cov.screens || 0) + " telas · " +
    TOTAL_SECTIONS + " módulos · atualizado em " +
    (cov.generatedAt ? new Date(cov.generatedAt).toLocaleDateString("pt-BR") : "—");

  buildTabs();
  render();
})();
