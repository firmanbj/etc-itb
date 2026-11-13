ETC LAB WEBSITE · how to update  (EN / ID / 日本語)
=================================================

Open index.html in a browser to preview. No server needed.
Language: switch at top right, or link with ?lang=en / ?lang=id / ?lang=ja.

WHERE TO EDIT
- assets/js/data-lab.js      Members, news, topic finder, facilities, gallery,
                             research theme names, PI links, recruitment banner.
                             Text can be "plain" or { en: "...", id: "...", ja: "..." }.
- assets/js/data-records.js  Publications (shown on pi.html), research grants,
                             patents, alumni + theses. Themes are auto-detected.
- *.html                     Page text. Every sentence appears three times:
                             <span data-l="en">…</span><span data-l="id">…</span><span data-l="ja">…</span>
                             Edit all three when changing a sentence.
- assets/css/style.css       Design (blueprint / control-room theme, CFD colour bar).
- assets/img/research/       Research figures (from the ETC intro deck and student theses).
- assets/img/*.svg           Hero power-plant drawing and engineering watermarks.

THEMES (codes used in data files)
  comb  Non-Carbon Fuel Combustion & Co-firing (H2, NH3, coal, biomass, liquid fuels)
  loop  Sustainable Fuels & Hydrogen (chemical looping, turquoise H2, SAF)
  ccus  Carbon Mineralization & Utilization
  power Power System Dynamics

COMMON TASKS
- New member: add to ETC.members (level S1/S2/S3, area code, topic in 3 languages).
- Graduate: move from ETC.members to ETC.alumni (thesis, next step).
- New paper: add at the top of ETC.publications.
- Close recruitment: recruitOpen: false.
