/**
 * AMAZON CLONE - script.js (Full Image Version)
 * ─────────────────────────────────────────────
 * IMAGE OPTIONS:
 *   USE_LOCAL_IMAGES = false  → CDN images (default, works instantly)
 *   USE_LOCAL_IMAGES = true   → put your files in images/ folder
 *     then update each product's image_local: 'images/yourfile.jpg'
 */

'use strict';

const USE_LOCAL_IMAGES = false;

/* ==========================================
   CONTINUOUSLY MOVING IMAGE STRIP DATA
   ========================================== */
const STRIP_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=320&q=75', label: 'Headphones' },
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=320&q=75', label: 'Footwear' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=320&q=75', label: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=320&q=75', label: 'Furniture' },
  { src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=320&q=75', label: 'Beauty' },
  { src: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=320&q=75', label: 'Electronics' },
  { src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=320&q=75', label: 'Fashion' },
  { src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=320&q=75', label: 'Ethnic Wear' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&q=75', label: 'Fitness' },
  { src: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=320&q=75', label: 'Cookware' },
  { src: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=320&q=75', label: 'Men\'s Wear' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=320&q=75', label: 'Bedding' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=320&q=75', label: 'Bedroom' },
  { src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=320&q=75', label: 'Office' },
  { src: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=320&q=75', label: 'Audio' },
  { src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=320&q=75', label: 'Pharmacy' },
];

function buildImageStrip() {
  const strip = document.getElementById('imgStrip');
  if (!strip) return;
  // render twice for seamless infinite loop
  const html = [...STRIP_IMAGES, ...STRIP_IMAGES].map(item => `
    <div class="strip-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy"
           onerror="this.style.opacity='0'"/>
      <div class="strip-label">${item.label}</div>
    </div>
  `).join('');
  strip.innerHTML = html;
}

/* ==========================================
   PRODUCTS DATA
   ========================================== */
const PRODUCTS = {

  headphones: [
    { id:'h1', brand:'boAt',     title:'boAt Rockerz 450 Bluetooth Wireless On-Ear Headphone',          price:1499,  originalPrice:3990,  rating:4.3, reviews:98432,  badge:'-62%',
      image_cdn:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', image_local:'images/boat-rockerz-450.jpg', color:'#333', icon:'fas fa-headphones' },
    { id:'h2', brand:'Sony',     title:'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',          price:26990, originalPrice:34990, rating:4.6, reviews:12345,  badge:'-23%',
      image_cdn:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80', image_local:'images/sony-wh1000xm5.jpg',   color:'#1a1a1a', icon:'fas fa-headphones-alt' },
    { id:'h3', brand:'JBL',      title:'JBL Tune 770NC Adaptive Noise Cancelling Wireless Headphones',  price:5999,  originalPrice:9999,  rating:4.4, reviews:34210,  badge:'-40%',
      image_cdn:'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&q=80', image_local:'images/jbl-tune-770.jpg',      color:'#e60023', icon:'fas fa-headphones' },
    { id:'h4', brand:'boAt',     title:'boAt Airdopes 141 TWS Earbuds 42H Total Playtime IPX4',         price:799,   originalPrice:2990,  rating:4.2, reviews:245670, badge:'-73%',
      image_cdn:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', image_local:'images/boat-airdopes-141.jpg', color:'#ff6b6b', icon:'fas fa-headset' },
    { id:'h5', brand:'Noise',    title:'Noise Buds VS104 True Wireless Earbuds 50H Playtime',            price:999,   originalPrice:3999,  rating:4.1, reviews:87654,  badge:'-75%',
      image_cdn:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80', image_local:'images/noise-buds.jpg',         color:'#4ecdc4', icon:'fas fa-headset' },
    { id:'h6', brand:'Marshall', title:'Marshall Major IV Wireless Headphones 80H Battery Life',         price:9999,  originalPrice:13999, rating:4.5, reviews:5432,   badge:'NEW', badgeType:'new',
      image_cdn:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80', image_local:'images/marshall-major-iv.jpg', color:'#8B4513', icon:'fas fa-headphones' },
  ],

  kitchen: [
    { id:'k1', brand:'Prestige',   title:'Prestige IRIS Plus 3L Aluminium Pressure Cooker Outer Lid',      price:699,  originalPrice:1595, rating:4.4, reviews:56789,  badge:'-56%',
      image_cdn:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80', image_local:'images/prestige-cooker.jpg', color:'#c0392b', icon:'fas fa-utensils' },
    { id:'k2', brand:'Pigeon',     title:'Pigeon by Stovekraft Amaze Plus Electric Kettle 1.5L 1500W',     price:449,  originalPrice:799,  rating:4.3, reviews:123456, badge:'-44%',
      image_cdn:'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?w=400&q=80', image_local:'images/pigeon-kettle.jpg',   color:'#e67e22', icon:'fas fa-coffee' },
    { id:'k3', brand:'Wonderchef', title:'Wonderchef Aluminium Non-Stick Kadai 24cm with Glass Lid',        price:799,  originalPrice:1795, rating:4.2, reviews:34567,  badge:'-55%',
      image_cdn:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', image_local:'images/wonderchef-kadai.jpg', color:'#c0392b', icon:'fas fa-fire' },
    { id:'k4', brand:'Milton',     title:'Milton Thermosteel Flip Lid Flask 1000ml Stainless Steel',        price:499,  originalPrice:995,  rating:4.5, reviews:67890,  badge:'-50%',
      image_cdn:'https://images.unsplash.com/photo-1544441892-794166f1e3be?w=400&q=80', image_local:'images/milton-flask.jpg',    color:'#2980b9', icon:'fas fa-wine-bottle' },
    { id:'k5', brand:'Solimo',     title:'Solimo Stainless Steel 3-Piece Kitchen Tool Cooking Set',         price:379,  originalPrice:599,  rating:4.1, reviews:23456,  badge:'-37%',
      image_cdn:'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&q=80', image_local:'images/solimo-kitchen.jpg',  color:'#27ae60', icon:'fas fa-utensils' },
    { id:'k6', brand:'Borosil',    title:'Borosil Vision Glass 12-Piece Set 205ml Microwave Safe',          price:599,  originalPrice:1290, rating:4.6, reviews:45678,  badge:'PRIME', badgeType:'prime',
      image_cdn:'https://images.unsplash.com/photo-1559181567-c3190bba5559?w=400&q=80', image_local:'images/borosil-glasses.jpg', color:'#3498db', icon:'fas fa-glass-martini' },
  ],

  trending: [
    { id:'t1', brand:'Fabdecor',      title:'Rangoli Design Cushion Cover 40×40cm Set of 5 Multicolour',      price:399, originalPrice:799,  rating:4.3, reviews:12345, badge:'-50%',
      image_cdn:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80', image_local:'images/cushion-covers.jpg',    color:'#9b59b6', icon:'fas fa-layer-group' },
    { id:'t2', brand:'Jaipur Fabric', title:'Jaipuri Hand Block Print Cotton Kurti for Women Ethnic Wear',    price:599, originalPrice:1299, rating:4.2, reviews:34567, badge:'-54%',
      image_cdn:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80', image_local:'images/jaipuri-kurti.jpg',      color:'#e91e63', icon:'fas fa-female' },
    { id:'t3', brand:'Craftghar',     title:'Wooden Handicraft Elephant Showpiece Hand-Carved Set of 3',      price:449, originalPrice:999,  rating:4.4, reviews:8901,  badge:'-55%',
      image_cdn:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80', image_local:'images/wooden-elephant.jpg',    color:'#795548', icon:'fas fa-paw' },
    { id:'t4', brand:'Ariro',         title:'Reed Diffuser Home Fragrance Set 100ml Lavender Scent',          price:299, originalPrice:699,  rating:4.1, reviews:5678,  badge:'-57%',
      image_cdn:'https://images.unsplash.com/photo-1608181831718-8f0aba0d0ea2?w=400&q=80', image_local:'images/reed-diffuser.jpg',      color:'#8bc34a', icon:'fas fa-leaf' },
    { id:'t5', brand:'Craftter',      title:'Golden Round Decorative Mirror Wall Art Antique Finish 30cm',    price:699, originalPrice:1499, rating:4.3, reviews:4567,  badge:'-53%',
      image_cdn:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80', image_local:'images/decorative-mirror.jpg',  color:'#f5c518', icon:'fas fa-circle' },
    { id:'t6', brand:'Story@Home',    title:'Double Bed Bedsheet with 2 Pillow Covers 144TC Pure Cotton',    price:499, originalPrice:1299, rating:4.2, reviews:89012, badge:'-62%',
      image_cdn:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', image_local:'images/bedsheet.jpg',           color:'#3498db', icon:'fas fa-bed' },
  ],

  furniture: [
    { id:'f1', brand:'Wakefit',       title:'Wakefit Soma Compact 3-Seater Fabric Sofa Living Room',          price:15999, originalPrice:27999, rating:4.4, reviews:3456,  badge:'-43%',
      image_cdn:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', image_local:'images/wakefit-sofa.jpg',    color:'#8d6e63', icon:'fas fa-couch' },
    { id:'f2', brand:'IKEA',          title:'IKEA BEKANT Sit/Stand Adjustable Desk 160×80cm White',            price:24999, originalPrice:34999, rating:4.3, reviews:1234,  badge:'NEW', badgeType:'new',
      image_cdn:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80', image_local:'images/ikea-desk.jpg',       color:'#607d8b', icon:'fas fa-desktop' },
    { id:'f3', brand:'Nilkamal',      title:'Nilkamal Chester Plastic Armchair All-Weather Resistant',         price:1999,  originalPrice:3999,  rating:4.2, reviews:23456, badge:'-50%',
      image_cdn:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', image_local:'images/nilkamal-chair.jpg',  color:'#e91e63', icon:'fas fa-chair' },
    { id:'f4', brand:'Godrej',        title:'Godrej Interio Slumber Hydraulic Storage Bed Queen Size',         price:18999, originalPrice:34999, rating:4.5, reviews:5678,  badge:'-46%',
      image_cdn:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80', image_local:'images/godrej-bed.jpg',      color:'#795548', icon:'fas fa-bed' },
    { id:'f5', brand:'Urban Ladder',  title:'Urban Ladder Teak Wood Study Table with Integrated Bookshelf',    price:9999,  originalPrice:16999, rating:4.4, reviews:2345,  badge:'-41%',
      image_cdn:'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80', image_local:'images/study-table.jpg',     color:'#4e342e', icon:'fas fa-book' },
    { id:'f6', brand:'Pepperfry',     title:'Pepperfry Ergonomic High-Back Mesh Office Chair with Lumbar',     price:7999,  originalPrice:14999, rating:4.3, reviews:4567,  badge:'-47%',
      image_cdn:'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&q=80', image_local:'images/office-chair.jpg',    color:'#37474f', icon:'fas fa-user-tie' },
  ],

  clothing: [
    { id:'c1', brand:'Allen Solly', title:'Allen Solly Men Slim Fit Cotton Formal Shirt Full Sleeve',         price:699,  originalPrice:1399, rating:4.3, reviews:45678, badge:'-50%',
      image_cdn:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80', image_local:'images/allen-solly-shirt.jpg', color:'#1565c0', icon:'fas fa-tshirt' },
    { id:'c2', brand:'Global Desi', title:'Global Desi Women Floral Print A-Line Kurta Cotton Blend',         price:799,  originalPrice:1999, rating:4.2, reviews:23456, badge:'-60%',
      image_cdn:'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80', image_local:'images/global-desi-kurta.jpg', color:'#e91e63', icon:'fas fa-female' },
    { id:'c3', brand:'Puma',        title:"Puma Men's Ultraride Running Shoes Lightweight Mesh Upper",        price:1999, originalPrice:3999, rating:4.4, reviews:67890, badge:'NEW', badgeType:'new',
      image_cdn:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', image_local:'images/puma-shoes.jpg',         color:'#ff5722', icon:'fas fa-running' },
    { id:'c4', brand:"Levi's",      title:"Levi's Men's 511 Slim Fit Stretch Mid-Rise Jeans",                price:1499, originalPrice:2999, rating:4.5, reviews:89012, badge:'-50%',
      image_cdn:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', image_local:'images/levis-jeans.jpg',        color:'#1a237e', icon:'fas fa-user' },
    { id:'c5', brand:'DressBerry',  title:"DressBerry Women's Floral Printed Fit & Flare Midi Dress",        price:599,  originalPrice:1499, rating:4.1, reviews:12345, badge:'-60%',
      image_cdn:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80', image_local:'images/dresberry-dress.jpg',   color:'#ad1457', icon:'fas fa-female' },
    { id:'c6', brand:'Woodland',    title:"Woodland Men's Waterproof Trekking Leather Ankle Boots",          price:2499, originalPrice:4999, rating:4.4, reviews:34567, badge:'-50%',
      image_cdn:'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80', image_local:'images/woodland-boots.jpg',    color:'#4e342e', icon:'fas fa-shoe-prints' },
  ],
};

const BEAUTY_PRODUCTS = [
  { title:'Lakme Eyeconic Kajal Twin Pack',       price:'₹149', image_cdn:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80', image_local:'images/lakme-kajal.jpg' },
  { title:'Dove Nourishing Body Lotion 200ml',    price:'₹175', image_cdn:'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&q=80', image_local:'images/dove-lotion.jpg' },
  { title:'Maybelline Fit Me Liquid Foundation',  price:'₹299', image_cdn:'https://images.unsplash.com/photo-1631214524020-3c69888e0f8f?w=200&q=80', image_local:'images/maybelline.jpg' },
  { title:'Biotique Bio Almond Moisturising Oil', price:'₹125', image_cdn:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&q=80', image_local:'images/biotique-oil.jpg' },
];

const HOME_PRODUCTS = [
  { title:'Pigeon Induction Base Pressure Cooker 3L', price:'₹599', image_cdn:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=200&q=80', image_local:'images/pigeon-cooker.jpg' },
  { title:'Solimo 3-Piece Stainless Steel Kitchen Set', price:'₹249', image_cdn:'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=200&q=80', image_local:'images/solimo-tools.jpg' },
  { title:'Amazon Basics Digital Kitchen Scale 10kg', price:'₹999', image_cdn:'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&q=80', image_local:'images/digital-scale.jpg' },
  { title:'Cello Opalware Dinner Set 18 Pieces',      price:'₹1,299', image_cdn:'https://images.unsplash.com/photo-1559181567-c3190bba5559?w=200&q=80', image_local:'images/dinner-set.jpg' },
];

/* ==========================================
   HELPER
   ========================================== */
function getImage(p) { return USE_LOCAL_IMAGES ? p.image_local : p.image_cdn; }

/* ==========================================
   CART
   ========================================== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('amazonCart') || '[]'); } catch(e) { cart = []; }

function saveCart() { try { localStorage.setItem('amazonCart', JSON.stringify(cart)); } catch(e) {} }

function updateCartUI() {
  const count = cart.reduce((s,i) => s + i.qty, 0);
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const c = document.getElementById('cartCount');
  if (c) { c.textContent = count; c.classList.add('bump'); setTimeout(() => c.classList.remove('bump'), 300); }
  const t = document.getElementById('cartTotal');
  if (t) t.textContent = '₹' + total.toLocaleString('en-IN');
  renderCartItems();
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  if (!el) return;
  if (!cart.length) {
    el.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-cart"></i><h3>Your cart is empty</h3><p>Add items to get started</p></div>`;
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="cart-img-fallback" style="display:none;color:${item.color}"><i class="${item.icon}"></i></div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
        <div class="cart-item-qty">Qty: ${item.qty}</div>
      </div>
      <button class="remove-item" onclick="removeFromCart('${item.id}')" title="Remove"><i class="fas fa-trash-alt"></i></button>
    </div>`).join('');
}

function addToCart(productId, event) {
  if (event) event.stopPropagation();
  const product = Object.values(PRODUCTS).flat().find(p => p.id === productId);
  if (!product) return;
  const ex = cart.find(i => i.id === productId);
  if (ex) { ex.qty++; }
  else { cart.push({ id: product.id, title: product.title, price: product.price, image: getImage(product), icon: product.icon || 'fas fa-box', color: product.color || '#888', qty: 1 }); }
  saveCart(); updateCartUI();
  showToast('<i class="fas fa-check-circle"></i> Added to Cart!');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartUI();
  showToast('<i class="fas fa-trash-alt"></i> Item removed');
}

let cartOpen = false;
function toggleCart(event) {
  if (event) event.preventDefault();
  cartOpen = !cartOpen;
  document.getElementById('cartPanel').classList.toggle('open', cartOpen);
  document.getElementById('cartOverlay').classList.toggle('show', cartOpen);
  document.body.style.overflow = cartOpen ? 'hidden' : '';
}

/* ==========================================
   TOAST
   ========================================== */
let toastTimer;
function showToast(html) {
  let t = document.getElementById('globalToast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.id = 'globalToast'; document.body.appendChild(t); }
  t.innerHTML = html; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ==========================================
   PRODUCT CARD
   ========================================== */
function renderStars(r) {
  const f = Math.floor(r), h = r % 1 >= 0.5, e = 5 - f - (h ? 1 : 0);
  return '★'.repeat(f) + (h ? '⯨' : '') + '☆'.repeat(e);
}

function renderProductCard(p) {
  const disc = Math.round((1 - p.price / p.originalPrice) * 100);
  return `
    <div class="product-card" onclick="showProductDetail()">
      ${p.badge ? `<span class="product-badge${p.badgeType ? ' ' + p.badgeType : ''}">${p.badge}</span>` : ''}
      <div class="product-img-wrap">
        <img src="${getImage(p)}" alt="${p.title}" class="product-img" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="product-img-fallback" style="display:none;color:${p.color}">
          <i class="${p.icon}" style="font-size:52px"></i>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-title">${p.title}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString('en-IN')})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>
          <span class="price-discount">${disc}% off</span>
        </div>
        <p class="price-tag"><i class="fas fa-truck" style="color:#007600;font-size:10px"></i> Free delivery</p>
        <button class="add-to-cart-btn" onclick="addToCart('${p.id}', event)">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>`;
}

function renderSkeletons(n = 6) {
  return Array(n).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton skeleton-text medium" style="margin:10px 10px 6px"></div>
      <div class="skeleton skeleton-text short" style="margin:0 10px 6px"></div>
      <div class="skeleton skeleton-text medium" style="margin:0 10px 6px"></div>
      <div class="skeleton skeleton-btn" style="margin:0 10px 10px"></div>
    </div>`).join('');
}

function renderSection(gridId, products, delay = 0) {
  const g = document.getElementById(gridId);
  if (!g) return;
  g.innerHTML = renderSkeletons(6);
  setTimeout(() => { g.innerHTML = products.map(renderProductCard).join(''); }, delay + 500);
}

function renderMiniGrid(gridId, items) {
  const el = document.getElementById(gridId);
  if (!el) return;
  el.innerHTML = items.map(item => `
    <div class="col-product-item">
      <img src="${USE_LOCAL_IMAGES ? item.image_local : item.image_cdn}" alt="${item.title}"
           class="mini-product-img" loading="lazy" onerror="this.style.display='none'"/>
      <span>${item.title}</span>
      <span class="item-price">${item.price}</span>
    </div>`).join('');
}

/* ==========================================
   CAROUSEL (6 slides)
   ========================================== */
let currentSlide = 0;
let autoSlideTimer;
const TOTAL_SLIDES = 6;

function initCarousel() {
  const dots = document.getElementById('carouselDots');
  if (!dots) return;
  dots.innerHTML = Array(TOTAL_SLIDES).fill(0)
    .map((_,i) => `<div class="dot${i===0?' active':''}" onclick="goToSlide(${i})"></div>`).join('');
  // Add counter element
  const carousel = document.getElementById('carousel');
  if (carousel) {
    const ctr = document.createElement('div');
    ctr.className = 'slide-counter';
    ctr.id = 'slideCounter';
    ctr.textContent = `1 / ${TOTAL_SLIDES}`;
    carousel.appendChild(ctr);
  }
  setActiveSlide();
  startAutoSlide();
}

function setActiveSlide() {
  document.querySelectorAll('.carousel-slide').forEach((s, i) => {
    s.classList.toggle('active', i === currentSlide);
  });
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  const ctr = document.getElementById('slideCounter');
  if (ctr) ctr.textContent = `${currentSlide + 1} / ${TOTAL_SLIDES}`;
  const track = document.getElementById('carouselTrack');
  if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveCarousel(dir) {
  currentSlide = (currentSlide + dir + TOTAL_SLIDES) % TOTAL_SLIDES;
  setActiveSlide();
  restartAutoSlide();
}
function goToSlide(i) { currentSlide = i; setActiveSlide(); restartAutoSlide(); }
function startAutoSlide() { clearInterval(autoSlideTimer); autoSlideTimer = setInterval(() => moveCarousel(1), 4500); }
function restartAutoSlide() { startAutoSlide(); }

/* ==========================================
   SEARCH
   ========================================== */
function searchProducts() {
  const q = document.getElementById('searchInput')?.value?.trim().toLowerCase();
  if (!q) { clearSearch(); return; }
  const results = Object.values(PRODUCTS).flat().filter(p =>
    p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  const sec = document.getElementById('searchResults');
  const grid = document.getElementById('searchGrid');
  const title = document.getElementById('searchTitle');
  if (!sec || !grid || !title) return;
  sec.style.display = 'block';
  title.textContent = results.length
    ? `Search results for "${q}" (${results.length} items)`
    : `No results found for "${q}"`;
  grid.innerHTML = results.length
    ? results.map(renderProductCard).join('')
    : '<p style="padding:20px;color:#888;grid-column:1/-1">Try different keywords or browse categories above.</p>';
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSearch() {
  const s = document.getElementById('searchResults'); if (s) s.style.display = 'none';
  const i = document.getElementById('searchInput');   if (i) i.value = '';
}

function showProductDetail() { showToast('<i class="fas fa-info-circle"></i> Product detail coming soon!'); }

/* ==========================================
   STICKY HEADER
   ========================================== */
function initStickyHeader() {
  const h = document.getElementById('mainHeader');
  if (!h) return;
  window.addEventListener('scroll', () => {
    h.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.5)' : '0 2px 10px rgba(0,0,0,0.4)';
  }, { passive: true });
}

/* ==========================================
   KEYBOARD
   ========================================== */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter'  && document.activeElement?.id === 'searchInput') searchProducts();
  if (e.key === 'Escape' && cartOpen) toggleCart();
});

/* ==========================================
   INIT
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  buildImageStrip();

  renderSection('headphonesGrid', PRODUCTS.headphones,   0);
  renderSection('kitchenGrid',    PRODUCTS.kitchen,     100);
  renderSection('trendingGrid',   PRODUCTS.trending,    200);
  renderSection('furnitureGrid',  PRODUCTS.furniture,   300);
  renderSection('clothingGrid',   PRODUCTS.clothing,    400);

  renderMiniGrid('beautyGrid', BEAUTY_PRODUCTS);
  renderMiniGrid('homeGrid',   HOME_PRODUCTS);

  initCarousel();
  initStickyHeader();
  updateCartUI();

  const carousel = document.getElementById('carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    carousel.addEventListener('mouseleave', startAutoSlide);
  }

  console.log('%c✅ Amazon Clone with Images ready!', 'color:#FF9900;font-size:15px;font-weight:bold');
});