/* ========================================
   MSHINDISECURE — CORE JS
   ======================================== */

/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 700);
    }
  }, 1500);
});

/* ── NAVBAR: scroll state + hamburger ── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      navLinks.classList.contains('open')
        ? (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
           spans[1].style.opacity = '0',
           spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)')
        : (spans[0].style.transform = '',
           spans[1].style.opacity = '',
           spans[2].style.transform = '');
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // Set active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html') || (current === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
    // Handle pages/ prefix
    if (href && href.includes(current) && current !== 'index.html') {
      link.classList.add('active');
    }
  });
})();

/* ── SCROLL REVEAL ── */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ── SKILL BARS ── */
(function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.classList.add('animated');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-bar-wrap').forEach(el => observer.observe(el));
})();

/* ── CURSOR GLOW (desktop only) ── */
if (window.innerWidth > 900) {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9998;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%);
    transform: translate(-50%,-50%);
    transition: transform 0.08s ease;
  `;
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

/* ── TYPED TEXT ── */
function typeText(el, texts, speed = 80, pause = 2200) {
  if (!el) return;
  let ti = 0, ci = 0, deleting = false;

  function tick() {
    const current = texts[ti];
    if (deleting) {
      el.textContent = current.slice(0, ci--);
      if (ci < 0) { deleting = false; ti = (ti + 1) % texts.length; setTimeout(tick, 400); return; }
    } else {
      el.textContent = current.slice(0, ci++);
      if (ci > current.length) { deleting = true; setTimeout(tick, pause); return; }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}

/* ── CONTACT FORM → WHATSAPP ── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !message) return;

    const text = encodeURIComponent(
      `Hi Ephy! My name is ${name} (${email}).\n\n${message}`
    );
    window.open(`https://wa.me/254114419282?text=${text}`, '_blank');
  });
})();

/* ── COUNTER ANIMATION ── */
function animateCounter(el, target, duration = 1600) {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + (el.dataset.suffix || '');
  };
  requestAnimationFrame(step);
}

(function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target), 1600);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
})();
