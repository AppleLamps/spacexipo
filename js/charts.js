// charts.js - Vanilla bar charts (no external deps) for subscriber growth + revenue mix
export function initCharts() {
  // Subscriber growth chart (simple div bars)
  const subContainer = document.getElementById('subscriber-chart');
  if (subContainer) {
    const years = [
      { label: '2023', val: 2.3 },
      { label: '2024', val: 4.4 },
      { label: '2025', val: 8.9 },
      { label: 'Q1 2026', val: 10.3 }
    ];
    const max = Math.max(...years.map(y => y.val));

    subContainer.innerHTML = `
      <div class="chart-bar" style="height:180px;display:flex;align-items:flex-end;gap:14px;">
        ${years.map(y => {
          const h = Math.round((y.val / max) * 148) + 22;
          return `
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;">
              <div class="bar-value" style="font-size:0.75rem;color:#E8B800;margin-bottom:4px;">${y.val}M</div>
              <div style="width:100%;background:#E8B800;height:${h}px;min-width:22px;border:2px solid #1C1C1C;"></div>
              <div style="margin-top:8px;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.06em;color:#A8A5A0;">${y.label}</div>
            </div>`;
        }).join('')}
      </div>
    `;
  }

  // Revenue mix 2025 (horizontal stacked-ish)
  const revContainer = document.getElementById('revenue-mix');
  if (revContainer) {
    const segments = [
      { name: 'CONNECTIVITY', pct: 61, val: '$11.4B' },
      { name: 'SPACE', pct: 22, val: '$4.1B' },
      { name: 'AI', pct: 17, val: '$3.2B' }
    ];
    revContainer.innerHTML = segments.map(s => `
      <div style="margin-bottom:14px;">
        <div class="segment-label" style="margin-bottom:4px;">
          <span style="font-family:var(--font-head);letter-spacing:0.08em;">${s.name}</span>
          <span class="mono" style="color:#E8B800;">${s.val}</span>
        </div>
        <div class="segment-bar">
          <div class="segment-fill" style="width:${s.pct}%"></div>
        </div>
      </div>
    `).join('');
  }
}