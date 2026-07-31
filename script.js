/* script.js
   Trip cost calculator and small UI helpers for Aura Voyages
   - Updates total price based on inputs
   - Fills current year in footer
   - Adds smooth scrolling for anchor links in the navbar
*/

document.addEventListener('DOMContentLoaded', () => {
  const priceEl = document.getElementById('price');
  const peopleEl = document.getElementById('people');
  const daysEl = document.getElementById('days');
  const totalEl = document.getElementById('total-price');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function updateTotal() {
    if (!totalEl) return;
    const price = Number(priceEl?.value) || 0;
    const people = Number(peopleEl?.value) || 0;
    const days = Number(daysEl?.value) || 0;
    const perDayFee = 20; // example per-day fee
    const total = price * people + (days * perDayFee * people);
    totalEl.textContent = '$' + total.toLocaleString();
  }

  [priceEl, peopleEl, daysEl].forEach(el => {
    if (el) el.addEventListener('input', updateTotal);
  });

  updateTotal();

  // Smooth scroll for navbar anchor links
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
