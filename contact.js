document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('formModal');
  const closeModal = document.querySelector('.modal-close');
  const form = document.getElementById('contactForm');

  // Allow FormSubmit to submit normally (no preventDefault, no reset)
  form.addEventListener('submit', () => {
    // Let form submit naturally
  });

  // Close modal on X button
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // ---- Show Thank You Modal After Redirect ----
  const params = new URLSearchParams(window.location.search);
  if (params.get('submitted') === 'true') {
    modal.classList.add('active');
  }

  // --------------------------
  // Collapsible Panels
  // --------------------------
  const collapsibleToggles = document.querySelectorAll('.collapsible-toggle');
  collapsibleToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const isActive = toggle.classList.contains('active');

      // Close all panels
      collapsibleToggles.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.classList.remove('active');
      });

      // Open current panel
      if (!isActive) {
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        content.classList.add('active');
      }
    });
  });

  // Initialize existing scripts
  if (typeof initMagazineCarousels === 'function') {
    initMagazineCarousels();
  }
});
