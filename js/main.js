// main.js - Boot all vanilla modules
import { initCounters } from './counters.js';
import { initPillarTabs } from './tabs.js';
import { initCharts } from './charts.js';

function initNav() {
  const links = document.querySelectorAll('.nav-links a');
  const sections = ['overview', 'glance', 'pillars', 'financials', 'road', 'leadership'];

  const onScroll = () => {
    let current = '';
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 140) current = id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initDisclaimer() {
  // Nothing dynamic; kept in HTML for legal clarity
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCounters();
  initPillarTabs();
  initCharts();
  initDisclaimer();

  // Keyboard hint for pros
  console.log('%c[SpaceX S-1] Vanilla industrial showcase ready. All data sourced from May 20, 2026 Form S-1.', 'color:#666');
});