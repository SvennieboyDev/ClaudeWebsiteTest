// =========================================
// VeloWorld Bike Store — Main App
// =========================================

// Bike SVG illustrations by category
function bikeIllustration(category, color = '#F97316', size = '85%') {
  const col = color || '#F97316';
  const svgs = {
    road: `<svg viewBox="0 0 280 180" width="${size}" style="max-height:${size}">
      <circle cx="70" cy="130" r="42" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="70" cy="130" r="8" fill="${col}"/>
      <circle cx="210" cy="130" r="42" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="210" cy="130" r="8" fill="${col}"/>
      <line x1="70" y1="130" x2="140" y2="75" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="75" x2="210" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="75" x2="120" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="70" y1="130" x2="120" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="75" x2="155" y2="48" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="148" y1="48" x2="162" y2="48" stroke="${col}" stroke-width="8" stroke-linecap="round"/>
      <line x1="100" y1="65" x2="140" y2="75" stroke="${col}" stroke-width="4" stroke-linecap="round"/>
      <line x1="95" y1="58" x2="105" y2="72" stroke="${col}" stroke-width="7" stroke-linecap="round"/>
      <circle cx="120" cy="130" r="6" fill="none" stroke="${col}" stroke-width="4"/>
    </svg>`,
    mountain: `<svg viewBox="0 0 280 180" width="${size}" style="max-height:${size}">
      <circle cx="68" cy="132" r="44" fill="none" stroke="${col}" stroke-width="7"/>
      <circle cx="68" cy="132" r="8" fill="${col}"/>
      <circle cx="212" cy="132" r="44" fill="none" stroke="${col}" stroke-width="7"/>
      <circle cx="212" cy="132" r="8" fill="${col}"/>
      <line x1="68" y1="132" x2="140" y2="72" stroke="${col}" stroke-width="6" stroke-linecap="round"/>
      <line x1="140" y1="72" x2="212" y2="132" stroke="${col}" stroke-width="6" stroke-linecap="round"/>
      <line x1="140" y1="72" x2="118" y2="132" stroke="${col}" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="132" x2="118" y2="132" stroke="${col}" stroke-width="6" stroke-linecap="round"/>
      <line x1="140" y1="72" x2="130" y2="42" stroke="${col}" stroke-width="6" stroke-linecap="round"/>
      <rect x="115" y="36" width="30" height="10" rx="5" fill="${col}"/>
      <line x1="110" y1="68" x2="140" y2="72" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="105" y1="58" x2="115" y2="78" stroke="${col}" stroke-width="10" stroke-linecap="round"/>
      <rect x="130" y="38" width="6" height="30" rx="3" fill="${col}"/>
    </svg>`,
    city: `<svg viewBox="0 0 280 180" width="${size}" style="max-height:${size}">
      <circle cx="72" cy="130" r="40" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="72" cy="130" r="7" fill="${col}"/>
      <circle cx="208" cy="130" r="40" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="208" cy="130" r="7" fill="${col}"/>
      <line x1="72" y1="130" x2="140" y2="80" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="80" x2="208" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="80" x2="122" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="72" y1="130" x2="122" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="80" x2="145" y2="50" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="135" y1="50" x2="155" y2="50" stroke="${col}" stroke-width="8" stroke-linecap="round"/>
      <line x1="105" y1="70" x2="140" y2="80" stroke="${col}" stroke-width="4" stroke-linecap="round"/>
      <rect x="98" y="60" width="16" height="20" rx="4" fill="${col}" opacity="0.8"/>
      <rect x="185" y="95" width="40" height="18" rx="4" fill="${col}" opacity="0.6"/>
    </svg>`,
    electric: `<svg viewBox="0 0 280 180" width="${size}" style="max-height:${size}">
      <circle cx="70" cy="130" r="42" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="70" cy="130" r="8" fill="${col}"/>
      <circle cx="210" cy="130" r="42" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="210" cy="130" r="8" fill="${col}"/>
      <line x1="70" y1="130" x2="138" y2="76" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="138" y1="76" x2="210" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="138" y1="76" x2="118" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="70" y1="130" x2="118" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="138" y1="76" x2="148" y2="48" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="140" y1="48" x2="156" y2="48" stroke="${col}" stroke-width="8" stroke-linecap="round"/>
      <rect x="155" y="100" width="44" height="20" rx="6" fill="${col}" opacity="0.85"/>
      <text x="160" y="115" font-size="13" fill="white" font-weight="bold">⚡</text>
      <rect x="104" y="64" width="14" height="22" rx="4" fill="${col}" opacity="0.7"/>
      <polyline points="148,20 140,36 150,36 142,52" fill="none" stroke="#FFD700" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    kids: `<svg viewBox="0 0 240 180" width="${size}" style="max-height:${size}">
      <circle cx="68" cy="130" r="36" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="68" cy="130" r="7" fill="${col}"/>
      <circle cx="172" cy="130" r="36" fill="none" stroke="${col}" stroke-width="6"/>
      <circle cx="172" cy="130" r="7" fill="${col}"/>
      <line x1="68" y1="130" x2="120" y2="85" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="85" x2="172" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="85" x2="104" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="68" y1="130" x2="104" y2="130" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="85" x2="124" y2="58" stroke="${col}" stroke-width="5" stroke-linecap="round"/>
      <line x1="115" y1="58" x2="133" y2="58" stroke="${col}" stroke-width="7" stroke-linecap="round"/>
      <circle cx="68" cy="130" r="14" fill="none" stroke="${col}" stroke-width="2" opacity="0.3"/>
      <circle cx="172" cy="130" r="14" fill="none" stroke="${col}" stroke-width="2" opacity="0.3"/>
      <star points="120,70 122,76 128,76 123,80 125,86 120,82 115,86 117,80 112,76 118,76" fill="#FFD700"/>
    </svg>`
  };
  return svgs[category] || svgs['road'];
}

function getBikeColor(bike, selectedColorIdx) {
  return bike.colors[selectedColorIdx || 0] || bike.colors[0];
}

// Page: HOME
function renderHome() {
  const featured = BIKES.filter(b => b.isFeatured).slice(0, 4);
  const newArrivals = BIKES.filter(b => b.isNew).slice(0, 4);

  document.getElementById('app').innerHTML = `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-particles" id="heroParticles"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">🚴 Free shipping on orders over €500</div>
          <h1>Ride Your <em>Perfect</em><br>Bike Today</h1>
          <p>Premium bikes from the world's best brands. Find your ideal ride — road, mountain, electric, or city. Expert advice, unbeatable prices.</p>
          <div class="hero-actions">
            <a href="#/shop" class="btn btn-primary btn-lg">Shop All Bikes</a>
            <a href="#/quiz" class="btn btn-outline btn-lg">Find My Bike →</a>
          </div>
          <div class="feature-pills">
            <span class="feature-pill">✓ 30-day returns</span>
            <span class="feature-pill">✓ Expert assembly</span>
            <span class="feature-pill">✓ 2-year warranty</span>
            <span class="feature-pill">✓ 0% financing</span>
          </div>
          <div class="hero-stats">
            <div><span class="hero-stat-num" data-count="2400">0</span><span class="hero-stat-label">Happy riders</span></div>
            <div><span class="hero-stat-num" data-count="150">0</span><span class="hero-stat-label">Bike models</span></div>
            <div><span class="hero-stat-num" data-count="8">0</span><span class="hero-stat-label">Premium brands</span></div>
            <div><span class="hero-stat-num" data-count="5">0</span><span class="hero-stat-label">Store locations</span></div>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        ${bikeIllustration('road', '#F97316', '100%')}
      </div>
    </section>

    <!-- Countdown Deal -->
    <section class="countdown-section">
      <div class="container">
        <div class="countdown-label">⚡ Flash Deal — Limited Time Only</div>
        <div class="countdown-timer">
          <div class="count-unit"><span class="count-num" id="cd-h">00</span><span class="count-label">Hours</span></div>
          <span class="count-sep">:</span>
          <div class="count-unit"><span class="count-num" id="cd-m">00</span><span class="count-label">Minutes</span></div>
          <span class="count-sep">:</span>
          <div class="count-unit"><span class="count-num" id="cd-s">00</span><span class="count-label">Seconds</span></div>
        </div>
        <div class="deal-info">Use code <strong>FLASH25</strong> for 25% off selected mountain bikes</div>
      </div>
    </section>

    <!-- Categories -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Browse by type</span>
          <h2>Find Your Ride</h2>
          <p>From blazing road bikes to smooth city cruisers — every kind of cycling covered.</p>
        </div>
        <div class="category-grid stagger-children">
          ${[
            { cat: 'road', icon: '🚴', name: 'Road Bikes', count: BIKES.filter(b=>b.category==='road').length },
            { cat: 'mountain', icon: '⛰️', name: 'Mountain', count: BIKES.filter(b=>b.category==='mountain').length },
            { cat: 'electric', icon: '⚡', name: 'Electric', count: BIKES.filter(b=>b.category==='electric').length },
            { cat: 'city', icon: '🏙️', name: 'City Bikes', count: BIKES.filter(b=>b.category==='city').length },
            { cat: 'kids', icon: '⭐', name: 'Kids Bikes', count: BIKES.filter(b=>b.category==='kids').length }
          ].map(c => `
            <div class="category-card" onclick="Router.go('#/shop?cat=${c.cat}')">
              <div class="cat-icon">${c.icon}</div>
              <div class="cat-name">${c.name}</div>
              <div class="cat-count">${c.count} bikes</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section" style="background:var(--bg-alt); padding-top:4rem;padding-bottom:4rem;">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Hand-picked for you</span>
          <h2>Featured Bikes</h2>
          <p>Our experts' top picks for performance, value, and pure riding joy.</p>
        </div>
        <div class="products-grid stagger-children">
          ${featured.map(b => productCardHTML(b)).join('')}
        </div>
        <div style="text-align:center;margin-top:2.5rem;">
          <a href="#/shop" class="btn btn-outline-dark btn-lg">View All ${BIKES.length} Bikes →</a>
        </div>
      </div>
    </section>

    <!-- USPs -->
    <section class="section">
      <div class="container">
        <div class="grid-4 stagger-children">
          ${[
            { icon:'🚚', title:'Free Shipping', text:'Free delivery on all orders over €500. Express 2-day shipping available.' },
            { icon:'🔧', title:'Expert Assembly', text:'Every bike professionally assembled and safety-checked before dispatch.' },
            { icon:'↩️', title:'30-Day Returns', text:'Not the right fit? Return within 30 days, no questions asked.' },
            { icon:'🏅', title:'2-Year Warranty', text:'Full manufacturer warranty on frames plus VeloWorld Care plans.' }
          ].map(u => `
            <div class="value-card reveal">
              <div class="value-icon">${u.icon}</div>
              <div class="value-title">${u.title}</div>
              <div class="value-text">${u.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="section" style="background:var(--bg-alt); padding-top:4rem;padding-bottom:4rem;">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Just landed</span>
          <h2>New Arrivals</h2>
        </div>
        <div class="products-grid stagger-children">
          ${newArrivals.map(b => productCardHTML(b)).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Customer love</span>
          <h2>What Riders Say</h2>
        </div>
        <div class="testimonials-wrap reveal">
          <div class="testimonial-track" id="testimonialTrack">
            ${[
              { name:'Sarah M.', loc:'Amsterdam', text:'I bought the Gazelle Ultimate e-bike and it has completely changed my commute. I arrive at work fresh, on time, and happy. Worth every cent!', rating:5, initial:'S' },
              { name:'Lucas B.', loc:'Rotterdam', text:'The Trek Aero Pro Carbon is an absolute weapon on climbs. Service from VeloWorld was outstanding — they helped me find the perfect size and set it up perfectly.', rating:5, initial:'L' },
              { name:'Emma V.', loc:'Utrecht', text:'My kids love their new bikes! The Scott Spark Kids feels so quality compared to other brands. Fast delivery, great packaging, easy assembly.', rating:5, initial:'E' },
              { name:'Daan K.', loc:'Den Haag', text:'The Stumpjumper EVO is everything I dreamed of. VeloWorld had the best price and the bike arrived within 3 days. Unboxing was like Christmas morning.', rating:5, initial:'D' },
              { name:'Fleur J.', loc:'Eindhoven', text:'Second bike I\'ve bought from VeloWorld. They clearly know their stuff and the quality of the Cannondale Synapse is just incredible.', rating:4, initial:'F' },
            ].map(t => `
              <div class="testimonial-card">
                <div class="testimonial-quote">"</div>
                <p class="testimonial-text">${t.text}</p>
                <div style="margin-bottom:0.75rem;">${starsHTML(t.rating)}</div>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">${t.initial}</div>
                  <div><div class="testimonial-name">${t.name}</div><div class="testimonial-location">${t.loc}</div></div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="slider-controls">
            <button class="slider-btn" onclick="testimonialSlide(-1)">←</button>
            <div class="slider-dots" id="sliderDots"></div>
            <button class="slider-btn" onclick="testimonialSlide(1)">→</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section class="section" style="background:var(--bg-alt); padding-top:4rem;padding-bottom:4rem;">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Stay informed</span>
          <h2>From the Blog</h2>
        </div>
        <div class="blog-grid stagger-children">
          ${BLOG_POSTS.map(post => `
            <div class="blog-card" onclick="Router.go('#/blog/${post.id}')">
              <div class="blog-img" style="background:${blogImgBg(post.image)}">${blogImgEmoji(post.image)}</div>
              <div class="blog-body">
                <div class="blog-category">${post.category}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt.slice(0,100)}...</p>
                <div class="blog-meta">
                  <span>✍️ ${post.author}</span>
                  <span>⏱ ${post.readTime} read</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Brands -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our partners</span>
          <h2>Premium Brands</h2>
        </div>
        <div class="brands-grid stagger-children">
          ${BRANDS.map(b => `
            <div class="brand-card">
              <div class="brand-logo">${b.logo}</div>
              <div class="brand-name">${b.name}</div>
              <div class="brand-meta">${b.country} · Est. ${b.founded}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  initHeroParticles();
  startCountdown();
  initCountUp();
  initTestimonialSlider();
  initReveal();
  bindWishlistBtns();
  bindCompareCheckboxes();
}

// Page: SHOP
let shopFilters = { categories: [], brands: [], maxPrice: 5000, colors: [], search: '' };
let shopSort = 'popular';
let shopView = 'grid';

function renderShop(params = {}) {
  // Parse URL params
  if (params.cat) shopFilters.categories = [params.cat];

  const allPrices = BIKES.map(b => b.salePrice || b.price);
  const maxP = Math.max(...allPrices);

  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb">
        <a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Shop</span>
      </div>
      <h1 style="margin-bottom:0.5rem;">All Bikes</h1>
      <p style="color:var(--text-muted);margin-bottom:2rem;">${BIKES.length} bikes available</p>

      <div class="shop-layout">
        <!-- Filters -->
        <aside class="filters-sidebar" id="filtersSidebar">
          <div class="flex-between" style="margin-bottom:1.25rem;">
            <h3 style="font-size:1rem;">Filters</h3>
            <button class="btn btn-sm btn-outline-dark" onclick="clearFilters()">Clear all</button>
          </div>

          <div class="filter-section">
            <div class="filter-title">Category</div>
            <div class="filter-options">
              ${['road','mountain','electric','city','kids'].map(cat => `
                <label class="filter-option">
                  <input type="checkbox" value="${cat}" ${shopFilters.categories.includes(cat)?'checked':''} onchange="toggleCatFilter('${cat}',this.checked)">
                  <label>${cat.charAt(0).toUpperCase()+cat.slice(1)} <span class="filter-count">(${BIKES.filter(b=>b.category===cat).length})</span></label>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="filter-section">
            <div class="filter-title">Price (max)</div>
            <div class="price-range-wrap">
              <input type="range" class="price-slider" min="0" max="${maxP}" value="${shopFilters.maxPrice}" step="50"
                style="--val:${Math.round(shopFilters.maxPrice/maxP*100)}%"
                oninput="updatePriceFilter(this.value,${maxP})">
              <div class="price-labels"><span>€0</span><span id="priceLabel">€${shopFilters.maxPrice.toLocaleString()}</span></div>
            </div>
          </div>

          <div class="filter-section">
            <div class="filter-title">Brand</div>
            <div class="filter-options">
              ${BRANDS.map(b => `
                <label class="filter-option">
                  <input type="checkbox" value="${b.name}" ${shopFilters.brands.includes(b.name)?'checked':''} onchange="toggleBrandFilter('${b.name}',this.checked)">
                  <label>${b.name} <span class="filter-count">(${BIKES.filter(bk=>bk.brand===b.name).length})</span></label>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="filter-section">
            <div class="filter-title">Availability</div>
            <div class="filter-options">
              <label class="filter-option"><input type="checkbox" id="inStockOnly" onchange="renderShopProducts()"> <label>In stock only</label></label>
              <label class="filter-option"><input type="checkbox" id="saleOnly" onchange="renderShopProducts()"> <label>On sale</label></label>
              <label class="filter-option"><input type="checkbox" id="newOnly" onchange="renderShopProducts()"> <label>New arrivals</label></label>
            </div>
          </div>
        </aside>

        <!-- Product Grid -->
        <div>
          <div class="active-filters" id="activeFilters"></div>
          <div class="shop-toolbar">
            <span class="result-count" id="resultCount"></span>
            <div class="toolbar-right">
              <select class="sort-select" onchange="setSort(this.value)">
                <option value="popular" ${shopSort==='popular'?'selected':''}>Most Popular</option>
                <option value="newest" ${shopSort==='newest'?'selected':''}>Newest First</option>
                <option value="price-asc" ${shopSort==='price-asc'?'selected':''}>Price: Low to High</option>
                <option value="price-desc" ${shopSort==='price-desc'?'selected':''}>Price: High to Low</option>
                <option value="rating" ${shopSort==='rating'?'selected':''}>Highest Rated</option>
              </select>
              <div class="view-toggle">
                <button class="view-btn ${shopView==='grid'?'active':''}" onclick="setView('grid')" title="Grid view">⊞</button>
                <button class="view-btn ${shopView==='list'?'active':''}" onclick="setView('list')" title="List view">☰</button>
              </div>
              <button class="btn btn-sm btn-outline-dark" onclick="toggleMobileFilters()" style="display:none" id="mobileFilterBtn">⚙ Filters</button>
            </div>
          </div>
          <div class="products-grid ${shopView==='list'?'list-view':''}" id="shopGrid"></div>
          <div id="noResults" style="display:none;text-align:center;padding:3rem;color:var(--text-muted);">
            <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
            <h3>No bikes found</h3>
            <p>Try adjusting your filters</p>
            <button class="btn btn-primary" style="margin-top:1rem;" onclick="clearFilters()">Clear filters</button>
          </div>
        </div>
      </div>
    </div>
  `;
  renderShopProducts();
  if (window.innerWidth <= 640) document.getElementById('mobileFilterBtn').style.display = 'flex';
}

function getFilteredBikes() {
  let bikes = [...BIKES];
  if (shopFilters.categories.length) bikes = bikes.filter(b => shopFilters.categories.includes(b.category));
  if (shopFilters.brands.length) bikes = bikes.filter(b => shopFilters.brands.includes(b.brand));
  bikes = bikes.filter(b => (b.salePrice || b.price) <= shopFilters.maxPrice);
  if (shopFilters.search) {
    const q = shopFilters.search.toLowerCase();
    bikes = bikes.filter(b => b.name.toLowerCase().includes(q) || b.brand.toLowerCase().includes(q) || b.tags.some(t => t.includes(q)));
  }
  const inStock = document.getElementById('inStockOnly')?.checked;
  const saleOnly = document.getElementById('saleOnly')?.checked;
  const newOnly = document.getElementById('newOnly')?.checked;
  if (inStock) bikes = bikes.filter(b => b.stock > 0);
  if (saleOnly) bikes = bikes.filter(b => b.salePrice);
  if (newOnly) bikes = bikes.filter(b => b.isNew);
  // Sort
  if (shopSort === 'price-asc') bikes.sort((a,b) => (a.salePrice||a.price)-(b.salePrice||b.price));
  else if (shopSort === 'price-desc') bikes.sort((a,b) => (b.salePrice||b.price)-(a.salePrice||a.price));
  else if (shopSort === 'rating') bikes.sort((a,b) => b.rating-a.rating);
  else if (shopSort === 'newest') bikes.sort((a,b) => b.isNew-a.isNew);
  else bikes.sort((a,b) => b.reviewCount-a.reviewCount);
  return bikes;
}

function renderShopProducts() {
  const bikes = getFilteredBikes();
  const grid = document.getElementById('shopGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultCount');
  if (!grid) return;
  if (count) count.textContent = `${bikes.length} bikes found`;
  if (bikes.length === 0) { grid.innerHTML = ''; if(noRes) noRes.style.display='block'; return; }
  if(noRes) noRes.style.display='none';
  grid.innerHTML = bikes.map(b => productCardHTML(b)).join('');
  grid.className = `products-grid${shopView==='list'?' list-view':''} stagger-children`;
  updateActiveFilterChips();
  bindWishlistBtns();
  bindCompareCheckboxes();
}

function toggleCatFilter(cat, checked) {
  if (checked) { if (!shopFilters.categories.includes(cat)) shopFilters.categories.push(cat); }
  else shopFilters.categories = shopFilters.categories.filter(c => c !== cat);
  renderShopProducts();
}

function toggleBrandFilter(brand, checked) {
  if (checked) { if (!shopFilters.brands.includes(brand)) shopFilters.brands.push(brand); }
  else shopFilters.brands = shopFilters.brands.filter(b => b !== brand);
  renderShopProducts();
}

function updatePriceFilter(val, max) {
  shopFilters.maxPrice = parseInt(val);
  const pct = Math.round(val/max*100);
  document.querySelector('.price-slider').style.setProperty('--val', pct+'%');
  document.getElementById('priceLabel').textContent = `€${parseInt(val).toLocaleString()}`;
  renderShopProducts();
}

function clearFilters() {
  shopFilters = { categories: [], brands: [], maxPrice: 5000, colors: [], search: '' };
  renderShop();
}

function setSort(val) { shopSort = val; renderShopProducts(); }
function setView(val) { shopView = val; renderShopProducts(); }
function toggleMobileFilters() {
  document.getElementById('filtersSidebar').classList.toggle('mobile-open');
}

function updateActiveFilterChips() {
  const wrap = document.getElementById('activeFilters');
  if (!wrap) return;
  const chips = [];
  shopFilters.categories.forEach(c => chips.push(`<span class="active-filter-chip">${c} <button onclick="toggleCatFilter('${c}',false);document.querySelector('[value=${c}]').checked=false">×</button></span>`));
  shopFilters.brands.forEach(b => chips.push(`<span class="active-filter-chip">${b} <button onclick="toggleBrandFilter('${b}',false);document.querySelector('[value=\\'${b}\\']').checked=false">×</button></span>`));
  wrap.innerHTML = chips.join('');
}

// Product card HTML
function productCardHTML(bike) {
  const price = bike.salePrice || bike.price;
  const savePct = bike.salePrice ? Math.round((1 - bike.salePrice/bike.price)*100) : 0;
  const wishlisted = Store.isWishlisted(bike.id);
  const inComp = Store.isInComparison(bike.id);
  let stockBadge = '';
  if (bike.stock === 0) stockBadge = '<span class="badge badge-out">Out of stock</span>';
  else if (bike.stock <= 3) stockBadge = '<span class="badge badge-low">Low stock</span>';
  return `
    <div class="product-card ${bike.isFeatured?'featured':''}">
      <div class="card-img-wrap" onclick="Router.go('#/product/${bike.id}')">
        ${bikeIllustration(bike.category, bike.colors[0], '78%')}
        <div class="card-badges">
          ${bike.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${bike.salePrice ? `<span class="badge badge-sale">-${savePct}%</span>` : ''}
          ${stockBadge}
        </div>
        <button class="card-wish ${wishlisted?'active':''}" data-bike-id="${bike.id}" onclick="event.stopPropagation();toggleWish(${bike.id},this)" title="${wishlisted?'Remove from wishlist':'Add to wishlist'}">
          ${wishlisted ? '♥' : '♡'}
        </button>
        <div class="card-quick-actions">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();quickAddToCart(${bike.id})">+ Cart</button>
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();Router.go('#/product/${bike.id}')" style="background:rgba(255,255,255,0.9);color:#333;border-color:rgba(255,255,255,0.5)">View</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-brand">${bike.brand}</div>
        <div class="card-name" onclick="Router.go('#/product/${bike.id}')">${bike.name}</div>
        <div class="card-rating">
          <span class="stars">${'★'.repeat(Math.round(bike.rating))}${'☆'.repeat(5-Math.round(bike.rating))}</span>
          <span class="rating-count">${bike.rating} (${bike.reviewCount})</span>
        </div>
        <p class="card-desc">${bike.description.slice(0,120)}...</p>
        <div class="card-price">
          <span class="price-current">${fmtPrice(price)}</span>
          ${bike.salePrice ? `<span class="price-original">${fmtPrice(bike.price)}</span><span class="price-save">Save ${savePct}%</span>` : ''}
        </div>
        <div class="card-colors">
          ${bike.colors.map((c,i) => `<span class="color-dot" style="background:${c}" title="${bike.colorNames[i]}" onclick="event.stopPropagation()"></span>`).join('')}
        </div>
        <div class="card-footer">
          <button class="btn btn-primary btn-sm" onclick="quickAddToCart(${bike.id})" ${bike.stock===0?'disabled':''}>
            ${bike.stock===0?'Out of stock':'Add to Cart'}
          </button>
          <button class="btn btn-outline-dark btn-sm" onclick="Store.toggleComparison(${bike.id})" title="Compare" style="${inComp?'background:var(--orange);color:#fff;border-color:var(--orange)':''}">⇌</button>
        </div>
      </div>
    </div>
  `;
}

function toggleWish(id, btn) {
  Store.toggleWishlist(id);
  const wishlisted = Store.isWishlisted(id);
  btn.textContent = wishlisted ? '♥' : '♡';
  btn.classList.toggle('active', wishlisted);
  btn.classList.add('just-added');
  setTimeout(() => btn.classList.remove('just-added'), 400);
}

function bindWishlistBtns() {
  // Already handled via inline onclick
}

function bindCompareCheckboxes() {
  // Already handled via inline onclick
}

function quickAddToCart(bikeId) {
  const bike = BIKES.find(b => b.id === bikeId);
  if (!bike || bike.stock === 0) return;
  Store.addToCart(bikeId, bike.sizes[Math.floor(bike.sizes.length/2)], bike.colorNames[0], 1);
  updateCartBadge();
}

// Page: PRODUCT DETAIL
function renderProduct(params) {
  const bike = BIKES.find(b => b.id === parseInt(params.id));
  if (!bike) { Router.go('#/shop'); return; }
  Store.addRecentlyViewed(bike.id);

  let selectedColor = 0;
  let selectedSize = '';
  let qty = 1;
  let activeTab = 'description';
  let activeThumb = 0;

  const reviews = REVIEWS[bike.id] || [];
  const avgRating = reviews.length ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1) : bike.rating;
  const related = BIKES.filter(b => b.category === bike.category && b.id !== bike.id).slice(0,4);
  const recentlyViewed = Store.getRecentlyViewed().filter(b => b.id !== bike.id).slice(0,4);

  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb">
        <a href="#/">Home</a><span class="breadcrumb-sep">›</span>
        <a href="#/shop">Shop</a><span class="breadcrumb-sep">›</span>
        <a href="#/shop?cat=${bike.category}">${bike.category.charAt(0).toUpperCase()+bike.category.slice(1)}</a><span class="breadcrumb-sep">›</span>
        <span>${bike.name}</span>
      </div>

      <div class="product-detail-grid">
        <!-- Gallery -->
        <div class="gallery-wrap">
          <div class="gallery-main" id="galleryMain" onclick="openLightbox()">
            <div id="mainBikeImg" class="bike-color-preview">${bikeIllustration(bike.category, bike.colors[0], '82%')}</div>
            <span class="gallery-zoom">🔍 Click to zoom</span>
          </div>
          <div class="gallery-thumbs">
            ${bike.colors.slice(0,3).map((col, i) => `
              <div class="gallery-thumb ${i===0?'active':''}" onclick="selectThumb(${i}, '${col}')" id="thumb-${i}">
                ${bikeIllustration(bike.category, col, '70%')}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Details -->
        <div>
          <div class="detail-brand">${bike.brand}</div>
          <h1 class="detail-title">${bike.name}</h1>
          <div class="detail-rating-row">
            <span>${starsHTML(parseFloat(avgRating))}</span>
            <span style="font-weight:600">${avgRating}</span>
            <a href="#reviews" onclick="setTab('reviews')" style="color:var(--text-muted);font-size:0.875rem">${reviews.length || bike.reviewCount} reviews</a>
            ${bike.isNew ? '<span class="badge badge-new">New</span>' : ''}
          </div>
          <div class="detail-price-row">
            <span class="detail-price" id="detailPrice">${fmtPrice(bike.salePrice || bike.price)}</span>
            ${bike.salePrice ? `<span class="detail-price-orig">${fmtPrice(bike.price)}</span><span class="detail-save">Save ${Math.round((1-bike.salePrice/bike.price)*100)}%</span>` : ''}
          </div>

          <div class="${bike.stock===0?'stock-indicator stock-out':bike.stock<=3?'stock-indicator stock-low':'stock-indicator stock-in'}">
            <span class="stock-dot"></span>
            ${bike.stock===0?'Out of stock':bike.stock<=3?`Only ${bike.stock} left in stock!`:`In stock (${bike.stock} available)`}
          </div>

          <!-- Color Picker -->
          <div class="detail-section">
            <div class="detail-label">Color: <span id="colorName" style="color:var(--text);text-transform:none;font-weight:500;">${bike.colorNames[0]}</span></div>
            <div class="color-picker">
              ${bike.colors.map((col, i) => `
                <div class="color-swatch ${i===0?'active':''}" style="background:${col}" title="${bike.colorNames[i]}"
                  onclick="selectColor(${i},'${col}','${bike.colorNames[i]}')" id="swatch-${i}">
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Size Selector -->
          <div class="detail-section">
            <div class="detail-label" style="display:flex;justify-content:space-between;">
              <span>Frame Size: <span id="selectedSizeName" style="color:var(--text);text-transform:none;font-weight:500;">${selectedSize || 'Select a size'}</span></span>
              <button onclick="openSizeGuide()" style="color:var(--orange);font-size:0.8rem;font-weight:600;cursor:pointer;background:none;border:none;">Size Guide →</button>
            </div>
            <div class="size-grid" id="sizeGrid">
              ${bike.sizes.map(s => `
                <button class="size-btn" onclick="selectSize('${s}')" id="size-${s.replace(/[^a-z0-9]/gi,'')}">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="detail-section">
            <div class="detail-label">Quantity</div>
            <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;">
              <div class="qty-wrap">
                <button class="qty-btn" onclick="changeQty(-1)">−</button>
                <input type="number" class="qty-input" id="qtyInput" value="1" min="1" max="${bike.stock}" onchange="qty=parseInt(this.value)">
                <button class="qty-btn" onclick="changeQty(1)">+</button>
              </div>
            </div>
          </div>

          <div class="detail-actions">
            <button class="btn btn-primary btn-lg" onclick="addToCartDetail(${bike.id})" ${bike.stock===0?'disabled':''}>
              🛒 Add to Cart
            </button>
            <button class="btn btn-outline-dark btn-lg" onclick="Store.toggleWishlist(${bike.id});this.textContent=Store.isWishlisted(${bike.id})?'♥ Saved':'♡ Wishlist'">
              ${Store.isWishlisted(bike.id)?'♥ Saved':'♡ Wishlist'}
            </button>
          </div>

          <div class="detail-meta">
            <div class="detail-meta-item"><span>🚚</span> Free shipping on this order</div>
            <div class="detail-meta-item"><span>🔧</span> Professionally assembled & safety-checked</div>
            <div class="detail-meta-item"><span>↩️</span> 30-day free returns</div>
            <div class="detail-meta-item"><span>🏅</span> 2-year manufacturer warranty</div>
          </div>

          <!-- Price Alert -->
          ${bike.salePrice ? '' : `
            <div class="price-alert-wrap">
              <h4>🔔 Price Drop Alert</h4>
              <div class="price-alert-form">
                <input type="email" class="form-input price-alert-input" placeholder="your@email.com" id="alertEmail">
                <button class="btn btn-primary btn-sm" onclick="setPriceAlert(${bike.id})">Notify me</button>
              </div>
            </div>
          `}
        </div>
      </div>

      <!-- Tabs: Description / Specs / Reviews -->
      <div id="reviews">
        <div class="tabs">
          <button class="tab-btn active" onclick="setTab('description')" id="tab-description">Description</button>
          <button class="tab-btn" onclick="setTab('specs')" id="tab-specs">Specifications</button>
          <button class="tab-btn" onclick="setTab('reviews')" id="tab-reviews">Reviews (${reviews.length || bike.reviewCount})</button>
          <button class="tab-btn" onclick="setTab('together')" id="tab-together">Frequently Bought Together</button>
        </div>

        <div class="tab-content active" id="content-description">
          <p style="font-size:1rem;line-height:1.8;color:var(--text-muted);max-width:720px;">${bike.description}</p>
          <div class="feature-pills" style="margin-top:1.25rem;">
            ${bike.tags.map(t => `<span class="feature-pill" style="background:var(--gray-100);border-color:var(--border);color:var(--text-muted);">${t}</span>`).join('')}
          </div>
        </div>

        <div class="tab-content" id="content-specs">
          <table class="specs-table">
            ${Object.entries(bike.specs).map(([k,v]) => `
              <tr><td>${k.charAt(0).toUpperCase()+k.slice(1).replace(/([A-Z])/g,' $1')}</td><td>${v}</td></tr>
            `).join('')}
          </table>
        </div>

        <div class="tab-content" id="content-reviews">
          <div class="review-summary">
            <div>
              <div class="review-big-num">${avgRating}</div>
              <div>${starsHTML(parseFloat(avgRating))}</div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.25rem;">${reviews.length || bike.reviewCount} reviews</div>
            </div>
            <div class="review-bars">
              ${[5,4,3,2,1].map(s => {
                const cnt = reviews.filter(r=>r.rating===s).length || (s===5?Math.round(bike.reviewCount*0.6):s===4?Math.round(bike.reviewCount*0.25):Math.round(bike.reviewCount*0.05));
                const pct = bike.reviewCount > 0 ? Math.round(cnt/bike.reviewCount*100) : 0;
                return `<div class="review-bar-row"><span class="review-bar-label">${s}</span><div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div><span style="font-size:0.75rem;color:var(--text-muted);width:30px">${pct}%</span></div>`;
              }).join('')}
            </div>
          </div>
          ${reviews.map(r => `
            <div class="review-card">
              <div class="review-header">
                <div>
                  <div class="reviewer-name">${r.author} ${r.verified?'<span class="verified-badge">✓ Verified purchase</span>':''}</div>
                  <div>${starsHTML(r.rating)}</div>
                </div>
                <div class="review-date">${new Date(r.date).toLocaleDateString('nl-NL')}</div>
              </div>
              <div class="review-title">${r.title}</div>
              <div class="review-text">${r.text}</div>
              <div style="margin-top:0.75rem;font-size:0.8rem;color:var(--text-muted);">Helpful (${r.helpful})</div>
            </div>
          `).join('')}
          <div class="review-form">
            <h4 style="margin-bottom:1rem;">Write a Review</h4>
            <div class="star-picker" id="starPicker">
              ${[1,2,3,4,5].map(s => `<span class="star-pick" onclick="setReviewStar(${s})" data-val="${s}">★</span>`).join('')}
            </div>
            <div class="form-group" style="margin-bottom:0.75rem;"><input type="text" class="form-input" id="reviewTitle" placeholder="Review title"></div>
            <div class="form-group" style="margin-bottom:0.75rem;"><textarea class="form-input" id="reviewText" rows="4" placeholder="Share your experience..."></textarea></div>
            <div class="form-group" style="margin-bottom:1rem;"><input type="text" class="form-input" id="reviewName" placeholder="Your name"></div>
            <button class="btn btn-primary" onclick="submitReview(${bike.id})">Submit Review</button>
          </div>
        </div>

        <div class="tab-content" id="content-together">
          <p style="color:var(--text-muted);margin-bottom:1.5rem;">Riders who bought this also purchased:</p>
          <div class="products-grid stagger-children">
            ${related.slice(0,3).map(b => productCardHTML(b)).join('')}
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length ? `
        <div style="margin-top:3rem;">
          <h2 style="margin-bottom:1.5rem;">You might also like</h2>
          <div class="products-grid stagger-children">
            ${related.map(b => productCardHTML(b)).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Recently Viewed -->
      ${recentlyViewed.length ? `
        <div style="margin-top:3rem;">
          <h2 style="margin-bottom:1.5rem;">Recently Viewed</h2>
          <div class="products-grid stagger-children">
            ${recentlyViewed.map(b => productCardHTML(b)).join('')}
          </div>
        </div>
      ` : ''}
    </div>

    <!-- Size Guide Modal (hidden) -->
    <div id="sizeModal" style="display:none;" class="modal-overlay" onclick="if(event.target===this)closeSizeGuide()">
      <div class="modal">
        <div class="modal-header">
          <h3>Size Guide</h3>
          <button class="modal-close" onclick="closeSizeGuide()">×</button>
        </div>
        <div class="modal-body">
          <table class="size-guide-table">
            <thead><tr><th>Size</th><th>Height (cm)</th><th>Inseam (cm)</th><th>Frame</th></tr></thead>
            <tbody>
              <tr><td>XS / S</td><td>155 – 165</td><td>74 – 79</td><td>44 – 48cm</td></tr>
              <tr><td>S / M</td><td>165 – 170</td><td>79 – 83</td><td>48 – 52cm</td></tr>
              <tr><td>M</td><td>170 – 178</td><td>83 – 87</td><td>52 – 54cm</td></tr>
              <tr><td>L</td><td>178 – 185</td><td>87 – 91</td><td>54 – 58cm</td></tr>
              <tr><td>XL / XXL</td><td>185 – 195+</td><td>91 – 96+</td><td>58 – 62cm</td></tr>
            </tbody>
          </table>
          <div class="size-calculator">
            <h4 style="margin-bottom:0.75rem;">🧮 Size Calculator</h4>
            <div class="size-calc-input">
              <div class="form-group"><label class="form-label">Your Height (cm)</label><input type="number" class="form-input" id="calcHeight" placeholder="175"></div>
              <button class="btn btn-primary" onclick="calcSize()">Calculate</button>
            </div>
            <div class="size-result" id="calcResult" style="display:none;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox (hidden) -->
    <div id="lightbox" style="display:none;" class="modal-overlay" onclick="closeLightbox()">
      <div style="max-width:700px;width:100%;background:var(--card-bg);border-radius:20px;padding:2rem;position:relative;">
        <button class="modal-close" onclick="closeLightbox()" style="position:absolute;top:1rem;right:1rem;">×</button>
        <div id="lightboxContent"></div>
      </div>
    </div>
  `;

  // Expose product-level functions
  window.selectColor = (i, col, name) => {
    selectedColor = i;
    document.getElementById('mainBikeImg').innerHTML = bikeIllustration(bike.category, col, '82%');
    document.getElementById('colorName').textContent = name;
    document.querySelectorAll('.color-swatch').forEach((s,idx) => s.classList.toggle('active', idx===i));
    // Sync thumbs
    document.querySelectorAll('.gallery-thumb').forEach((t,ti) => t.classList.toggle('active', ti===i));
  };

  window.selectThumb = (i, col) => {
    activeThumb = i;
    document.querySelectorAll('.gallery-thumb').forEach((t,ti) => t.classList.toggle('active', ti===i));
    document.getElementById('mainBikeImg').innerHTML = bikeIllustration(bike.category, col, '82%');
  };

  window.selectSize = (s) => {
    selectedSize = s;
    document.getElementById('selectedSizeName').textContent = s;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.toggle('active', btn.textContent.trim()===s));
  };

  window.changeQty = (delta) => {
    const input = document.getElementById('qtyInput');
    const newVal = Math.max(1, Math.min(bike.stock, (parseInt(input.value)||1)+delta));
    input.value = newVal; qty = newVal;
  };

  window.addToCartDetail = (bikeId) => {
    if (!selectedSize) { Toast.show('Please select a size first', 'warning'); return; }
    Store.addToCart(bikeId, selectedSize, bike.colorNames[selectedColor], qty);
    updateCartBadge();
  };

  window.setTab = (tab) => {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.id===`tab-${tab}`));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id===`content-${tab}`));
  };

  window.openSizeGuide = () => { document.getElementById('sizeModal').style.display='flex'; };
  window.closeSizeGuide = () => { document.getElementById('sizeModal').style.display='none'; };

  window.calcSize = () => {
    const h = parseInt(document.getElementById('calcHeight').value);
    const el = document.getElementById('calcResult');
    if (!h || h < 100 || h > 250) { el.style.display='block'; el.textContent = 'Please enter a valid height (100-250cm)'; return; }
    let rec;
    if (h < 160) rec = 'XS (44-48cm)';
    else if (h < 168) rec = 'S (48-52cm)';
    else if (h < 176) rec = 'M (52-54cm)';
    else if (h < 185) rec = 'L (54-58cm)';
    else rec = 'XL-XXL (58-62cm)';
    el.style.display='block'; el.textContent = `Recommended size: ${rec}`;
  };

  window.openLightbox = () => {
    document.getElementById('lightbox').style.display='flex';
    document.getElementById('lightboxContent').innerHTML = bikeIllustration(bike.category, bike.colors[selectedColor], '100%');
  };
  window.closeLightbox = () => { document.getElementById('lightbox').style.display='none'; };

  let reviewStar = 0;
  window.setReviewStar = (val) => {
    reviewStar = val;
    document.querySelectorAll('.star-pick').forEach(s => s.classList.toggle('active', parseInt(s.dataset.val)<=val));
  };

  window.submitReview = (bikeId) => {
    if (!reviewStar) { Toast.show('Please select a star rating', 'warning'); return; }
    const title = document.getElementById('reviewTitle').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    const name = document.getElementById('reviewName').value.trim();
    if (!text || !name) { Toast.show('Please fill in all fields', 'warning'); return; }
    Toast.show('Review submitted! Thank you 🎉', 'success');
    document.getElementById('reviewTitle').value='';
    document.getElementById('reviewText').value='';
    document.getElementById('reviewName').value='';
    reviewStar=0;
    document.querySelectorAll('.star-pick').forEach(s=>s.classList.remove('active'));
  };

  window.setPriceAlert = (bikeId) => {
    const email = document.getElementById('alertEmail').value.trim();
    if (!email || !email.includes('@')) { Toast.show('Please enter a valid email', 'warning'); return; }
    Store.addPriceAlert(bikeId, email);
    document.getElementById('alertEmail').value='';
  };

  bindWishlistBtns();
  initReveal();
}

// Page: CART
function renderCart() {
  const { cart } = Store.getState();
  const total = Store.getCartTotal();
  const FREE_SHIPPING = 500;
  const toFreeShip = Math.max(0, FREE_SHIPPING - total);

  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Shopping Cart</span></div>
      <h1 style="margin-bottom:2rem;">Shopping Cart <span style="font-size:1rem;color:var(--text-muted);font-weight:400">(${Store.getCartCount()} items)</span></h1>

      ${cart.length === 0 ? `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p style="color:var(--text-muted);margin-bottom:1.5rem;">Looks like you haven't added any bikes yet.</p>
          <a href="#/shop" class="btn btn-primary btn-lg">Browse Bikes</a>
        </div>
      ` : `
        <div class="cart-layout">
          <div>
            ${cart.map(item => {
              const bike = BIKES.find(b => b.id === item.bikeId);
              if (!bike) return '';
              const price = bike.salePrice || bike.price;
              return `
                <div class="cart-item">
                  <div class="cart-item-img">${bikeIllustration(bike.category, bike.colors[0], '90%')}</div>
                  <div>
                    <div class="cart-item-name" onclick="Router.go('#/product/${bike.id}')">${bike.name}</div>
                    <div class="cart-item-meta">${bike.brand} · ${item.size} · ${item.color}</div>
                    <div class="qty-wrap">
                      <button class="qty-btn" onclick="updateCart('${item.key}',-1)">−</button>
                      <input type="number" class="qty-input" value="${item.qty}" min="1" onchange="Store.updateCartQty('${item.key}',parseInt(this.value));renderCart()">
                      <button class="qty-btn" onclick="updateCart('${item.key}',1)">+</button>
                    </div>
                    <div class="cart-item-remove" onclick="Store.removeFromCart('${item.key}');renderCart()">Remove</div>
                  </div>
                  <div>
                    <div class="cart-item-price">${fmtPrice(price)}</div>
                    <div class="cart-item-subtotal">Subtotal: ${fmtPrice(price*item.qty)}</div>
                  </div>
                </div>
              `;
            }).join('')}
            <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 0;">
              <a href="#/shop" style="color:var(--text-muted);font-size:0.9rem;">← Continue Shopping</a>
              <button class="btn btn-outline-dark btn-sm" onclick="if(confirm('Clear cart?')){Store.clearCart();renderCart()}">Clear Cart</button>
            </div>
          </div>

          <div class="order-summary">
            <h3>Order Summary</h3>
            ${toFreeShip > 0 ? `
              <div class="shipping-notice warning">
                🚚 Add ${fmtPrice(toFreeShip)} more for <strong>free shipping!</strong>
                <div class="shipping-bar"><div class="shipping-bar-fill" style="width:${Math.round(total/FREE_SHIPPING*100)}%"></div></div>
              </div>
            ` : `<div class="shipping-notice">🎉 You qualify for free shipping!</div>`}

            <div class="coupon-wrap">
              <input type="text" class="form-input coupon-input" id="couponInput" placeholder="Promo code (try FIETS10)">
              <button class="btn btn-outline-dark btn-sm" onclick="applyCoupon()">Apply</button>
            </div>
            <div id="couponMsg"></div>

            <div class="summary-row"><span>Subtotal</span><span id="summarySubtotal">${fmtPrice(total)}</span></div>
            <div class="summary-row" id="discountRow" style="display:none;color:#10B981"><span>Discount</span><span id="discountAmt"></span></div>
            <div class="summary-row"><span>Shipping</span><span>${total >= FREE_SHIPPING ? '<span style="color:#10B981">FREE</span>' : fmtPrice(9.95)}</span></div>
            <div class="summary-row total"><span>Total</span><span id="summaryTotal">${fmtPrice(total + (total >= FREE_SHIPPING ? 0 : 9.95))}</span></div>

            <button class="btn btn-primary btn-full btn-lg" style="margin-top:1.25rem;" onclick="Router.go('#/checkout')">
              Proceed to Checkout →
            </button>
            <div style="text-align:center;margin-top:1rem;font-size:0.8rem;color:var(--text-muted);">
              🔒 Secure checkout · SSL encrypted
            </div>
            <div class="payment-icons" style="justify-content:center;margin-top:0.75rem;">
              💳 🏦 📱 🅿
            </div>
          </div>
        </div>
      `}
    </div>
  `;

  window.updateCart = (key, delta) => {
    const item = Store.getState().cart.find(i=>i.key===key);
    if (item) Store.updateCartQty(key, item.qty+delta);
    renderCart();
  };

  window.applyCoupon = () => {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    const discounts = { 'FIETS10': 0.10, 'SUMMER20': 0.20, 'FLASH25': 0.25 };
    const pct = discounts[code];
    const msg = document.getElementById('couponMsg');
    if (pct) {
      const disc = total * pct;
      const newTotal = total - disc + (total >= FREE_SHIPPING ? 0 : 9.95);
      msg.innerHTML = `<p style="color:#10B981;font-size:0.85rem;margin-bottom:0.75rem;">✓ Code applied! ${Math.round(pct*100)}% discount</p>`;
      document.getElementById('discountRow').style.display='flex';
      document.getElementById('discountAmt').textContent = `-${fmtPrice(disc)}`;
      document.getElementById('summaryTotal').textContent = fmtPrice(newTotal);
    } else {
      msg.innerHTML = `<p style="color:#ef4444;font-size:0.85rem;margin-bottom:0.75rem;">✕ Invalid code. Try FIETS10, SUMMER20</p>`;
    }
  };
}

// Page: CHECKOUT
let checkoutStep = 1;
let checkoutData = {};

function renderCheckout() {
  if (Store.getCartCount() === 0) { Router.go('#/cart'); return; }
  const total = Store.getCartTotal();

  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><a href="#/cart">Cart</a><span class="breadcrumb-sep">›</span><span>Checkout</span></div>
      <h1 style="margin-bottom:2rem;">Checkout</h1>

      <div class="checkout-steps">
        ${[{n:1,label:'Shipping'},{n:2,label:'Payment'},{n:3,label:'Confirm'}].map((s,i,arr) => `
          <div class="checkout-step ${checkoutStep===s.n?'active':checkoutStep>s.n?'done':''}">
            <span class="step-num">${checkoutStep>s.n?'✓':s.n}</span>
            <span>${s.label}</span>
          </div>
          ${i<arr.length-1?'<div class="step-divider"></div>':''}
        `).join('')}
      </div>

      <div class="checkout-layout">
        <div class="checkout-panel" id="checkoutPanel">
          ${checkoutStep===1 ? renderShippingForm() : checkoutStep===2 ? renderPaymentForm() : renderConfirmation()}
        </div>

        <div class="order-summary">
          <h3>Your Order</h3>
          ${Store.getState().cart.map(item => {
            const bike = BIKES.find(b=>b.id===item.bikeId);
            if (!bike) return '';
            return `<div class="summary-row" style="align-items:start"><span style="font-size:0.85rem;">${bike.name} × ${item.qty}</span><span style="font-size:0.85rem;">${fmtPrice((bike.salePrice||bike.price)*item.qty)}</span></div>`;
          }).join('')}
          <div class="summary-row total"><span>Total</span><span>${fmtPrice(total + (total>=500?0:9.95))}</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderShippingForm() {
  return `
    <div class="checkout-card">
      <h3>📦 Shipping Information</h3>
      <div class="form-row">
        <div class="form-group"><label class="form-label">First Name *</label><input class="form-input" id="firstName" value="${checkoutData.firstName||''}" placeholder="Jan"></div>
        <div class="form-group"><label class="form-label">Last Name *</label><input class="form-input" id="lastName" value="${checkoutData.lastName||''}" placeholder="de Vries"></div>
      </div>
      <div class="form-group" style="margin-top:1rem;"><label class="form-label">Email *</label><input class="form-input" id="email" type="email" value="${checkoutData.email||''}" placeholder="jan@example.com"></div>
      <div class="form-group" style="margin-top:1rem;"><label class="form-label">Phone</label><input class="form-input" id="phone" value="${checkoutData.phone||''}" placeholder="+31 6 12345678"></div>
      <div class="form-group" style="margin-top:1rem;"><label class="form-label">Address *</label><input class="form-input" id="address" value="${checkoutData.address||''}" placeholder="Hoofdstraat 1"></div>
      <div class="form-row" style="margin-top:1rem;">
        <div class="form-group"><label class="form-label">Postcode *</label><input class="form-input" id="postcode" value="${checkoutData.postcode||''}" placeholder="1234 AB"></div>
        <div class="form-group"><label class="form-label">City *</label><input class="form-input" id="city" value="${checkoutData.city||''}" placeholder="Amsterdam"></div>
      </div>
      <div class="form-group" style="margin-top:1rem;"><label class="form-label">Country</label>
        <select class="form-input" id="country">
          <option>Netherlands</option><option>Belgium</option><option>Germany</option><option>France</option>
        </select>
      </div>
      <button class="btn btn-primary btn-lg" style="margin-top:1.5rem;width:100%;" onclick="nextCheckoutStep()">Continue to Payment →</button>
    </div>
  `;
}

function renderPaymentForm() {
  return `
    <div class="checkout-card">
      <h3>💳 Payment Method</h3>
      <div class="payment-options">
        <label class="payment-option"><input type="radio" name="payment" value="ideal" checked><div class="payment-logo">🏦</div><div><div style="font-weight:600">iDEAL</div><div style="font-size:0.8rem;color:var(--text-muted)">Instant bank transfer</div></div></label>
        <label class="payment-option"><input type="radio" name="payment" value="card"><div class="payment-logo">💳</div><div><div style="font-weight:600">Credit / Debit Card</div><div style="font-size:0.8rem;color:var(--text-muted)">Visa, Mastercard, Amex</div></div></label>
        <label class="payment-option"><input type="radio" name="payment" value="paypal"><div class="payment-logo">🅿</div><div><div style="font-weight:600">PayPal</div><div style="font-size:0.8rem;color:var(--text-muted)">Pay with your PayPal account</div></div></label>
        <label class="payment-option"><input type="radio" name="payment" value="klarna"><div class="payment-logo">🌸</div><div><div style="font-weight:600">Klarna — Pay Later</div><div style="font-size:0.8rem;color:var(--text-muted)">3 monthly installments, 0% interest</div></div></label>
      </div>
    </div>
    <div class="checkout-card" id="cardDetails">
      <h3>Card Details</h3>
      <div class="form-group"><label class="form-label">Card Number</label><input class="form-input" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNum(this)"></div>
      <div class="form-row" style="margin-top:1rem;">
        <div class="form-group"><label class="form-label">Expiry</label><input class="form-input" placeholder="MM/YY" maxlength="5"></div>
        <div class="form-group"><label class="form-label">CVC</label><input class="form-input" placeholder="123" maxlength="3" type="password"></div>
      </div>
      <div class="form-group" style="margin-top:1rem;"><label class="form-label">Cardholder Name</label><input class="form-input" placeholder="${checkoutData.firstName||'Jan'} ${checkoutData.lastName||'de Vries'}"></div>
    </div>
    <div style="display:flex;gap:1rem;margin-top:1rem;">
      <button class="btn btn-outline-dark" onclick="checkoutStep=1;renderCheckout()">← Back</button>
      <button class="btn btn-primary btn-lg" style="flex:1;" onclick="nextCheckoutStep()">Place Order 🎉</button>
    </div>
  `;
}

function renderConfirmation() {
  const orderNum = 'VW-' + Math.random().toString(36).substr(2,8).toUpperCase();
  Store.clearCart();
  return `
    <div class="confirmation-wrap">
      <div class="confirmation-icon">🎉</div>
      <h2>Order Confirmed!</h2>
      <p style="color:var(--text-muted);font-size:1.05rem;">Thank you, ${checkoutData.firstName||'valued customer'}! Your bike is being prepared.</p>
      <div class="order-number">Order #${orderNum}</div>
      <p style="color:var(--text-muted);margin-bottom:2rem;">A confirmation email has been sent to <strong>${checkoutData.email||'your email'}</strong>. Estimated delivery: 3-5 business days.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="#/" class="btn btn-primary btn-lg">Back to Home</a>
        <a href="#/shop" class="btn btn-outline-dark btn-lg">Continue Shopping</a>
      </div>
    </div>
  `;
}

window.nextCheckoutStep = () => {
  if (checkoutStep === 1) {
    const fields = ['firstName','lastName','email','address','postcode','city'];
    let valid = true;
    fields.forEach(f => {
      const el = document.getElementById(f);
      if (el && !el.value.trim()) { el.classList.add('error'); valid = false; }
      else if (el) { el.classList.remove('error'); checkoutData[f] = el.value.trim(); }
    });
    if (!valid) { Toast.show('Please fill in all required fields', 'warning'); return; }
  }
  checkoutStep = Math.min(3, checkoutStep+1);
  renderCheckout();
};

window.formatCardNum = (input) => {
  input.value = input.value.replace(/\D/g,'').replace(/(\d{4})(?=\d)/g,'$1 ');
};

// Page: WISHLIST
function renderWishlist() {
  const bikes = Store.getWishlist();
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Wishlist</span></div>
      <h1 style="margin-bottom:2rem;">My Wishlist <span style="font-size:1rem;color:var(--text-muted);font-weight:400">(${bikes.length})</span></h1>
      ${bikes.length === 0 ? `
        <div class="wishlist-empty">
          <div style="font-size:4rem;margin-bottom:1rem;">♡</div>
          <h2>Your wishlist is empty</h2>
          <p style="color:var(--text-muted);margin-bottom:1.5rem;">Save bikes you love by clicking the heart icon.</p>
          <a href="#/shop" class="btn btn-primary btn-lg">Explore Bikes</a>
        </div>
      ` : `
        <div class="wishlist-grid stagger-children">
          ${bikes.map(b => productCardHTML(b)).join('')}
        </div>
      `}
    </div>
  `;
  bindWishlistBtns();
}

// Page: COMPARISON
function renderComparison() {
  const ids = Store.getState().comparison;
  const bikes = ids.map(id => BIKES.find(b=>b.id===id)).filter(Boolean);

  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Compare Bikes</span></div>
      <div class="flex-between" style="margin-bottom:2rem;">
        <h1>Compare Bikes</h1>
        <button class="btn btn-outline-dark btn-sm" onclick="Store.clearComparison();renderComparison()">Clear All</button>
      </div>
      ${bikes.length < 2 ? `
        <div style="text-align:center;padding:3rem;color:var(--text-muted);">
          <div style="font-size:3rem;margin-bottom:1rem;">⇌</div>
          <h3>Add at least 2 bikes to compare</h3>
          <p style="margin-bottom:1.5rem;">Click the ⇌ button on any bike to add it here</p>
          <a href="#/shop" class="btn btn-primary">Browse Bikes</a>
        </div>
      ` : `
        <div style="overflow-x:auto;">
          <table class="compare-table">
            <thead>
              <tr>
                <th style="width:160px;">Feature</th>
                ${bikes.map(b => `<th><button onclick="Store.toggleComparison(${b.id});renderComparison()" style="float:right;color:var(--text-muted);font-size:1rem;cursor:pointer;background:none;border:none;">×</button>${b.brand}<br><strong>${b.name}</strong></th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                ${bikes.map(b => `<td class="compare-img-cell">${bikeIllustration(b.category, b.colors[0], '120px')}</td>`).join('')}
              </tr>
              <tr><td>Price</td>${bikes.map(b=>`<td style="font-weight:700;color:var(--orange);">${fmtPrice(b.salePrice||b.price)}</td>`).join('')}</tr>
              <tr><td>Category</td>${bikes.map(b=>`<td style="text-transform:capitalize">${b.category}</td>`).join('')}</tr>
              <tr><td>Rating</td>${bikes.map(b=>`<td>${starsHTML(b.rating)} ${b.rating}</td>`).join('')}</tr>
              <tr><td>Frame</td>${bikes.map(b=>`<td>${b.specs.frame}</td>`).join('')}</tr>
              <tr><td>Fork</td>${bikes.map(b=>`<td>${b.specs.fork}</td>`).join('')}</tr>
              <tr><td>Gears</td>${bikes.map(b=>`<td>${b.specs.gears}</td>`).join('')}</tr>
              <tr><td>Brakes</td>${bikes.map(b=>`<td>${b.specs.brakes}</td>`).join('')}</tr>
              <tr><td>Weight</td>${bikes.map(b=>`<td>${b.specs.weight}</td>`).join('')}</tr>
              <tr><td>Wheel Size</td>${bikes.map(b=>`<td>${b.specs.wheelSize}</td>`).join('')}</tr>
              <tr><td>Material</td>${bikes.map(b=>`<td>${b.specs.material}</td>`).join('')}</tr>
              ${bikes.some(b=>b.specs.motor) ? `<tr><td>Motor</td>${bikes.map(b=>`<td>${b.specs.motor||'—'}</td>`).join('')}</tr>` : ''}
              ${bikes.some(b=>b.specs.battery) ? `<tr><td>Battery</td>${bikes.map(b=>`<td>${b.specs.battery||'—'}</td>`).join('')}</tr>` : ''}
              ${bikes.some(b=>b.specs.range) ? `<tr><td>Range</td>${bikes.map(b=>`<td>${b.specs.range||'—'}</td>`).join('')}</tr>` : ''}
              <tr><td>In Stock</td>${bikes.map(b=>`<td>${b.stock>0?`<span style="color:#10B981">✓ Yes (${b.stock})</span>`:'<span style="color:#6B7280">✗ No</span>'}</td>`).join('')}</tr>
              <tr><td></td>${bikes.map(b=>`<td><button class="btn btn-primary btn-sm btn-full" onclick="quickAddToCart(${b.id})" ${b.stock===0?'disabled':''}>Add to Cart</button></td>`).join('')}</tr>
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

// Page: QUIZ
let quizAnswers = {};
let quizStep = 0;
const quizQuestions = [
  { q: 'What\'s your main riding purpose?', key: 'purpose', options: [
    { label: 'Daily commute to work', icon: '🏙️', value: 'city' },
    { label: 'Weekend trail riding', icon: '⛰️', value: 'mountain' },
    { label: 'Road cycling / racing', icon: '🏆', value: 'road' },
    { label: 'Long distance touring', icon: '🗺️', value: 'electric' }
  ]},
  { q: 'What\'s your budget?', key: 'budget', options: [
    { label: 'Under €1,000', icon: '💚', value: 'low' },
    { label: '€1,000 – €2,500', icon: '💛', value: 'mid' },
    { label: '€2,500 – €4,000', icon: '🧡', value: 'high' },
    { label: 'No limit — best only', icon: '💎', value: 'premium' }
  ]},
  { q: 'How would you describe your cycling experience?', key: 'experience', options: [
    { label: 'Complete beginner', icon: '🌱', value: 'beginner' },
    { label: 'Casual weekend rider', icon: '🚲', value: 'casual' },
    { label: 'Regular cyclist (3x/week)', icon: '⚡', value: 'regular' },
    { label: 'Serious enthusiast / racer', icon: '🏅', value: 'expert' }
  ]},
  { q: 'Any special requirements?', key: 'special', options: [
    { label: 'Need electric assist', icon: '⚡', value: 'electric' },
    { label: 'For my child (under 12)', icon: '👶', value: 'kids' },
    { label: 'Fitness & health focused', icon: '💪', value: 'fitness' },
    { label: 'No preference', icon: '✨', value: 'any' }
  ]}
];

function renderQuiz() {
  if (quizStep >= quizQuestions.length) {
    renderQuizResult();
    return;
  }
  const q = quizQuestions[quizStep];
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Bike Finder</span></div>
      <div class="section-header">
        <span class="section-label">Personalized recommendation</span>
        <h2>Find Your Perfect Bike</h2>
        <p>Answer 4 quick questions and we'll match you with the ideal ride.</p>
      </div>
      <div class="quiz-wrap">
        <div class="quiz-card">
          <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${(quizStep/quizQuestions.length)*100}%"></div></div>
          <div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1rem;">Question ${quizStep+1} of ${quizQuestions.length}</div>
          <div class="quiz-question">${q.q}</div>
          <div class="quiz-options">
            ${q.options.map(o => `
              <div class="quiz-option ${quizAnswers[q.key]===o.value?'selected':''}" onclick="answerQuiz('${q.key}','${o.value}')">
                <span class="quiz-option-icon">${o.icon}</span>
                ${o.label}
              </div>
            `).join('')}
          </div>
          ${quizStep > 0 ? `<button class="btn btn-outline-dark btn-sm" style="margin-top:1.5rem;" onclick="quizStep--;quizAnswers={...quizAnswers};renderQuiz()">← Back</button>` : ''}
        </div>
      </div>
    </div>
  `;
  window.answerQuiz = (key, val) => {
    quizAnswers[key] = val;
    quizStep++;
    renderQuiz();
  };
}

function renderQuizResult() {
  // Simple recommendation logic
  let cat = quizAnswers.purpose || 'road';
  if (quizAnswers.special === 'electric') cat = 'electric';
  if (quizAnswers.special === 'kids') cat = 'kids';

  let priceFilter = [0, 99999];
  if (quizAnswers.budget === 'low') priceFilter = [0, 999];
  else if (quizAnswers.budget === 'mid') priceFilter = [1000, 2500];
  else if (quizAnswers.budget === 'high') priceFilter = [2500, 4000];
  else if (quizAnswers.budget === 'premium') priceFilter = [3000, 99999];

  let recs = BIKES.filter(b => b.category === cat && (b.salePrice||b.price) >= priceFilter[0] && (b.salePrice||b.price) <= priceFilter[1]);
  if (!recs.length) recs = BIKES.filter(b => b.category === cat).sort((a,b)=>b.rating-a.rating);
  recs = recs.sort((a,b)=>b.rating-a.rating).slice(0,3);
  if (!recs.length) recs = BIKES.slice(0,3);

  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="quiz-wrap">
        <div class="quiz-result">
          <div style="font-size:3rem;margin-bottom:1rem;">🎯</div>
          <h3>Your Perfect Matches!</h3>
          <p>Based on your answers, here are your top recommendations:</p>
          <div class="products-grid stagger-children" style="text-align:left;margin:2rem 0;">
            ${recs.map(b => productCardHTML(b)).join('')}
          </div>
          <button class="btn btn-outline-dark" onclick="quizStep=0;quizAnswers={};renderQuiz()">← Retake Quiz</button>
        </div>
      </div>
    </div>
  `;
  bindWishlistBtns();
}

// Page: FAQ
function renderFAQ() {
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>FAQ</span></div>
      <div class="section-header">
        <span class="section-label">Got questions?</span>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about ordering, delivery, and our bikes.</p>
      </div>
      <div class="faq-list stagger-children">
        ${FAQ_ITEMS.map((item, i) => `
          <div class="faq-item" id="faq-${i}">
            <div class="faq-question" onclick="toggleFAQ(${i})">
              ${item.q}
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">${item.a}</div>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:3rem;padding:2.5rem;background:var(--gray-100);border-radius:var(--radius-lg);">
        <h3>Still have questions?</h3>
        <p style="color:var(--text-muted);margin-bottom:1.25rem;">Our experts are here to help. Contact us directly.</p>
        <a href="#/contact" class="btn btn-primary">Contact Us</a>
      </div>
    </div>
  `;
  window.toggleFAQ = (i) => {
    const item = document.getElementById(`faq-${i}`);
    item.classList.toggle('open');
  };
}

// Page: CONTACT
function renderContact() {
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Contact</span></div>
      <div class="section-header">
        <span class="section-label">Get in touch</span>
        <h2>Contact Us</h2>
        <p>Our bike experts are ready to help you find your perfect ride.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          ${[
            { icon:'📍', label:'Address', value:'Damrak 44, 1012 LK Amsterdam' },
            { icon:'📞', label:'Phone', value:'+31 20 123 4567' },
            { icon:'✉️', label:'Email', value:'hello@veloworld.nl' },
            { icon:'🕒', label:'Store Hours', value:'Mon–Sat: 9:00–18:00\nSun: 11:00–17:00' }
          ].map(c => `
            <div class="contact-item">
              <div class="contact-icon">${c.icon}</div>
              <div><div class="contact-label">${c.label}</div><div class="contact-value" style="white-space:pre-line">${c.value}</div></div>
            </div>
          `).join('')}
          <div style="background:var(--gray-100);border-radius:var(--radius-lg);padding:1.5rem;margin-top:0.5rem;">
            <h4 style="margin-bottom:0.5rem;">💬 Live Chat</h4>
            <p style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;">Available Mon-Fri 9:00-17:00</p>
            <button class="btn btn-primary btn-sm" onclick="Toast.show('Live chat connecting... 👋','success')">Start Chat</button>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send a Message</h3>
          <div class="form-row" style="margin-bottom:1rem;">
            <div class="form-group"><label class="form-label">Name *</label><input class="form-input" id="cName" placeholder="Your name"></div>
            <div class="form-group"><label class="form-label">Email *</label><input class="form-input" id="cEmail" type="email" placeholder="your@email.com"></div>
          </div>
          <div class="form-group" style="margin-bottom:1rem;"><label class="form-label">Subject</label>
            <select class="form-input" id="cSubject">
              <option>Product enquiry</option><option>Order tracking</option><option>Returns & exchanges</option><option>Technical support</option><option>Other</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom:1.25rem;"><label class="form-label">Message *</label><textarea class="form-input" id="cMessage" rows="5" placeholder="How can we help you?"></textarea></div>
          <button class="btn btn-primary btn-full" onclick="submitContact()">Send Message 📨</button>
        </div>
      </div>
    </div>
  `;
  window.submitContact = () => {
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const msg = document.getElementById('cMessage').value.trim();
    if (!name || !email || !msg) { Toast.show('Please fill in all required fields', 'warning'); return; }
    Toast.show('Message sent! We\'ll reply within 24 hours. 📨', 'success');
    document.getElementById('cName').value='';
    document.getElementById('cEmail').value='';
    document.getElementById('cMessage').value='';
  };
}

// Page: ABOUT
function renderAbout() {
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="about-hero reveal">
        <h2>The Netherlands' Premier Bike Store</h2>
        <p>Founded in 2010, VeloWorld has been connecting riders with their perfect bikes. We believe cycling changes lives — and we're here to help you find the ride that changes yours.</p>
      </div>
      <div class="values-grid stagger-children" style="margin-bottom:4rem;">
        <div class="value-card"><div class="value-icon">🚴</div><div class="value-title">Passion First</div><div class="value-text">Every team member is a cyclist. We only sell what we love to ride.</div></div>
        <div class="value-card"><div class="value-icon">🔬</div><div class="value-title">Expert Knowledge</div><div class="value-text">Decades of combined experience helps you make the perfect choice.</div></div>
        <div class="value-card"><div class="value-icon">🌱</div><div class="value-title">Sustainability</div><div class="value-text">Cycling is green. Our packaging is 100% recyclable and we offset all shipping.</div></div>
        <div class="value-card"><div class="value-icon">🤝</div><div class="value-title">Community</div><div class="value-text">Proud sponsors of local cycling clubs and youth programs across the Netherlands.</div></div>
      </div>
      <h2 style="text-align:center;margin-bottom:2rem;">Meet the Team</h2>
      <div class="team-grid stagger-children">
        ${[
          { name:'Sanne de Vries', role:'Founder & CEO', bio:'Former pro road cyclist turned entrepreneur. 15+ years in the industry.', icon:'👩' },
          { name:'Mark van den Berg', role:'Head of Products', bio:'MTB fanatic. Personally tests every mountain bike before we stock it.', icon:'👨' },
          { name:'Roos Bakker', role:'E-bike Specialist', bio:'Converted 500+ commuters to electric. Knows Bosch systems inside-out.', icon:'👩' },
          { name:'Daan Kuiper', role:'Workshop Manager', bio:'Master mechanic with 20 years experience. Your bike is in safe hands.', icon:'👨' },
          { name:'Emma Janssen', role:'Customer Experience', bio:'Makes sure every rider leaves happy. 4.9⭐ rating on Trustpilot.', icon:'👩' },
          { name:'Lars Pietersen', role:'Marketing & Socials', bio:'Rides 200km+ per week. Creates content that actual cyclists love.', icon:'👨' }
        ].map(m => `
          <div class="team-card">
            <div class="team-avatar">${m.icon}</div>
            <div class="team-name">${m.name}</div>
            <div class="team-role">${m.role}</div>
            <div class="team-bio">${m.bio}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  initReveal();
}

// Page: STORES
function renderStores() {
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Store Locator</span></div>
      <div class="section-header">
        <span class="section-label">Visit us</span>
        <h2>Our Stores</h2>
        <p>5 locations across the Netherlands, each staffed with expert riders.</p>
      </div>
      <div class="stores-layout">
        <div class="store-list">
          ${STORE_LOCATIONS.map((s,i) => `
            <div class="store-card ${i===0?'active':''}" onclick="selectStore(${i})" id="storeCard-${i}">
              <h4>${s.name}</h4>
              <div class="store-addr">📍 ${s.address}</div>
              <div class="store-info">
                <span>📞 ${s.phone}</span>
                <span>🕒 ${s.hours}</span>
              </div>
              <div style="margin-top:0.75rem;display:flex;gap:0.5rem;">
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();Toast.show('Getting directions... 🗺️','info')">Directions</button>
                <button class="btn btn-outline-dark btn-sm" onclick="event.stopPropagation();Toast.show('Store called! 📞','success')">Call Store</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="map-placeholder">
          <div class="map-dots">
            ${STORE_LOCATIONS.map((s,i) => {
              const positions = [{top:'30%',left:'52%'},{top:'55%',left:'42%'},{top:'38%',left:'50%'},{top:'48%',left:'44%'},{top:'62%',left:'51%'}];
              const pos = positions[i] || {top:'50%',left:'50%'};
              return `<div class="map-dot" style="top:${pos.top};left:${pos.left}" title="${s.name}" onclick="selectStore(${i})"></div>`;
            }).join('')}
          </div>
          <div style="text-align:center;z-index:1;pointer-events:none;">
            <div style="font-size:3rem;margin-bottom:0.5rem;">🗺️</div>
            <p style="color:var(--text-muted);font-size:0.875rem;">Click a dot to see store details</p>
          </div>
        </div>
      </div>
    </div>
  `;
  window.selectStore = (i) => {
    document.querySelectorAll('.store-card').forEach(c => c.classList.remove('active'));
    document.getElementById(`storeCard-${i}`)?.classList.add('active');
    document.getElementById(`storeCard-${i}`)?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
}

// Page: BLOG
function renderBlog() {
  document.getElementById('app').innerHTML = `
    <div class="container section-sm">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><span>Blog</span></div>
      <div class="section-header">
        <span class="section-label">Insights & guides</span>
        <h2>VeloWorld Blog</h2>
        <p>Tips, guides, and stories for every type of cyclist.</p>
      </div>
      <div class="blog-grid stagger-children">
        ${BLOG_POSTS.map(post => `
          <div class="blog-card" onclick="Router.go('#/blog/${post.id}')">
            <div class="blog-img" style="background:${blogImgBg(post.image)}">${blogImgEmoji(post.image)}</div>
            <div class="blog-body">
              <div class="blog-category">${post.category}</div>
              <h3 class="blog-title">${post.title}</h3>
              <p class="blog-excerpt">${post.excerpt}</p>
              <div class="blog-meta">
                <span>✍️ ${post.author}</span>
                <span>📅 ${new Date(post.date).toLocaleDateString('nl-NL')}</span>
                <span>⏱ ${post.readTime} read</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBlogPost(params) {
  const post = BLOG_POSTS.find(p => p.id === parseInt(params.id));
  if (!post) { Router.go('#/blog'); return; }
  document.getElementById('app').innerHTML = `
    <div class="container section-sm" style="max-width:800px;">
      <div class="breadcrumb"><a href="#/">Home</a><span class="breadcrumb-sep">›</span><a href="#/blog">Blog</a><span class="breadcrumb-sep">›</span><span>${post.category}</span></div>
      <div class="blog-category" style="margin-bottom:0.75rem;">${post.category}</div>
      <h1 style="margin-bottom:1rem;line-height:1.2;">${post.title}</h1>
      <div class="blog-meta" style="margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid var(--border);">
        <span>✍️ ${post.author}</span>
        <span>📅 ${new Date(post.date).toLocaleDateString('nl-NL')}</span>
        <span>⏱ ${post.readTime} read</span>
      </div>
      <div style="height:300px;background:${blogImgBg(post.image)};border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;font-size:5rem;margin-bottom:2rem;">${blogImgEmoji(post.image)}</div>
      <div style="font-size:1.05rem;line-height:1.85;color:var(--text-muted);">
        <p style="margin-bottom:1.25rem;">${post.excerpt}</p>
        <p style="margin-bottom:1.25rem;">Whether you're a seasoned cyclist or just getting started, making informed choices about your equipment can transform your riding experience. The right bike for your needs can be the difference between a chore and a joy.</p>
        <h3 style="color:var(--text);margin:1.75rem 0 0.875rem;">Why it matters</h3>
        <p style="margin-bottom:1.25rem;">Choosing the wrong bike is one of the most common mistakes new riders make. A mountain bike is uncomfortable on daily commutes, and a road bike won't survive a gravel path. Understanding the fundamentals saves you money and ensures you actually enjoy riding.</p>
        <h3 style="color:var(--text);margin:1.75rem 0 0.875rem;">Our recommendation</h3>
        <p style="margin-bottom:1.25rem;">Visit one of our stores and talk to one of our expert riders. Or try our Bike Finder Quiz — 4 questions, instant result.</p>
        <a href="#/quiz" class="btn btn-primary" style="margin-top:1rem;">Take the Bike Finder Quiz →</a>
      </div>
    </div>
  `;
}

// Helpers
function blogImgBg(type) {
  const bgs = { electric:'linear-gradient(135deg,#0f172a,#1e3a5f)', mountain:'linear-gradient(135deg,#1a2744,#2d5a27)', road:'linear-gradient(135deg,#1a0a2e,#3d0066)', city:'linear-gradient(135deg,#1f2937,#374151)', kids:'linear-gradient(135deg,#7c3aed,#db2777)' };
  return bgs[type] || bgs.road;
}
function blogImgEmoji(type) {
  const e = { electric:'⚡🚲', mountain:'⛰️🚵', road:'🏆🚴', city:'🏙️🚲', kids:'⭐🚲' };
  return `<span style="font-size:2.5rem">${e[type]||'🚲'}</span>`;
}

// Interactive helpers
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;--dur:${6+Math.random()*8}s;--delay:${Math.random()*8}s;opacity:${0.3+Math.random()*0.4};width:${2+Math.random()*4}px;height:${2+Math.random()*4}px`;
    container.appendChild(p);
  }
}

function startCountdown() {
  const target = new Date();
  target.setHours(target.getHours() + 5, target.getMinutes() + 37, 42, 0);
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) return;
    const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
    const hEl = document.getElementById('cd-h'), mEl = document.getElementById('cd-m'), sEl = document.getElementById('cd-s');
    if (hEl) hEl.textContent = String(h).padStart(2,'0');
    if (mEl) mEl.textContent = String(m).padStart(2,'0');
    if (sEl) sEl.textContent = String(s).padStart(2,'0');
  }
  tick();
  window._countdownInterval = setInterval(tick, 1000);
}

function initCountUp() {
  const els = document.querySelectorAll('[data-count]');
  els.forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString() + (el.dataset.suffix||'');
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}

let testimonialIndex = 0;
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('sliderDots');
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  const count = Math.max(1, Math.ceil(cards.length / 3));
  if (dotsWrap) {
    dotsWrap.innerHTML = Array.from({length:count},(_,i) => `<div class="slider-dot ${i===0?'active':''}" onclick="goToSlide(${i})"></div>`).join('');
  }
  window.goToSlide = (i) => {
    testimonialIndex = i;
    const cardW = track.querySelector('.testimonial-card')?.offsetWidth || 0;
    const gap = 24;
    track.style.transform = `translateX(-${i * (cardW + gap) * 3}px)`;
    document.querySelectorAll('.slider-dot').forEach((d,di) => d.classList.toggle('active', di===i));
  };
  window.testimonialSlide = (dir) => {
    testimonialIndex = (testimonialIndex + dir + count) % count;
    goToSlide(testimonialIndex);
  };
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
}

// Search
let searchResults = [];
function initSearch() {
  const input = document.getElementById('globalSearch');
  const dropdown = document.getElementById('searchDropdown');
  if (!input) return;
  const doSearch = debounce((q) => {
    if (q.length < 2) { dropdown.classList.remove('open'); return; }
    const results = BIKES.filter(b =>
      b.name.toLowerCase().includes(q.toLowerCase()) ||
      b.brand.toLowerCase().includes(q.toLowerCase()) ||
      b.tags.some(t => t.includes(q.toLowerCase()))
    ).slice(0,5);
    searchResults = results;
    if (!results.length) { dropdown.classList.remove('open'); return; }
    dropdown.innerHTML = results.map(b => `
      <div class="search-suggestion" onclick="Router.go('#/product/${b.id}');dropdown.classList.remove('open');input.value=''">
        <div class="suggest-img">${bikeIllustration(b.category, b.colors[0], '38px')}</div>
        <div>
          <div style="font-weight:600;font-size:0.875rem;">${b.name}</div>
          <div style="font-size:0.8rem;color:var(--text-muted)">${b.brand} · ${fmtPrice(b.salePrice||b.price)}</div>
        </div>
      </div>
    `).join('');
    dropdown.classList.add('open');
  }, 200);
  input.addEventListener('input', e => doSearch(e.target.value));
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) dropdown.classList.remove('open'); });
}

// Newsletter popup
function initNewsletter() {
  if (Store.isNewsletterDismissed()) return;
  setTimeout(() => {
    const popup = document.getElementById('newsletterPopup');
    if (popup) popup.classList.add('show');
  }, 5000);
}

window.dismissNewsletter = () => {
  Store.dismissNewsletter();
  const p = document.getElementById('newsletterPopup');
  if (p) { p.classList.remove('show'); }
};

window.subscribeNewsletter = () => {
  const email = document.getElementById('nlEmail')?.value.trim();
  if (!email || !email.includes('@')) { Toast.show('Please enter a valid email', 'warning'); return; }
  Store.dismissNewsletter();
  const p = document.getElementById('newsletterPopup');
  if (p) p.classList.remove('show');
  Toast.show('Welcome to VeloWorld! 🎉 Check your inbox for 10% off.', 'success');
};

// Back to top
function initBackToTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('show', window.scrollY > 400);
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// Currency switcher
window.changeCurrency = (val) => {
  Store.setCurrency(val);
  // Re-render current page
  navigate(window.location.hash);
};

// Router setup & init
function initApp() {
  applyTheme(Store.getTheme());
  updateCartBadge();

  Router
    .on('/', () => renderHome())
    .on('/shop', () => {
      const hash = window.location.hash;
      const params = {};
      if (hash.includes('?cat=')) params.cat = hash.split('?cat=')[1];
      renderShop(params);
    })
    .on('/product/:id', params => renderProduct(params))
    .on('/cart', () => renderCart())
    .on('/checkout', () => renderCheckout())
    .on('/wishlist', () => renderWishlist())
    .on('/compare', () => renderComparison())
    .on('/quiz', () => { quizStep=0; quizAnswers={}; renderQuiz(); })
    .on('/faq', () => renderFAQ())
    .on('/contact', () => renderContact())
    .on('/about', () => renderAbout())
    .on('/stores', () => renderStores())
    .on('/blog', () => renderBlog())
    .on('/blog/:id', params => renderBlogPost(params))
    .start();

  initSearch();
  initNewsletter();
  initBackToTop();
  initHeaderScroll();
}

document.addEventListener('DOMContentLoaded', initApp);
