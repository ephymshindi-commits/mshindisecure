/* ========================================
   MSHINDISECURE — SHARED LAYOUT
   Injects navbar + footer + loader into every page
   ======================================== */

(function injectLayout() {
  // Detect if we're in /pages/ subfolder
  const inPages = window.location.pathname.includes('/pages/');
  const root = inPages ? '../' : './';

  /* ── LOADER ── */
  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = `
    <div class="loader-inner">
      <div class="loader-logo">Mshindi<span>Secure</span></div>
      <div class="loader-bar"><div class="loader-bar-fill"></div></div>
    </div>
  `;
  document.body.insertBefore(loader, document.body.firstChild);

  /* ── NAVBAR ── */
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <a href="${root}index.html" class="nav-brand">
      <img
        src="https://res.cloudinary.com/dnaw2g9c0/image/upload/v1781945334/file_00000000d36471f89955f87ce073cd5a_1_qok9fi.png"
        alt="Ephy Mshindi"
        class="nav-brand-avatar"
        onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
      />
      <div class="nav-brand-dot" style="display:none;"></div>
      Mshindi<span style="color:var(--cyan)">Secure</span>
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html">Home</a></li>
      <li><a href="${root}pages/about.html">About</a></li>
      <li><a href="${root}pages/projects.html">Projects</a></li>
      <li><a href="${root}pages/cybersecurity.html">Security</a></li>
      <li><a href="${root}pages/skills.html">Skills</a></li>
      <li><a href="${root}pages/contact.html" class="nav-cta">Hire Me</a></li>
    </ul>
    <div class="nav-hamburger" role="button" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </div>
  `;
  document.body.insertBefore(navbar, loader.nextSibling);

  /* ── FOOTER ── */
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div>
          <div class="footer-brand">Mshindi<span>Secure</span></div>
          <div class="footer-tagline">Security-first engineering from Nairobi, Kenya.</div>
        </div>
        <div class="footer-links">
          <a href="${root}index.html">Home</a>
          <a href="${root}pages/projects.html">Projects</a>
          <a href="${root}pages/cybersecurity.html">Security</a>
          <a href="${root}pages/skills.html">Skills</a>
          <a href="${root}pages/contact.html">Contact</a>
        </div>
      </div>
      <div class="footer-copy">
        © 2025 Ephy Mshindi · MshindiSecure · Built with purpose, secured by design.
      </div>
    </div>
  `;
  document.body.appendChild(footer);
})();
