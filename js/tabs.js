// tabs.js - Pillar switcher (Space / Connectivity / AI) - no fluff, direct spec change
export function initPillarTabs() {
  const tabs = document.querySelectorAll('.pillar-tab');
  const panels = document.querySelectorAll('.pillar-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === target) p.classList.add('active');
      });
    });
  });

  // Default: activate first
  if (tabs.length) {
    tabs[0].classList.add('active');
    const firstPanel = document.getElementById(tabs[0].dataset.target);
    if (firstPanel) firstPanel.classList.add('active');
  }
}