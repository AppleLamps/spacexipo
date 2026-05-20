// counters.js - Animated number counters (Industrial Utility signature: precise, spec-like)
export function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  const animate = (el) => {
    const target = parseFloat(el.dataset.counter);
    const decimals = (el.dataset.decimals || '0');
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    const startVal = 0;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo for industrial snap
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = startVal + (target - startVal) * eased;

      if (decimals === '1') {
        el.textContent = val.toFixed(1) + suffix;
      } else if (decimals === '0') {
        el.textContent = Math.floor(val).toLocaleString() + suffix;
      } else {
        el.textContent = val.toFixed(0) + suffix;
      }

      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix; // exact
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animate(el);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(c => io.observe(c));
}