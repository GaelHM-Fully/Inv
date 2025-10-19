(function () {
  function onReady(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  onReady(() => {
    const base = Math.min(28, Math.max(16, Math.floor(window.innerWidth / 70)));
    const totalPetalos   = base + 4;
    const totalDestellos = Math.round(base * 1.4);

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
      const size = 70 + Math.floor(Math.random() * 50);
      s.style.width  = size + 'px';
      s.style.height = size + 'px';
      document.body.appendChild(s);
    }
  });
})();
