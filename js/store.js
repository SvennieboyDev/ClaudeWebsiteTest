// State management
const Store = (() => {
  let state = {
    cart: JSON.parse(localStorage.getItem('vw_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('vw_wishlist') || '[]'),
    recentlyViewed: JSON.parse(localStorage.getItem('vw_recent') || '[]'),
    comparison: JSON.parse(localStorage.getItem('vw_compare') || '[]'),
    currency: localStorage.getItem('vw_currency') || 'EUR',
    theme: localStorage.getItem('vw_theme') || 'light',
    priceAlerts: JSON.parse(localStorage.getItem('vw_alerts') || '[]'),
    newsletterDismissed: localStorage.getItem('vw_newsletter') === 'true'
  };

  const listeners = [];

  function save() {
    localStorage.setItem('vw_cart', JSON.stringify(state.cart));
    localStorage.setItem('vw_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('vw_recent', JSON.stringify(state.recentlyViewed));
    localStorage.setItem('vw_compare', JSON.stringify(state.comparison));
    localStorage.setItem('vw_currency', state.currency);
    localStorage.setItem('vw_theme', state.theme);
    listeners.forEach(fn => fn(state));
  }

  function notify() { listeners.forEach(fn => fn(state)); }

  return {
    getState: () => ({ ...state }),
    subscribe: (fn) => { listeners.push(fn); return () => { const i = listeners.indexOf(fn); if (i > -1) listeners.splice(i, 1); }; },

    addToCart(bikeId, size, color, qty = 1) {
      const bike = BIKES.find(b => b.id === bikeId);
      if (!bike) return;
      const key = `${bikeId}-${size}-${color}`;
      const existing = state.cart.find(i => i.key === key);
      if (existing) { existing.qty += qty; } else { state.cart.push({ key, bikeId, size, color, qty, addedAt: Date.now() }); }
      save();
      Toast.show(`${bike.name} added to cart!`, 'success');
      updateCartBadge();
    },

    removeFromCart(key) { state.cart = state.cart.filter(i => i.key !== key); save(); updateCartBadge(); },

    updateCartQty(key, qty) {
      const item = state.cart.find(i => i.key === key);
      if (item) { if (qty < 1) { state.cart = state.cart.filter(i => i.key !== key); } else { item.qty = qty; } }
      save(); updateCartBadge();
    },

    clearCart() { state.cart = []; save(); updateCartBadge(); },

    getCartTotal() {
      return state.cart.reduce((sum, item) => {
        const bike = BIKES.find(b => b.id === item.bikeId);
        if (!bike) return sum;
        return sum + ((bike.salePrice || bike.price) * item.qty);
      }, 0);
    },

    getCartCount() { return state.cart.reduce((sum, item) => sum + item.qty, 0); },

    toggleWishlist(bikeId) {
      const bike = BIKES.find(b => b.id === bikeId);
      if (!bike) return;
      const idx = state.wishlist.indexOf(bikeId);
      if (idx > -1) { state.wishlist.splice(idx, 1); Toast.show(`${bike.name} removed from wishlist`, 'info'); }
      else { state.wishlist.push(bikeId); Toast.show(`${bike.name} added to wishlist!`, 'love'); }
      save();
    },

    isWishlisted: (bikeId) => state.wishlist.includes(bikeId),
    getWishlist: () => state.wishlist.map(id => BIKES.find(b => b.id === id)).filter(Boolean),

    toggleComparison(bikeId) {
      const bike = BIKES.find(b => b.id === bikeId);
      if (!bike) return false;
      const idx = state.comparison.indexOf(bikeId);
      if (idx > -1) { state.comparison.splice(idx, 1); save(); updateCompareBar(); return false; }
      else {
        if (state.comparison.length >= 3) { Toast.show('Max 3 bikes for comparison', 'warning'); return false; }
        state.comparison.push(bikeId); save();
        Toast.show(`${bike.name} added to comparison`, 'info');
        updateCompareBar(); return true;
      }
    },

    isInComparison: (bikeId) => state.comparison.includes(bikeId),
    clearComparison() { state.comparison = []; save(); updateCompareBar(); },

    addRecentlyViewed(bikeId) {
      state.recentlyViewed = [bikeId, ...state.recentlyViewed.filter(id => id !== bikeId)].slice(0, 6);
      save();
    },

    getRecentlyViewed: () => state.recentlyViewed.map(id => BIKES.find(b => b.id === id)).filter(Boolean),

    setCurrency(currency) { state.currency = currency; save(); notify(); },
    getCurrency: () => state.currency,

    convertPrice(eur) {
      const rates = { EUR: 1, USD: 1.08, GBP: 0.86 };
      const symbols = { EUR: '€', USD: '$', GBP: '£' };
      const converted = eur * (rates[state.currency] || 1);
      return `${symbols[state.currency]}${converted.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    },

    toggleTheme() {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('vw_theme', state.theme);
      applyTheme(state.theme);
    },
    getTheme: () => state.theme,

    dismissNewsletter() { state.newsletterDismissed = true; localStorage.setItem('vw_newsletter', 'true'); },
    isNewsletterDismissed: () => state.newsletterDismissed,

    addPriceAlert(bikeId, email) {
      state.priceAlerts.push({ bikeId, email, addedAt: Date.now() });
      localStorage.setItem('vw_alerts', JSON.stringify(state.priceAlerts));
      Toast.show('Price alert set! We\'ll email you when the price drops.', 'success');
    }
  };
})();

const Toast = (() => {
  let container;
  function getContainer() {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }
  return {
    show(message, type = 'success') {
      const c = getContainer();
      const toast = document.createElement('div');
      const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ', love: '♥' };
      toast.className = `toast toast-${type}`;
      toast.innerHTML = `<span class="toast-icon">${icons[type] || '•'}</span><span>${message}</span>`;
      c.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('toast-show'));
      setTimeout(() => { toast.classList.remove('toast-show'); setTimeout(() => toast.remove(), 400); }, 3000);
    }
  };
})();

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = Store.getCartCount();
  badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  if (!bar) return;
  const ids = Store.getState().comparison;
  if (ids.length === 0) { bar.classList.remove('active'); return; }
  bar.classList.add('active');
  const bikes = ids.map(id => BIKES.find(b => b.id === id)).filter(Boolean);
  bar.querySelector('.compare-items').innerHTML = bikes.map(b =>
    `<span class="compare-chip">${b.name} <button onclick="Store.toggleComparison(${b.id})" aria-label="Remove">×</button></span>`
  ).join('');
  bar.querySelector('.compare-count').textContent = `${ids.length}/3 bikes`;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

function fmtPrice(eur) { return Store.convertPrice(eur); }

function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function starsHTML(rating) {
  return [1,2,3,4,5].map(i => {
    if (rating >= i) return '<span class="star full">★</span>';
    if (rating >= i - 0.5) return '<span class="star half">★</span>';
    return '<span class="star empty">☆</span>';
  }).join('');
}