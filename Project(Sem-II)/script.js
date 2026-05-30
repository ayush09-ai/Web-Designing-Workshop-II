// ===== DATA =====
const PRODUCTS = [
  // Electronics
  { id:1, name:"Samsung 65\" 4K QLED Smart TV", category:"electronics", price:64999, mrp:89999, discount:28, rating:4.6, reviews:3241, emoji:"📺", prime:true, tag:"Best Seller", desc:"Experience stunning 4K resolution with Quantum Dot technology, HDR10+ and Dolby Atmos. Smart OS with Netflix, Prime Video built-in." },
  { id:2, name:"Apple iPhone 15 Pro Max 256GB Natural Titanium", category:"electronics", price:134900, mrp:154900, discount:13, rating:4.8, reviews:8754, emoji:"📱", prime:true, tag:"Deal of the Day", desc:"A17 Pro chip, titanium design, 48MP main camera with 5x optical zoom, Action button and USB-C connectivity." },
  { id:3, name:'Dell XPS 15 Laptop Core i7 32GB 1TB SSD', category:"electronics", price:129990, mrp:159990, discount:19, rating:4.5, reviews:1876, emoji:"💻", prime:true, tag:"Editor's Choice", desc:"15.6\" OLED display, 12th Gen Intel Core i7, 32GB RAM, 1TB NVMe SSD, NVIDIA RTX 3050Ti, Windows 11." },
  { id:4, name:"Sony WH-1000XM5 Wireless Noise Cancelling Headphones", category:"electronics", price:24990, mrp:34990, discount:29, rating:4.7, reviews:5432, emoji:"🎧", prime:true, tag:"Best Seller", desc:"Industry-leading noise cancellation, 30hr battery, LDAC Hi-Res Audio, Multipoint Bluetooth connection." },
  { id:5, name:"Canon EOS R50 Mirrorless Camera with 18-45mm Lens", category:"electronics", price:69999, mrp:82995, discount:16, rating:4.6, reviews:987, emoji:"📷", prime:true, desc:"24.2MP APS-C sensor, 4K video, Dual Pixel CMOS AF II, built-in Wi-Fi & Bluetooth, ideal for creators." },
  { id:6, name:"LG 1.5 Ton 5 Star Inverter Split AC", category:"electronics", price:36990, mrp:54990, discount:33, rating:4.4, reviews:2341, emoji:"❄️", prime:false, tag:"Hot Deal", desc:"Dual Inverter Compressor, 5-star energy rating, HD Filter, Ocean Black Protection, convertible 4-in-1 cooling." },
  { id:7, name:"iPad Air 5th Gen 256GB WiFi Space Grey", category:"electronics", price:76900, mrp:83900, discount:8, rating:4.8, reviews:3201, emoji:"📟", prime:true, desc:"M1 chip, 10.9\" Liquid Retina display, Touch ID, True Tone, Apple Pencil & Magic Keyboard compatible." },
  { id:8, name:"boAt Airdopes 141 True Wireless Earbuds", category:"electronics", price:999, mrp:2990, discount:67, rating:4.1, reviews:45231, emoji:"🎵", prime:true, tag:"₹1K Club", desc:"42H total playback, ASAP Charge, ENx Tech for calls, IPX4 water resistant, low latency beast mode." },

  // Fashion
  { id:9, name:"Levi's Men's 511 Slim Fit Stretch Jeans", category:"fashion", price:2399, mrp:3999, discount:40, rating:4.4, reviews:12045, emoji:"👖", prime:true, tag:"Bestseller", desc:"Classic slim fit with stretch denim for all-day comfort. 98% cotton, 2% elastane. Machine washable." },
  { id:10, name:"Nike Air Max 270 Running Shoes", category:"fashion", price:10495, mrp:11995, discount:13, rating:4.5, reviews:6782, emoji:"👟", prime:true, desc:"Max Air heel unit delivers all-day comfort. Engineered mesh upper for breathability. Foam midsole cushioning." },
  { id:11, name:"Allen Solly Women's Regular Fit Blazer", category:"fashion", price:1999, mrp:3999, discount:50, rating:4.3, reviews:3451, emoji:"🥼", prime:false, tag:"50% Off", desc:"Polyester viscose blend, notch lapel, 2-button closure, 2 flap pockets. Perfect for office and occasions." },
  { id:12, name:"Ray-Ban Aviator Classic Sunglasses", category:"fashion", price:5499, mrp:7890, discount:30, rating:4.7, reviews:8921, emoji:"🕶️", prime:true, desc:"Classic metal frame aviators. 100% UV protection, G-15 lens. Iconic gold frame, green lenses." },
  { id:13, name:"Peter England Men's Slim Fit Formal Shirt", category:"fashion", price:899, mrp:1699, discount:47, rating:4.2, reviews:9876, emoji:"👔", prime:true, tag:"Deal", desc:"100% pure cotton, wrinkle resistant, easy care, regular collar, French placket design." },
  { id:14, name:"H&M Women's Floral Maxi Dress", category:"fashion", price:1499, mrp:2499, discount:40, rating:4.4, reviews:4231, emoji:"👗", prime:false, desc:"Jersey fabric, V-neck, open back with bow, elasticated seam below bust, woven floral print pattern." },
  { id:15, name:"Tommy Hilfiger Classic Leather Watch", category:"fashion", price:8995, mrp:12999, discount:31, rating:4.6, reviews:2341, emoji:"⌚", prime:true, desc:"Stainless steel case, genuine leather strap, Japanese quartz movement, 50m water resistant, date display." },
  { id:16, name:"Fastrack Reflex 3.0 Smartwatch", category:"fashion", price:2995, mrp:4495, discount:33, rating:4.1, reviews:7654, emoji:"⌚", prime:false, tag:"New", desc:"1.3\" full circle display, heart rate monitor, SpO2, 10 sport modes, 7-day battery life." },

  // Home & Kitchen
  { id:17, name:"Instant Pot Duo 7-in-1 Electric Pressure Cooker 6L", category:"home", price:7999, mrp:11995, discount:33, rating:4.7, reviews:18743, emoji:"🍲", prime:true, tag:"Must Have", desc:"7-in-1: Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker & Warmer. 6L/8-serving." },
  { id:18, name:"Philips Air Fryer HD9200/90 1400W", category:"home", price:6499, mrp:9995, discount:35, rating:4.5, reviews:9876, emoji:"🍟", prime:true, desc:"Rapid Air Technology for crispiness with 90% less fat. 4.1L capacity, digital touchscreen, 7 presets." },
  { id:19, name:"IKEA KALLAX Shelf Unit White 77×77cm", category:"home", price:5990, mrp:7990, discount:25, rating:4.4, reviews:3421, emoji:"🗄️", prime:false, desc:"Versatile shelf unit. Can be used as bookcase, room divider or TV bench. 4 cubes, white finish." },
  { id:20, name:"Bosch 7 kg Front Load Washing Machine", category:"home", price:34990, mrp:49990, discount:30, rating:4.6, reviews:5632, emoji:"🫧", prime:true, tag:"Exchange Offer", desc:"EcoSilence Drive motor, AntiVibration Design, SpeedPerfect, ActiveWater Plus. 15 programs, 1000 RPM." },
  { id:21, name:"WD 4TB Elements Desktop External Hard Drive", category:"home", price:7499, mrp:9999, discount:25, rating:4.5, reviews:4321, emoji:"💾", prime:true, desc:"USB 3.0 connectivity, plug-and-play. Wide compatibility. System-ready, pre-formatted NTFS for Windows." },
  { id:22, name:"Milton Thermosteel Flip Lid Flask 1000ml", category:"home", price:799, mrp:1299, discount:38, rating:4.3, reviews:34521, emoji:"🫙", prime:true, tag:"Hot Seller", desc:"Double wall insulated. Keeps hot 24 hrs, cold 24 hrs. 304 food grade stainless steel. BPA free." },
  { id:23, name:"Morphy Richards Breakfast Maker 3-in-1", category:"home", price:4999, mrp:7499, discount:33, rating:4.2, reviews:1234, emoji:"🍳", prime:false, desc:"Sandwich maker, grill, and waffle maker combo. 900W, non-stick plates, cool touch handle, indicator light." },
  { id:24, name:"Pepperfry Wooden Coffee Table – Walnut", category:"home", price:12999, mrp:19999, discount:35, rating:4.4, reviews:876, emoji:"🪑", prime:true, desc:"Solid sheesham wood with walnut finish, lower shelf for storage, metal hairpin legs, easy assembly." },

  // Books
  { id:25, name:"Atomic Habits by James Clear", category:"books", price:399, mrp:799, discount:50, rating:4.8, reviews:54321, emoji:"📗", prime:true, tag:"#1 Bestseller", desc:"An easy and proven way to build good habits and break bad ones. 4 laws of behaviour change framework." },
  { id:26, name:"The Psychology of Money by Morgan Housel", category:"books", price:349, mrp:599, discount:42, rating:4.7, reviews:32145, emoji:"📘", prime:true, desc:"Timeless lessons on wealth, greed and happiness. 19 short stories exploring relationship with money." },
  { id:27, name:"Ikigai: The Japanese Secret to a Long and Happy Life", category:"books", price:199, mrp:399, discount:50, rating:4.5, reviews:18765, emoji:"📕", prime:true, desc:"Discover the Japanese concept of ikigai — your reason for living — and apply it to find your own purpose." },
  { id:28, name:"Rich Dad Poor Dad by Robert T. Kiyosaki", category:"books", price:299, mrp:495, discount:40, rating:4.6, reviews:43210, emoji:"📙", prime:true, tag:"Classic", desc:"The #1 personal finance book of all time. What the rich teach their kids about money that the poor do not." },
  { id:29, name:"The Alchemist by Paulo Coelho", category:"books", price:249, mrp:399, discount:38, rating:4.7, reviews:28901, emoji:"📒", prime:true, desc:"A philosophical novel about a young Andalusian shepherd's journey to find treasure and realize his destiny." },
  { id:30, name:"Sapiens: A Brief History of Humankind", category:"books", price:499, mrp:799, discount:38, rating:4.8, reviews:21043, emoji:"📚", prime:true, tag:"Mind-blowing", desc:"Yuval Noah Harari examines the history of our species — from the Stone Age to the Silicon Age." },

  // Beauty
  { id:31, name:"Lakme Absolute Argan Oil Serum Foundation", category:"beauty", price:699, mrp:1199, discount:42, rating:4.3, reviews:7654, emoji:"💋", prime:true, tag:"Trending", desc:"SPF 45 PA+++. 12-hour stay, moisturising formula, medium-to-full coverage. Available in 12 shades." },
  { id:32, name:"The Ordinary Hyaluronic Acid 2% + B5 30ml", category:"beauty", price:599, mrp:899, discount:33, rating:4.6, reviews:12043, emoji:"💧", prime:true, desc:"Multi-depth hyaluronic acid formulation with vitamin B5. Hydrates, plumps, reduces surface roughness." },
  { id:33, name:"Mamaearth Vitamin C Face Wash 100ml", category:"beauty", price:299, mrp:399, discount:25, rating:4.4, reviews:34567, emoji:"✨", prime:true, desc:"With Vitamin C & Turmeric. Reduces tan, brightens skin, dermatologically tested, MadeSafe certified." },
  { id:34, name:"Forest Essentials Sundari Face Oil 30ml", category:"beauty", price:2250, mrp:2950, discount:24, rating:4.7, reviews:2341, emoji:"🌿", prime:false, tag:"Luxury", desc:"Cold pressed Saffron, Ashwagandha and Turmeric in a base of pure cold-pressed Sesame oil. Ayurvedic." },
  { id:35, name:"Dyson Airwrap Multi-Styler Complete", category:"beauty", price:44900, mrp:54900, discount:18, rating:4.5, reviews:4321, emoji:"💇", prime:true, desc:"Coanda effect to attract and style hair with no extreme heat. Includes curl, wave and smooth attachments." },
  { id:36, name:"Biotique Bio Morning Nector SPF 30 Sunscreen", category:"beauty", price:249, mrp:399, discount:38, rating:4.2, reviews:8765, emoji:"☀️", prime:true, tag:"Daily Essential", desc:"Visibly flawless skin moisturiser. SPF 30 PA+++ protection. Non-greasy, suitable for normal to oily skin." },

  // Toys
  { id:37, name:"LEGO Technic Bugatti Chiron 42083", category:"toys", price:39999, mrp:49999, discount:20, rating:4.9, reviews:3456, emoji:"🏎️", prime:true, tag:"Premium", desc:"3599 pieces, 1:8 scale replica with a working 8-speed gearbox, moveable rear wing and detailed interior." },
  { id:38, name:"Hasbro Monopoly Classic Board Game", category:"toys", price:849, mrp:1299, discount:35, rating:4.5, reviews:12345, emoji:"🎲", prime:true, desc:"The classic fast-dealing property trading game. 2-8 players, ages 8+. 80+ year legacy edition." },
  { id:39, name:"Hot Wheels 20-Car Gift Pack", category:"toys", price:999, mrp:1799, discount:44, rating:4.7, reviews:21098, emoji:"🚗", prime:true, tag:"Value Pack", desc:"20 die-cast metal vehicles in 1:64 scale. Random selection from classic and new models. Ages 3+." },
  { id:40, name:"Funskool Rubik's Cube 3×3", category:"toys", price:399, mrp:599, discount:33, rating:4.4, reviews:9876, emoji:"🧩", prime:false, desc:"The original 3D combination puzzle. Smoother mechanism, solid pastel colour tiles. Classic stress buster." },
  { id:41, name:"Playmobil City Life Hospital 70190", category:"toys", price:3999, mrp:5499, discount:27, rating:4.6, reviews:1234, emoji:"🏥", prime:true, desc:"Complete hospital set with operating room, patient beds, ambulance. 150+ pieces. Ages 4-10." },
  { id:42, name:"DJI Mini 3 Pro Drone", category:"toys", price:74999, mrp:89999, discount:17, rating:4.8, reviews:2341, emoji:"🚁", prime:true, tag:"Top Pick", desc:"249g lightweight drone, 4K/60fps video, 48MP photos, tri-directional obstacle sensing, 34-min flight time." },

  // Sports
  { id:43, name:"Yonex Nanoflare 800 Badminton Racket", category:"sports", price:8999, mrp:12999, discount:31, rating:4.7, reviews:3421, emoji:"🏸", prime:true, tag:"Pro Choice", desc:"Super lightweight 67g, NAMD graphite shaft, head-light balance, ideal for speed and steep angle smashes." },
  { id:44, name:"Decathlon Domyos FW500 Fitness Watch", category:"sports", price:2999, mrp:3999, discount:25, rating:4.3, reviews:5678, emoji:"⌚", prime:false, desc:"Heart rate, step counter, calorie counter, sleep tracker. 7-day battery. Swim proof 50m. Works with app." },
  { id:45, name:"Nivia Storm Football Size 5", category:"sports", price:599, mrp:899, discount:33, rating:4.4, reviews:8765, emoji:"⚽", prime:true, desc:"Machine stitched, PU material, rubber bladder for consistent air retention. FIFA standard size and weight." },
  { id:46, name:"Boldfit Resistance Bands Set of 5", category:"sports", price:599, mrp:1299, discount:54, rating:4.5, reviews:23456, emoji:"💪", prime:true, tag:"Home Gym", desc:"5 bands with varying resistance 10-150 lbs. Latex free, door anchor, handles, ankle straps included." },
  { id:47, name:"Cosco Fit-101 Treadmill", category:"sports", price:24999, mrp:34999, discount:29, rating:4.2, reviews:1876, emoji:"🏃", prime:false, tag:"Home Fitness", desc:"2HP motor, 0-14 kmph speed, 12 preset programs, LCD display, Bluetooth, foldable design, 120kg capacity." },
  { id:48, name:"SG Cricket Kit Complete – Junior", category:"sports", price:3999, mrp:5999, discount:33, rating:4.4, reviews:4321, emoji:"🏏", prime:true, desc:"Full cricket kit: bat, pads, gloves, helmet, bag. SG Kashmir willow bat, ideal for junior players U16." },
];

const DEMO_USERS = [
  { email: "user@demo.com", password: "demo123", name: "Demo User" },
  { email: "john@example.com", password: "john123", name: "John Doe" },
];

const FEATURED_REVIEWS = [
  { name: "Priya S.", product: "Samsung 65\" QLED TV", rating: 5, text: "Absolutely stunning picture quality! The colors are incredibly vivid and the HDR makes everything pop. Worth every rupee.", verified: true },
  { name: "Rahul M.", product: "Apple iPhone 15 Pro Max", rating: 5, text: "The camera is insane! 5x zoom is crystal clear. Build quality is premium. Battery life has improved significantly.", verified: true },
  { name: "Ananya K.", product: "Atomic Habits", rating: 5, text: "Life changing book. I've implemented 3 habits from this book and already seeing results after just 2 months!", verified: true },
  { name: "Vikram T.", product: "Sony WH-1000XM5", rating: 4, text: "Best noise cancelling headphones I've ever used. Perfect for long flights and WFH. Sound quality is top tier.", verified: true },
  { name: "Sneha R.", product: "The Ordinary HA Serum", rating: 5, text: "My skin feels so plump and hydrated after just 2 weeks of use. Affordable skincare that actually works!", verified: true },
  { name: "Arjun P.", product: "Yonex Nanoflare 800", rating: 5, text: "Fantastic racket for competitive play. The grip is perfect and the smash power is noticeably better than my old racket.", verified: true },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('shopnow_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopnow_wishlist')) || [];
let orders = JSON.parse(localStorage.getItem('shopnow_orders')) || [];
let currentUser = JSON.parse(localStorage.getItem('shopnow_user')) || null;
let users = JSON.parse(localStorage.getItem('shopnow_users')) || [...DEMO_USERS];
let currentSlide = 0;
let sliderInterval;
let currentFilterCat = 'all';
let recentlyViewed = JSON.parse(localStorage.getItem('shopnow_recent')) || [];
let checkoutStep = 1;
let modalQty = 1;
let currentDetailProduct = null;

// ===== SAVE TO STORAGE =====
const save = () => {
  localStorage.setItem('shopnow_cart', JSON.stringify(cart));
  localStorage.setItem('shopnow_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('shopnow_orders', JSON.stringify(orders));
  localStorage.setItem('shopnow_recent', JSON.stringify(recentlyViewed));
  localStorage.setItem('shopnow_users', JSON.stringify(users));
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  renderHome();
  updateCartBadge();
  updateAuthUI();
  initBackToTop();
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchAuthTab(btn.dataset.tab));
  });
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('cardFields').style.display = radio.value === 'card' ? 'block' : 'none';
    });
  });
});

// ===== HOME RENDER =====
function renderHome() {
  const deals = PRODUCTS.filter(p => p.discount >= 25).sort((a,b) => b.discount - a.discount).slice(0,10);
  const best = PRODUCTS.filter(p => p.tag === 'Best Seller' || p.reviews > 10000).slice(0,10);
  const rec = shuffle([...PRODUCTS]).slice(0,10);

  renderProductRow('todayDeals', deals);
  renderProductRow('bestSellers', best);
  renderProductRow('recommended', rec);
  renderReviews();
  renderRecentlyViewed();
}

function shuffle(arr) { return arr.sort(() => Math.random() - .5); }

function renderProductRow(id, products) {
  document.getElementById(id).innerHTML = products.map(p => productCardHTML(p)).join('');
}

function renderReviews() {
  document.getElementById('featuredReviews').innerHTML = FEATURED_REVIEWS.map(r => `
    <div class="review-tile animate-in">
      <div class="reviewer-name">
        <span>${r.name}</span>
        <span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
      </div>
      <div class="review-product">on ${r.product}</div>
      ${r.verified ? '<span class="verified">✓ Verified Purchase</span>' : ''}
      <p class="review-body">${r.text}</p>
    </div>
  `).join('');
}

function renderRecentlyViewed() {
  const sec = document.getElementById('recentlyViewedSection');
  const grid = document.getElementById('recentlyViewed');
  if (!recentlyViewed.length) { sec.style.display = 'none'; return; }
  sec.style.display = 'block';
  const products = recentlyViewed.slice(0,8).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  grid.innerHTML = products.map(p => productCardHTML(p)).join('');
}

// ===== PRODUCT CARD HTML =====
function productCardHTML(p) {
  const inWish = wishlist.includes(p.id);
  return `
  <div class="product-card animate-in" onclick="openProductDetail(${p.id})">
    ${p.tag ? `<div class="product-badge">${p.tag}</div>` : ''}
    <button class="wishlist-toggle ${inWish ? 'active' : ''}" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="${inWish ? 'Remove from wishlist' : 'Add to wishlist'}">
      <i class="fa${inWish ? 's' : 'r'} fa-heart"></i>
    </button>
    <div class="product-img">${p.emoji}</div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${starsHTML(p.rating)}</span>
        <span class="rating-count">(${p.reviews.toLocaleString()})</span>
      </div>
      ${p.prime ? '<div class="prime-badge"><i class="fas fa-check-circle"></i> Prime</div>' : ''}
      <div class="product-price">
        <span class="price-current">₹${p.price.toLocaleString()}</span>
        <span class="price-mrp">₹${p.mrp.toLocaleString()}</span>
        <span class="price-discount">${p.discount}% off</span>
      </div>
    </div>
    <div class="product-card-actions">
      <button class="btn-primary" onclick="event.stopPropagation();addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Add</button>
      <button class="btn-secondary" onclick="event.stopPropagation();buyNow(${p.id})">Buy Now</button>
    </div>
  </div>`;
}

function starsHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '★';
    else if (rating >= i - 0.5) html += '✩';
    else html += '☆';
  }
  return html;
}

// ===== SLIDER =====
function initSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('slideDots');
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });
  startAutoSlide();
}

function startAutoSlide() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  startAutoSlide();
}

function goToSlide(i) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = i;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  startAutoSlide();
}

// ===== SEARCH =====
function liveSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const sugg = document.getElementById('searchSuggestions');
  if (!q) { sugg.classList.remove('open'); return; }
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q)).slice(0,6);
  if (!matches.length) { sugg.classList.remove('open'); return; }
  sugg.innerHTML = matches.map(p => `
    <div class="suggestion-item" onclick="selectSuggestion('${p.name.replace(/'/g,"\\'")}')">
      <i class="fas fa-search"></i>
      <span>${highlightMatch(p.name, q)}</span>
      <small style="margin-left:auto;color:var(--text3)">${p.category}</small>
    </div>
  `).join('');
  sugg.classList.add('open');
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query);
  if (idx < 0) return text;
  return text.slice(0, idx) + `<strong>${text.slice(idx, idx+query.length)}</strong>` + text.slice(idx+query.length);
}

function selectSuggestion(name) {
  document.getElementById('searchInput').value = name;
  document.getElementById('searchSuggestions').classList.remove('open');
  doSearch();
}

function doSearch() {
  document.getElementById('searchSuggestions').classList.remove('open');
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const cat = document.getElementById('searchCategory').value;
  showPage('search');
  currentFilterCat = cat === 'all' ? 'all' : cat;
  document.getElementById('searchInfo').innerHTML = `Showing results ${q ? `for <strong>"${q}"</strong>` : ''} ${cat !== 'all' ? `in <strong>${cat}</strong>` : ''}`;
  let results = PRODUCTS.filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchC = cat === 'all' || p.category === cat;
    return matchQ && matchC;
  });
  document.getElementById('searchResults').innerHTML = results.length
    ? results.map(p => productCardHTML(p)).join('')
    : '<div class="empty-state"><div class="empty-icon">🔍</div><h3>No products found</h3><p>Try different keywords or filters</p></div>';
  buildFilterCats(results);
}

function filterCategory(cat) {
  currentFilterCat = cat;
  document.getElementById('searchInput').value = '';
  document.getElementById('searchCategory').value = cat;
  showPage('search');
  const results = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  const catName = cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1);
  document.getElementById('searchInfo').innerHTML = `<strong>${results.length}</strong> products in <strong>${catName}</strong>`;
  document.getElementById('searchResults').innerHTML = results.map(p => productCardHTML(p)).join('');
  buildFilterCats(results);
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.getElementById('minRating').value = '0';
  document.getElementById('sortBy').value = 'relevance';
}

function buildFilterCats(results) {
  const cats = [...new Set(results.map(p => p.category))];
  const allCats = [...new Set(PRODUCTS.map(p => p.category))];
  document.getElementById('filterCats').innerHTML = allCats.map(c => `
    <label class="filter-cat-item">
      <input type="checkbox" value="${c}" ${currentFilterCat === c || currentFilterCat === 'all' ? 'checked' : ''} onchange="applyFilters()" />
      ${c.charAt(0).toUpperCase() + c.slice(1)}
    </label>
  `).join('');
}

function applyFilters() {
  const minP = parseFloat(document.getElementById('minPrice').value) || 0;
  const maxP = parseFloat(document.getElementById('maxPrice').value) || Infinity;
  const minR = parseFloat(document.getElementById('minRating').value) || 0;
  const sortBy = document.getElementById('sortBy').value;
  const checkedCats = [...document.querySelectorAll('#filterCats input:checked')].map(el => el.value);
  const q = document.getElementById('searchInput').value.trim().toLowerCase();

  let results = PRODUCTS.filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q);
    const matchC = checkedCats.length === 0 || checkedCats.includes(p.category);
    const matchP = p.price >= minP && p.price <= maxP;
    const matchR = p.rating >= minR;
    return matchQ && matchC && matchP && matchR;
  });

  if (sortBy === 'price-asc') results.sort((a,b) => a.price - b.price);
  else if (sortBy === 'price-desc') results.sort((a,b) => b.price - a.price);
  else if (sortBy === 'rating') results.sort((a,b) => b.rating - a.rating);
  else if (sortBy === 'discount') results.sort((a,b) => b.discount - a.discount);

  document.getElementById('searchInfo').innerHTML = `Showing <strong>${results.length}</strong> results`;
  document.getElementById('searchResults').innerHTML = results.length
    ? results.map(p => productCardHTML(p)).join('')
    : '<div class="empty-state"><div class="empty-icon">🔍</div><h3>No products found</h3><p>Adjust your filters</p></div>';
}

function clearFilters() {
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.getElementById('minRating').value = '0';
  document.getElementById('sortBy').value = 'relevance';
  document.querySelectorAll('#filterCats input').forEach(el => el.checked = true);
  filterCategory('all');
}

// ===== PRODUCT DETAIL =====
function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentDetailProduct = p;
  modalQty = 1;

  // Track recently viewed
  recentlyViewed = [id, ...recentlyViewed.filter(x => x !== id)].slice(0,10);
  save();

  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0,3);
  const pReviews = FEATURED_REVIEWS.slice(0,3);

  document.getElementById('productModalContent').innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-img">${p.emoji}</div>
      <div class="product-detail-info">
        ${p.tag ? `<div class="product-badge" style="position:static;display:inline-block;margin-bottom:8px">${p.tag}</div>` : ''}
        <h2>${p.name}</h2>
        <div class="product-rating" style="margin:8px 0">
          <span class="stars" style="font-size:1rem">${starsHTML(p.rating)}</span>
          <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()} ratings)</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:8px;margin:12px 0">
          <span class="detail-price">₹${p.price.toLocaleString()}</span>
          <span class="detail-mrp">₹${p.mrp.toLocaleString()}</span>
          <span class="detail-discount">${p.discount}% Off</span>
        </div>
        <p class="detail-in-stock"><i class="fas fa-check-circle"></i> In Stock – Usually ships in 1-2 days</p>
        ${p.prime ? '<div class="prime-badge" style="margin:4px 0"><i class="fas fa-check-circle"></i> Eligible for FREE Prime Delivery</div>' : ''}
        <p class="detail-desc">${p.desc}</p>
        <div style="display:flex;align-items:center;gap:12px;margin:12px 0">
          <span style="font-size:.85rem;font-weight:700">Qty:</span>
          <div class="qty-selector">
            <button onclick="changeModalQty(-1)">−</button>
            <span id="modalQtyDisplay">1</span>
            <button onclick="changeModalQty(1)">+</button>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn-primary" onclick="addToCart(${p.id}, true)"><i class="fas fa-cart-plus"></i> Add to Cart</button>
          <button class="btn-secondary" onclick="buyNow(${p.id})">⚡ Buy Now</button>
          <button class="wishlist-toggle ${wishlist.includes(p.id)?'active':''}" onclick="toggleWishlist(${p.id})" style="position:static;width:auto;height:auto;padding:8px 14px;border-radius:8px;font-size:.85rem;display:flex;align-items:center;gap:6px">
            <i class="fa${wishlist.includes(p.id)?'s':'r'} fa-heart"></i> ${wishlist.includes(p.id)?'Wishlisted':'Wishlist'}
          </button>
        </div>
      </div>
    </div>

    ${related.length ? `
    <div class="fbt-section">
      <h4>🛒 Frequently Bought Together</h4>
      <div class="fbt-items">
        ${related.map(r => `
          <div class="fbt-item" onclick="openProductDetail(${r.id})">
            <span class="fbt-emoji">${r.emoji}</span>
            <div>
              <div style="font-size:.78rem;font-weight:600">${r.name.slice(0,40)}…</div>
              <div style="color:var(--deal-red);font-weight:800">₹${r.price.toLocaleString()}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>` : ''}

    <div class="reviews-section-detail">
      <h4>⭐ Customer Reviews</h4>
      ${pReviews.map(r => `
        <div class="review-card">
          <div class="reviewer" style="display:flex;justify-content:space-between">
            <span>${r.name}</span>
            <span class="stars">${'★'.repeat(r.rating)}</span>
          </div>
          <p class="review-text">${r.text}</p>
        </div>
      `).join('')}
    </div>
  `;
  openModal('productModal');
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQtyDisplay').textContent = modalQty;
}

// ===== CART =====
function addToCart(id, fromModal = false) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const qty = fromModal ? modalQty : 1;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  save();
  updateCartBadge();
  renderCart();
  toast(`✓ ${p.name.slice(0,30)}… added to cart`, 'success');
  if (fromModal) closeModal('productModal');
}

function buyNow(id) {
  addToCart(id, false);
  closeModal('productModal');
  showPage('checkout');
  renderCheckoutSummary();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  save();
  updateCartBadge();
  renderCart();
  toast('Item removed from cart');
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  save();
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <button class="btn-primary" onclick="toggleCart();showPage('home')">Shop Now</button>
      </div>`;
    footer.innerHTML = '';
    return;
  }
  const subtotal = cart.reduce((s,c) => { const p = PRODUCTS.find(x=>x.id===c.id); return s + (p?p.price*c.qty:0); }, 0);
  const savings = cart.reduce((s,c) => { const p = PRODUCTS.find(x=>x.id===c.id); return s + (p?(p.mrp-p.price)*c.qty:0); }, 0);
  container.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    if (!p) return '';
    return `
    <div class="cart-item">
      <div class="cart-item-img">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">₹${(p.price * c.qty).toLocaleString()}</div>
        <div class="cart-item-actions">
          <div class="cart-qty">
            <button onclick="updateCartQty(${p.id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="updateCartQty(${p.id},1)">+</button>
          </div>
          <button class="cart-remove" onclick="removeFromCart(${p.id})">Remove</button>
          <button class="wishlist-btn" onclick="moveToWishlist(${p.id})" title="Move to wishlist">
            <i class="far fa-heart"></i> Save
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  footer.innerHTML = `
    <div class="cart-total">
      <span>Subtotal (${cart.reduce((s,c)=>s+c.qty,0)} items)</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    ${savings > 0 ? `<p style="color:var(--success);font-size:.78rem;margin-bottom:8px;font-weight:600">You save ₹${savings.toLocaleString()} on this order</p>` : ''}
    <div class="cart-footer-btns">
      <button class="btn-primary" onclick="toggleCart();showPage('checkout');renderCheckoutSummary()">Proceed to Checkout</button>
      <button class="btn-outline" onclick="toggleCart()">Continue Shopping</button>
    </div>`;
}

function moveToWishlist(id) {
  removeFromCart(id);
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    save();
  }
  toast('Moved to wishlist');
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  if (!isOpen) renderCart();
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ===== WISHLIST =====
function toggleWishlist(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    toast(`Removed from wishlist`);
  } else {
    wishlist.push(id);
    toast(`❤️ ${p?.name.slice(0,25)}… added to wishlist`, 'success');
  }
  save();
  // Re-render page
  document.querySelectorAll('.product-card').forEach(card => {
    const btn = card.querySelector('.wishlist-toggle');
    if (btn) {
      const pid = parseInt(card.querySelector('.btn-primary')?.getAttribute('onclick')?.match(/\d+/)?.[0]);
      if (pid === id) {
        btn.className = `wishlist-toggle ${wishlist.includes(id) ? 'active' : ''}`;
        btn.innerHTML = `<i class="fa${wishlist.includes(id) ? 's' : 'r'} fa-heart"></i>`;
      }
    }
  });
  if (document.getElementById('wishlistPage').style.display !== 'none') renderWishlist();
}

function renderWishlist() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  if (!wishlist.length) {
    grid.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';
  const products = wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  grid.innerHTML = products.map(p => productCardHTML(p)).join('');
}

// ===== AUTH =====
function openAuth() { openModal('authModal'); }

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('loginForm').classList.toggle('active', tab === 'login');
  document.getElementById('registerForm').classList.toggle('active', tab === 'register');
}

function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const user = users.find(u => u.email === email && u.password === pass);
  if (!user) { toast('Invalid email or password', 'error'); return; }
  currentUser = { name: user.name, email: user.email };
  localStorage.setItem('shopnow_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeModal('authModal');
  toast(`Welcome back, ${user.name}! 👋`, 'success');
}

function register() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPassword').value;
  if (!name || !email || !pass) { toast('Please fill all fields', 'error'); return; }
  if (pass.length < 6) { toast('Password must be at least 6 characters', 'error'); return; }
  if (users.find(u => u.email === email)) { toast('Email already registered', 'error'); return; }
  users.push({ name, email, password: pass });
  save();
  currentUser = { name, email };
  localStorage.setItem('shopnow_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeModal('authModal');
  toast(`Account created! Welcome, ${name}! 🎉`, 'success');
}

function logout() {
  currentUser = null;
  localStorage.removeItem('shopnow_user');
  updateAuthUI();
  toast('Signed out successfully');
  showPage('home');
}

function updateAuthUI() {
  const authBtn = document.getElementById('authBtn');
  const userMenu = document.getElementById('userMenu');
  if (currentUser) {
    authBtn.style.display = 'none';
    userMenu.style.display = 'flex';
    document.getElementById('userGreet').textContent = `Hello, ${currentUser.name.split(' ')[0]}`;
  } else {
    authBtn.style.display = 'flex';
    userMenu.style.display = 'none';
  }
}

// ===== PAGES =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(page + 'Page');
  if (!target) return;
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'wishlist') renderWishlist();
  if (page === 'orders') renderOrders();
  if (page === 'deals') renderDeals();
  if (page === 'home') { renderHome(); renderRecentlyViewed(); }
  if (page === 'checkout') {
    checkoutStep = 1;
    renderCheckoutSummary();
    updateStepIndicators();
    document.querySelectorAll('.checkout-step').forEach((s,i) => s.classList.toggle('active', i === 0));
  }
}

// ===== DEALS =====
function renderDeals() {
  const deals = PRODUCTS.filter(p => p.discount >= 20).sort((a,b) => b.discount - a.discount);
  document.getElementById('dealsGrid').innerHTML = deals.map(p => productCardHTML(p)).join('');
}

// ===== ORDERS =====
function renderOrders() {
  const list = document.getElementById('ordersList');
  const empty = document.getElementById('ordersEmpty');
  if (!orders.length) {
    list.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = orders.slice().reverse().map(o => `
    <div class="order-card animate-in">
      <div class="order-card-header">
        <div>
          <div class="order-id">Order #${o.id}</div>
          <div class="order-date">${new Date(o.date).toLocaleDateString('en-IN', {year:'numeric',month:'long',day:'numeric'})}</div>
        </div>
        <div style="text-align:right">
          <div class="order-status">✓ ${o.status}</div>
          <div style="font-weight:800;font-family:var(--font-display)">₹${o.total.toLocaleString()}</div>
        </div>
      </div>
      <div class="order-card-items">
        ${o.items.map(item => {
          const p = PRODUCTS.find(x => x.id === item.id);
          return p ? `<div class="order-card-item"><span>${p.emoji}</span><span>${p.name.slice(0,30)}… ×${item.qty}</span></div>` : '';
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ===== CHECKOUT =====
function renderCheckoutSummary() {
  const summary = document.getElementById('checkoutSummary');
  const subtotal = cart.reduce((s,c) => { const p = PRODUCTS.find(x=>x.id===c.id); return s+(p?p.price*c.qty:0); }, 0);
  const savings = cart.reduce((s,c) => { const p = PRODUCTS.find(x=>x.id===c.id); return s+(p?(p.mrp-p.price)*c.qty:0); }, 0);
  const delivery = subtotal > 499 ? 0 : 40;
  const total = subtotal + delivery;
  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="summary-row savings"><span>Discount</span><span>−₹${savings.toLocaleString()}</span></div>
    <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:var(--success)">FREE</span>' : '₹40'}</span></div>
    <div class="summary-row total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
    <p style="font-size:.75rem;color:var(--text3);margin-top:12px">EMI starts at ₹${Math.round(total/12).toLocaleString()}/month</p>
  `;
}

function nextStep(step) {
  if (step === 2) {
    const name = document.getElementById('chkName').value.trim();
    const addr = document.getElementById('chkAddr1').value.trim();
    const city = document.getElementById('chkCity').value.trim();
    if (!name || !addr || !city) { toast('Please fill all required fields', 'error'); return; }
  }
  if (step === 3) renderReviewStep();
  checkoutStep = step;
  document.querySelectorAll('.checkout-step').forEach((s,i) => s.classList.toggle('active', i === step-1));
  updateStepIndicators();
}

function updateStepIndicators() {
  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById(`step${i}Ind`);
    ind.classList.toggle('active', i === checkoutStep);
    ind.classList.toggle('done', i < checkoutStep);
    if (i < checkoutStep) ind.querySelector('span').innerHTML = '<i class="fas fa-check"></i>';
    else ind.querySelector('span').textContent = i;
  }
}

function renderReviewStep() {
  const container = document.getElementById('reviewItems');
  container.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    if (!p) return '';
    return `
    <div class="review-item-row">
      <div class="review-item-img">${p.emoji}</div>
      <div class="review-item-info">
        <div class="review-item-name">${p.name}</div>
        <div style="font-size:.78rem;color:var(--text3)">Qty: ${c.qty}</div>
      </div>
      <div class="review-item-price">₹${(p.price * c.qty).toLocaleString()}</div>
    </div>`;
  }).join('');
}

function placeOrder() {
  if (!currentUser) { toast('Please sign in to place an order', 'error'); closeModal('orderModal'); openAuth(); return; }
  if (!cart.length) { toast('Your cart is empty', 'error'); return; }
  const total = cart.reduce((s,c) => { const p = PRODUCTS.find(x=>x.id===c.id); return s+(p?p.price*c.qty:0); }, 0);
  const orderId = 'SNW' + Date.now().toString().slice(-8);
  const order = { id: orderId, items: [...cart], total, date: new Date().toISOString(), status: 'Confirmed' };
  orders.push(order);
  const itemsSummary = [...cart];
  cart = [];
  save();
  updateCartBadge();
  document.getElementById('orderMsg').innerHTML = `Order <strong>#${orderId}</strong> placed successfully! Estimated delivery: <strong>${getDeliveryDate()}</strong>`;
  document.getElementById('orderSummaryItems').innerHTML = itemsSummary.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return p ? `<div class="order-item-row"><span>${p.emoji} ${p.name.slice(0,35)}…</span><span>₹${(p.price*c.qty).toLocaleString()}</span></div>` : '';
  }).join('') + `<div class="order-item-row" style="font-weight:700;font-size:.95rem"><span>Total</span><span>₹${total.toLocaleString()}</span></div>`;
  openModal('orderModal');
}

function getDeliveryDate() {
  const d = new Date();
  d.setDate(d.getDate() + Math.floor(Math.random() * 3) + 2);
  return d.toLocaleDateString('en-IN', { weekday:'long', month:'long', day:'numeric' });
}

function formatCard(el) {
  let val = el.value.replace(/\D/g,'').slice(0,16);
  el.value = val.replace(/(.{4})/g,'$1 ').trim();
}

// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    document.getElementById('searchSuggestions').classList.remove('open');
  }
});

// ===== DARK MODE =====
function toggleDark() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('darkIcon').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
  localStorage.setItem('shopnow_theme', isDark ? 'light' : 'dark');
}
const savedTheme = localStorage.getItem('shopnow_theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') document.getElementById('darkIcon').className = 'fas fa-sun';
}

// ===== MOBILE NAV =====
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.addEventListener('click', e => {
  const nav = document.getElementById('navLinks');
  if (!e.target.closest('.header-nav')) nav.classList.remove('open');
});

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}

// ===== TOAST =====
let toastTimeout;
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { el.classList.remove('show'); }, 3000);
}