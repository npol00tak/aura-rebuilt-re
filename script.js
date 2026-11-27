'use strict';
const body = document.body;
const profile = document.getElementById('profile');
const enforcing = document.getElementById('enforce');
const clarify = document.getElementById('clarify');
const mode = document.getElementById('mode');
const profileLabel = document.getElementById('profile-label');
const fixes = document.getElementById('fixes');
const scanTarget = document.getElementById('scan-target');
const notice = document.getElementById('notice');
let scanTimer = null;

function render() {
  const active = body.dataset.enforcing === 'true';
  enforcing.textContent = active ? 'Stop Enforcement' : 'Start Enforcement';
  enforcing.setAttribute('aria-pressed', String(active));
  mode.textContent = active ? 'ENFORCING' : 'PAUSED';
  profileLabel.textContent = profile.options[profile.selectedIndex].text.split(' · ')[0];
  body.dataset.profile = profile.value;
  body.dataset.clarity = String(clarify.checked);
  document.getElementById('clarified').hidden = !clarify.checked;
  notice.textContent = active ? 'Highlights enabled' : 'Highlights paused';
}
profile.addEventListener('change', render);
enforcing.addEventListener('click', () => {
  body.dataset.enforcing = String(body.dataset.enforcing !== 'true');
  render();
});
clarify.addEventListener('change', render);
document.getElementById('trydemo').addEventListener('click', () => {
  clearInterval(scanTimer);
  let count = 0;
  fixes.textContent = String(count);
  scanTarget.textContent = 'Demo webpage';
  notice.textContent = 'Running simulated checks...';
  scanTimer = setInterval(() => {
    count += 1;
    fixes.textContent = String(count);
    if(count === 12) {
      clearInterval(scanTimer);
      notice.textContent = '12 simulated accessibility checks complete';
    }
  }, 125);
});
document.getElementById('howitworks').addEventListener('click', () => {
  const explanation = document.getElementById('explanation');
  explanation.hidden = !explanation.hidden;
  if (!explanation.hidden) explanation.scrollIntoView({behavior: 'smooth', block: 'center'});
});
render();
