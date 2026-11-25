/* =====================================================================
   ETC LAB · SITE SCRIPT (trilingual EN / ID / JA)
   - shared header (with language switch) and footer
   - renders data blocks marked data-render="..." in the active language
   - static page text uses <span data-l="en|id|ja">; CSS shows only the
     active language, so switching never reloads the page.
   ===================================================================== */
(function () {
  "use strict";
  var E = window.ETC || {}, L = E.lab || {};
  var root = document.documentElement;
  var LANG = root.getAttribute("data-lang") || "en";
  var page = document.body.getAttribute("data-page") || "";

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function tr(v) { if (v && typeof v === "object" && !Array.isArray(v)) return v[LANG] || v.en || ""; return v == null ? "" : v; }
  function T3(en, id, ja) { return '<span data-l="en">' + en + '</span><span data-l="id">' + id + '</span><span data-l="ja">' + ja + "</span>"; }
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function plain(s) { return String(s).replace(/<[^>]+>/g, ""); }
  function rich(s) { return esc(s).replace(/&lt;(\/?)(i|b|em|strong|sub|sup)&gt;/g, "<$1$2>"); }
  function initials(n) { var w = String(n).replace(/[^A-Za-z\s]/g, "").trim().split(/\s+/); return (w[0] || "")[0] + ((w.length > 1 ? w[w.length - 1] : "")[0] || ""); }

  /* UI strings used by the renderers */
  var UI = {
    en: { S3: "Doctoral (PhD)", S2: "Master's", S1: "Undergraduate", all: "All", allThemes: "All themes", explore: "Explore", members: "researchers", pubs: "publications",
      search: "Search…", searchPubs: "Search title, author, journal…", allTypes: "All types", allYears: "All years", of: "of", reset: "Reset", none: "No matching items.",
      copy: "Copy citation", copied: "Copied ✓", year: "Year", project: "Research project", funder: "Funding programme", role: "Role", title: "Title", number: "Number", inventors: "Inventors",
      searchAlumni: "Search name, thesis topic or destination…", alumni: "alumni", master: "Master's", bachelor: "Bachelor's", basedOn: "Based on alumni who shared their next step.",
      oAbroad: "Graduate study abroad", oItb: "Graduate study at ITB", oInd: "Industry & energy sector", oAcad: "Academia",
      level: "1 · Your level", style: "2 · How you like to work", theme: "3 · Theme", any: "Any", exp: "Hands-on experiments", sim: "Simulation & CFD", tea: "Techno-economics",
      match: "example topics match. Final topics are agreed with your supervisor.", noMatch: "No exact match. Email us with your idea.",
      emailPI: "Email Dr. Firman", fullProfile: "Full profile & publications", allPubs: "All publications", newJoin: "New members are joining this theme.", couldBe: "Could it be you?",
      apply: "Apply now", grants: "research grants", PI: "Principal Investigator", Member: "Member", photo: "Open photo" },
    id: { S3: "Doktor (S3)", S2: "Magister (S2)", S1: "Sarjana (S1)", all: "Semua", allThemes: "Semua tema", explore: "Selengkapnya", members: "peneliti", pubs: "publikasi",
      search: "Cari…", searchPubs: "Cari judul, penulis, jurnal…", allTypes: "Semua jenis", allYears: "Semua tahun", of: "dari", reset: "Reset", none: "Tidak ada yang cocok.",
      copy: "Salin sitasi", copied: "Tersalin ✓", year: "Tahun", project: "Proyek riset", funder: "Program pendanaan", role: "Peran", title: "Judul", number: "Nomor", inventors: "Inventor",
      searchAlumni: "Cari nama, topik tesis, atau tujuan…", alumni: "alumni", master: "Magister", bachelor: "Sarjana", basedOn: "Berdasarkan alumni yang membagikan langkah selanjutnya.",
      oAbroad: "Studi lanjut di luar negeri", oItb: "Studi lanjut di ITB", oInd: "Industri & sektor energi", oAcad: "Akademisi",
      level: "1 · Jenjang Anda", style: "2 · Gaya kerja", theme: "3 · Tema", any: "Semua", exp: "Eksperimen langsung", sim: "Simulasi & CFD", tea: "Tekno-ekonomi",
      match: "contoh topik cocok. Topik akhir disepakati dengan pembimbing.", noMatch: "Belum ada yang cocok. Kirim email ide Anda.",
      emailPI: "Email Dr. Firman", fullProfile: "Profil lengkap & publikasi", allPubs: "Semua publikasi", newJoin: "Anggota baru sedang bergabung di tema ini.", couldBe: "Mungkin Anda berikutnya?",
      apply: "Daftar sekarang", grants: "hibah riset", PI: "Ketua Peneliti", Member: "Anggota", photo: "Buka foto" },
    ja: { S3: "博士課程", S2: "修士課程", S1: "学部", all: "すべて", allThemes: "全テーマ", explore: "詳しく見る", members: "名の研究者", pubs: "件の論文",
      search: "検索…", searchPubs: "タイトル・著者・雑誌名で検索…", allTypes: "すべての種類", allYears: "すべての年", of: "/", reset: "リセット", none: "該当する項目がありません。",
      copy: "引用をコピー", copied: "コピーしました ✓", year: "年", project: "研究課題", funder: "助成プログラム", role: "役割", title: "名称", number: "番号", inventors: "発明者",
      searchAlumni: "氏名・論文テーマ・進路で検索…", alumni: "名の修了生", master: "修士", bachelor: "学士", basedOn: "進路を共有した修了生に基づく。",
      oAbroad: "海外大学院へ進学", oItb: "ITB大学院へ進学", oInd: "産業・エネルギー分野", oAcad: "アカデミア",
      level: "1 · 学年・課程", style: "2 · 研究スタイル", theme: "3 · テーマ", any: "指定なし", exp: "実験", sim: "シミュレーション・CFD", tea: "技術経済評価",
      match: "件のテーマ例が該当。最終テーマは指導教員と相談して決定します。", noMatch: "該当なし。アイデアをメールでお送りください。",
      emailPI: "Firman博士へメール", fullProfile: "プロフィール・論文一覧", allPubs: "全論文", newJoin: "このテーマのメンバーを募集中です。", couldBe: "次はあなたかもしれません。",
      apply: "応募する", grants: "件の研究助成", PI: "研究代表者", Member: "分担者", photo: "写真を開く" }
  };
  function u(k) { return (UI[LANG] || UI.en)[k] || UI.en[k] || k; }
  function u3(k) { return T3(UI.en[k], UI.id[k], UI.ja[k]); }

  var AREA_ORDER = ["comb", "loop", "ccus", "power"];
  var RX = {
    comb: /ammonia|\bNH3|NH₃|co-?fir|cofir|co-combust|flame|combust|ignition|burner|engine|spray|droplet|diesel|slagging|ash deposition|palm oil|biodiesel/i,
    loop: /looping|oxygen carrier|hydrogen production|green hydrogen|turquoise|electroly|pyrolysis|gasification|hydrogen storage|decomposition|cracking|biofuel|fischer|e-?fuel|SAF\b|aviation fuel|methane/i,
    ccus: /carbonation|mineral|sequestr|fly ash|calcium loop|CO2 capture|CO₂ capture|carbon capture|absor|microalga|circular carbon/i,
    power: /power plant|power generation|flexib|dynamic|repowering|thermal energy storage|combined cycle|combined-cycle|geothermal|rankine|PLTU|PLTP|performance test|gas turbine|grid|boiler|generator set/i
  };
  function topicsOf(t) { var s = plain(t), o = []; AREA_ORDER.forEach(function (k) { if (RX[k].test(s)) o.push(k); }); return o; }
  function tagHtml(list) { return list.map(function (k) { return '<span class="tag ' + k + '">' + esc(tr(E.areas[k].name)).split(/[&·・]/)[0].trim() + "</span>"; }).join(" "); }

  /* ---------- header ---------- */
  var NAV = [
    [["Home", "Beranda", "ホーム"], "index.html"],
    [["Research", "Riset", "研究"], "research.html", [
      [["Research overview", "Ikhtisar riset", "研究概要"], "research.html"],
      [["Non-Carbon Fuel Combustion & Co-firing", "Pembakaran Non-Karbon & Co-firing", "非炭素燃料燃焼・混焼"], "research-combustion.html"],
      [["Sustainable Fuels & Hydrogen", "Bahan Bakar Berkelanjutan & Hidrogen", "持続可能燃料・水素"], "research-chemical-looping.html"],
      [["Carbon Mineralization & Utilization", "Mineralisasi & Pemanfaatan Karbon", "炭素鉱物化・利用"], "research-ccus.html"],
      [["Power System Dynamics", "Dinamika Sistem Pembangkit", "発電システムダイナミクス"], "research-power-systems.html"],
      [["Facilities", "Fasilitas", "設備"], "facilities.html"]
    ]],
    [["People", "Anggota", "メンバー"], "people.html", [
      [["Lab members", "Anggota lab", "研究室メンバー"], "people.html"],
      [["PI & publications", "Ketua & publikasi", "代表者・論文"], "pi.html"],
      [["Alumni & theses", "Alumni & tesis", "修了生・論文"], "alumni.html"]
    ]],
    [["Projects", "Proyek", "研究課題"], "projects.html"],
    [["Join", "Bergabung", "参加"], "join.html", [
      [["Prospective students", "Calon mahasiswa", "入室希望の学生"], "join.html"],
      [["Collaborate", "Kolaborasi", "共同研究"], "collaborate.html"],
      [["Lab culture", "Budaya lab", "研究室の文化"], "culture.html"],
      [["Alumni sharing", "Berbagi alumni", "修了生の体験談"], "resources.html"]
    ]],
    [["News", "Berita", "ニュース"], "news.html"],
    [["Contact", "Kontak", "連絡先"], "contact.html"]
  ];
  function lab3(a) { return T3(esc(a[0]), esc(a[1]), esc(a[2])); }
  function cur(n) { return n[1] === page || (n[2] && n[2].some(function (s) { return s[1] === page; })); }
  var navHtml = "<ul>" + NAV.map(function (n) {
    var c = cur(n) ? ' class="current"' : "";
    if (!n[2]) return "<li" + c + '><a href="' + n[1] + '">' + lab3(n[0]) + "</a></li>";
    return "<li" + c + '><a href="' + n[1] + '" aria-haspopup="true">' + lab3(n[0]) + ' <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></a><ul class="sub">' +
      n[2].map(function (s) { return '<li><a href="' + s[1] + '">' + lab3(s[0]) + "</a></li>"; }).join("") + "</ul></li>";
  }).join("") + '<li><a class="cta" href="join.html#apply">' + T3("Join the lab", "Gabung lab", "研究室に参加") + "</a></li></ul>";

  var head = document.createElement("div");
  head.innerHTML = '<a class="skip" href="#main">Skip to content</a>' +
    '<div class="topbar"><div class="wrap"><span>' + T3("FTMD · Institut Teknologi Bandung", "FTMD · Institut Teknologi Bandung", "バンドン工科大学 機械航空工学部") + ' · <a href="mailto:' + esc(L.email) + '">' + esc(L.email) + '</a></span>' +
    '<span class="lang" role="group" aria-label="Language"><button data-setlang="en" aria-pressed="false">EN</button><button data-setlang="id" aria-pressed="false">ID</button><button data-setlang="ja" aria-pressed="false">日本語</button></span></div></div>' +
    '<header class="site-head"><div class="wrap"><a class="brand" href="index.html"><img src="assets/img/logo-etc.png" alt="" width="42" height="42"><span><b>ETC LAB</b><small>ENERGY &amp; THERMOCHEMISTRY · FTMD ITB</small></span></a>' +
    '<button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button><nav class="nav" id="nav" aria-label="Main">' + navHtml + "</nav></div></header>";
  while (head.firstChild) document.body.insertBefore(head.lastChild, document.body.firstChild);

  var foot = document.createElement("footer");
  foot.className = "site-foot";
  foot.innerHTML = '<div class="wrap"><div class="cols"><div><a class="brand" href="index.html"><img src="assets/img/logo-etc.png" alt="" width="42" height="42"><span><b>ETC LAB</b><small>ENERGY &amp; THERMOCHEMISTRY · FTMD ITB</small></span></a>' +
    '<p style="margin-top:16px">' + T3("Refrigeration Engineering Laboratory, Labtek II Building", "Laboratorium Teknik Pendingin, Gedung Labtek II", "冷凍工学実験室（Labtek II棟）") + "<br>Faculty of Mechanical and Aerospace Engineering, ITB<br>Jl. Ganesha No. 10, Bandung 40132, Indonesia</p></div>" +
    "<div><h4>" + T3("Research", "Riset", "研究") + "</h4><ul>" + AREA_ORDER.map(function (k) { var a = E.areas[k]; return '<li><a href="' + a.page + '">' + T3(esc(a.name.en), esc(a.name.id), esc(a.name.ja)) + "</a></li>"; }).join("") + '<li><a href="facilities.html">' + T3("Facilities", "Fasilitas", "設備") + "</a></li></ul></div>" +
    "<div><h4>" + T3("Lab", "Lab", "研究室") + '</h4><ul><li><a href="people.html">' + T3("Members", "Anggota", "メンバー") + '</a></li><li><a href="pi.html">' + T3("PI & publications", "Ketua & publikasi", "代表者・論文") + '</a></li><li><a href="alumni.html">' + T3("Alumni", "Alumni", "修了生") + '</a></li><li><a href="projects.html">' + T3("Research projects", "Proyek riset", "研究課題") + '</a></li><li><a href="news.html">' + T3("News & gallery", "Berita & galeri", "ニュース・写真") + "</a></li></ul></div>" +
    "<div><h4>" + T3("Connect", "Hubungi", "つながる") + '</h4><ul><li><a href="join.html">' + T3("Prospective students", "Calon mahasiswa", "入室希望の学生") + '</a></li><li><a href="collaborate.html">' + T3("Collaborate", "Kolaborasi", "共同研究") + '</a></li><li><a href="contact.html">' + T3("Contact & directions", "Kontak & lokasi", "連絡先・アクセス") + '</a></li><li><a href="' + esc(L.instagram) + '" target="_blank" rel="noopener">Instagram @etcitb</a></li><li><a href="https://ftmd-itb.id/dr-eng-ir-firman-bagja-juangsa-s-t-m-eng/" target="_blank" rel="noopener">FTMD ITB profile ↗</a></li></ul></div></div>' +
    '<div class="bottom"><span>© ' + new Date().getFullYear() + ' ENERGY AND THERMOCHEMISTRY LABORATORY · FTMD ITB · <a href="assets/img/photo/CREDITS.txt" style="color:inherit">PHOTO CREDITS</a></span><span>THERMAL SCIENCE AND ENGINEERING RESEARCH GROUP</span></div></div>';
  document.body.appendChild(foot);
  var topb = document.createElement("button"); topb.className = "to-top"; topb.setAttribute("aria-label", "Back to top"); topb.textContent = "↑";
  topb.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(topb);
  window.addEventListener("scroll", function () { topb.classList.toggle("show", window.scrollY > 600); }, { passive: true });
  var burger = $(".burger"), nav = $("#nav");
  burger.addEventListener("click", function () { var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; });
  /* mobile menu: fill exactly the space below the header so every page is reachable */
  function fitNav() { if (!nav.classList.contains("open")) return; var hb = $(".site-head").getBoundingClientRect().bottom; nav.style.height = Math.max(200, window.innerHeight - hb) + "px"; }
  burger.addEventListener("click", fitNav); window.addEventListener("resize", fitNav);
  /* realistic photo layers behind sections (topic-matched per page) */
  (function () {
    var P = "assets/img/photo/", R = "assets/img/research/";
    var sets = {
      "research-combustion": [P + "blue-flame.jpg", R + "flame-swirl-nh3.jpg", P + "thermal-plant.jpg", P + "gas-turbine.jpg", R + "engine-test-bench.jpg"],
      "research-chemical-looping": [P + "capture-plant.jpg", R + "lab-experiment-room.jpg", P + "co2-capture.jpg"],
      "research-ccus": [P + "co2-capture.jpg", P + "capture-plant.jpg", P + "thermal-plant.jpg"],
      "research-power-systems": [P + "ccgt-plant.jpg", P + "cooling-towers.jpg", P + "gas-turbine.jpg", P + "thermal-plant.jpg"],
      "facilities": [R + "lab-experiment-room.jpg", R + "engine-test-bench.jpg", P + "blue-flame.jpg"]
    };
    var def = [P + "thermal-plant.jpg", P + "gas-turbine.jpg", P + "blue-flame.jpg", P + "ccgt-plant.jpg", P + "co2-capture.jpg", P + "cooling-towers.jpg", P + "capture-plant.jpg"];
    var page = (location.pathname.split("/").pop() || "index").replace(".html", "") || "index";
    var list = sets[page] || def, k = page.length % list.length, n = 0;
    $$("main .section.bp, main .section.white").forEach(function (s, i) {
      if (s.querySelector("iframe, form") || (i % 2 && !s.classList.contains("bp"))) return;
      var d = document.createElement("div"); d.className = "sec-photo " + (n % 2 ? "l" : "r"); d.setAttribute("aria-hidden", "true");
      d.style.backgroundImage = "url('" + list[(k + n) % list.length] + "')"; s.insertBefore(d, s.firstChild); n++;
    });
  })();

  /* ---------- renderers ---------- */
  var R = {};

  R.areas = function (el) {
    el.innerHTML = AREA_ORDER.map(function (k, i) {
      var a = E.areas[k];
      return '<a class="theme ' + k + ' reveal in" href="' + a.page + '"><div class="ph" style="background-image:url(\'' + a.img + '\')"><span class="no">0' + (i + 1) + " // " + k.toUpperCase() + '</span></div><div class="strip"></div><div class="body"><div class="focus">' + esc(tr(a.focus)) + "</div><h3>" + esc(tr(a.name)) + "</h3><p>" + esc(tr(a.short)) + '</p><span class="more">' + esc(u("explore")) + " →</span></div></a>";
    }).join("");
  };

  R.news = function (el) {
    var lim = +el.getAttribute("data-limit") || 99;
    var M = { en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], id: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"], ja: null };
    function fmt(d) { var p = String(d).split("-"); if (LANG === "ja") return p[0] + "年" + (+p[1]) + "月"; return (M[LANG] || M.en)[+p[1] - 1] + " " + p[0]; }
    el.innerHTML = (E.news || []).slice(0, lim).map(function (n) {
      var imgs = [].concat(n.img || []);
      var many = imgs.length > 2;
      var pics = imgs.length ? '<div class="news-pics">' + imgs.map(function (s) { return '<a href="' + esc(s) + '" target="_blank" rel="noopener"><img loading="lazy" src="' + esc(s) + '" alt="' + esc(tr(n.title)) + '"></a>'; }).join("") + "</div>" : "";
      return '<article class="news-item ' + esc(n.kind) + (imgs.length ? " has-pics" : "") + (many ? " many-pics" : "") + '">' + pics + '<div class="date">' + fmt(n.date) + " · " + esc(n.kind) + "</div><h3>" + esc(tr(n.title)) + "</h3><p>" + esc(tr(n.text)) + "</p>" + (n.link ? '<a class="more" href="' + esc(n.link) + '">' + esc(u("explore")) + " →</a>" : "") + "</article>";
    }).join("");
  };

  /* member photo = assets/img/people/<name-in-lowercase-with-dashes>.jpg ; missing -> placeholder.svg */
  function slug(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function personHtml(m) {
    return '<div class="person" data-lv="' + m.level + '" data-area="' + m.area + '"><img class="photo ' + m.area + '" loading="lazy" alt="' + esc(m.name) + '" src="' + esc(m.photo || ("assets/img/people/" + slug(m.name) + ".jpg")) + '" onerror="this.onerror=null;this.src=\'assets/img/people/placeholder.svg\'"><div><span class="lvl">' + esc(u(m.level)) + "</span><b>" + esc(m.name) + "</b><p>" + esc(tr(m.topic)) + '</p><div style="margin-top:6px">' + tagHtml([m.area]) + "</div></div></div>";
  }
  R.members = function (el) {
    var topic = el.getAttribute("data-topic"), M = (E.members || []).filter(function (m) { return !topic || m.area === topic; });
    if (topic) { el.innerHTML = M.length ? '<div class="people">' + M.map(personHtml).join("") + "</div>" : '<p class="muted">' + esc(u("newJoin")) + ' <a href="join.html">' + esc(u("couldBe")) + "</a></p>"; return; }
    var fl = el._fl || "", fa = el._fa || "";
    el.innerHTML = '<div class="tools" style="flex-direction:column;align-items:flex-start"><div class="chips" data-g="lv"><button class="chip" data-v="">' + esc(u("all")) + " · " + M.length + "</button>" + ["S3", "S2", "S1"].map(function (l) { return '<button class="chip" data-v="' + l + '">' + esc(u(l)) + " · " + M.filter(function (m) { return m.level === l; }).length + "</button>"; }).join("") +
      '</div><div class="chips" data-g="ar"><button class="chip" data-v="">' + esc(u("allThemes")) + "</button>" + AREA_ORDER.map(function (k) { return '<button class="chip" data-v="' + k + '">' + esc(tr(E.areas[k].name)) + "</button>"; }).join("") + '</div></div><div class="people">' + M.map(personHtml).join("") + "</div>";
    function apply() {
      $$(".person", el).forEach(function (p) { p.hidden = (fl && p.getAttribute("data-lv") !== fl) || (fa && p.getAttribute("data-area") !== fa); });
      $$('[data-g="lv"] button', el).forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === fl); });
      $$('[data-g="ar"] button', el).forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === fa); });
      el._fl = fl; el._fa = fa;
    }
    $$("[data-g] button", el).forEach(function (b) { b.addEventListener("click", function () { if (b.parentNode.getAttribute("data-g") === "lv") fl = b.getAttribute("data-v"); else fa = b.getAttribute("data-v"); apply(); }); });
    apply();
  };

  var labNames = [];
  (E.members || []).concat(E.alumni || []).forEach(function (m) { if (m.name.split(" ").length >= 2) labNames.push(m.name); });
  labNames.sort(function (a, b) { return b.length - a.length; });
  var meNames = ["Firman Bagja Juangsa", "Firman B. Juangsa", "F.B. Juangsa"];
  function markAuthors(h) {
    meNames.forEach(function (n) { h = h.split(esc(n)).join('<span class="me">' + esc(n) + "</span>"); });
    labNames.forEach(function (n) { var e = esc(n); if (h.indexOf(e) >= 0 && h.indexOf('class="lab">' + e) < 0) h = h.split(e).join('<span class="lab">' + e + "</span>"); });
    return h;
  }
  function linkDoi(h) { return h.replace(/(?:DOI:?\s*|https?:\/\/doi\.org\/)(10\.\d{4,9}\/[^\s<]+[^\s<.,;])/gi, function (m, d) { return 'DOI: <a href="https://doi.org/' + d + '" target="_blank" rel="noopener">' + d + "</a>"; }); }
  R.pubs = function (el) {
    var topic = el.getAttribute("data-topic"), lim = +el.getAttribute("data-limit") || 0;
    var P = (E.publications || []).map(function (p, i) { return { y: +p.year || 0, type: p.type, text: p.text, t: topicsOf(p.text), i: i }; })
      .filter(function (p) { return !topic || p.t.indexOf(topic) >= 0; }).sort(function (a, b) { return b.y - a.y || a.i - b.i; });
    function li(p) { return '<li><div class="yr">' + p.y + "</div><div>" + linkDoi(markAuthors(rich(p.text))) + '<div class="meta"><span class="chip">' + esc(p.type) + "</span>" + tagHtml(p.t) + ' <button class="linkbtn" data-cite="' + esc(plain(p.text)) + '">' + esc(u("copy")) + "</button></div></div></li>"; }
    if (lim) { el.innerHTML = '<ol class="pubs">' + P.slice(0, lim).map(li).join("") + "</ol>" + (P.length > lim ? '<p style="margin-top:16px"><a class="btn ghost sm" href="pi.html?topic=' + (topic || "") + '#publications">' + esc(u("allPubs")) + " (" + P.length + ")</a></p>" : ""); return; }
    var years = [], types = [];
    P.forEach(function (p) { if (years.indexOf(p.y) < 0) years.push(p.y); if (types.indexOf(p.type) < 0) types.push(p.type); });
    var y0 = Math.min.apply(null, years), y1 = Math.max.apply(null, years), cnt = {}, mx = 1, y, bars = "", lbl = "";
    P.forEach(function (p) { cnt[p.y] = (cnt[p.y] || 0) + 1; });
    for (y = y0; y <= y1; y++) mx = Math.max(mx, cnt[y] || 0);
    for (y = y0; y <= y1; y++) { var c = cnt[y] || 0; bars += '<button class="bar" data-y="' + y + '" style="height:' + Math.max(c ? 6 : 2, Math.round(c / mx * 88)) + '%" title="' + y + ": " + c + '"' + (c ? "" : " disabled") + ">" + (c ? "<span>" + c + "</span>" : "") + "</button>"; lbl += "<span>'" + String(y).slice(2) + "</span>"; }
    var st = el._st || { q: new URLSearchParams(location.search).get("q") || "", t: "", a: new URLSearchParams(location.search).get("topic") || "", y: "" };
    el.innerHTML = '<div class="bars">' + bars + '</div><div class="barlbl">' + lbl + '</div><div class="tools"><input type="search" data-q placeholder="' + esc(u("searchPubs")) + '"><select data-t><option value="">' + esc(u("allTypes")) + "</option>" + types.map(function (t) { return "<option>" + esc(t) + "</option>"; }).join("") +
      '</select><select data-a><option value="">' + esc(u("allThemes")) + "</option>" + AREA_ORDER.map(function (k) { return '<option value="' + k + '">' + esc(tr(E.areas[k].name)) + "</option>"; }).join("") + '</select><select data-y><option value="">' + esc(u("allYears")) + "</option>" + years.map(function (y) { return "<option>" + y + "</option>"; }).join("") + '</select><span class="count" data-n></span></div><ol class="pubs" data-list></ol>';
    var q = $("[data-q]", el), t = $("[data-t]", el), a = $("[data-a]", el), yr = $("[data-y]", el), list = $("[data-list]", el), n = $("[data-n]", el);
    q.value = st.q; t.value = st.t; a.value = st.a; yr.value = st.y;
    var html = P.map(li), low = P.map(function (p) { return plain(p.text).toLowerCase(); });
    function render() {
      var s = q.value.trim().toLowerCase(), out = [];
      P.forEach(function (p, i) { if ((!s || low[i].indexOf(s) >= 0) && (!t.value || p.type === t.value) && (!a.value || p.t.indexOf(a.value) >= 0) && (!yr.value || String(p.y) === yr.value)) out.push(html[i]); });
      list.innerHTML = out.length ? out.join("") : '<li class="empty">' + esc(u("none")) + "</li>";
      n.innerHTML = out.length + " " + esc(u("of")) + " " + P.length + (s || t.value || a.value || yr.value ? ' · <button class="linkbtn" data-reset>' + esc(u("reset")) + "</button>" : "");
      $$(".bar", el).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-y") === yr.value)); });
      el._st = { q: q.value, t: t.value, a: a.value, y: yr.value };
    }
    q.addEventListener("input", render); [t, a, yr].forEach(function (x) { x.addEventListener("change", render); });
    $(".bars", el).addEventListener("click", function (e) { var b = e.target.closest(".bar"); if (!b) return; yr.value = yr.value === b.getAttribute("data-y") ? "" : b.getAttribute("data-y"); render(); });
    n.addEventListener("click", function (e) { if (e.target.closest("[data-reset]")) { q.value = t.value = a.value = yr.value = ""; render(); } });
    render();
  };
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cite]"); if (!b) return;
    var txt = b.getAttribute("data-cite");
    function done() { var o = b.textContent; b.textContent = u("copied"); setTimeout(function () { b.textContent = o; }, 1500); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { window.prompt("", txt); }); else window.prompt("", txt);
  });

  R.projects = function (el) {
    var topic = el.getAttribute("data-topic"), lim = +el.getAttribute("data-limit") || 0;
    var P = (E.projects || []).map(function (p) { return Object.assign({ t: topicsOf(p.title) }, p); }).filter(function (p) { return !topic || p.t.indexOf(topic) >= 0; });
    function role(r) { return r === "Principal Investigator" ? u("PI") : r === "Member" ? u("Member") : ""; }
    function row(p) { return '<tr data-s="' + esc((p.year + " " + p.title + " " + p.funder).toLowerCase()) + '"><td class="n">' + esc(p.year) + "</td><td>" + esc(p.title) + '<div style="margin-top:4px">' + tagHtml(p.t) + "</div></td><td>" + esc(p.funder) + "</td><td>" + esc(role(p.role)) + "</td></tr>"; }
    var headr = "<thead><tr><th>" + esc(u("year")) + "</th><th>" + esc(u("project")) + "</th><th>" + esc(u("funder")) + "</th><th>" + esc(u("role")) + "</th></tr></thead>";
    var rows = lim ? P.slice(0, lim) : P;
    if (!rows.length) { el.innerHTML = ""; return; }
    el.innerHTML = (lim ? "" : '<div class="tools"><input type="search" data-q placeholder="' + esc(u("search")) + '"><span class="count" data-n></span></div>') + '<div class="tablewrap"><table>' + headr + "<tbody>" + rows.map(row).join("") + "</tbody></table></div>" + (lim && P.length > lim ? '<p style="margin-top:14px"><a class="btn ghost sm" href="projects.html">' + P.length + " " + esc(u("grants")) + "</a></p>" : "");
    var q = $("[data-q]", el), n = $("[data-n]", el);
    if (q) { var r = function () { var s = q.value.trim().toLowerCase(), c = 0; $$("tbody tr", el).forEach(function (x) { var on = !s || x.getAttribute("data-s").indexOf(s) >= 0; x.hidden = !on; if (on) c++; }); n.textContent = c + " " + u("of") + " " + P.length; }; q.addEventListener("input", r); r(); }
  };

  R.patents = function (el) {
    el.innerHTML = '<div class="tablewrap"><table><thead><tr><th>' + esc(u("year")) + "</th><th>" + esc(u("title")) + "</th><th>" + esc(u("number")) + "</th><th>" + esc(u("inventors")) + "</th></tr></thead><tbody>" + (E.patents || []).map(function (p) { return '<tr><td class="n">' + esc(p.year) + "</td><td>" + esc(p.title) + '</td><td style="white-space:nowrap">' + esc(p.number) + "</td><td>" + esc(p.inventors) + "</td></tr>"; }).join("") + "</tbody></table></div>";
  };

  function outcomeOf(a) {
    var s = (a.next || "").toLowerCase(); if (!s) return "";
    if (/energy and thermochemistry lab|bandung institute of technology/.test(s)) return "itb";
    if (/phd|msc|master|student|erasmus|graduate/.test(s)) return "abroad";
    if (/lecturer|university/.test(s)) return "academia";
    return "industry";
  }
  R.alumni = function (el) {
    var A = (E.alumni || []).slice(), topic = el.getAttribute("data-topic");
    if (topic) A = A.filter(function (a) { return topicsOf(a.thesis).indexOf(topic) >= 0; });
    function card(a) { return '<div class="person" data-d="' + a.degree + '" data-s="' + esc((a.name + " " + a.thesis + " " + a.next + " " + a.year).toLowerCase()) + '"><span class="avatar ' + (topicsOf(a.thesis)[0] || "") + '" aria-hidden="true">' + esc(initials(a.name)) + '</span><div><span class="lvl">' + esc(a.degree) + " " + a.year + "</span><b>" + esc(a.name) + "</b><p><i>" + esc(a.thesis) + "</i></p>" + (a.next ? '<p style="color:var(--ink);font-weight:500;margin-top:6px">→ ' + esc(a.next) + "</p>" : "") + "</div></div>"; }
    if (topic) { el.innerHTML = A.length ? '<div class="people">' + A.slice(0, +el.getAttribute("data-limit") || 99).map(card).join("") + "</div>" : ""; return; }
    var st = el._st || { q: "", d: "" };
    el.innerHTML = '<div class="tools"><input type="search" data-q placeholder="' + esc(u("searchAlumni")) + '"><div class="chips"><button class="chip" data-d="">' + esc(u("all")) + " · " + A.length + '</button><button class="chip" data-d="MSc">' + esc(u("master")) + " · " + A.filter(function (a) { return a.degree === "MSc"; }).length + '</button><button class="chip" data-d="BSc">' + esc(u("bachelor")) + " · " + A.filter(function (a) { return a.degree === "BSc"; }).length + '</button></div><span class="count" data-n></span></div><div class="people">' + A.map(card).join("") + "</div>";
    var q = $("[data-q]", el), n = $("[data-n]", el); q.value = st.q;
    function render() { var s = q.value.trim().toLowerCase(), c = 0; $$(".person", el).forEach(function (p) { var on = (!s || p.getAttribute("data-s").indexOf(s) >= 0) && (!st.d || p.getAttribute("data-d") === st.d); p.hidden = !on; if (on) c++; }); n.textContent = c + " " + u("alumni"); $$("button[data-d]", el).forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-d") === st.d); }); st.q = q.value; el._st = st; }
    q.addEventListener("input", render);
    $$("button[data-d]", el).forEach(function (b) { b.addEventListener("click", function () { st.d = b.getAttribute("data-d"); render(); }); });
    render();
  };

  R.outcomes = function (el) {
    var A = (E.alumni || []).filter(function (a) { return a.next; }), c = { abroad: 0, itb: 0, industry: 0, academia: 0 };
    A.forEach(function (a) { var o = outcomeOf(a); if (c[o] != null) c[o]++; });
    var tot = A.length || 1, col = { abroad: "#1fa3e0", itb: "#0d6e9a", industry: "#ff7a1a", academia: "#5fb36a" }, key = { abroad: "oAbroad", itb: "oItb", industry: "oInd", academia: "oAcad" };
    el.innerHTML = '<div class="hbar">' + Object.keys(c).map(function (k) { return '<i style="width:' + (c[k] / tot * 100) + "%;background:" + col[k] + '"></i>'; }).join("") + '</div><div class="legend">' + Object.keys(c).map(function (k) { return '<span><i style="background:' + col[k] + '"></i>' + esc(u(key[k])) + " · " + c[k] + "</span>"; }).join("") + '</div><p class="small muted" style="margin-top:8px">' + esc(u("basedOn")) + "</p>";
  };

  var ILL = {
    burner: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><path d="M65 100h20v-30H65z"/><path d="M55 100V80M95 100V80"/><path d="M75 70c-14-18-12-38 0-60 12 22 14 42 0 60z" stroke="#ff9a3c"/><path d="M75 66c-7-10-6-22 0-34 6 12 7 24 0 34z" stroke="#d99400"/><path d="M20 100h110"/><text x="96" y="30" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">NH₃/H₂</text></svg>',
    camera: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><rect x="30" y="34" width="90" height="56" rx="6"/><path d="M55 34l8-12h24l8 12"/><circle cx="75" cy="62" r="18"/><circle cx="75" cy="62" r="10" stroke="#b18cff"/><text x="34" y="104" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">UV · OH* · NH*</text></svg>',
    gc: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><path d="M15 95h125M15 95V15"/><path d="M20 94c10 0 12-2 16-40 4 38 6 40 16 40s10-1 13-24c3 23 5 24 15 24s10-3 14-60c4 57 6 60 16 60s12 0 15 0" stroke="#d99400"/><text x="96" y="22" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">H₂ CH₄ CO</text></svg>',
    furnace: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><rect x="30" y="20" width="90" height="70" rx="4"/><path d="M75 10v90" stroke="#7d8ea1"/><path d="M68 30h14v50H68z" stroke="#ff9a3c"/><circle cx="73" cy="45" r="2" stroke="#d99400"/><circle cx="78" cy="55" r="2" stroke="#d99400"/><circle cx="72" cy="65" r="2" stroke="#d99400"/><text x="34" y="104" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">FLUIDIZED BED · 1000 °C</text></svg>',
    engine: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><rect x="45" y="15" width="60" height="55"/><rect x="55" y="25" width="40" height="18"/><path d="M75 43v22"/><circle cx="75" cy="82" r="16"/><path d="M60 15c4-10 10-12 15-20 5 8 11 10 15 20" stroke="#ff9a3c"/><path d="M105 40h30" stroke="#d99400"/><text x="108" y="34" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">kW</text></svg>',
    flask: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><path d="M62 10h26M66 10v30L40 92a6 6 0 0 0 5 8h60a6 6 0 0 0 5-8L84 40V10"/><path d="M50 74h50" stroke="#5fb36a"/><path d="M60 86l6-4 6 4v7l-6 4-6-4zM78 86l6-4 6 4v7l-6 4-6-4z" stroke="#3f9a4c"/><text x="96" y="30" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">CO₂→CaCO₃</text></svg>',
    boiler: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><rect x="45" y="10" width="40" height="88"/><path d="M85 22h25v76"/><path d="M55 90c0-14 6-20 8-32 4 10 2 14 6 18 2-8 0-16 6-24 2 14 6 22 6 38z" stroke="#ff9a3c"/><path d="M30 80h15M30 66h15" stroke="#d99400"/><text x="92" y="16" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">60 kWth</text></svg>',
    char: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><path d="M15 95h125"/><path d="M20 94l8-2 6-50 4 48 10-2 4-30 5 28 12 0 6-70 5 68 14 0 4-20 4 20h20" stroke="#d99400"/><text x="96" y="22" fill="#2b5577" font-size="9" font-family="monospace" stroke="none">XRD 2θ</text></svg>',
    pc: '<svg viewBox="0 0 150 110" fill="none" stroke="#0d5f86" stroke-width="1.6"><rect x="25" y="15" width="100" height="62" rx="3"/><path d="M60 95h30M75 77v18"/><path d="M35 65c10-30 20-30 30-10s20 20 30-25 15-10 20 5" stroke="#ff9a3c"/><path d="M35 70h80" stroke="#1fa3e0"/></svg>'
  };
  R.facilities = function (el) {
    el.innerHTML = (E.facilities || []).map(function (f) {
      return '<article class="eq"><div class="ill">' + (f.img ? '<img src="' + f.img + '" alt="" loading="lazy">' : ILL[f.ill] || "") + '<span class="loc">' + esc(f.lab) + '</span></div><div class="body"><h3>' + esc(tr(f.name)) + '</h3><p class="muted small">' + esc(tr(f.text)) + "</p><ul>" + f.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div></article>";
    }).join("");
  };

  R.finder = function (el) {
    var st = el._st || { lv: "", m: "", a: "" };
    function grp(g, legend, opts) { return '<fieldset><legend>' + esc(u(legend)) + '</legend><div class="chips" data-g="' + g + '">' + opts.map(function (o) { return '<button class="chip" data-v="' + o[0] + '">' + esc(o[1]) + "</button>"; }).join("") + "</div></fieldset>"; }
    el.innerHTML = '<div class="finder">' + grp("lv", "level", [["", u("any")], ["S1", u("S1")], ["S2", u("S2")], ["S3", u("S3")]]) + grp("m", "style", [["", u("any")], ["exp", u("exp")], ["sim", u("sim")], ["tea", u("tea")]]) + grp("a", "theme", [["", u("any")]].concat(AREA_ORDER.map(function (k) { return [k, tr(E.areas[k].name)]; }))) + '<div data-out aria-live="polite"></div></div>';
    var out = $("[data-out]", el);
    function render() {
      var r = (E.topics || []).filter(function (t) { return (!st.lv || t.level.indexOf(st.lv) >= 0) && (!st.m || t.method.indexOf(st.m) >= 0) && (!st.a || t.area === st.a); });
      out.innerHTML = '<p class="small muted" style="margin:6px 0 10px">' + r.length + " " + esc(u("match")) + "</p>" + (r.length ? r.map(function (t) { return '<div class="topic ' + t.area + '"><b>' + esc(tr(t.title)) + "</b><small>" + esc(t.note) + "</small></div>"; }).join("") : '<p class="muted">' + esc(u("noMatch")) + "</p>");
      $$("[data-g]", el).forEach(function (g) { $$("button", g).forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === st[g.getAttribute("data-g")]); }); });
      el._st = st;
    }
    $$("[data-g]", el).forEach(function (g) { g.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; st[g.getAttribute("data-g")] = b.getAttribute("data-v"); render(); }); });
    render();
  };

  var lb;
  R.gallery = function (el) {
    var G = E.gallery || [];
    el.innerHTML = G.map(function (g, i) { return '<button data-i="' + i + '" aria-label="' + esc(u("photo")) + ": " + esc(g[1]) + '"><img src="' + esc(g[0]) + '" alt="' + esc(g[1]) + '" loading="lazy"><span>' + esc(g[1]) + "</span></button>"; }).join("");
    if (el._bound) return; el._bound = true;
    lb = document.createElement("div"); lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.innerHTML = '<button aria-label="Close">×</button><figure><img alt=""><p></p></figure>'; document.body.appendChild(lb);
    var cur = 0;
    function open(i) { cur = (i + G.length) % G.length; $("img", lb).src = G[cur][0]; $("p", lb).textContent = G[cur][1] + " · " + (cur + 1) + "/" + G.length; lb.classList.add("open"); }
    el.addEventListener("click", function (e) { var b = e.target.closest("button[data-i]"); if (b) open(+b.getAttribute("data-i")); });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest("button")) lb.classList.remove("open"); });
    document.addEventListener("keydown", function (e) { if (!lb.classList.contains("open")) return; if (e.key === "Escape") lb.classList.remove("open"); if (e.key === "ArrowRight") open(cur + 1); if (e.key === "ArrowLeft") open(cur - 1); });
  };

  R.pi = function (el) {
    var P = E.pi || {}, full = el.getAttribute("data-full") != null;
    el.innerHTML = '<div class="pi-card"><div class="photo"><img src="' + esc(P.photo) + '" alt="' + esc(P.name) + '"></div><div><span class="label">' + esc(u("PI")) + '</span><h2 style="margin-bottom:6px">' + esc(P.name) + '</h2><p class="muted" style="font-weight:600">' + esc(tr(P.title)) + '</p><ul class="checks">' + (P.roles || []).map(function (r) { return "<li>" + esc(tr(r)) + "</li>"; }).join("") + '</ul><div class="links">' + (P.links || []).map(function (l) { return '<a' + (l[2] ? ' class="primary"' : "") + ' href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>"; }).join("") + '</div><div class="btns"><a class="btn" href="mailto:' + esc(L.email) + '">' + esc(u("emailPI")) + "</a>" + (full ? "" : '<a class="btn ghost" href="pi.html">' + esc(u("fullProfile")) + "</a>") + "</div></div></div>";
  };

  R.recruit = function (el) {
    if (!L.recruitOpen) { el.innerHTML = ""; return; }
    el.innerHTML = '<a href="join.html#apply" style="display:block;background:var(--flame);color:#fff;text-align:center;padding:9px 16px;font-family:var(--mono);font-size:.8rem;letter-spacing:.08em;text-decoration:none">▲ ' + esc(tr(L.recruitLabel)).toUpperCase() + " · " + esc(u("apply")).toUpperCase() + " →</a>";
  };

  /* embedded dashboards (assets/embeds/*.html) report their height so the frame fits */
  window.addEventListener("message", function (e) {
    var d = e.data; if (!d || !d.etcEmbedHeight) return;
    $$("iframe.embed").forEach(function (f) { if (f.contentWindow === e.source) f.style.height = Math.max(300, d.etcEmbedHeight + 4) + "px"; });
  });

  /* ======================= LIVE DATA (OpenAlex, Instagram) =======================
     Fetched in the visitor's browser, cached for ETC.live.cacheHours, and re-used
     when the language changes. If a service is unreachable the block hides itself
     and the static content on the page stays.                                   */
  var LV = E.live || {}, OA = "https://api.openalex.org/", MEM = {};
  function oa(path) {
    var url = OA + path + (LV.openalexKey ? "&api_key=" + encodeURIComponent(LV.openalexKey) : "");
    if (MEM[url]) return MEM[url];
    var key = "etc-oa:" + path, ttl = (LV.cacheHours || 12) * 36e5;
    try { var c = JSON.parse(localStorage.getItem(key) || "null"); if (c && Date.now() - c.t < ttl) return (MEM[url] = Promise.resolve(c.d)); } catch (e) {}
    function get(n) { return fetch(url).then(function (r) { if (r.status === 429 && n < 3) return new Promise(function (ok) { setTimeout(ok, 1200 * (n + 1)); }).then(function () { return get(n + 1); }); if (!r.ok) throw new Error(r.status); return r.json(); }); }
    return (MEM[url] = get(0).then(function (d) {
      try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {}
      return d;
    }));
  }
  function L3(en, id, ja) { return { en: en, id: id, ja: ja }[LANG] || en; }
  function fmtN(n) { return Number(n || 0).toLocaleString(LANG === "id" ? "id-ID" : LANG === "ja" ? "ja-JP" : "en-US"); }
  function workHtml(w, opt) {
    var me = (LV.authors || []).map(function (a) { return "https://openalex.org/" + a; });
    var au = (w.authorships || []).map(function (a) { var n = esc(a.author && a.author.display_name || ""); return me.indexOf(a.author && a.author.id) >= 0 ? "<b>" + n + "</b>" : n; });
    if (au.length > 6) au = au.slice(0, 5).concat(["… " + au[au.length - 1]]);
    var src = w.primary_location && w.primary_location.source ? w.primary_location.source.display_name : "";
    var href = w.doi || (w.primary_location && w.primary_location.landing_page_url) || w.id;
    return '<li class="lw"><span class="lw-date">' + esc((w.publication_date || "").slice(0, opt && opt.day ? 10 : 7)) + '</span><div><a class="lw-t" href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(w.display_name || w.title) + '</a><div class="lw-a">' + au.join(", ") + '</div><div class="lw-m">' + (src ? "<i>" + esc(src) + "</i>" : "") +
      (opt && opt.cites ? ' · <span class="lw-c">' + fmtN(w.cited_by_count) + " " + L3("citations", "sitasi", "被引用") + "</span>" : "") + "</div></div></li>";
  }
  function liveBadge(t) { return '<div class="news-live"><i></i>' + esc(t) + "</div>"; }
  var WSEL = "select=id,doi,display_name,publication_date,primary_location,cited_by_count,authorships";

  /* 1) PI publication profile: metrics, citations per year, latest / most-cited works */
  R.scholar = function (el) {
    var A = (LV.authors || []).join("|"); if (!A) return;
    var mode = el._mode || "new", lim = +el.getAttribute("data-limit") || 10;
    if (!el._init) { el._init = 1; el.innerHTML = '<div class="live-skel">' + esc(L3("Loading live publication data…", "Memuat data publikasi terbaru…", "最新の論文データを読み込み中…")) + "</div>"; }
    Promise.all([
      oa("authors?filter=id:" + A + "&select=id,works_count,cited_by_count,summary_stats,counts_by_year&per_page=10"),
      oa("works?filter=authorships.author.id:" + A + "&sort=" + (mode === "new" ? "publication_date" : "cited_by_count") + ":desc&per_page=" + lim + "&" + WSEL)
    ]).then(function (res) {
      var au = res[0].results || [], main = au[0] || {}, works = res[1].results || [];
      var tw = 0, tc = 0; au.forEach(function (a) { tw += a.works_count || 0; tc += a.cited_by_count || 0; });
      var st = main.summary_stats || {}, yrs = (main.counts_by_year || []).slice().sort(function (a, b) { return a.year - b.year; }).slice(-10);
      var mx = Math.max.apply(null, yrs.map(function (y) { return y.cited_by_count; }).concat([1]));
      var tiles = [[fmtN(tw), L3("Works indexed", "Karya terindeks", "論文数")], [fmtN(tc), L3("Citations", "Sitasi", "被引用数")], [st.h_index || "–", "h-index"], [st.i10_index || "–", "i10-index"]];
      var links = ((E.pi || {}).links || []).filter(function (l) { return /scholar|scopus|orcid|web of science|researcherid|wos/i.test(l[0]); });
      el.innerHTML = liveBadge(L3("Live · updated automatically from OpenAlex (Scopus/WoS-indexed sources, ORCID-linked)", "Live · diperbarui otomatis dari OpenAlex (sumber terindeks Scopus/WoS, terhubung ORCID)", "ライブ · OpenAlexから自動更新（Scopus/WoS収録誌、ORCID連携）")) +
        '<div class="live-stats">' + tiles.map(function (t) { return '<div><b data-count="' + esc(String(t[0]).replace(/\D/g, "")) + '">' + esc(t[0]) + "</b><span>" + esc(t[1]) + "</span></div>"; }).join("") + "</div>" +
        '<div class="live-cite"><div class="live-cite-h">' + esc(L3("Citations per year", "Sitasi per tahun", "年別被引用数")) + '</div><div class="live-bars">' + yrs.map(function (y) { return '<div title="' + y.year + ": " + y.cited_by_count + '"><em>' + y.cited_by_count + '</em><i style="height:' + Math.max(3, Math.round(y.cited_by_count / mx * 80)) + 'px"></i><span>' + String(y.year).slice(2) + "</span></div>"; }).join("") + "</div></div>" +
        '<div class="chips live-tabs"><button class="chip" data-m="new" aria-pressed="' + (mode === "new") + '">' + esc(L3("Latest", "Terbaru", "最新")) + '</button><button class="chip" data-m="top" aria-pressed="' + (mode === "top") + '">' + esc(L3("Most cited", "Paling banyak disitasi", "被引用順")) + "</button>" +
        links.map(function (l) { return '<a class="chip" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>"; }).join("") + "</div>" +
        '<ol class="live-works">' + works.map(function (w) { return workHtml(w, { cites: true }); }).join("") + "</ol>";
      $$(".live-tabs button", el).forEach(function (b) { b.onclick = function () { el._mode = b.getAttribute("data-m"); R.scholar(el); }; });
    }).catch(function (e) { if (window.console) console.warn("live block failed", e); el.innerHTML = ""; });
  };

  /* 2) Research radar: newest papers worldwide on the lab's themes */
  R.radar = function (el) {
    var Q = LV.radar || {}, t = el.getAttribute("data-topic"), lim = +el.getAttribute("data-limit") || 6;
    var keys = t ? [t] : AREA_ORDER.filter(function (k) { return Q[k]; });
    var today = new Date().toISOString().slice(0, 10);
    var from = new Date(Date.now() - (+el.getAttribute("data-days") || 180) * 864e5).toISOString().slice(0, 10);
    if (!el._init) { el._init = 1; el.innerHTML = '<div class="live-skel">' + esc(L3("Scanning recent literature…", "Memindai literatur terbaru…", "最新文献を検索中…")) + "</div>"; }
    /* ONE request for all themes (cheap, avoids rate limits); papers are sorted into themes by title phrase */
    var all = []; keys.forEach(function (k) { [].concat(Q[k]).forEach(function (p) { if (all.indexOf(p) < 0) all.push(p); }); });
    var q = all.map(function (p) { return '"' + p + '"'; }).join(" OR ");
    oa("works?search=" + encodeURIComponent(q) + "&filter=from_publication_date:" + from + ",to_publication_date:" + today + ",type:article,has_doi:true,primary_location.source.type:journal&sort=publication_date:desc&per_page=200&" + WSEL).then(function (d) {
      var seen = {}, bins = {}; keys.forEach(function (k) { bins[k] = []; });
      (d.results || []).forEach(function (w) {
        var tt = String(w.display_name || "").toLowerCase().replace(/<[^>]+>/g, "");
        if (seen[tt]) return; seen[tt] = 1;
        for (var i = 0; i < keys.length; i++) if ([].concat(Q[keys[i]]).some(function (p) { return tt.indexOf(p.toLowerCase()) >= 0; })) { if (bins[keys[i]].length < lim) bins[keys[i]].push(w); break; }
      });
      return keys.map(function (k) { return [k, bins[k]]; });
    })
      .then(function (res) {
        var head = liveBadge(L3("Live · newest peer-reviewed articles, refreshed automatically from OpenAlex", "Live · artikel ilmiah terbaru, diperbarui otomatis dari OpenAlex", "ライブ · OpenAlexから自動更新される最新の査読論文"));
        if (keys.length === 1) { el.innerHTML = head + '<ol class="live-works radar">' + res[0][1].map(function (w) { return workHtml(w, { day: true }); }).join("") + "</ol>"; return; }
        el.innerHTML = head + '<div class="radar-grid">' + res.map(function (r) { var a = (E.areas || {})[r[0]] || {}; return '<div class="radar-col ' + r[0] + '"><h3><a href="' + esc(a.page || "#") + '">' + esc(tr(a.name)) + '</a></h3><ol class="live-works radar">' + r[1].map(function (w) { return workHtml(w, { day: true }); }).join("") + "</ol></div>"; }).join("") + "</div>";
      }).catch(function (e) { if (window.console) console.warn("live block failed", e); el.innerHTML = ""; });
  };

  /* 3) Instagram @etcitb */
  R.insta = function (el) {
    if (el._done) return; el._done = 1;
    var I = LV.instagram || {}, h = (L.instagram || "https://www.instagram.com/etcitb/");
    function addScript(src, mod, cb) { var s = document.createElement("script"); s.src = src; if (mod) s.type = "module"; s.async = true; if (cb) s.onload = cb; document.body.appendChild(s); }
    if (I.beholdFeedId) { el.innerHTML = '<behold-widget feed-id="' + esc(I.beholdFeedId) + '"></behold-widget>'; addScript("https://w.behold.so/widget.js", true); return; }
    if (I.widgetIframe) { el.innerHTML = '<iframe class="insta-frame" src="' + esc(I.widgetIframe) + '" loading="lazy" title="Instagram @etcitb" scrolling="no"></iframe>'; return; }
    if ((I.posts || []).length) {
      el.innerHTML = '<div class="insta-posts">' + I.posts.map(function (p) { return '<blockquote class="instagram-media" data-instgrm-permalink="' + esc(p) + '" data-instgrm-version="14"><a href="' + esc(p) + '" target="_blank" rel="noopener">Instagram @etcitb</a></blockquote>'; }).join("") + "</div>";
      addScript("https://www.instagram.com/embed.js", false, function () { if (window.instgrm) window.instgrm.Embeds.process(); }); return;
    }
    el.innerHTML = '<a class="insta-card" href="' + esc(h) + '" target="_blank" rel="noopener"><span class="insta-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg></span><span><b>@etcitb</b><small>' + esc(L3("Lab life, events and research highlights. Follow us on Instagram →", "Kegiatan lab, acara, dan sorotan riset. Ikuti kami di Instagram →", "研究室の日常・イベント・研究ハイライト。Instagramでフォロー →")) + "</small></span></a>";
  };

  function renderAll() {
    $$("[data-render]").forEach(function (el) { var k = el.getAttribute("data-render"); if (R[k]) { try { R[k](el); } catch (err) { el.innerHTML = '<p class="muted">Could not load this section.</p>'; if (window.console) console.error(k, err); } } });
    $$("[data-setlang]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-setlang") === LANG); });
  }
  function setLang(l) {
    LANG = l; root.setAttribute("data-lang", l); root.setAttribute("lang", l);
    try { localStorage.setItem("etc-lang", l); } catch (e) {}
    renderAll();
  }
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-setlang]"); if (b) setLang(b.getAttribute("data-setlang")); });
  $$("[data-href-email]").forEach(function (a) { a.href = "mailto:" + L.email + (a.getAttribute("data-href-email") ? "?subject=" + encodeURIComponent(a.getAttribute("data-href-email")) : ""); });
  $$("[data-href-form]").forEach(function (a) { a.href = L.recruitForm; a.target = "_blank"; a.rel = "noopener"; });
  root.setAttribute("lang", LANG);
  renderAll();

  /* ================= NEWS FROM GOOGLE SHEET (simple CMS) =================
     Set ETC.lab.newsSheet (data-lab.js) to the "Publish to web → CSV" link of the
     Google Sheet that receives the news Google Form. Rows are added on top of
     the static ETC.news list. See NEWS-SYSTEM.txt for the setup. */
  function parseCSV(t) {
    var rows = [], row = [], f = "", q = false;
    for (var i = 0; i < t.length; i++) {
      var c = t[i];
      if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"') q = true; else if (c === ",") { row.push(f); f = ""; }
      else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; row.push(f); rows.push(row); row = []; f = ""; }
      else f += c;
    }
    if (f || row.length) { row.push(f); rows.push(row); }
    return rows;
  }
  function driveImg(s) {
    s = s.trim(); if (!s) return "";
    var m = s.match(/[?&]id=([\w-]{20,})/) || s.match(/\/d\/([\w-]{20,})/);
    return m ? "https://lh3.googleusercontent.com/d/" + m[1] + "=w1200" : s;
  }
  function normDate(s) {
    s = (s || "").trim(); var m;
    if ((m = s.match(/^(\d{4})-(\d{1,2})/))) return m[1] + "-" + ("0" + m[2]).slice(-2);
    if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/))) return m[3] + "-" + ("0" + m[2]).slice(-2); /* d/m/yyyy (Indonesian locale) */
    var d = new Date(s); return isNaN(d) ? "" : d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2);
  }
  function sheetToNews(rows) {
    var H = (rows.shift() || []).map(function (h) { return h.toLowerCase(); });
    function col(re, lang) { for (var i = 0; i < H.length; i++) if (re.test(H[i]) && (lang ? H[i].indexOf("(" + lang + ")") >= 0 : !/\((en|id|ja)\)/.test(H[i]))) return i; return -1; }
    var C = { date: col(/tanggal|date/), ts: col(/timestamp|stempel/), kind: col(/jenis|kind|type|kategori/), photo: col(/foto|photo|image|gambar|poster/), link: col(/link|tautan|url/), show: col(/tampil|publish|show|status/) };
    ["title", "text"].forEach(function (k) {
      var re = k === "title" ? /judul|title/ : /deskripsi|description|isi|text/;
      C[k] = col(re); ["en", "id", "ja"].forEach(function (l) { C[k + l] = col(re, l); });
    });
    var KIND = { penghargaan: "award", award: "award", rekrutmen: "recruit", recruit: "recruit", alumni: "alumni", hibah: "grant", grant: "grant", kegiatan: "event", event: "event", berita: "news", news: "news" };
    function g(r, i) { return i >= 0 ? (r[i] || "").trim() : ""; }
    return rows.filter(function (r) { return r.join("").trim() && !/^(no|tidak|hide|sembunyi)/i.test(g(r, C.show)); }).map(function (r) {
      function tri(k) { var base = g(r, C[k]); var o = { en: g(r, C[k + "en"]) || base, id: g(r, C[k + "id"]) || base, ja: g(r, C[k + "ja"]) || g(r, C[k + "en"]) || base }; return o; }
      var kind = (g(r, C.kind).toLowerCase().split(/[^a-z]/)[0]) || "news";
      return { date: normDate(g(r, C.date)) || normDate(g(r, C.ts)), kind: KIND[kind] || "news", title: tri("title"), text: tri("text"), link: g(r, C.link) || undefined, img: g(r, C.photo).split(/[\s,]+/).map(driveImg).filter(Boolean), live: true };
    }).filter(function (n) { return n.title.en || n.title.id; });
  }
  var SHEET = L.newsSheet;
  if (SHEET && $("[data-render=news]")) {
    var cached = null; try { cached = JSON.parse(sessionStorage.getItem("etc-news") || "null"); } catch (e) {}
    var merge = function (live) {
      var seen = {}; E.news = live.concat((E._staticNews = E._staticNews || E.news.slice())).filter(function (n) { var k = tr(n.title); if (seen[k]) return false; seen[k] = 1; return true; });
      E.news.sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
      renderAll();
    };
    if (cached) merge(cached);
    fetch(SHEET + (SHEET.indexOf("?") < 0 ? "?" : "&") + "t=" + Date.now()).then(function (r) { return r.text(); }).then(function (t) {
      var live = sheetToNews(parseCSV(t)); try { sessionStorage.setItem("etc-news", JSON.stringify(live)); } catch (e) {}
      merge(live);
    }).catch(function () {});
  }

  /* ================= MOTION: heat gauge, embers, staggered reveals ================= */
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function () {
    var hb = document.createElement("div"); hb.className = "heatbar"; document.body.appendChild(hb);
    function upd() { var h = document.documentElement.scrollHeight - innerHeight; hb.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")"; }
    addEventListener("scroll", upd, { passive: true }); upd();
    $$(".grid,.people,.news,.subs,.figs,.equip").forEach(function (g) { if (!g.classList.contains("reveal")) g.classList.add("reveal-stagger"); });
    var hero = $(".hero");
    if (!hero || still) return;
    var cv = document.createElement("canvas"); cv.className = "embers"; cv.setAttribute("aria-hidden", "true"); hero.insertBefore(cv, $(".wrap", hero));
    var ctx = cv.getContext("2d"), P = [], W, H, dpr = Math.min(2, devicePixelRatio || 1), run = true;
    function size() { W = cv.width = hero.offsetWidth * dpr; H = cv.height = hero.offsetHeight * dpr; cv.style.width = hero.offsetWidth + "px"; cv.style.height = hero.offsetHeight + "px"; }
    function spawn() { return { x: W * (.45 + Math.random() * .55), y: H + Math.random() * 40, r: (1 + Math.random() * 2.4) * dpr, vy: (.35 + Math.random() * .9) * dpr, vx: (Math.random() - .5) * .4 * dpr, life: 0, max: 260 + Math.random() * 240, w: Math.random() * 6.28 }; }
    size(); addEventListener("resize", size); for (var i = 0; i < 46; i++) { var p = spawn(); p.y = Math.random() * H; P.push(p); }
    new IntersectionObserver(function (e) { run = e[0].isIntersecting; if (run) loop(); }).observe(hero);
    function loop() {
      if (!run) return; ctx.clearRect(0, 0, W, H);
      P.forEach(function (p, i) {
        p.life++; p.w += .03; p.x += p.vx + Math.sin(p.w) * .35 * dpr; p.y -= p.vy;
        var t = p.life / p.max, a = Math.max(0, Math.sin(Math.PI * Math.min(1, t)));
        var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, "rgba(235,246,255," + .95 * a + ")"); g.addColorStop(.35, "rgba(79,195,247," + .55 * a + ")"); g.addColorStop(1, "rgba(21,101,192,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, 6.29); ctx.fill();
        if (t >= 1 || p.y < -20) P[i] = spawn();
      });
      requestAnimationFrame(loop);
    }
    loop();
  })();
  if ("IntersectionObserver" in window && !still) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .12 });
    $$(".reveal,.reveal-stagger").forEach(function (r) { io.observe(r); });
  } else { $$(".reveal,.reveal-stagger").forEach(function (r) { r.classList.add("in"); }); }
})();
