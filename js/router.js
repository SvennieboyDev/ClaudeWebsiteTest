// Hash-based SPA Router
const Router = (() => {
  const routes = {};
  let currentRoute = null;
  let prevRoute = null;

  function parse(hash) {
    const path = hash.replace('#', '') || '/';
    const parts = path.split('/').filter(Boolean);
    return { path, parts };
  }

  function match(hash) {
    const { path, parts } = parse(hash);
    for (const [pattern, handler] of Object.entries(routes)) {
      const patParts = pattern.split('/').filter(Boolean);
      if (parts.length !== patParts.length) continue;
      const params = {};
      let matched = true;
      for (let i = 0; i < patParts.length; i++) {
        if (patParts[i].startsWith(':')) {
          params[patParts[i].slice(1)] = parts[i];
        } else if (patParts[i] !== parts[i]) {
          matched = false; break;
        }
      }
      if (matched) return { handler, params };
    }
    return null;
  }

  function navigate(hash) {
    prevRoute = currentRoute;
    currentRoute = hash;
    const result = match(hash);
    const app = document.getElementById('app');
    if (app) {
      app.classList.add('page-exit');
      setTimeout(() => {
        app.classList.remove('page-exit');
        app.classList.add('page-enter');
        if (result) {
          result.handler(result.params);
        } else {
          routes['404'] ? routes['404']({}) : (app.innerHTML = '<div class="error-page"><h1>404 - Page not found</h1><a href="#/">Go home</a></div>');
        }
        window.scrollTo(0, 0);
        setTimeout(() => app.classList.remove('page-enter'), 400);
      }, 150);
    }
  }

  return {
    on(pattern, handler) { routes[pattern] = handler; return this; },
    start() {
      window.addEventListener('hashchange', () => navigate(window.location.hash));
      navigate(window.location.hash || '#/');
    },
    go(hash) { window.location.hash = hash; },
    getCurrentRoute: () => currentRoute,
    getPrevRoute: () => prevRoute
  };
})();