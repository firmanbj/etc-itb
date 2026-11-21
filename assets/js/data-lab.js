/* =====================================================================
   ETC LAB · EDITABLE DATA (trilingual)
   Any text can be a plain string (same in every language) or
   { en: "...", id: "...", ja: "..." }.  Missing languages fall back to en.

   Research theme codes:
     comb  = Non-Carbon Fuel Combustion & Co-firing
     loop  = Sustainable Fuels & Hydrogen (chemical looping, turquoise H2, SAF)
     ccus  = Carbon Mineralization & Utilization
     power = Power System Dynamics
   ===================================================================== */
window.ETC = window.ETC || {};

ETC.lab = {
  email: "firman.juangsa@itb.ac.id",
  instagram: "https://www.instagram.com/etcitb/",
  shortlink: "https://bit.ly/ETCLab",
  recruitForm: "https://forms.office.com/Pages/ResponsePage.aspx?id=gxFu22VMXECCznzVP6bp3E9kBs3ELD1Hk3EpI_g4YpFUNTdFOUdSWkNNNzVVOFFPVVgzMEUxMzFLRi4u",
  recruitOpen: true,
  /* NEWS CMS: paste the Google Sheet "Publish to web → CSV" link here (see NEWS-SYSTEM.txt). Empty = only the news below. */
  newsSheet: "",
  /* link to the Google Form used to submit news (opened from news.html "Submit news" for lab admins) */
  newsForm: "",
  recruitLabel: { en: "Research Team 2026 applications are open", id: "Pendaftaran Tim Peneliti 2026 dibuka", ja: "2026年度 研究チーム募集中" }
};

ETC.areas = {
  comb: {
    page: "research-combustion.html", img: "assets/img/research/flame-swirl-nh3.jpg",
    name:  { en: "Non-Carbon Fuel Combustion & Co-firing", id: "Pembakaran Bahan Bakar Non-Karbon & Co-firing", ja: "非炭素燃料燃焼・混焼" },
    focus: { en: "H₂ · NH₃ · coal · biomass · liquid fuels", id: "H₂ · NH₃ · batubara · biomassa · bahan bakar cair", ja: "H₂・NH₃・石炭・バイオマス・液体燃料" },
    short: { en: "Flames, boilers, gas turbines and engines running on hydrogen, ammonia, biomass and bio-liquid fuels, and how to co-fire them with coal and gas without losing stability or raising NOx.",
             id: "Nyala api, boiler, turbin gas, dan mesin berbahan bakar hidrogen, amonia, biomassa, dan bahan bakar cair nabati, serta cara melakukan co-firing dengan batubara dan gas tanpa kehilangan kestabilan atau menaikkan NOx.",
             ja: "水素・アンモニア・バイオマス・バイオ液体燃料で運転する火炎、ボイラ、ガスタービン、エンジン。石炭やガスとの混焼を、安定性を損なわずNOxを抑えて実現します。" }
  },
  loop: {
    page: "research-chemical-looping.html", img: "assets/img/research/methane-pyrolysis-carbon.jpg",
    name:  { en: "Sustainable Fuels & Hydrogen", id: "Bahan Bakar Berkelanjutan & Hidrogen", ja: "持続可能燃料・水素" },
    focus: { en: "Chemical looping · turquoise H₂ · SAF", id: "Chemical looping · H₂ turquoise · SAF", ja: "ケミカルルーピング・ターコイズ水素・SAF" },
    short: { en: "Producing the non-carbon and low-carbon fuels of tomorrow: chemical-looping hydrogen, turquoise hydrogen from methane pyrolysis, and sustainable aviation fuel via Fischer–Tropsch.",
             id: "Memproduksi bahan bakar non-karbon dan rendah karbon masa depan: hidrogen chemical looping, hidrogen turquoise dari pirolisis metana, dan bahan bakar aviasi berkelanjutan melalui Fischer–Tropsch.",
             ja: "次世代の非炭素・低炭素燃料をつくる：ケミカルルーピング水素、メタン熱分解によるターコイズ水素、フィッシャー・トロプシュ法による持続可能な航空燃料（SAF）。" }
  },
  ccus: {
    page: "research-ccus.html", img: "assets/img/research/sem-fly-ash.jpg",
    name:  { en: "Carbon Mineralization & Utilization", id: "Mineralisasi & Pemanfaatan Karbon", ja: "炭素鉱物化・利用" },
    focus: { en: "Fly ash · desilication · calcium looping", id: "Fly ash · desilikasi · calcium looping", ja: "フライアッシュ・脱シリカ・カルシウムルーピング" },
    short: { en: "Locking CO₂ permanently into stable carbonates using power plant fly ash and other industrial by-products, and turning the products into value.",
             id: "Mengikat CO₂ secara permanen menjadi karbonat stabil menggunakan fly ash pembangkit dan produk samping industri lainnya, lalu mengubah produknya menjadi bernilai.",
             ja: "発電所のフライアッシュなど産業副産物を用いてCO₂を安定な炭酸塩として恒久的に固定し、生成物を有価物として活用します。" }
  },
  power: {
    page: "research-power-systems.html", img: "assets/img/research/boiler-nh3-cofiring-cfd.jpg",
    name:  { en: "Power System Dynamics", id: "Dinamika Sistem Pembangkit", ja: "発電システムダイナミクス" },
    focus: { en: "Flexibility · digital twins · storage", id: "Fleksibilitas · digital twin · penyimpanan", ja: "柔軟運用・デジタルツイン・蓄熱" },
    short: { en: "Dynamic models and digital twins that let thermal power plants ramp faster, store heat and switch fuels as renewables grow.",
             id: "Model dinamik dan digital twin agar pembangkit termal dapat menaikkan beban lebih cepat, menyimpan panas, dan berganti bahan bakar seiring bertambahnya energi terbarukan.",
             ja: "再エネ拡大に対応し、火力発電所の高速負荷変化、蓄熱、燃料転換を可能にする動的モデルとデジタルツイン。" }
  }
};

ETC.pi = {
  name: "Dr.Eng. Ir. Firman Bagja Juangsa, S.T., M.Eng.",
  photo: "assets/img/pi-firman.png",
  title: { en: "Assistant Professor (Lektor)", id: "Lektor", ja: "准教授相当（Lektor）" },
  roles: [
    { en: "Thermal Science and Engineering Research Group, FTMD ITB", id: "Kelompok Keahlian Ilmu dan Rekayasa Termal, FTMD ITB", ja: "ITB 機械航空工学部 熱科学工学研究グループ" },
    { en: "Head, FTMD Research and Innovation Institute for Sustainable Energy, Materials, Manufacturing & Transportation", id: "Kepala Lembaga Riset dan Inovasi Energi Berkelanjutan, Material, Manufaktur, dan Transportasi FTMD", ja: "FTMD 持続可能エネルギー・材料・製造・交通 研究イノベーション機構 機構長" },
    { en: "Research Center for New and Renewable Energy, ITB", id: "Pusat Penelitian Energi Baru dan Terbarukan, ITB", ja: "ITB 新・再生可能エネルギー研究センター" },
    { en: "RIKEN Center for Sustainable Resource Science, Japan", id: "RIKEN Center for Sustainable Resource Science, Jepang", ja: "理化学研究所 環境資源科学研究センター（日本）" }
  ],
  links: [
    ["FTMD ITB profile", "https://ftmd-itb.id/dr-eng-ir-firman-bagja-juangsa-s-t-m-eng/", true],
    ["ITB staff profile", "https://itb.ac.id/staf/profil/5852/firman-bagja-juangsa", true],
    ["Google Scholar", "https://scholar.google.com/citations?user=q2sMsdwAAAAJ&hl=en"],
    ["Scopus", "https://www.scopus.com/authid/detail.uri?authorId=57006754900"],
    ["ORCID", "https://orcid.org/0000-0002-3117-843X"],
    ["SINTA", "https://sinta.kemdiktisaintek.go.id/authors/profile/6759711"],
    ["ResearchGate", "https://www.researchgate.net/profile/Firman_Juangsa"],
    ["LinkedIn", "https://www.linkedin.com/in/firmanbj/"]
  ]
};

/* level: S3 | S2 | S1 ; area: comb | loop | ccus | power */
ETC.members = [
  { name: "Adi Prismantoko", level: "S3", area: "comb", topic: { en: "Coal–biomass–ammonia co-firing", id: "Co-firing batubara–biomassa–amonia", ja: "石炭・バイオマス・アンモニア混焼" } },
  { name: "Ratna Dian Nabila", level: "S3", area: "comb", topic: { en: "Optical NH₃ and low-carbon gas combustion in a constant-volume chamber", id: "Pembakaran optik NH₃ dan gas rendah karbon di ruang bakar volume konstan", ja: "定容燃焼容器におけるNH₃・低炭素ガスの光学燃焼計測" } },
  { name: "Roby Pratama Sitepu", level: "S3", area: "comb", topic: { en: "Digital twin for non-carbon fuel combustion", id: "Digital twin untuk pembakaran bahan bakar non-karbon", ja: "非炭素燃料燃焼のデジタルツイン" } },
  { name: "Ika Yuliyani", level: "S3", area: "comb", topic: { en: "Hydrogen–natural gas co-firing in gas engines", id: "Co-firing hidrogen–gas alam pada mesin gas", ja: "ガスエンジンにおける水素・天然ガス混焼" } },
  { name: "Reza Setiawan", level: "S3", area: "loop", topic: { en: "Green hydrogen from geothermal energy", id: "Hidrogen hijau dari energi panas bumi", ja: "地熱エネルギーによるグリーン水素製造" } },
  { name: "Daniel Ikun Paa", level: "S3", area: "ccus", topic: { en: "Calcium looping–CSP with natural sorbents from West Timor", id: "Calcium looping–CSP dengan sorben alami Timor Barat", ja: "西ティモール産天然吸収材によるカルシウムルーピング–CSP" } },
  { name: "Muhammad Rusyda Hafizh Ghifari", level: "S2", area: "comb", topic: { en: "Ammonia co-firing in coal-fired power plants", id: "Co-firing amonia di PLTU batubara", ja: "石炭火力発電所におけるアンモニア混焼" } },
  { name: "Wahyu Fitri Yanto", level: "S2", area: "ccus", topic: { en: "Fly ash desilication and enhanced mineral carbonation", id: "Desilikasi fly ash dan peningkatan karbonasi mineral", ja: "フライアッシュの脱シリカ処理と鉱物炭酸化の高効率化" } },
  { name: "Alfian Satria Nugraha", level: "S2", area: "loop", topic: { en: "H₂ pathways and techno-economics of Fischer–Tropsch SAF", id: "Jalur H₂ dan tekno-ekonomi SAF Fischer–Tropsch", ja: "水素製造経路とFT合成SAFの技術経済性" } },
  { name: "Fakih Rafi Bilal Asadel", level: "S2", area: "comb", topic: { en: "NH₃ lancing for coal co-firing", id: "Lancing NH₃ untuk co-firing batubara", ja: "石炭混焼のためのNH₃ランス噴射" } },
  { name: "Jeremy Parulian Situmorang", level: "S1", area: "loop", topic: { en: "Biomass pyrolysis for low-carbon steelmaking", id: "Pirolisis biomassa untuk pembuatan baja rendah karbon", ja: "低炭素製鉄のためのバイオマス熱分解" } },
  { name: "Daffa Asyhada Bilyast", level: "S1", area: "comb", topic: { en: "Palm biomass utilization as fuel", id: "Pemanfaatan biomassa sawit sebagai bahan bakar", ja: "パーム系バイオマスの燃料利用" } },
  { name: "Khanza Adelia Hanifah", level: "S1", area: "comb", topic: { en: "CPFD of a CFB boiler with ammonia co-firing", id: "CPFD boiler CFB dengan co-firing amonia", ja: "アンモニア混焼CFBボイラのCPFD解析" } },
  { name: "Muhamad Rafli Parindang", level: "S1", area: "comb", topic: { en: "H₂O₂-assisted NH₃/H₂ flames", id: "Nyala NH₃/H₂ berbantuan H₂O₂", ja: "H₂O₂添加によるNH₃/H₂火炎の燃焼促進" } },
  { name: "Rafi Renardi Hariyo", level: "S1", area: "comb", topic: { en: "Small two-stroke SI engine optimization for UAVs", id: "Optimasi mesin SI dua langkah kecil untuk UAV", ja: "UAV用小型2ストロークSIエンジンの最適化" } },
  { name: "Tristan Muhammad Dipa Abyasa", level: "S1", area: "comb", topic: { en: "Micro gas turbine combustion experiments", id: "Eksperimen pembakaran turbin gas mikro", ja: "マイクロガスタービンの燃焼実験" } },
  { name: "Dave Gottlieb Sungkono", level: "S1", area: "loop", topic: { en: "Methane pyrolysis for turquoise hydrogen", id: "Pirolisis metana untuk hidrogen turquoise", ja: "メタン熱分解によるターコイズ水素" } },
  { name: "I Gusti Made Gde Atmaja Susila", level: "S1", area: "power", topic: { en: "Dynamic model of a coal-fired power plant", id: "Model dinamik PLTU batubara", ja: "石炭火力発電所の動的モデル" } },
  { name: "Erick Proid Marta", level: "S1", area: "comb", topic: { en: "Hydrogen dual-fuel diesel engine", id: "Mesin diesel dual-fuel hidrogen", ja: "水素デュアルフューエル・ディーゼルエンジン" } },
  { name: "Fattan Artha Maulana", level: "S1", area: "loop", topic: { en: "Chemical looping for hydrogen production", id: "Chemical looping untuk produksi hidrogen", ja: "ケミカルルーピングによる水素製造" } },
  { name: "Andrew Colie", level: "S1", area: "comb", topic: { en: "Plasma-assisted ammonia combustion", id: "Pembakaran amonia berbantuan plasma", ja: "プラズマアシスト・アンモニア燃焼" } }
];

/* kind: award | recruit | alumni | grant | event | news */
ETC.news = [
  { date: "2026-11", kind: "event", img: ["assets/img/news/diaspora-2026-kuliah-umum-doc1.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc2.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc3.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc4.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc5.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc6.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc7.jpg","assets/img/news/diaspora-2026-kuliah-umum-doc8.jpg"],
    title: { en: "Public lecture held: Prof. Muhammad Aziz on carbon-free energy systems", id: "Kuliah umum terlaksana: Prof. Muhammad Aziz tentang sistem energi bebas karbon", ja: "公開講義を開催：アジズ教授が語るカーボンフリーエネルギーシステム" },
    text:  { en: "On Tuesday 17 November 2026, the Diaspora Berdampak public lecture took place at the FTMD Seminar Room, ITB. Prof. Dr.Eng. Muhammad Aziz (Tohoku University) presented “Decarbonizing the Future: from Materials to Systems — Building Research Frontiers in Carbon-Free Energy Systems” to students, lecturers and researchers of FTMD, moderated by Dr. Firman Bagja Juangsa. The session closed with a group photo. Next: the sharing session “Research and Lab Management” on Wednesday 25 November 2026, 13.30–15.30 WIB.",
             id: "Pada Selasa, 17 November 2026, kuliah umum Diaspora Berdampak terlaksana di Ruang Seminar FTMD ITB. Prof. Dr.Eng. Muhammad Aziz (Tohoku University) membawakan materi “Decarbonizing the Future: from Materials to Systems — Building Research Frontiers in Carbon-Free Energy Systems” di hadapan mahasiswa, dosen, dan peneliti FTMD, dimoderatori Dr. Firman Bagja Juangsa. Acara ditutup dengan foto bersama. Selanjutnya: sharing session “Research and Lab Management” pada Rabu, 25 November 2026, pukul 13.30–15.30 WIB.",
             ja: "2026年11月17日（火）、Diaspora Berdampak公開講義がITB FTMDセミナー室で開催されました。東北大学のムハンマド・アジズ教授が「Decarbonizing the Future: from Materials to Systems — Building Research Frontiers in Carbon-Free Energy Systems」と題して、FTMDの学生・教員・研究者に講演し、司会はフィルマン・バグジャ・ジュアンサ博士が務めました。最後に集合写真を撮影しました。次回はシェアリングセッション「Research and Lab Management」（11月25日（水）13:30～15:30）です。" } },
  { date: "2026-11", kind: "event", img: ["assets/img/news/diaspora-2026-kuliah-umum.jpg", "assets/img/news/diaspora-2026-sharing.jpg"],
    title: { en: "Diaspora Berdampak 2026: Prof. Muhammad Aziz (Tohoku University) visits ETC Lab", id: "Diaspora Berdampak 2026: Prof. Muhammad Aziz (Tohoku University) berkunjung ke ETC Lab", ja: "Diaspora Berdampak 2026：東北大学 ムハンマド・アジズ教授が来訪" },
    text:  { en: "Under the Diaspora Berdampak Batch I 2026 grant (Diktisaintek), Prof. Dr.Eng. Muhammad Aziz, Distinguished Professor at Tohoku University, is visiting FTMD ITB from 16 to 27 November 2026 for joint research, co-supervision of doctoral students and joint publications. Public lecture “Decarbonized Energy Systems” (clean hydrogen, chemical looping, ammonia as an energy carrier, Indonesia's energy transition): Tuesday 17 Nov, 09.00–11.00 WIB. Sharing session “Research and Lab Management”: Wednesday 25 Nov, 13.30–15.30 WIB. Both at the FTMD Seminar Room, 2nd floor, moderated by Dr. Firman.",
             id: "Melalui Program Hibah Diaspora Berdampak Batch I 2026 (Diktisaintek), Prof. Dr.Eng. Muhammad Aziz, Distinguished Professor Tohoku University, berkunjung ke FTMD ITB pada 16–27 November 2026 untuk kolaborasi riset, pembimbingan bersama mahasiswa doktoral, dan publikasi bersama. Kuliah umum “Decarbonized Energy Systems” (hidrogen bersih, chemical looping, amonia sebagai pembawa energi, transisi energi Indonesia): Selasa, 17 November, 09.00–11.00 WIB. Sharing session “Research and Lab Management”: Rabu, 25 November, 13.30–15.30 WIB. Keduanya di Ruang Seminar FTMD Lantai 2, dimoderatori Dr. Firman.",
             ja: "Diaspora Berdampak 2026（第1期、高等教育・科学技術省）の助成により、東北大学 卓越教授 ムハンマド・アジズ教授が2026年11月16日～27日にFTMD ITBを訪問し、共同研究、博士課程学生の共同指導、共著論文の執筆を行います。公開講義「Decarbonized Energy Systems」（クリーン水素、ケミカルルーピング、エネルギーキャリアとしてのアンモニア、インドネシアのエネルギー転換）：11月17日（火）9:00～11:00。シェアリングセッション「Research and Lab Management」：11月25日（水）13:30～15:30。会場はいずれもFTMDセミナー室（2階）、司会はフィルマン博士。" } },
  { date: "2026-11", kind: "recruit", link: "join.html#apply",
    title: { en: "Research Team 2026: applications open", id: "Tim Peneliti 2026: pendaftaran dibuka", ja: "2026年度 研究チーム募集開始" },
    text:  { en: "3rd- and 4th-year students can apply for final-project positions across all four research themes.", id: "Mahasiswa tingkat 3–4 dapat mendaftar posisi Tugas Akhir di keempat tema riset.", ja: "学部3・4年生を対象に、4つの研究テーマで卒業研究テーマを募集しています。" } },
  { date: "2026-11", kind: "event", link: "news.html#gallery",
    title: { en: "2026 lab photoshoot", id: "Sesi foto lab 2026", ja: "2026年 研究室集合写真" },
    text:  { en: "The 2026 cohort of doctoral, master's and undergraduate researchers.", id: "Angkatan 2026 peneliti doktor, magister, dan sarjana.", ja: "博士・修士・学部の2026年度メンバー。" } },
  { date: "2026-06", kind: "alumni", link: "alumni.html",
    title: { en: "Six master's theses defended", id: "Enam tesis magister dipertahankan", ja: "修士論文6件が審査合格" },
    text:  { en: "From natural-ore oxygen carriers for chemical looping to hydrogen micro gas turbine combustor design.", id: "Mulai dari oxygen carrier bijih alam untuk chemical looping hingga desain combustor turbin gas mikro hidrogen.", ja: "天然鉱石酸素キャリアによるケミカルルーピングから水素マイクロガスタービン燃焼器設計まで。" } },
  { date: "2026-02", kind: "award",
    title: { en: "Research and Innovation Excellence Award, ITB 2026", id: "Research and Innovation Excellence Award, ITB 2026", ja: "ITB 研究・イノベーション優秀賞 2026" },
    text:  { en: "Awarded to Dr. Firman at ITB's 67th Dies Natalis for contributions to energy decarbonization research.", id: "Diberikan kepada Dr. Firman pada Dies Natalis ke-67 ITB atas kontribusi riset dekarbonisasi energi.", ja: "ITB創立67周年記念式典にて、エネルギー脱炭素化研究への貢献によりFirman博士が受賞。" } },
  { date: "2026-01", kind: "grant", link: "projects.html",
    title: { en: "New research grants for 2026", id: "Hibah riset baru 2026", ja: "2026年度 新規研究助成" },
    text:  { en: "Low-NOx ammonia–hydrogen combustion, ammonia in engines for remote islands, CFD–machine learning for co-firing, and green biofuel from biomass.", id: "Pembakaran amonia–hidrogen rendah NOx, amonia pada mesin untuk pulau terpencil, CFD–machine learning untuk co-firing, dan biofuel hijau dari biomassa.", ja: "低NOxアンモニア・水素燃焼、離島向けエンジンでのアンモニア利用、混焼のためのCFD×機械学習、バイオマス由来グリーン燃料。" } },
  { date: "2026-01", kind: "news",
    title: { en: "National hydrogen standards committee", id: "Komite standar hidrogen nasional", ja: "国家水素規格委員会に参画" },
    text:  { en: "Dr. Firman joined Technical Committee 27-11 Hydrogen Technology of the National Standardization Agency.", id: "Dr. Firman bergabung dalam Komite Teknis 27-11 Teknologi Hidrogen, Badan Standardisasi Nasional.", ja: "Firman博士がインドネシア国家標準化庁の技術委員会27-11（水素技術）委員に就任。" } },
  { date: "2025-09", kind: "alumni", link: "alumni.html#outcomes",
    title: { en: "Alumni continue to graduate study abroad", id: "Alumni melanjutkan studi pascasarjana ke luar negeri", ja: "修了生が海外大学院へ進学" },
    text:  { en: "Recent graduates moved to KAUST, Khalifa University, the University of Tokyo and Erasmus Mundus programmes.", id: "Lulusan terbaru melanjutkan ke KAUST, Khalifa University, University of Tokyo, dan program Erasmus Mundus.", ja: "最近の修了生はKAUST、ハリファ大学、東京大学、エラスムス・ムンドゥスへ進学。" } },
  { date: "2024-10", kind: "event",
    title: { en: "Visit by Prof. Tomohiro Nozaki", id: "Kunjungan Prof. Tomohiro Nozaki", ja: "野崎智洋教授が来訪" },
    text:  { en: "Joint work on CO₂ mineralization with fly ash with the Institute of Science Tokyo.", id: "Kerja sama mineralisasi CO₂ dengan fly ash bersama Institute of Science Tokyo.", ja: "東京科学大学とのフライアッシュによるCO₂鉱物化の共同研究。" } }
];

/* Topic finder. method: exp | sim | tea ; level: S1 | S2 | S3 */
ETC.topics = [
  { area: "comb", method: ["exp"], level: ["S1","S2","S3"], title: { en: "Stability and NO of partially cracked NH₃ flames", id: "Kestabilan dan NO nyala NH₃ yang di-crack sebagian", ja: "部分分解NH₃火炎の安定性とNO生成" }, note: "Co-flow / swirl burner, GC, UV chemiluminescence imaging" },
  { area: "comb", method: ["exp"], level: ["S1","S2"], title: { en: "Plasma- or H₂O₂-assisted ammonia combustion", id: "Pembakaran amonia berbantuan plasma atau H₂O₂", ja: "プラズマ・H₂O₂アシストのアンモニア燃焼" }, note: "Reactivity enhancement for NH₃" },
  { area: "comb", method: ["sim"], level: ["S1","S2","S3"], title: { en: "CFD of ammonia and biomass co-firing in utility boilers", id: "CFD co-firing amonia dan biomassa pada boiler utilitas", ja: "大型ボイラにおけるアンモニア・バイオマス混焼のCFD" }, note: "NOx, air staging, flue gas recirculation, slagging" },
  { area: "comb", method: ["exp","sim"], level: ["S1","S2"], title: { en: "Hydrogen dual-fuel diesel and gas engines", id: "Mesin diesel dan gas dual-fuel hidrogen", ja: "水素デュアルフューエル・ディーゼル／ガスエンジン" }, note: "Diesel engine + load bank, CFD of in-cylinder combustion" },
  { area: "comb", method: ["exp"], level: ["S1","S2"], title: { en: "Sprays of pure palm oil, biodiesel and additive fuels", id: "Semprotan minyak sawit murni, biodiesel, dan bahan bakar beraditif", ja: "純パーム油・バイオディーゼル・添加剤燃料の噴霧" }, note: "Droplet & spray imaging, nanomaterial additives" },
  { area: "comb", method: ["sim","tea"], level: ["S2"], title: { en: "Hydrogen co-firing in gas turbines", id: "Co-firing hidrogen pada turbin gas", ja: "ガスタービンにおける水素混焼" }, note: "Combustor CFD, cycle performance, economics" },
  { area: "loop", method: ["exp"], level: ["S1","S2"], title: { en: "Three-reactor chemical looping cold-flow hydrodynamics", id: "Hidrodinamika cold-flow chemical looping tiga reaktor", ja: "3塔式ケミカルルーピングのコールドフロー流動" }, note: "Loop seals, riser, cyclone" },
  { area: "loop", method: ["sim"], level: ["S1","S2","S3"], title: { en: "Oxygen carriers from Indonesian natural ores", id: "Oxygen carrier dari bijih alam Indonesia", ja: "インドネシア産天然鉱石の酸素キャリア" }, note: "ASPEN Plus, CPFD" },
  { area: "loop", method: ["exp","tea"], level: ["S1","S2"], title: { en: "Turquoise hydrogen and solid carbon by methane pyrolysis", id: "Hidrogen turquoise dan karbon padat dari pirolisis metana", ja: "メタン熱分解によるターコイズ水素と固体炭素" }, note: "Fluidized-bed reactor, GC, carbon characterization" },
  { area: "loop", method: ["sim","tea"], level: ["S2","S3"], title: { en: "Sustainable aviation fuel via Fischer–Tropsch", id: "Bahan bakar aviasi berkelanjutan via Fischer–Tropsch", ja: "フィッシャー・トロプシュ法による持続可能な航空燃料" }, note: "PEM / chemical-looping water splitting / NH₃ cracking H₂ supply" },
  { area: "ccus", method: ["exp"], level: ["S1","S2"], title: { en: "Fly ash desilication and mineral carbonation", id: "Desilikasi fly ash dan karbonasi mineral", ja: "フライアッシュの脱シリカと鉱物炭酸化" }, note: "XRF, XRD, TGA, SEM-EDS" },
  { area: "ccus", method: ["exp","sim"], level: ["S2","S3"], title: { en: "Calcium looping for cement and solar integration", id: "Calcium looping untuk semen dan integrasi surya", ja: "セメント・太陽熱統合のカルシウムルーピング" }, note: "Natural sorbents, cycle stability" },
  { area: "ccus", method: ["tea"], level: ["S1","S2"], title: { en: "Techno-economics of mineralization products under carbon pricing", id: "Tekno-ekonomi produk mineralisasi dengan harga karbon", ja: "炭素価格下での鉱物化生成物の技術経済性" }, note: "Aspen process scale-up, by-product valorization" },
  { area: "power", method: ["sim"], level: ["S1","S2","S3"], title: { en: "Dynamic model and digital twin of a thermal power plant", id: "Model dinamik dan digital twin pembangkit termal", ja: "火力発電所の動的モデルとデジタルツイン" }, note: "HYSYS Dynamics, Dymola, AVEVA" },
  { area: "power", method: ["sim","tea"], level: ["S1","S2"], title: { en: "Flexibility retrofits: thermal storage and repowering", id: "Retrofit fleksibilitas: penyimpanan termal dan repowering", ja: "柔軟性改造：蓄熱とリパワリング" }, note: "Ramp rate, part-load efficiency" }
];

/* Facilities (from the ETC inventory). lab: R = Refrigeration Lab (Labtek II), C = Gas Engine Lab */
ETC.facilities = [
  { ill: "burner", img: "assets/img/research/rig-coflow-burner-3d.jpg", lab: "LAB R",
    name: { en: "Combustion & flame diagnostics", id: "Pembakaran & diagnostik nyala", ja: "燃焼・火炎計測" },
    text: { en: "Co-flow diffusion and swirl burners, and an optical constant-volume chamber for H₂/NH₃/CH₄ flames.", id: "Burner difusi co-flow dan swirl, serta ruang bakar volume konstan optik untuk nyala H₂/NH₃/CH₄.", ja: "H₂/NH₃/CH₄火炎のための同軸流拡散バーナ、旋回バーナ、光学定容燃焼容器。" },
    items: ["Mass-flow controllers for NH₃, H₂ (10, 30, 50 LPM; 1000 psi)", "Rotameters 0.1–300 LPM, bubble flow meter", "Gas regulators: CH₄, H₂, CO, CO₂, N₂, Ar, O₂, C₂H₂", "Type K/J thermocouples, pressure gauges to 5.5 MPa", "Gas detector, flame arrestor, exhaust extraction"] },
  { ill: "camera", lab: "LAB R",
    name: { en: "Flame imaging", id: "Pencitraan nyala", ja: "火炎撮影" },
    text: { en: "Full-spectrum imaging to capture flame shape, lift-off and UV chemiluminescence.", id: "Pencitraan spektrum penuh untuk menangkap bentuk nyala, lift-off, dan kemiluminesensi UV.", ja: "火炎形状、浮き上がり、紫外化学発光を捉えるフルスペクトル撮影。" },
    items: ["Canon EOS R5 with UV filter removed (full-spectrum)", "Canon EOS 6D Mark II", "Nikon D5200", "Camera tripods and fixtures"] },
  { ill: "gc", lab: "LAB R",
    name: { en: "Gas analysis", id: "Analisis gas", ja: "ガス分析" },
    text: { en: "Composition of fuel, product and flue gases from flames and reactors.", id: "Komposisi bahan bakar, produk, dan gas buang dari nyala dan reaktor.", ja: "火炎・反応器からの燃料、生成ガス、排ガスの組成分析。" },
    items: ["Gas chromatograph (PerkinElmer Autosystem XL, TCD, 10-port gas sampling valve)", "Second GC system with dedicated PC and UPS", "Quadrupole mass spectrometer (QMS)", "CO₂ data logger, gas trap, calibration gas"] },
  { ill: "furnace", lab: "LAB R",
    name: { en: "Reactors & thermal processing", id: "Reaktor & proses termal", ja: "反応器・熱処理" },
    text: { en: "Fluidized-bed and tube furnaces for methane pyrolysis, chemical looping and calcination–carbonation cycles.", id: "Tungku fluidized-bed dan tabung untuk pirolisis metana, chemical looping, dan siklus kalsinasi–karbonasi.", ja: "メタン熱分解、ケミカルルーピング、焼成・炭酸化サイクルのための流動層炉と管状炉。" },
    items: ["Large tube furnace configured as a fluidized-bed reactor", "Compact tube furnace (MTI)", "Vaporizer, syringe pump, steam generator", "Oil-less and rotary vacuum pumps; 1- and 3-phase compressors"] },
  { ill: "engine", img: "assets/img/research/engine-h2-diesel-rig.jpg", lab: "LAB C",
    name: { en: "Engine test bench", id: "Bangku uji mesin", ja: "エンジン試験台" },
    text: { en: "Single-cylinder diesel engine for hydrogen dual-fuel and bio-liquid fuel tests.", id: "Mesin diesel satu silinder untuk uji dual-fuel hidrogen dan bahan bakar cair nabati.", ja: "水素デュアルフューエル・バイオ液体燃料試験用の単気筒ディーゼルエンジン。" },
    items: ["13 hp single-cylinder diesel engine", "7.5 kVA resistive load bank", "H₂ injection with mass-flow control", "Exhaust gas analysis"] },
  { ill: "flask", img: "assets/img/research/absorption-reactor.jpg", lab: "LAB R",
    name: { en: "CO₂ capture & mineralization bench", id: "Bangku penangkapan & mineralisasi CO₂", ja: "CO₂回収・鉱物化実験台" },
    text: { en: "Absorption, desilication and carbonation of fly ash and other alkaline by-products.", id: "Absorpsi, desilikasi, dan karbonasi fly ash serta produk samping alkali lainnya.", ja: "フライアッシュ等アルカリ性副産物の吸収、脱シリカ、炭酸化。" },
    items: ["Jacketed absorption / carbonation reactors", "Hotplate stirrers, dosing pump", "pH meters, balances up to 10 kg", "Sieve shaker and sieves (mesh 18–140)", "Distillation set, ultrasonic cleaner"] },
  { ill: "boiler", img: "assets/img/research/boiler-simulator-60kw.jpg", lab: "PARTNER",
    name: { en: "60 kWth pulverized-fuel boiler simulator", id: "Simulator boiler serbuk 60 kWth", ja: "60 kWth 微粉燃料ボイラシミュレータ" },
    text: { en: "Collaborative facility for coal–biomass–ammonia co-firing and ash deposition studies.", id: "Fasilitas kolaborasi untuk studi co-firing batubara–biomassa–amonia dan deposisi abu.", ja: "石炭・バイオマス・アンモニア混焼と灰付着研究のための共同利用設備。" },
    items: ["Coal feeder and pre-heater", "Multi-stage air supply", "Cyclone and gas treatment"] },
  { ill: "char", lab: "ITB",
    name: { en: "Materials characterization", id: "Karakterisasi material", ja: "材料キャラクタリゼーション" },
    text: { en: "Through ITB central laboratories.", id: "Melalui laboratorium pusat ITB.", ja: "ITB共通機器室を利用。" },
    items: ["XRF, XRD", "TGA / STA", "SEM-EDS", "BET surface area and pore size"] },
  { ill: "pc", lab: "LAB C · LAB R",
    name: { en: "Computing & simulation", id: "Komputasi & simulasi", ja: "計算・シミュレーション" },
    text: { en: "Workstations for CFD, kinetics, process and dynamic plant simulation, plus the FTMD HPC cluster.", id: "Workstation untuk CFD, kinetika, simulasi proses dan dinamika pembangkit, ditambah klaster HPC FTMD.", ja: "CFD、反応速度、プロセス・プラント動特性解析用ワークステーションとFTMD HPC。" },
    items: ["Workstations: Intel Core i9-13900F / Core Ultra 9 / i7-14700K, 64 GB RAM", "CFD (RANS, LES), CPFD, detailed NH₃/H₂ kinetics", "ASPEN Plus, HYSYS (steady state & dynamics)", "Dymola, AVEVA Process & Dynamic Simulation, Thermoflow, MATLAB"] }
];

ETC.gallery = [
  ["assets/img/team-2026.jpg", "Lab photoshoot 2026"],
  ["assets/img/gallery/lab-2026-fun.jpg", "Lab photoshoot 2026"],
  ["assets/img/gallery/lab-2026.jpg", "Lab photoshoot 2026"],
  ["assets/img/gallery/lab-2025.jpg", "Lab photoshoot 2025"],
  ["assets/img/gallery/lab-2025-fun.jpg", "Lab photoshoot 2025"],
  ["assets/img/gallery/lab-2024.jpg", "Lab photoshoot 2024"],
  ["assets/img/gallery/lab-2023.jpg", "Lab photoshoot 2023"],
  ["assets/img/gallery/lab-2023-fun.jpg", "Lab photoshoot 2023"]
];
