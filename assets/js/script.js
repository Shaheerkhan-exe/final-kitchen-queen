
(function () {
  "use strict";

  /* ---------------- 1. DATA ---------------- */
  const IMG = "images/";

  const DISHES = [
    /* --- DEALS --- */
    { id: "d1", name: "Friday Family Deal", cat: "deals", price: 1450, was: 1899, serves: 4, img: "Chicken Biryani.webp", tag: "DEAL", hot: true, desc: "Chicken Biryani (2 servings) + Salad + Raita + 1.5L Cold Drink." },
    { id: "d2", name: "Ghar Ka Khana Box", cat: "deals", price: 999, was: 1290, serves: 3, img: "Daal Chawal.jpg", tag: "DEAL", hot: true, desc: "Any daal + any salan + white rice + 4 roti — a full desi dastarkhwan." },

    /* --- DAAL & SABZI --- */
    { id: "d3", name: "Yellow Daal with 1 Shami", cat: "daal", price: 320, was: 380, serves: 1, img: "Yellow daal.png", tag: "BESTSELLER", hot: true, desc: "Ghee-tarka moong daal served with one hand-pressed beef shami kabab." },
    { id: "d4", name: "Lauki Ki Sabzi", cat: "daal", price: 260, serves: 2, img: "Lauki-Sabzi.jpg", tag: "", desc: "Bottle gourd slow-cooked in tomato, garlic and desi masala — light and homely." },
    { id: "d5", name: "Mong Masoor Ki Daal", cat: "daal", price: 280, serves: 2, img: "Moong masoor daal.png", tag: "", desc: "Moong and masoor cooked together, finished with a sizzling zeera tarka." },
    { id: "d6", name: "Daal Palak", cat: "daal", price: 300, serves: 2, img: "Daal-Palak.jpg", tag: "", desc: "Lentils folded through fresh spinach with garlic and green chilli." },
    { id: "d7", name: "Kali Daal", cat: "daal", price: 340, was: 400, serves: 2, img: "kali daal.jpg", tag: "", desc: "Daal maash simmered overnight on low flame with butter and cream." },
    { id: "d8", name: "Bhindi Sabzi", cat: "daal", price: 320, serves: 2, img: "bhindi sabzi.webp", tag: "", desc: "Crisp okra bhujia with onion, tomato and hand-crushed spice — never slimy." },

    /* --- CHICKEN --- */
    { id: "d9", name: "Chicken Karahi", cat: "chicken", price: 850, was: 999, serves: 3, img: "karahi.jpg", tag: "CHEF SPECIAL", hot: true, desc: "Wok-tossed chicken in tomato, ginger and green chilli, finished with coriander." },
    { id: "d10", name: "Chicken Chana Daal", cat: "chicken", price: 620, serves: 3, img: "Chicken chana.avif", tag: "", desc: "Chicken slow-cooked with chana daal until the gravy turns thick and glossy." },
    { id: "d11", name: "Chicken Aalo Salan", cat: "chicken", price: 560, serves: 3, img: "chicken-aloo-salan-.jpg", tag: "", desc: "Everyday Karachi favourite — chicken and potato in a light red salan." },

    /* --- BEEF & MUTTON --- */
    { id: "d12", name: "Beef Bhuna Ghosht", cat: "beef", price: 780, was: 899, serves: 3, img: "bhuna gohst.jpg", tag: "BESTSELLER", hot: true, desc: "Beef bhunoed for an hour until the masala clings to every piece. No gravy, all flavour." },
    { id: "d13", name: "Galawati Boti", cat: "beef", price: 720, was: 850, serves: 2, img: "boti.jpg", tag: "NEW", hot: true, desc: "Melt-in-mouth marinated boti, seared hot and served with onion and lemon." },
    { id: "d14", name: "Arvi Ghosht", cat: "beef", price: 690, serves: 3, img: "Arvi.webp", tag: "", desc: "Tender mutton and arvi in a rich brown gravy — a Sunday classic." },
    { id: "d15", name: "Aalu Ghosht", cat: "beef", price: 650, serves: 3, img: "Aloo gohst.avif", tag: "", desc: "Mutton and potato simmered together in traditional desi masala." },
    { id: "d16", name: "Qeema Aalu", cat: "beef", price: 540, serves: 2, img: "aloo-keema.jpg", tag: "", desc: "Minced beef bhuna with soft potato cubes, whole spice and green chilli." },

    /* --- HALEEM --- */
    { id: "d17", name: "Beef Haleem", cat: "haleem", price: 400, was: 460, serves: 2, img: "beef haleem.jpg", tag: "BESTSELLER", hot: true, desc: "Seven-hour stone-ground wheat and lentils with shredded beef and crisp onion." },
    { id: "d18", name: "Chicken Haleem", cat: "haleem", price: 420, serves: 2, img: "chicken haleem.jpg", tag: "", hot: true, desc: "Lighter haleem with shredded chicken, ginger julienne and lemon on the side." },

    /* --- RICE --- */
    { id: "d19", name: "White Rice", cat: "rice", price: 180, serves: 2, img: "white rice.avif", tag: "", desc: "Steamed long-grain basmati, separated grain by grain." },
    { id: "d20", name: "Daal Chawal", cat: "rice", price: 320, was: 380, serves: 2, img: "Daal Chawal.jpg", tag: "BESTSELLER", hot: true, desc: "The ultimate comfort plate — tarka daal poured over hot white rice." },
    { id: "d21", name: "Chicken Biryani", cat: "rice", price: 450, was: 520, serves: 2, img: "Chicken Biryani.webp", tag: "", hot: true, desc: "Basmati layered with masala chicken, kewra, aloo and fried onion." },

    /* --- SIDES & RAITA --- */
    { id: "d22", name: "Egg Kharaiza (Khagina)", cat: "sides", price: 280, serves: 2, img: "khagina.jpg", tag: "NEW", desc: "Desi scrambled eggs with tomato, onion and green chilli — breakfast any time." },
    { id: "d23", name: "Shami Kabab (6 pcs)", cat: "sides", price: 300, serves: 3, img: "shami.jpg", tag: "", desc: "Melt-in-mouth beef and chana daal patties, pan-seared in ghee." },
    { id: "d24", name: "Dahi Phulki with Tarka", cat: "sides", price: 260, serves: 2, img: "dahi phulki.jpg", tag: "", desc: "Soft phulki in whisked yoghurt with a red chilli and curry-leaf tarka." },
    { id: "d25", name: "Sweet Dahi Phulki", cat: "sides", price: 260, serves: 2, img: "Sweet phulki.jpg", tag: "", desc: "Sweetened yoghurt, soft phulki and mint — cooling and mildly sweet." },
    { id: "d26", name: "Baingan Ka Raita", cat: "sides", price: 180, serves: 2, img: "baingan raita.jpg", tag: "", desc: "Roasted aubergine whisked into yoghurt with zeera and black salt." },
    { id: "d27", name: "Tandoori Naan (4 pcs)", cat: "sides", price: 120, serves: 2, img: "naan.jpg", tag: "", desc: "Fresh from the clay oven, brushed with butter." },

    /* --- BEVERAGES --- */
    { id: "d28", name: "Cold Drinks", cat: "drinks", price: 90, serves: 1, img: "pepsi.jpg", tag: "", desc: "500ml chilled bottle — your choice of flavour." },
    { id: "d29", name: "Lassi", cat: "drinks", price: 150, serves: 1, img: "lassi.jpg", tag: "", desc: "Hand-churned yoghurt lassi — sweet or namkeen, served ice cold." },
    { id: "d30", name: "Mango Milk Shake", cat: "drinks", price: 220, was: 260, serves: 1, img: "mango.jpg", tag: "NEW", hot: true, desc: "Thick shake blended with fresh Sindhri mango pulp and chilled milk." },

    /* --- DESSERT --- */
    { id: "d31", name: "Desi Kheer", cat: "dessert", price: 220, serves: 2, img: "kheer.webp", tag: "", desc: "Slow-reduced rice pudding with cardamom, pistachio and almond flakes." }
  ];

  const CATEGORIES = [
    { id: "hot", label: "Trending!", icon: "fa-fire" },
    { id: "deals", label: "Deals", icon: "fa-tags" },
    { id: "daal", label: "Daal & Sabzi", icon: "fa-bowl-food" },
    { id: "chicken", label: "Chicken", icon: "fa-drumstick-bite" },
    { id: "beef", label: "Beef & Mutton", icon: "fa-fire-burner" },
    { id: "haleem", label: "Haleem", icon: "fa-mortar-pestle" },
    { id: "rice", label: "Rice", icon: "fa-bowl-rice" },
    { id: "sides", label: "Sides & Raita", icon: "fa-plate-wheat" },
    { id: "drinks", label: "Beverages", icon: "fa-bottle-water" },
    { id: "dessert", label: "Dessert", icon: "fa-ice-cream" }
  ];

  const BANNERS = [
    { img: "banner-thali.jpg", kicker: "GHAR KA KHANA", title: "Full Desi Box", price: "Rs 999", cat: "deals" },
    { img: "banner-karahi.jpg", kicker: "CHEF SPECIAL", title: "Chicken Karahi", price: "Rs 850", cat: "chicken" }
  ];


  const WEEK = [
    { day: "Monday", meals: [["Chicken Biryani", 450], ["Daal Chawal", 280], ["Bhindi Gosht", 640]] },
    { day: "Tuesday", meals: [["Mutton Pulao", 780], ["Chicken Handi", 720], ["Mix Sabzi", 300]] },
    { day: "Wednesday", meals: [["Chicken Karahi", 850], ["Chana Daal Gosht", 660], ["Vegetable Rice", 290]] },
    { day: "Thursday", meals: [["Beef Nihari", 700], ["Aloo Tahari", 300], ["Chicken Aloo Salan", 560]] },
    { day: "Friday", meals: [["Special Deal: Chicken Biryani + Salad + Raita + Cold Drink", 1450], ["Chicken Macaroni", 350], ["Channay Ka Salan", 280]] },
    { day: "Saturday", meals: [["Chicken Karahi", 850], ["Lauki Ki Bhujiya", 260], ["Arvi Gosht", 640]] },
    { day: "Sunday", meals: [["Aloo Ka Paratha", 200], ["Piyaz Karela", 280], ["Chicken Qourma", 690]] }
  ];

  const BLOG = [
    { img: "haleem.jpg", cat: "TRADITION", title: "Why Slow-Cooked Haleem Tastes Better", text: "Seven hours on a low flame breaks down wheat and meat into one silky texture — a shortcut simply cannot replicate it. Our chefs stir by hand every twenty minutes, which is why the grain never sticks and the flavour reaches the very centre of every spoon." },
    { img: "karahi.jpg", cat: "TECHNIQUE", title: "The Secret to a Restaurant-Style Karahi", text: "High heat, a heavy wok and tomatoes added in two stages. The first batch melts into the base, the second stays chunky for freshness. We finish with hand-crushed black pepper and julienne ginger off the flame." },
    { img: "biryani.jpg", cat: "HERITAGE", title: "Karachi Biryani vs. The Rest of Pakistan", text: "Karachi biryani is bolder — potatoes, more chilli, and a distinct sourness from dried plum. This is the recipe our founder inherited from her grandmother in Nazimabad, unchanged for three generations." },
    { img: "kheer.jpg", cat: "DESSERT", title: "Kheer: Patience Is the Only Ingredient", text: "Full-fat milk reduced to a third of its volume, stirred constantly so the bottom never catches. Rice goes in only once the milk turns ivory, and cardamom right at the end to keep the aroma alive." },
    { img: "shami.jpg", cat: "KITCHEN NOTES", title: "How We Keep Our Shami Kababs Soft", text: "Beef and chana daal must be cooked until every drop of water evaporates. Grinding warm — never hot, never cold — is what gives that melting bite people remember." },
    { img: "naan.jpg", cat: "BREADS", title: "Clay Oven Naan at Home Temperatures", text: "A screaming-hot cast iron pan and a lightly wet dough surface mimic a tandoor closely enough. The key is not to roll it thin — naan should puff, not crisp." }
  ];

  const UPSELL = ["d27", "d26", "d28", "d31"];

  const ADDONS = {
    portion: [
      { label: "Half (1–2 people)", price: 0 },
      { label: "Full (3–4 people)", price: 350 },
      { label: "Family (6–8 people)", price: 850 }
    ],
    spice: [
      { label: "Mild", price: 0 },
      { label: "Medium (Desi)", price: 0 },
      { label: "Extra Hot", price: 0 }
    ],
    extras: [
      { label: "Extra Raita", price: 90 },
      { label: "Extra Naan (2 pcs)", price: 60 },
      { label: "Green Salad", price: 70 },
      { label: "Disposable Cutlery", price: 30 }
    ]
  };

  const PROMOS = { KQ10: 0.1, DESI15: 0.15, QUEEN20: 0.2 };
  const DELIVERY_FEE = 99;
  const FREE_DELIVERY_OVER = 1500;

  const AREAS = [
    "Agha Khan University Hospital",
    "Al Hamra Society",
    "Amynabad Colony",
    "Army Officers Housing Society",
    "Azizabad",
    "Azizabad Block 8",
    "B 1 Area",
    "B AREA",
    "Bahadurabad",
    "Bakhar Goth",
    "Banglor Town-Shahrah-e-Faisal",
    "BMCHS",
    "Buffer Zone",
    "Buffer Zone 14/A",
    "Buffer Zone 15-A/1",
    "Buffer Zone 15-A/2",
    "Buffer Zone 15-A/3",
    "Buffer Zone 15-A/4",
    "Buffer zone sector 15A",
    "Bufferzone - Sector 15-A/1",
    "Bufferzone - Sector 15-A/2",
    "Bufferzone - Sector 15-A/3",
    "Bufferzone - Sector 15-A/4",
    "Bufferzone - Sector 15-A/5",
    "Bufferzone - Sector 15-B",
    "Bufferzone - Sector 16-A",
    "Bufferzone - Sector 16-A/4",
    "Bundhani Colony",
    "CP & Berar Society",
    "Dastageer Block 9",
    "Dawood Society",
    "Dhoraji Society",
    "Dolmen Mall Tariq Road",
    "Essa Nagri",
    "Federal B Area Block 1",
    "Federal B Area Block 2",
    "Federal B Area Block 3",
    "Federal B Area Block 4",
    "Federal B Area Block 5",
    "Federal B Area Block 6",
    "Federal B Area Block 7",
    "Federal B Area Block 8",
    "Federal B Area Block 9",
    "Federal B Area Block 10",
    "Federal B Area Block 11",
    "Federal B Area Block 12",
    "Federal B Area Block 13",
    "Federal B Area Block 14",
    "Federal B Area Block 15",
    "Federal B Area Block 16",
    "Federal B Area Block 17",
    "Federal B Area Block 18",
    "Federal B Area Block 19",
    "Federal B Area Block 22",
    "Firdous Colony",
    "Garden East",
    "Gulistan-e-Jauhar - Block 1",
    "Gulistan-e-Jauhar - Block 2",
    "Gulistan-e-Jauhar - Block 3",
    "Gulistan-e-Jauhar - Block 4",
    "Gulistan-e-Jauhar - Block 5",
    "Gulistan-e-Jauhar - Block 6",
    "Gulistan-e-Jauhar - Block 7",
    "Gulistan-e-Jauhar - Block 8",
    "Gulistan-e-Jauhar - Block 9",
    "Gulistan-e-Jauhar - Block 10",
    "Gulistan-e-Jauhar - Block 11",
    "Gulistan-e-Jauhar - Block 12",
    "Gulistan-e-Jauhar - Block 13-B",
    "Gulistan-e-Jauhar - Block 16-A",
    "Gulistan-e-Jauhar - Block 20",
    "Gulshan e Iqbal Block 2",
    "Gulshan e Iqbal Block 3",
    "Gulshan e Iqbal Block 4",
    "Gulshan e Iqbal Block 6",
    "Gulshan e Iqbal Block 7",
    "Gulshan e Iqbal Block 9",
    "Gulshan e Iqbal Block 10-A",
    "Gulshan e Iqbal Block 11",
    "Gulshan e Iqbal Block 13",
    "Gulshan e Iqbal Block 13 C",
    "Gulshan e Iqbal Block 13 E",
    "Gulshan e Iqbal Block 13/G",
    "Gulshan e Iqbal Block 13/B",
    "Gulshan e Iqbal Block 14",
    "Gulshan e Iqbal Block 15",
    "Gulshan e Iqbal Block 16",
    "Gulshan e Iqbal Block 17",
    "Gulshan e Iqbal Block 18",
    "Gulshan e Iqbal Block 19",
    "Gulshan e Iqbal Block 20",
    "Gulshan e Shameem",
    "Hussain Hazara goth",
    "Hussainabad",
    "Karachi Golf Club",
    "KDA Officers Society",
    "KDA Scheme 1",
    "Liaquatabad Block 1",
    "Liaquatabad Block 2",
    "Liaquatabad No 5",
    "Liaquatabad No 10",
    "Martin Quarters East",
    "Martin Quarters West",
    "Mashriq Society",
    "Memon Nagar",
    "Metroville",
    "Metroville 1",
    "Metroville 2",
    "Moosa Colony",
    "Mujahidabad",
    "Mustafa Colony",
    "National Stadium",
    "National Stadium Road",
    "Navy Colony Karsaz",
    "Nazimabad Block 1",
    "Nazimabad Block 2",
    "Nazimabad Block 3",
    "Nazimabad Block 4",
    "Nazimabad Block 5",
    "Nazimabad Number 7",
    "Ned University",
    "New Naval Colony",
    "NHS Phase 1",
    "NHS Phase 2",
    "NHS Phase 3",
    "North Karachi",
    "North Karachi - Sector 5-C",
    "North Karachi - Sector 8",
    "North Karachi - Sector 11A",
    "North Karachi - Sector 15-A/1",
    "North Karachi Industrial Area",
    "North Nazimabad - Block A",
    "North Nazimabad - Block B",
    "North Nazimabad - Block C",
    "North Nazimabad - Block D",
    "North Nazimabad - Block E",
    "North Nazimabad - Block F",
    "North Nazimabad - Block G",
    "North Nazimabad - Block H",
    "North Nazimabad - Block I",
    "North Nazimabad - Block J",
    "North Nazimabad - Block K",
    "North Nazimabad - Block L",
    "North Nazimabad - Block M",
    "North Nazimabad - Block N",
    "North Nazimabad - Block R",
    "North Nazimabad - Block S",
    "Paposh Nagar",
    "Pib Colony",
    "PNS Bahadur",
    "Qasba Colony",
    "Quaid e Azam Colony",
    "Rizvia Society",
    "Sakhi Hasan Chowrangi",
    "Sharifabad",
    "Sir Syed University of Engineering and Technology",
    "UBL Sports Complex",
    "University Of Karachi",
    "Valika",
    "Yaseenabad",
    "Ziauddin Hospital Nazimabad"
  ];

  const PAGES = [
    { file: "index.html", label: "Home", icon: "fa-house" },
    { file: "menu.html", label: "Weekly Menu", icon: "fa-book-open" },
    { file: "meal-builder.html", label: "Meal Builder", icon: "fa-wand-magic-sparkles" },
    { file: "live-counter.html", label: "Live Counter", icon: "fa-tower-broadcast" },
    { file: "catering.html", label: "Catering", icon: "fa-champagne-glasses" },
    { file: "location.html", label: "Location", icon: "fa-location-dot" },
    { file: "blog.html", label: "Kitchen Journal", icon: "fa-newspaper" },
    { file: "contact.html", label: "Contact", icon: "fa-headset" }
  ];

  // Icons kept on the always-visible side rail
  const RAIL_FILES = ["index.html", "menu.html", "location.html", "meal-builder.html"];
  const RAIL_PAGES = RAIL_FILES.map((f) => PAGES.find((p) => p.file === f)).filter(Boolean);
  // Everything else lives inside the burger drawer
  const DRAWER_PAGES = PAGES.filter((p) => !RAIL_FILES.includes(p.file));

  const CITIES = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];


  /* ---------------- 2. STATE ---------------- */
  const LS = {
    get(k, f) { try { return JSON.parse(localStorage.getItem("kq_" + k)) ?? f; } catch (e) { return f; } },
    set(k, v) { try { localStorage.setItem("kq_" + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  const state = {
    cart: LS.get("cart", []),
    address: LS.get("address", null),
    promo: LS.get("promo", null),
    theme: LS.get("theme", "light"),
    user: LS.get("user", null)
  };

  const money = (n) => "Rs " + Number(n).toLocaleString("en-PK");
  const dish = (id) => DISHES.find((d) => d.id === id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- 3. SHELL ---------------- */
  function currentPage() {
    const p = location.pathname.split("/").pop();
    return p && p.length ? p : "index.html";
  }

  function renderShell() {
    const active = currentPage();
    const rail = document.getElementById("kqRail");
    const header = document.getElementById("kqHeader");
    if (rail) {
      rail.className = "kq-rail";
      rail.innerHTML = `
        <button class="kq-rail-btn" id="kqMenuBtn" aria-label="Open navigation"><i class="fa-solid fa-bars"></i></button>
        <div class="kq-rail-mid">
          ${RAIL_PAGES.map((p) => `<a class="kq-rail-btn${p.file === active ? " active" : ""}" href="${p.file}" title="${p.label}" aria-label="${p.label}"><i class="fa-solid ${p.icon}"></i></a>`).join("")}
          <button class="kq-rail-btn" id="kqUserBtn" title="Sign In" aria-label="Sign in"><i class="fa-solid fa-user"></i></button>
          <button class="kq-rail-btn" id="kqCartBtn" title="Basket" aria-label="Open cart">
            <i class="fa-solid fa-basket-shopping"></i>
            <span class="kq-cart-badge" id="kqCartBadge">0</span>
          </button>
        </div>
        <button class="kq-rail-btn kq-theme-toggle" id="kqThemeBtn" title="Dark Mode" aria-label="Toggle dark mode"><i class="fa-solid fa-moon"></i></button>`;
    }

    let dock = document.getElementById("kqDock");
    if (!dock) {
      dock = document.createElement("nav");
      dock.id = "kqDock";
      document.body.appendChild(dock);
    }
    dock.className = "kq-dock";
    dock.setAttribute("aria-label", "Mobile navigation");
    dock.innerHTML = `
      <a class="kq-dock-btn${active === "index.html" ? " active" : ""}" href="index.html" aria-label="Home"><i class="fa-solid fa-house"></i></a>
      <a class="kq-dock-btn${active === "menu.html" ? " active" : ""}" href="menu.html" aria-label="Menu"><i class="fa-solid fa-utensils"></i></a>
      <button class="kq-dock-fab" id="kqDockCart" aria-label="Open basket">
        <i class="fa-solid fa-bag-shopping"></i>
        <span class="kq-cart-badge" id="kqDockBadge">0</span>
      </button>
      <a class="kq-dock-btn${active === "location.html" ? " active" : ""}" href="location.html" aria-label="Locations"><i class="fa-solid fa-location-dot"></i></a>
      <button class="kq-dock-btn" id="kqDockMenu" aria-label="Open navigation"><i class="fa-solid fa-bars"></i></button>`;

    let hours = document.getElementById("kqHoursBar");
    if (!hours) {
      hours = document.createElement("div");
      hours.id = "kqHoursBar";
      document.body.prepend(hours);
    }
    hours.className = "kq-hours-bar";
    hours.innerHTML = `For any queries, our working hours 12PM to 12AM call us at our no (033) 62465676 or Whatsapp us at 92-3362465676`;

    if (header) {
      header.className = "kq-header";
      header.innerHTML = `
        <a class="kq-brand" href="index.html">
          <span class="kq-brand-icon"><i class="fa-solid fa-crown"></i></span>
          Kitchen <b>Queen</b>
        </a>
        <button class="kq-location-pill" id="kqLocBtn">
          <i class="fa-solid fa-location-dot"></i>
          <span class="pill-text">
            <small>Deliver to</small>
            <span id="kqLocLabel">Select your area</span>
          </span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>`;
    }

    const extras = document.getElementById("kqShellExtras");
    if (extras) extras.innerHTML = shellExtrasHTML();

    // Footer
    const foot = document.getElementById("kqFooter");
    if (foot) {
      foot.className = "kq-footer";
      foot.innerHTML = `
        <a class="kq-brand" href="index.html"><span class="kq-brand-icon"><i class="fa-solid fa-crown"></i></span>Kitchen <b>Queen</b></a>
        <p style="color:var(--muted);font-size:.82rem;margin:0">Authentic home-cooked Desi food, delivered across Karachi.</p>
        <div class="kq-footer-links">
          ${PAGES.map((p) => `<a href="${p.file}">${p.label}</a>`).join("")}
        </div>
        <p style="color:var(--muted);font-size:.72rem;margin:0">&copy; ${new Date().getFullYear()} Kitchen Queen, Karachi. All rights reserved.</p>`;
    }

    bindShell(active);
    applyTheme();
    renderUserUI();
    renderCart();
    renderLocLabel();
  }

  function shellExtrasHTML() {
    const active = currentPage();
    return `
      <div class="kq-overlay" id="kqOverlay"></div>

      <aside class="kq-nav-drawer" id="kqNavDrawer" aria-label="Main navigation">
        <div class="kq-drawer-top">
          <button class="kq-drawer-user" id="kqDrawerUser">
            <span class="kq-avatar"><i class="fa-solid fa-user"></i></span>
            <span class="kq-drawer-user-txt">
              <b id="kqDrawerUserName">Sign In</b>
              <small id="kqDrawerUserSub">TAP TO LOGIN</small>
            </span>
          </button>
          <button class="kq-x-btn" id="kqNavClose" aria-label="Close navigation"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="kq-drawer-scroll">
          <div class="kq-nav-group">
            ${DRAWER_PAGES.map((p) => `<a class="kq-nav-link${p.file === active ? " active" : ""}" href="${p.file}"><i class="fa-solid ${p.icon}"></i><span>${p.label}</span><i class="fa-solid fa-chevron-right chev"></i></a>`).join("")}
          </div>
          <div class="kq-nav-group">
            <a class="kq-nav-link" href="checkout.html"><i class="fa-solid fa-receipt"></i><span>Checkout</span><i class="fa-solid fa-chevron-right chev"></i></a>
            <a class="kq-nav-link" href="signin.html"><i class="fa-solid fa-right-to-bracket"></i><span>Sign In / Register</span><i class="fa-solid fa-chevron-right chev"></i></a>
          </div>

          <button class="kq-mode-card" id="kqDrawerTheme">
            <span class="kq-mode-ico"><i class="fa-solid fa-sun"></i></span>
            <span class="kq-mode-txt"><b>Dark Mode</b><small id="kqModeState">DISABLED</small></span>
            <span class="kq-switch"><span class="knob"></span></span>
          </button>

          <p class="kq-nav-heading">SOCIAL NETWORK</p>
          <div class="kq-social-row">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>

        <div class="kq-drawer-foot">
          <button class="kq-btn kq-btn-soft" id="kqDrawerSignIn"><i class="fa-solid fa-user"></i> <span id="kqDrawerSignInTxt">Sign In</span></button>
          <p class="kq-app-ver">KITCHEN QUEEN APP V2.4.0</p>
        </div>
      </aside>

      <aside class="kq-cart-drawer" id="kqCartDrawer" aria-label="Your basket">
        <div class="kq-drawer-head">
          <h3>YOUR BASKET</h3>
          <button class="kq-x-btn" id="kqCartClose" aria-label="Close basket"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="kq-cart-body" id="kqCartBody"></div>
        <div class="kq-cart-foot">
          <button class="kq-btn" id="kqCheckoutBtn"><i class="fa-solid fa-arrow-right"></i> Proceed to Checkout</button>
        </div>
      </aside>

      <div class="kq-modal" id="kqCustModal" role="dialog" aria-modal="true">
        <div class="kq-modal-box" id="kqCustBox"></div>
      </div>

      <div class="kq-modal kq-loc-modal" id="kqLocModal" role="dialog" aria-modal="true">
        <div class="kq-modal-box kq-loc-box kq-loc-gate">
          <button class="kq-x-btn kq-loc-close" id="kqLocClose" aria-label="Close" hidden><i class="fa-solid fa-xmark"></i></button>
          <div class="kq-loc-logo"><span class="kq-brand-icon"><i class="fa-solid fa-crown"></i></span></div>
          <h3 class="kq-loc-gate-title">Select your order type</h3>
          <div class="kq-loc-type">
            <button type="button" class="on" id="kqDeliveryOnly">Delivery</button>
          </div>
          <p class="kq-loc-gate-sub">Please select your location</p>
          <button class="kq-use-loc" id="kqUseLoc" type="button"><i class="fa-solid fa-location-crosshairs"></i> Use Current Location</button>
          <div class="kq-loc-alert" id="kqLocAlert" hidden></div>
          <label class="kq-loc-label">Select City / Region</label>
          <div class="kq-loc-field" id="kqCityBtn"><b id="kqCityVal">Karachi</b></div>
          <label class="kq-loc-label">Select Area / Sub Region</label>
          <button class="kq-loc-field kq-loc-area-btn" id="kqAreaBtn" type="button">
            <span id="kqAreaVal">Select Area / Sub Region</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <input type="hidden" id="kqLocPhone">
          <input type="hidden" id="kqAddrDetail">
          <button class="kq-loc-select-btn" id="kqSaveAddr" type="button" disabled>Select</button>
          <div class="kq-loc-sheet" id="kqLocSheet" hidden>
            <div class="kq-loc-sheet-head">
              <input type="search" id="kqAreaSearch" placeholder="Search area">
              <button class="kq-x-btn" id="kqLocSheetClose" type="button" aria-label="Close list"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div class="kq-loc-sheet-list" id="kqLocSheetList"></div>
          </div>
        </div>
      </div>


      <div class="kq-modal" id="kqAuthModal" role="dialog" aria-modal="true">
        <div class="kq-modal-box kq-auth-box" id="kqAuthBox"></div>
      </div>

      <div class="kq-toast-wrap" id="kqToasts"></div>`;
  }

  function bindShell(active) {
    const $ = (id) => document.getElementById(id);
    const overlay = $("kqOverlay");
    const nav = $("kqNavDrawer");
    const cart = $("kqCartDrawer");

    const closeAll = (force) => {
      const locOpen = document.getElementById("kqLocModal")?.classList.contains("show");
      if (locOpen && !state.address && !force) return;
      [nav, cart].forEach((el) => el && el.classList.remove("show"));
      document.querySelectorAll(".kq-modal").forEach((m) => {
        if (m.id === "kqLocModal" && !state.address && !force) return;
        m.classList.remove("show");
      });
      const stillLoc = document.getElementById("kqLocModal")?.classList.contains("show");
      if (!stillLoc) {
        overlay && overlay.classList.remove("show");
        document.body.style.overflow = "";
      }
    };
    KQ.closeAll = closeAll;

    const open = (el) => {
      closeAll();
      el.classList.add("show");
      overlay.classList.add("show");
      document.body.style.overflow = "hidden";
    };
    KQ.open = open;

    $("kqMenuBtn") && $("kqMenuBtn").addEventListener("click", () => open(nav));
    $("kqUserBtn") && $("kqUserBtn").addEventListener("click", () => openAuth());
    $("kqDockMenu") && $("kqDockMenu").addEventListener("click", () => open(nav));
    $("kqNavClose") && $("kqNavClose").addEventListener("click", closeAll);
    $("kqDockCart") && $("kqDockCart").addEventListener("click", () => { renderCart(); open(cart); });
    $("kqDrawerUser") && $("kqDrawerUser").addEventListener("click", () => openAuth());
    $("kqDrawerSignIn") && $("kqDrawerSignIn").addEventListener("click", () => {
      if (state.user) { signOut(); return; }
      openAuth();
    });
    $("kqDrawerTheme") && $("kqDrawerTheme").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      LS.set("theme", state.theme);
      applyTheme();
    });
    $("kqCartBtn") && $("kqCartBtn").addEventListener("click", () => { renderCart(); open(cart); });
    $("kqCartClose") && $("kqCartClose").addEventListener("click", closeAll);
    overlay && overlay.addEventListener("click", closeAll);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
    document.addEventListener("click", (e) => { if (e.target.closest("[data-auth-close]")) closeAll(); });

    $("kqThemeBtn") && $("kqThemeBtn").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      LS.set("theme", state.theme);
      applyTheme();
      toast(state.theme === "dark" ? "Dark mode on" : "Light mode on", "fa-circle-half-stroke");
    });

    $("kqLocBtn") && $("kqLocBtn").addEventListener("click", openLocation);
    $("kqCheckoutBtn") && $("kqCheckoutBtn").addEventListener("click", () => {
      if (!state.cart.length) return toast("Your basket is empty", "fa-basket-shopping");
      location.href = "checkout.html";
    });

    // delegated add-to-cart / customize
    document.addEventListener("click", (e) => {
      const addBtn = e.target.closest("[data-add]");
      if (addBtn) { openCustomizer(addBtn.getAttribute("data-add")); return; }
      const quick = e.target.closest("[data-quickadd]");
      if (quick) { addToCart(quick.getAttribute("data-quickadd"), {}, 1); }
    });

    void active;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = document.querySelector("#kqThemeBtn i");
    if (btn) btn.className = state.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    const card = document.getElementById("kqDrawerTheme");
    if (card) {
      card.classList.toggle("on", state.theme === "dark");
      const lbl = document.getElementById("kqModeState");
      if (lbl) lbl.textContent = state.theme === "dark" ? "ENABLED" : "DISABLED";
      const ico = card.querySelector(".kq-mode-ico i");
      if (ico) ico.className = state.theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    }
  }

  /* ---------------- 3b. AUTH (sign in + OTP) ---------------- */
  function renderUserUI() {
    const name = document.getElementById("kqDrawerUserName");
    const sub = document.getElementById("kqDrawerUserSub");
    const btn = document.getElementById("kqDrawerSignInTxt");
    if (name) name.textContent = state.user ? state.user.name : "Sign In";
    if (sub) sub.textContent = state.user ? state.user.phone : "TAP TO LOGIN";
    if (btn) btn.textContent = state.user ? "Sign Out" : "Sign In";
  }

  function signOut() {
    state.user = null;
    LS.set("user", null);
    renderUserUI();
    toast("Signed out", "fa-right-from-bracket");
  }

  let otpTimer = null;

  function authStepOne(mount, prefill) {
    const p = prefill || {};
    mount.innerHTML = `
      <button class="kq-auth-x" data-auth-close aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <div class="kq-auth-brand"><span class="kq-brand-icon"><i class="fa-solid fa-crown"></i></span></div>
      <h3 class="kq-auth-title">SIGN IN TO CONTINUE</h3>
      <p class="kq-auth-sub">Returning users can continue with phone only.<br>New users should add name and email.</p>
      <div class="kq-auth-field">
        <label>FULL NAME</label>
        <div class="kq-auth-input"><i class="fa-solid fa-user"></i><input type="text" id="kqAuthName" placeholder="e.g. Muhammad Sami Khan" value="${esc(p.name || "")}"></div>
      </div>
      <div class="kq-auth-field">
        <label>EMAIL</label>
        <div class="kq-auth-input"><i class="fa-solid fa-at"></i><input type="email" id="kqAuthEmail" placeholder="e.g. you@gmail.com" value="${esc(p.email || "")}"></div>
      </div>
      <div class="kq-auth-field">
        <label>MOBILE NUMBER</label>
        <div class="kq-auth-input"><input type="tel" id="kqAuthPhone" placeholder="e.g. 03001234567" value="${esc(p.phone || "")}"><i class="fa-solid fa-mobile-screen"></i></div>
      </div>
      <div class="kq-auth-error" id="kqAuthErr"><i class="fa-solid fa-circle-exclamation"></i><span></span></div>
      <button class="kq-auth-btn" id="kqAuthNext" disabled>GET VERIFICATION CODE <i class="fa-solid fa-arrow-right"></i></button>
      <p class="kq-auth-note"><i class="fa-solid fa-shield-halved"></i> 100% SECURE LOGIN &middot; NO SPAM</p>`;

    const name = mount.querySelector("#kqAuthName");
    const email = mount.querySelector("#kqAuthEmail");
    const phone = mount.querySelector("#kqAuthPhone");
    const next = mount.querySelector("#kqAuthNext");
    const err = mount.querySelector("#kqAuthErr");

    const phoneOk = (v) => /^0\d{10}$/.test(v.replace(/[\s-]/g, ""));
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    const sync = () => { next.disabled = !(phoneOk(phone.value) && name.value.trim().length > 2 && emailOk(email.value)); };
    [name, email, phone].forEach((i) => i.addEventListener("input", () => { err.classList.remove("show"); sync(); }));
    sync();

    next.addEventListener("click", () => {
      if (!phoneOk(phone.value)) {
        err.querySelector("span").textContent = "Enter a valid 11-digit mobile number";
        err.classList.add("show");
        return;
      }
      authStepTwo(mount, { name: name.value.trim(), email: email.value.trim(), phone: phone.value.trim() });
    });
  }

  function authStepTwo(mount, data) {
    mount.innerHTML = `
      <button class="kq-auth-back" id="kqAuthBack"><i class="fa-solid fa-chevron-left"></i> BACK</button>
      <button class="kq-auth-x" data-auth-close aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <div class="kq-auth-lock"><i class="fa-solid fa-lock"></i></div>
      <h3 class="kq-auth-title">VERIFY NUMBER</h3>
      <p class="kq-auth-sub">Code sent to <b>${esc(data.phone)}</b> <button class="kq-auth-edit" id="kqAuthEdit" aria-label="Edit number"><i class="fa-solid fa-pen"></i></button></p>
      <div class="kq-otp-row">
        ${[0, 1, 2, 3, 4, 5].map(() => `<input class="kq-otp" type="tel" inputmode="numeric" maxlength="1">`).join("")}
      </div>
      <div class="kq-auth-error" id="kqOtpErr"><i class="fa-solid fa-circle-exclamation"></i><span>Invalid Verification Code</span></div>
      <p class="kq-auth-resend">Resend in <b id="kqResend">00:45</b></p>
      <button class="kq-auth-btn" id="kqOtpVerify" disabled>VERIFY &amp; LOGIN <i class="fa-solid fa-circle-check"></i></button>`;

    const boxes = Array.from(mount.querySelectorAll(".kq-otp"));
    const verify = mount.querySelector("#kqOtpVerify");
    const err = mount.querySelector("#kqOtpErr");
    const code = () => boxes.map((b) => b.value).join("");

    boxes[0].focus();
    boxes.forEach((b, i) => {
      b.addEventListener("input", () => {
        b.value = b.value.replace(/\D/g, "");
        err.classList.remove("show");
        if (b.value && boxes[i + 1]) boxes[i + 1].focus();
        verify.disabled = code().length !== 6;
      });
      b.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !b.value && boxes[i - 1]) boxes[i - 1].focus();
      });
    });

    mount.querySelector("#kqAuthBack").addEventListener("click", () => { clearInterval(otpTimer); authStepOne(mount, data); });
    mount.querySelector("#kqAuthEdit").addEventListener("click", () => { clearInterval(otpTimer); authStepOne(mount, data); });

    let left = 45;
    const label = mount.querySelector("#kqResend");
    clearInterval(otpTimer);
    otpTimer = setInterval(() => {
      left -= 1;
      if (left <= 0) {
        clearInterval(otpTimer);
        label.innerHTML = `<button class="kq-auth-resend-btn" type="button">Resend code</button>`;
        label.querySelector("button").addEventListener("click", () => authStepTwo(mount, data));
        return;
      }
      label.textContent = "00:" + String(left).padStart(2, "0");
    }, 1000);

    verify.addEventListener("click", () => {
      if (code() !== "111111") {
        err.classList.add("show");
        boxes.forEach((b) => b.classList.add("bad"));
        setTimeout(() => boxes.forEach((b) => b.classList.remove("bad")), 700);
        return;
      }
      clearInterval(otpTimer);
      state.user = { name: data.name, email: data.email, phone: data.phone };
      LS.set("user", state.user);
      renderUserUI();
      const inline = document.getElementById("kqAuthInline");
      if (inline) { renderSignedIn(inline); } else { KQ.closeAll(); }
      toast("Welcome, " + data.name.split(" ")[0] + "!", "fa-check", "success");
    });
  }

  function renderSignedIn(mount) {
    mount.innerHTML = `
      <div class="kq-auth-lock done"><i class="fa-solid fa-check"></i></div>
      <h3 class="kq-auth-title">YOU ARE SIGNED IN</h3>
      <p class="kq-auth-sub">${esc(state.user.name)}<br>${esc(state.user.phone)} &middot; ${esc(state.user.email)}</p>
      <button class="kq-auth-btn" id="kqSignOut">SIGN OUT <i class="fa-solid fa-right-from-bracket"></i></button>`;
    mount.querySelector("#kqSignOut").addEventListener("click", () => { signOut(); openAuthInline(mount); });
  }

  function openAuthInline(mount) {
    if (state.user) renderSignedIn(mount);
    else authStepOne(mount, {});
  }

  function openAuth() {
    const modal = document.getElementById("kqAuthModal");
    const box = document.getElementById("kqAuthBox");
    if (!modal || !box) { location.href = "signin.html"; return; }
    if (state.user) renderSignedIn(box);
    else authStepOne(box, {});
    box.querySelectorAll("[data-auth-close]").forEach((b) => b.addEventListener("click", () => KQ.closeAll()));
    KQ.open(modal);
  }

  /* ---------------- 4. TOASTS ---------------- */
  function toast(msg, icon, cls) {
    const wrap = document.getElementById("kqToasts");
    if (!wrap) return;
    const el = document.createElement("div");
    el.className = "kq-toast " + (cls || "");
    el.innerHTML = `<i class="fa-solid ${icon || "fa-circle-info"}"></i><span>${esc(msg)}</span>`;
    wrap.appendChild(el);
    setTimeout(() => { el.style.opacity = "0"; el.style.transform = "translateY(12px)"; }, 2200);
    setTimeout(() => el.remove(), 2700);
  }
  
  /* ---------------- 5. LOCATION ---------------- */
  const locDraft = { city: "Karachi", area: "", mode: "delivery", phone: "", detail: "" };

  function locAlert(msg) {
    const el = document.getElementById("kqLocAlert");
    if (!el) return;
    if (!msg) { el.hidden = true; el.textContent = ""; return; }
    el.hidden = false;
    el.textContent = msg;
  }

  function locSheet(title, items, onPick) {
    const sheet = document.getElementById("kqLocSheet");
    const list = document.getElementById("kqLocSheetList");
    if (!sheet || !list) return;
    const paint = (arr) => {
      list.innerHTML = arr.map((i) => `<button type="button" data-val="${esc(i)}"><span>${esc(i)}</span><small>~ eta 60 min.</small></button>`).join("");
      list.querySelectorAll("[data-val]").forEach((b) => b.addEventListener("click", () => {
        onPick(b.getAttribute("data-val"));
        sheet.hidden = true;
      }));
    };
    paint(items);
    const search = document.getElementById("kqAreaSearch");
    if (search) {
      search.value = "";
      search.oninput = () => {
        const q = search.value.trim().toLowerCase();
        paint(q ? items.filter((i) => i.toLowerCase().includes(q)) : items);
      };
    }
    sheet.hidden = false;
  }

  function syncLocUI() {
    const c = document.getElementById("kqCityVal");
    const a = document.getElementById("kqAreaVal");
    const cur = document.getElementById("kqLocCurrent");
    if (c) c.textContent = locDraft.city;
    if (a) a.textContent = locDraft.area || "Select Area / Sub Region";
    if (cur) cur.textContent = locDraft.area ? locDraft.area + ", " + locDraft.city : locDraft.city;
    const save = document.getElementById("kqSaveAddr");
    if (save) {
      save.disabled = !locDraft.area;
      save.classList.toggle("ready", !!locDraft.area);
    }
  }

  function openLocation() {
    if (state.address) {
      locDraft.city = state.address.city || "Karachi";
      locDraft.area = state.address.area || "";
      locDraft.detail = state.address.detail || "";
      locDraft.phone = state.address.phone || "";
      locDraft.mode = state.address.mode || "delivery";
    }
    locAlert("");
    const det = document.getElementById("kqAddrDetail");
    const ph = document.getElementById("kqLocPhone");
    if (det) det.value = locDraft.detail;
    if (ph) ph.value = locDraft.phone;
    const sheet = document.getElementById("kqLocSheet");
    if (sheet) sheet.hidden = true;
    syncLocUI();

    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    const closeBtn = document.getElementById("kqLocClose");
    if (closeBtn) closeBtn.hidden = !state.address;
    on("kqCityBtn", () => {});
    on("kqAreaBtn", () => locSheet("Select area", AREAS, (v) => { locDraft.area = v; locAlert(""); syncLocUI(); }));
    on("kqLocSheetClose", () => { if (sheet) sheet.hidden = true; });
    on("kqLocClose", () => { if (state.address) KQ.closeAll(true); });
    on("kqUseLoc", () => {
      if (!navigator.geolocation) return locAlert("Location is not supported on this device. Please select manually.");
      locAlert("Detecting your location…");
      navigator.geolocation.getCurrentPosition(
        () => { locDraft.city = "Karachi"; locDraft.area = AREAS[0]; locAlert(""); syncLocUI(); toast("Location detected", "fa-location-crosshairs", "success"); },
        () => locAlert("Location permission denied. Please select manually.")
      );
    });

    locDraft.mode = "delivery";

    on("kqSaveAddr", () => {
      if (!locDraft.area) return locAlert("Please select your area to continue.");
      state.address = {
        city: locDraft.city,
        area: locDraft.area,
        detail: (det && det.value.trim()) || "",
        phone: (ph && ph.value.trim()) || "",
        mode: locDraft.mode
      };
      LS.set("address", state.address);
      renderLocLabel();
      KQ.closeAll();
      toast("Delivery location saved", "fa-check", "success");
      document.dispatchEvent(new CustomEvent("kq:address"));
    });

    KQ.open(document.getElementById("kqLocModal"));
  }


  function renderLocLabel() {
    const el = document.getElementById("kqLocLabel");
    if (!el) return;
    el.textContent = state.address ? (state.address.detail ? state.address.detail + ", " : "") + state.address.area : "Select your area";
  }

  /* ---------------- 6. CUSTOMIZER ---------------- */
  function openCustomizer(id, editIndex) {
    const d = dish(id);
    if (!d) return;
    const existing = typeof editIndex === "number" ? state.cart[editIndex] : null;
    const box = document.getElementById("kqCustBox");
    box.className = "kq-modal-box";
    box.innerHTML = `
      <div class="kq-cust-grid">
        <div class="kq-cust-left">
          <img src="${IMG + d.img}" alt="${esc(d.name)}">
          <h3>${esc(d.name)}</h3>
          <span class="base-price">${money(d.price)}</span>
          <p>${esc(d.desc)}</p>
        </div>
        <div class="kq-cust-right">
          <div class="kq-opt-group">
            <div class="kq-opt-label">CHOOSE PORTION <span class="kq-req-badge">REQUIRED</span></div>
            ${ADDONS.portion.map((o, i) => optRow("radio", "portion", o, existing ? existing.portion === o.label : i === 0)).join("")}
          </div>
          <div class="kq-opt-group">
            <div class="kq-opt-label">SPICE LEVEL <span class="kq-req-badge">REQUIRED</span></div>
            ${ADDONS.spice.map((o, i) => optRow("radio", "spice", o, existing ? existing.spice === o.label : i === 1)).join("")}
          </div>
          <div class="kq-opt-group">
            <div class="kq-opt-label">ADD EXTRAS <span class="kq-opt-badge">OPTIONAL</span></div>
            ${ADDONS.extras.map((o) => optRow("checkbox", "extra", o, existing ? existing.extras.some((e) => e.label === o.label) : false)).join("")}
          </div>
          <div class="kq-field">
            <label><i class="fa-solid fa-pen"></i> Special instructions</label>
            <textarea id="kqNote" placeholder="e.g. kam mirch, extra gravy" style="min-height:70px">${existing ? esc(existing.note || "") : ""}</textarea>
          </div>
          <div class="kq-cust-alert" id="kqCustAlert"><i class="fa-solid fa-triangle-exclamation"></i><span>Please complete the required choices.</span></div>
          <div class="kq-cust-foot">
            <div class="kq-qty">
              <button type="button" data-q="-1">&minus;</button><span id="kqCustQty">${existing ? existing.qty : 1}</span><button type="button" data-q="1">+</button>
            </div>
            <button class="kq-btn" id="kqCustAdd"><i class="fa-solid fa-basket-shopping"></i> <span id="kqCustAddTxt"></span></button>
          </div>
        </div>
      </div>`;

    let qty = existing ? existing.qty : 1;

    const calc = () => {
      let p = d.price;
      const port = box.querySelector('input[name="portion"]:checked');
      const spice = box.querySelector('input[name="spice"]:checked');
      if (port) p += Number(port.dataset.price);
      box.querySelectorAll('input[name="extra"]:checked').forEach((c) => { p += Number(c.dataset.price); });
      void spice;
      return p;
    };
    const sync = () => {
      box.querySelectorAll(".kq-choice").forEach((c) => c.classList.toggle("selected", c.querySelector("input").checked));
      box.querySelector("#kqCustQty").textContent = qty;
      box.querySelector("#kqCustAddTxt").textContent = (existing ? "Update — " : "Add — ") + money(calc() * qty);
    };

    box.querySelectorAll("input").forEach((i) => i.addEventListener("change", sync));
    box.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => {
      qty = Math.max(1, qty + Number(b.dataset.q));
      sync();
    }));
    box.querySelector("#kqCustAdd").addEventListener("click", () => {
      const port = box.querySelector('input[name="portion"]:checked');
      const spice = box.querySelector('input[name="spice"]:checked');
      if (!port || !spice) { box.querySelector("#kqCustAlert").classList.add("show"); return; }
      const extras = Array.from(box.querySelectorAll('input[name="extra"]:checked')).map((c) => ({ label: c.value, price: Number(c.dataset.price) }));
      const item = {
        id: d.id, name: d.name, img: d.img, base: d.price,
        portion: port.value, spice: spice.value, extras,
        note: box.querySelector("#kqNote").value.trim(),
        unit: calc(), qty
      };
      if (existing) { state.cart[editIndex] = item; toast("Item updated", "fa-check", "success"); }
      else { state.cart.push(item); toast(d.name + " added to basket", "fa-check", "success"); }
      persistCart();
      KQ.closeAll();
      KQ.open(document.getElementById("kqCartDrawer"));
    });

    sync();
    KQ.open(document.getElementById("kqCustModal"));
  }

  function optRow(type, name, o, checked) {
    return `<label class="kq-choice${checked ? " selected" : ""}">
      <span class="choice-left">
        <input type="${type}" name="${name}" value="${esc(o.label)}" data-price="${o.price}" ${checked ? "checked" : ""}>
        <span>${esc(o.label)}</span>
      </span>
      <span class="choice-price">${o.price ? "+" + money(o.price) : "Free"}</span>
    </label>`;
  }

  /* ---------------- 7. CART ---------------- */
  function persistCart() { LS.set("cart", state.cart); renderCart(); document.dispatchEvent(new CustomEvent("kq:cart")); }

  function addToCart(id, opts, qty) {
    const d = dish(id);
    if (!d) return;
    state.cart.push({
      id: d.id, name: d.name, img: d.img, base: d.price,
      portion: (opts && opts.portion) || ADDONS.portion[0].label,
      spice: (opts && opts.spice) || ADDONS.spice[1].label,
      extras: [], note: "", unit: d.price, qty: qty || 1
    });
    persistCart();
    toast(d.name + " added to basket", "fa-check", "success");
  }
  
  function totals() {
    const sub = state.cart.reduce((s, i) => s + i.unit * i.qty, 0);
    const discount = state.promo && PROMOS[state.promo] ? Math.round(sub * PROMOS[state.promo]) : 0;
    const delivery = sub === 0 ? 0 : (sub - discount >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE);
    return { sub, discount, delivery, total: sub - discount + delivery };
  }
  KQ_totals();
  function KQ_totals() { /* hoist helper placeholder */ }

  function renderCart() {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    ["kqCartBadge", "kqDockBadge"].forEach((id) => {
      const badge = document.getElementById(id);
      if (badge) { badge.textContent = count; badge.style.display = count ? "flex" : "none"; }
    });

    const body = document.getElementById("kqCartBody");
    if (!body) return;
    if (!state.cart.length) {
      body.innerHTML = `<div class="kq-cart-empty">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your basket is empty.<br>Add something delicious!</p>
        <a class="kq-btn kq-btn-outline" href="index.html"><i class="fa-solid fa-utensils"></i> Browse Menu</a>
      </div>`;
      return;
    }
    const t = totals();
    body.innerHTML = `
      ${state.cart.map((i, idx) => `
        <div class="kq-cart-item">
          <img src="${IMG + i.img}" alt="${esc(i.name)}">
          <div class="kq-ci-info">
            <p class="kq-ci-name">${esc(i.name)}</p>
            <p class="kq-ci-meta">${esc(i.portion)} &middot; ${esc(i.spice)}${i.extras.length ? "<br>+ " + i.extras.map((e) => esc(e.label)).join(", ") : ""}${i.note ? "<br><em>“" + esc(i.note) + "”</em>" : ""}</p>
            <div class="kq-ci-row">
              <div class="kq-qty"><button data-cq="${idx}:-1">&minus;</button><span>${i.qty}</span><button data-cq="${idx}:1">+</button></div>
              <span class="kq-ci-price">${money(i.unit * i.qty)}</span>
            </div>
            <div class="kq-ci-actions">
              <button class="kq-ci-edit" data-cedit="${idx}"><i class="fa-solid fa-pen"></i> Edit</button>
              <button class="kq-ci-del" data-cdel="${idx}"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
          </div>
        </div>`).join("")}

      <p class="kq-upsell-title">GOES WELL WITH</p>
      <div class="kq-upsell-row">
        ${UPSELL.map(dish).filter(Boolean).map((d) => `
          <div class="kq-upsell-card">
            <img src="${IMG + d.img}" alt="${esc(d.name)}">
            <p>${esc(d.name)}</p>
            <button data-quickadd="${d.id}">+ ${money(d.price)}</button>
          </div>`).join("")}
      </div>

      <div class="kq-promo-row">
        <input type="text" id="kqPromoInput" placeholder="Promo code (try KQ10)" value="${state.promo || ""}">
        <button class="kq-btn kq-btn-dark" id="kqPromoBtn">APPLY</button>
      </div>
      <p class="kq-promo-msg" id="kqPromoMsg" style="color:${state.promo ? "var(--green)" : "var(--muted)"}">${state.promo ? state.promo + " applied — " + PROMOS[state.promo] * 100 + "% off" : ""}</p>

      <div class="kq-bill">
        <div class="kq-bill-row"><span>Subtotal</span><span>${money(t.sub)}</span></div>
        ${t.discount ? `<div class="kq-bill-row"><span>Discount (${state.promo})</span><span style="color:var(--green)">- ${money(t.discount)}</span></div>` : ""}
        <div class="kq-bill-row"><span>Delivery</span><span class="${t.delivery ? "" : "free"}">${t.delivery ? money(t.delivery) : "FREE"}</span></div>
        <div class="kq-bill-row total"><span>Total</span><span>${money(t.total)}</span></div>
      </div>`;

    body.querySelectorAll("[data-cq]").forEach((b) => b.addEventListener("click", () => {
      const [idx, delta] = b.dataset.cq.split(":").map(Number);
      state.cart[idx].qty += delta;
      if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
      persistCart();
    }));
    body.querySelectorAll("[data-cdel]").forEach((b) => b.addEventListener("click", () => {
      state.cart.splice(Number(b.dataset.cdel), 1);
      persistCart();
      toast("Item removed", "fa-trash");
    }));
    body.querySelectorAll("[data-cedit]").forEach((b) => b.addEventListener("click", () => {
      const idx = Number(b.dataset.cedit);
      openCustomizer(state.cart[idx].id, idx);
    }));
    const pBtn = document.getElementById("kqPromoBtn");
    if (pBtn) pBtn.addEventListener("click", () => {
      const code = (document.getElementById("kqPromoInput").value || "").trim().toUpperCase();
      if (PROMOS[code]) { state.promo = code; LS.set("promo", code); toast("Promo applied!", "fa-tag", "success"); }
      else { state.promo = null; LS.set("promo", null); toast("Invalid promo code", "fa-triangle-exclamation"); }
      persistCart();
    });
  }

  /* ---------------- 8. CARD RENDERERS ---------------- */
  function dishCard(d) {
    return `<article class="kq-card">
      <div class="kq-card-img">
        <img src="${IMG + d.img}" alt="${esc(d.name)}" loading="lazy">
        ${d.tag ? `<span class="kq-deal-tag${d.tag === "DEAL" ? " red" : ""}">${d.tag}</span>` : ""}
      </div>
      <div class="kq-card-body">
        <h3 class="kq-card-title">${esc(d.name)}</h3>
        <p class="kq-card-desc">${esc(d.desc)}</p>
        <div class="kq-card-foot">
          <span class="kq-price">${money(d.price)}</span>
          <button class="kq-add-btn" data-add="${d.id}" aria-label="Add ${esc(d.name)}"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </article>`;
  }

  /* ---------------- 9. PAGE MODULES ---------------- */
  const pages = {
    index() {
      const cats = document.getElementById("kqCats");
      const grid = document.getElementById("kqGrid");
      if (!grid) return;
      let active = "all";
      const draw = () => {
        grid.innerHTML = DISHES.filter((d) => active === "all" || d.cat === active).map(dishCard).join("");
      };
      if (cats) {
        cats.innerHTML = CATEGORIES.map((c) => `<button class="kq-cat-pill${c.id === "all" ? " active" : ""}" data-cat="${c.id}"><i class="fa-solid ${c.icon}"></i> ${c.label}</button>`).join("");
        cats.querySelectorAll("[data-cat]").forEach((b) => b.addEventListener("click", () => {
          cats.querySelectorAll(".kq-cat-pill").forEach((x) => x.classList.remove("active"));
          b.classList.add("active");
          active = b.dataset.cat;
          draw();
        }));
      }
      draw();
    },

    menu() {
      const wrap = document.getElementById("kqWeek");
      if (!wrap) return;
      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
      wrap.innerHTML = WEEK.map((w) => `
        <div class="kq-day-card" style="margin-bottom:18px">
          <div class="kq-day-head"><span><i class="fa-solid fa-calendar-day"></i> ${w.day.toUpperCase()}</span>${w.day === today ? "<span>TODAY</span>" : ""}</div>
          <div class="kq-day-body">
            ${w.meals.map((m, i) => `
              <div class="kq-meal">
                <div class="meal-slot">${["MAIN COURSE", "SIDE / RICE", "SALAN"][i] || "SPECIAL"}</div>
                <div class="kq-meal-flex">
                  <div>
                    <p class="meal-name">${esc(m[0])}</p>
                    <p class="meal-desc">Freshly cooked on ${w.day} &middot; serves 2–3</p>
                  </div>
                  <span class="meal-price">${money(m[1])}</span>
                </div>
              </div>`).join("")}
          </div>
        </div>`).join("");
      const printBtn = document.getElementById("kqPrint");
      if (printBtn) printBtn.addEventListener("click", () => window.print());
    },

    blog() {
      const grid = document.getElementById("kqBlogGrid");
      if (!grid) return;
      grid.innerHTML = BLOG.map((b, i) => `
        <article class="kq-blog-card">
          <img src="${IMG + b.img}" alt="${esc(b.title)}" loading="lazy">
          <div class="kq-blog-body">
            <div class="kq-blog-cat">${b.cat}</div>
            <h3>${esc(b.title)}</h3>
            <p>${esc(b.text.slice(0, 110))}…</p>
            <button class="kq-read-more" data-post="${i}">Read the full story <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </article>`).join("");
      grid.querySelectorAll("[data-post]").forEach((b) => b.addEventListener("click", () => {
        const p = BLOG[Number(b.dataset.post)];
        const box = document.getElementById("kqCustBox");
        box.className = "kq-modal-box kq-article-box";
        box.innerHTML = `
          <img src="${IMG + p.img}" alt="${esc(p.title)}">
          <div class="kq-article-content">
            <div class="kq-blog-cat">${p.cat}</div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.text)}</p>
            <button class="kq-btn kq-btn-outline" id="kqArtClose"><i class="fa-solid fa-xmark"></i> Close</button>
          </div>`;
        KQ.open(document.getElementById("kqCustModal"));
        box.querySelector("#kqArtClose").addEventListener("click", KQ.closeAll);
      }));
    },

    "live-counter"() {
      const nums = document.querySelectorAll("[data-count]");
      nums.forEach((el) => {
        const target = Number(el.dataset.count);
        let cur = 0;
        const step = Math.max(1, Math.round(target / 60));
        const t = setInterval(() => {
          cur = Math.min(target, cur + step);
          el.textContent = cur.toLocaleString("en-PK");
          if (cur >= target) clearInterval(t);
        }, 25);
      });

      const feed = document.getElementById("kqFeed");
      const ticker = document.getElementById("kqTicker");
      const names = ["Ayesha", "Bilal", "Hina", "Zain", "Faryal", "Usman", "Sana", "Danish"];
      const areas = AREAS;
      const pushOrder = () => {
        const d = DISHES[Math.floor(Math.random() * DISHES.length)];
        const n = names[Math.floor(Math.random() * names.length)];
        const a = areas[Math.floor(Math.random() * areas.length)];
        if (feed) {
          const row = document.createElement("div");
          row.className = "kq-cart-item";
          row.style.animation = "none";
          row.innerHTML = `<img src="${IMG + d.img}" alt="${esc(d.name)}">
            <div class="kq-ci-info">
              <p class="kq-ci-name">${n} ordered ${esc(d.name)}</p>
              <p class="kq-ci-meta">${a} &middot; just now</p>
            </div>`;
          feed.prepend(row);
          while (feed.children.length > 8) feed.lastElementChild.remove();
        }
        if (ticker) {
          ticker.innerHTML = `<div class="tick-ico">🍛</div><div><p>${n} from ${a} just ordered ${esc(d.name)}</p><small>Live from the Kitchen Queen counter</small></div>`;
          ticker.classList.add("show");
          setTimeout(() => ticker.classList.remove("show"), 4200);
        }
      };
      pushOrder();
      setInterval(pushOrder, 6000);
    },

    contact() {
      const form = document.getElementById("kqContactForm");
      if (!form) return;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validate(form)) return;
        form.reset();
        toast("Message sent — we'll reply within an hour!", "fa-paper-plane", "success");
      });
    },

    catering() {
      const form = document.getElementById("kqCaterForm");
      if (!form) return;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validate(form)) return;
        const guests = Number(form.querySelector("#guests").value || 0);
        toast("Quote request received for " + guests + " guests!", "fa-champagne-glasses", "success");
        form.reset();
      });
    },

    "meal-builder"() {
      const STEPS = [
        { key: "rice", name: "Rice / Bread", opts: [["Chicken Biryani", 450, "biryani.jpg"], ["Aloo Tahari", 300, "biryani.jpg"], ["Tandoori Naan", 120, "naan.jpg"], ["Steamed Rice", 200, "biryani.jpg"]] },
        { key: "main", name: "Main Dish", opts: [["Chicken Karahi", 850, "karahi.jpg"], ["Beef Haleem", 400, "haleem.jpg"], ["Chicken Qeema", 520, "qeema.jpg"], ["Aloo Gosht", 620, "curry.jpg"]] },
        { key: "side", name: "Side", opts: [["Shami Kabab", 300, "shami.jpg"], ["Mint Raita", 90, "raita.jpg"], ["Green Salad", 70, "raita.jpg"], ["Chow Mein", 380, "chowmein.jpg"]] },
        { key: "sweet", name: "Dessert & Drink", opts: [["Desi Kheer", 220, "kheer.jpg"], ["Cold Drink", 90, "drink.jpg"], ["Kheer + Drink", 290, "kheer.jpg"], ["Skip", 0, "drink.jpg"]] }
      ];
      const tabs = document.getElementById("kqSteps");
      const panel = document.getElementById("kqStepPanel");
      const trayItems = document.getElementById("kqTrayItems");
      const trayTotal = document.getElementById("kqTrayTotal");
      const plateCount = document.getElementById("kqPlateCount");
      if (!panel) return;
      let step = 0;
      const picks = {};

      const drawTray = () => {
        const chosen = STEPS.filter((s) => picks[s.key]);
        trayItems.innerHTML = chosen.length
          ? chosen.map((s) => `<div class="kq-tray-item"><span>${esc(picks[s.key].label)}</span><span>${money(picks[s.key].price)} <button data-clear="${s.key}"><i class="fa-solid fa-xmark"></i></button></span></div>`).join("")
          : `<p style="color:var(--muted);font-size:.8rem;text-align:center;margin:0">Nothing on your thali yet.</p>`;
        const total = chosen.reduce((s, x) => s + picks[x.key].price, 0);
        trayTotal.textContent = money(total);
        plateCount.innerHTML = `<b>${chosen.length}</b><small>OF 4</small>`;
        trayItems.querySelectorAll("[data-clear]").forEach((b) => b.addEventListener("click", () => { delete picks[b.dataset.clear]; drawTray(); drawStep(); }));
      };

      const drawStep = () => {
        tabs.innerHTML = STEPS.map((s, i) => `<button class="kq-step-tab${i === step ? " active" : ""}${picks[s.key] ? " done" : ""}" data-step="${i}"><span class="step-no">STEP ${i + 1}</span><span class="step-name">${s.name}</span></button>`).join("");
        tabs.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => { step = Number(b.dataset.step); drawStep(); }));
        const s = STEPS[step];
        panel.innerHTML = `
          <div class="kq-opt-grid">
            ${s.opts.map((o) => `<button class="kq-build-opt${picks[s.key] && picks[s.key].label === o[0] ? " selected" : ""}" data-pick="${esc(o[0])}|${o[1]}">
              <img src="${IMG + o[2]}" alt="${esc(o[0])}" loading="lazy">
              <b>${esc(o[0])}</b><span>${o[1] ? money(o[1]) : "Free"}</span>
            </button>`).join("")}
          </div>
          <div class="kq-build-nav">
            <button class="kq-btn kq-btn-outline" id="kqPrev" ${step === 0 ? "disabled" : ""}><i class="fa-solid fa-arrow-left"></i> Back</button>
            <button class="kq-btn" id="kqNext">${step === STEPS.length - 1 ? "Finish" : "Next"} <i class="fa-solid fa-arrow-right"></i></button>
          </div>`;
        panel.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => {
          const [label, price] = b.dataset.pick.split("|");
          picks[s.key] = { label, price: Number(price) };
          drawTray(); drawStep();
        }));
        panel.querySelector("#kqPrev").addEventListener("click", () => { if (step > 0) { step--; drawStep(); } });
        panel.querySelector("#kqNext").addEventListener("click", () => {
          if (step < STEPS.length - 1) { step++; drawStep(); }
          else toast("Thali ready — add it to your basket!", "fa-wand-magic-sparkles", "success");
        });
      };

      document.getElementById("kqTrayAdd").addEventListener("click", () => {
        const chosen = STEPS.filter((s) => picks[s.key]);
        if (chosen.length < 2) return toast("Pick at least 2 items for a thali", "fa-triangle-exclamation");
        const total = chosen.reduce((s, x) => s + picks[x.key].price, 0);
        state.cart.push({
          id: "custom", name: "Custom Thali", img: "biryani.jpg", base: total,
          portion: "Custom Thali", spice: "Medium (Desi)",
          extras: chosen.map((s) => ({ label: picks[s.key].label, price: 0 })),
          note: "", unit: total, qty: 1
        });
        persistCart();
        toast("Custom Thali added to basket", "fa-check", "success");
        KQ.open(document.getElementById("kqCartDrawer"));
      });

      drawStep(); drawTray();
    },

    checkout() {
      const wrap = document.getElementById("kqOrderLines");
      const form = document.getElementById("kqCheckoutForm");
      if (!wrap) return;

      let selectedPay = "cod";
      let lastOrder = null;

      const draw = () => {
        const t = totals();
        wrap.innerHTML = state.cart.length
          ? state.cart.map((i) => `<div class="kq-summary-line"><span>${i.qty} × ${esc(i.name)}<span class="line-meta">${esc(i.portion)} · ${esc(i.spice)}</span></span><span>${money(i.unit * i.qty)}</span></div>`).join("") +
            `<div class="kq-bill">
              <div class="kq-bill-row"><span>Subtotal</span><span>${money(t.sub)}</span></div>
              ${t.discount ? `<div class="kq-bill-row"><span>Discount</span><span style="color:var(--green)">- ${money(t.discount)}</span></div>` : ""}
              <div class="kq-bill-row"><span>Delivery</span><span class="${t.delivery ? "" : "free"}">${t.delivery ? money(t.delivery) : "FREE"}</span></div>
              <div class="kq-bill-row total"><span>Total</span><span>${money(t.total)}</span></div>
            </div>`
          : `<p style="color:var(--muted);font-size:.85rem">Your basket is empty. <a href="index.html" style="color:var(--yellow-2);font-weight:700">Browse the menu →</a></p>`;
      };
      draw();
      document.addEventListener("kq:cart", draw);

      const epBox = document.getElementById("kqEasyPaisaFields");
      document.querySelectorAll(".kq-pay-opt").forEach((p) => p.addEventListener("click", () => {
        document.querySelectorAll(".kq-pay-opt").forEach((x) => x.classList.remove("selected"));
        p.classList.add("selected");
        selectedPay = p.dataset.pay || "cod";
        if (epBox) {
          epBox.hidden = selectedPay !== "easypaisa";
          const epNum = document.getElementById("epNumber");
          if (epNum) {
            if (selectedPay === "easypaisa") epNum.setAttribute("data-required", "");
            else epNum.removeAttribute("data-required");
            epNum.closest(".kq-field")?.classList.remove("invalid");
          }
        }
      }));

      const addrInput = form.querySelector("#address");
      if (state.address) addrInput.value = (state.address.detail ? state.address.detail + ", " : "") + state.address.area;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!state.cart.length) return toast("Your basket is empty", "fa-basket-shopping");
        if (!validate(form)) return;
        if (selectedPay === "easypaisa") {
          const epNum = document.getElementById("epNumber");
          const val = (epNum?.value || "").replace(/[\s-]/g, "");
          if (!/^0\d{9,10}$/.test(val)) {
            epNum?.closest(".kq-field")?.classList.add("invalid");
            return toast("Please enter a valid EasyPaisa number", "fa-triangle-exclamation");
          }
        }
        placeOrder();
      });

      function placeOrder() {
        const t = totals();
        const orderNo = "KQ-" + Math.floor(100000 + Math.random() * 899999);
        const name = form.querySelector("#fullname").value.trim();
        const phone = form.querySelector("#phone").value.trim();
        const address = form.querySelector("#address").value.trim();
        const note = form.querySelector("#note")?.value.trim() || "";
        const epNumber = selectedPay === "easypaisa" ? (document.getElementById("epNumber")?.value.trim() || "") : "";
        const epName = selectedPay === "easypaisa" ? (document.getElementById("epName")?.value.trim() || "") : "";
        const payLabel = selectedPay === "easypaisa" ? "EasyPaisa" : "Cash on Delivery";

        lastOrder = {
          orderNo, name, phone, address, note, pay: selectedPay, payLabel,
          epNumber, epName, total: t.total, items: [...state.cart], time: Date.now()
        };
        try { localStorage.setItem("kq_last_order", JSON.stringify(lastOrder)); } catch (e) {}

        const stage = document.getElementById("kqReceiptStage");
        stage.hidden = false;
        document.getElementById("kqOrderNo").textContent = orderNo;
        document.getElementById("kqPrintTotal").textContent = money(t.total);
        const paper = document.getElementById("kqPaper");

        const payBlock = selectedPay === "easypaisa"
          ? `<div class="r-pay"><i class="fa-solid fa-mobile-screen"></i> EasyPaisa · ${esc(epNumber)}${epName ? " · " + esc(epName) : ""}</div>`
          : `<div class="r-pay"><i class="fa-solid fa-money-bill-wave"></i> Cash on Delivery</div>`;

        paper.innerHTML = `
          <div class="r-logo">
            <div class="r-crown"><i class="fa-solid fa-crown"></i></div>
            <b>KITCHEN QUEEN</b>
            <small>Karachi · Ghar ka khana</small>
          </div>
          <div class="r-divider"></div>
          <div class="r-row"><span>ORDER #</span><span><b>${orderNo}</b></span></div>
          <div class="r-row"><span>DATE</span><span>${new Date().toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</span></div>
          <div class="r-row"><span>CUSTOMER</span><span>${esc(name)}</span></div>
          <div class="r-row"><span>PHONE</span><span>${esc(phone)}</span></div>
          <div class="r-row"><span>ADDRESS</span><span style="text-align:right;max-width:55%">${esc(address)}</span></div>
          ${note ? `<div class="r-row"><span>NOTE</span><span style="text-align:right;max-width:55%">${esc(note)}</span></div>` : ""}
          ${payBlock}
          <div class="r-divider"></div>
          ${state.cart.map((i) => `<div class="r-row"><span class="r-qty">${i.qty}×</span><span class="r-name">${esc(i.name)}<div class="r-meta">${esc(i.portion)} · ${esc(i.spice)}</div></span><span>${money(i.unit * i.qty)}</span></div>`).join("")}
          <div class="r-divider"></div>
          <div class="r-row"><span>Subtotal</span><span>${money(t.sub)}</span></div>
          ${t.discount ? `<div class="r-row"><span>Discount</span><span>- ${money(t.discount)}</span></div>` : ""}
          <div class="r-row"><span>Delivery</span><span>${t.delivery ? money(t.delivery) : "FREE"}</span></div>
          <div class="r-divider"></div>
          <div class="r-total-row"><span>TOTAL</span><span>${money(t.total)}</span></div>
          <div class="r-divider"></div>
          <p class="r-thanks">Shukriya! 🍛<br>Your food is being prepared with love.<br><b>Estimated delivery: 40–55 min</b></p>
          ${selectedPay === "easypaisa" ? `<p class="r-footer-note">Please complete EasyPaisa payment within 10 minutes.<br>Request will be sent to ${esc(epNumber)}</p>` : `<p class="r-footer-note">Please keep exact change ready for the rider.</p>`}
          <div class="r-barcode"></div>
          <p class="r-center">*** ${orderNo} ***</p>
          <p class="r-footer-note">Kitchen Queen · Karachi · Thank you for ordering!</p>`;

        paper.classList.remove("print-run");
        void paper.offsetWidth;
        paper.classList.add("print-run");
        stage.scrollIntoView({ behavior: "smooth", block: "center" });

        const actions = document.getElementById("kqReceiptActions");
        if (actions) actions.hidden = true;

        setTimeout(() => {
          const badge = document.getElementById("kqPrintStatus");
          badge.classList.add("done");
          badge.querySelector("span").innerHTML = `ORDER CONFIRMED · <b>${orderNo}</b>`;
          toast("Order placed successfully!", "fa-check", "success");
          state.cart = []; state.promo = null;
          LS.set("promo", null);
          persistCart();
          draw();
          if (actions) actions.hidden = false;
        }, 2600);
      }

      // Cancel order button
      const cancelBtn = document.getElementById("kqCancelOrderBtn");
      if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
          if (!lastOrder) return toast("No active order to cancel", "fa-ban");
          if (!confirm(`Cancel order ${lastOrder.orderNo}? This cannot be undone.`)) return;
          try { localStorage.removeItem("kq_last_order"); } catch (e) {}
          lastOrder = null;
          const stage = document.getElementById("kqReceiptStage");
          stage.hidden = true;
          document.getElementById("kqReceiptActions").hidden = true;
          const badge = document.getElementById("kqPrintStatus");
          badge.classList.remove("done");
          badge.querySelector("span").innerHTML = `PRINTING ORDER <b id="kqOrderNo">KQ-000000</b> · <b id="kqPrintTotal">Rs 0</b>`;
          toast("Order cancelled successfully", "fa-ban", "success");
        });
      }

      // Print receipt
      const printBtn = document.getElementById("kqPrintBtn");
      if (printBtn) {
        printBtn.addEventListener("click", () => {
          const paper = document.getElementById("kqPaper");
          if (!paper) return;
          const win = window.open("", "_blank", "width=400,height=700");
          win.document.write(`<!DOCTYPE html><html><head><title>Receipt</title>
            <style>
              body{font-family:'Courier New',monospace;padding:20px;max-width:320px;margin:0 auto;color:#111}
              .r-logo{text-align:center;margin-bottom:12px}
              .r-logo b{display:block;letter-spacing:3px;font-size:1rem}
              .r-logo small{font-size:.65rem;color:#666}
              .r-divider{border-top:1px dashed #999;margin:8px 0}
              .r-row{display:flex;justify-content:space-between;font-size:.8rem;margin:3px 0}
              .r-total-row{display:flex;justify-content:space-between;font-weight:700;font-size:1rem}
              .r-pay,.r-thanks,.r-center,.r-footer-note{text-align:center;font-size:.78rem;margin:6px 0}
              .r-qty{margin-right:6px;font-weight:700}
              .r-meta{font-size:.7rem;color:#666}
            </style></head><body>${paper.innerHTML}</body></html>`);
          win.document.close();
          win.focus();
          setTimeout(() => { win.print(); win.close(); }, 300);
        });
      }
    },

    signin() {
      const mount = document.getElementById("kqAuthInline");
      if (mount) openAuthInline(mount);
    },

    location() {
      const btn = document.getElementById("kqChangeArea");
      if (btn) btn.addEventListener("click", openLocation);
      const show = () => {
        const el = document.getElementById("kqCurrentArea");
        if (el) el.textContent = state.address ? (state.address.detail ? state.address.detail + ", " : "") + state.address.area : "No address saved yet";
      };
      show();
      document.addEventListener("kq:address", show);
      const list = document.getElementById("kqZones");
      if (list) list.innerHTML = AREAS.map((a) => `<div class="kq-info-row"><span class="ico"><i class="fa-solid fa-location-crosshairs"></i></span><span><b>${a}</b><span>35–50 min &middot; ${money(DELIVERY_FEE)} delivery (free over ${money(FREE_DELIVERY_OVER)})</span></span></div>`).join("");
    }
  };

  /* ---------------- 10. FORM VALIDATION ---------------- */
  function validate(form) {
    let ok = true;
    form.querySelectorAll("[data-required]").forEach((input) => {
      const field = input.closest(".kq-field");
      const val = input.value.trim();
      let bad = !val;
      if (!bad && input.type === "email") bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (!bad && input.dataset.phone !== undefined) bad = !/^0\d{9,10}$/.test(val.replace(/[\s-]/g, ""));
      field.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) toast("Please check the highlighted fields", "fa-triangle-exclamation");
    return ok;
  }

  /* ---------------- 11. BOOT ---------------- */
  const KQ = { DISHES, WEEK, state, money, toast, addToCart, openCustomizer, openLocation, openAuth, dishCard, totals };
  window.KQ = KQ;

  function mountLoader() {
    if (document.getElementById("kqLoader")) return;
    const el = document.createElement("div");
    el.id = "kqLoader";
    el.className = "kq-loader";
    el.innerHTML = `
      <div class="kq-loader-plate">
        <span class="ring"></span>
        <span class="crown"><i class="fa-solid fa-crown"></i></span>
      </div>
      <p class="kq-loader-brand">KITCHEN <b>QUEEN</b></p>
      <p class="kq-loader-sub">Warming up the handi…</p>
      <div class="kq-loader-bar"><span></span></div>`;
    document.body.appendChild(el);
  }

  function hideLoader() {
    const el = document.getElementById("kqLoader");
    if (!el) return;
    el.classList.add("done");
    setTimeout(() => el.remove(), 550);
  }

  mountLoader();

  document.addEventListener("DOMContentLoaded", () => {
    mountLoader();
    renderShell();
    const key = (document.body.dataset.page || "index");
    if (pages[key]) pages[key]();

    setTimeout(() => {
      hideLoader();
      setTimeout(() => {
        if (!state.address && !document.querySelector(".kq-modal.show")) openLocation();
      }, 320);
    }, 1100);
  });

})();
