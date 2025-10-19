(function () {
  function onReady(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  onReady(() => {
    // Respetar la preferencia del usuario
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    // Escala según ancho, alto y densidad de pixeles para no saturar móviles
    const vw = Math.max(320, Math.min(window.innerWidth, 1920));
    const vh = Math.max(480, Math.min(window.innerHeight, 1080));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Base original ~16–28; ajustamos a algo más conservador en móviles
    const base = Math.min(26, Math.max(14, Math.floor(vw / 72)));
    const densityFactor = (vw * vh) / (1280 * 720); // 1.0 en 1280x720 aprox
    const totalPetalos   = Math.round((base + 4) * densityFactor * (1 + (dpr - 1) * 0.25));
    const totalDestellos = Math.round(base * 1.2 * densityFactor);

    for (let i = 0; i < totalPetalos; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      if (Math.random() < 0.45) p.classList.add('sm');
      if (Math.random() < 0.18) p.classList.add('xs');
      const useLeft = Math.random() < 0.5;
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.animationName = useLeft ? 'fallL' : 'fallR';
      p.style.animationDuration = (9 + Math.random() * 6) + 's';
      p.style.animationDelay = (Math.random() * 7) + 's';
      p.style.animationIterationCount = 'infinite';
      p.style.animationTimingFunction = 'linear';
      document.body.appendChild(p);
    }

    for (let i = 0; i < totalDestellos; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle-img';
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.setProperty('--fall-dur', (9.5 + Math.random() * 7).toFixed(2) + 's');
      s.style.setProperty('--fall-delay', (Math.random() * 6).toFixed(2) + 's');
      const size = 64 + Math.floor(Math.random() * 44);
      s.style.width  = size + 'px';
      s.style.height = size + 'px';
      document.body.appendChild(s);
    }
  });
})();
