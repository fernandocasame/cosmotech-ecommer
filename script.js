/**
 * COSMOTECH — script.js
 * Interactions: Particles, Navbar, Flip Cards,
 * Scroll Reveal, Animated Counters, Brand Scroll, Mobile Menu
 */

/* =========================================
   1. PARTICLE SYSTEM (50 particles)
   ========================================= */
(function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top  = Math.random() * 100 + '%';
        p.style.animationDelay    = (Math.random() * 20) + 's';
        p.style.animationDuration = (15 + Math.random() * 10) + 's';
        // Random size variation
        const size = 1 + Math.random() * 2;
        p.style.width  = size + 'px';
        p.style.height = size + 'px';
        container.appendChild(p);
    }
})();

/* =========================================
   2. NAVBAR — Sticky + Scroll Effect
   ========================================= */
const navbar = document.getElementById('navbar');

const handleNavScroll = debounce(function() {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', handleNavScroll, { passive: true });

/* =========================================
   3. MOBILE MENU
   ========================================= */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    });
}

/* =========================================
   4. SMOOTH SCROLL for anchor links
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* =========================================
   5. FLIP CARDS — Desktop hover + Mobile tap
   ========================================= */
const flipCards = document.querySelectorAll('.service-card-flip');

flipCards.forEach(card => {
    // Touch/click toggle for mobile
    card.addEventListener('click', function(e) {
        // Only toggle on mobile (no hover capability)
        if (window.matchMedia('(hover: none)').matches) {
            this.classList.toggle('flipped');
        }
    });
});

/* =========================================
   6. INTERSECTION OBSERVER — Scroll Reveal
   ========================================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            // Stagger delay for grid children
            const siblings = entry.target.parentElement.querySelectorAll('.reveal-item');
            let delay = 0;
            siblings.forEach((sib, i) => {
                if (sib === entry.target) delay = i * 90;
            });
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, delay);
            revealObserver.unobserve(entry.target);

            // Animate metric bars
            const bar = entry.target.querySelector('.metric-bar-fill');
            if (bar) {
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = targetWidth; }, delay + 200);
            }
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -80px 0px'
});

document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));

/* =========================================
   7. ANIMATED COUNTERS (Hero + Metrics)
   ========================================= */
function animateCounter(el, target, duration = 2200) {
    const start = performance.now();
    const startVal = 0;

    function update(timestamp) {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * eased);
        el.textContent = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(update);
}

// Hero stat counters
const heroCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number[data-target]').forEach(el => {
                animateCounter(el, parseInt(el.dataset.target));
            });
            heroCounterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroCounterObserver.observe(heroStats);

// Section metric counters
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.counter[data-target]').forEach(el => {
                animateCounter(el, parseInt(el.dataset.target));
            });
            metricsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

const metricsGrid = document.querySelector('.metrics-grid');
if (metricsGrid) metricsObserver.observe(metricsGrid);

/* =========================================
   8. CONTACT FORM SUBMISSION
   ========================================= */
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');

    // Button loading state
    btn.textContent = '⏳ Enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    // Simulate async submit
    setTimeout(() => {
        form.style.display = 'none';
        success.classList.remove('hidden');
        success.style.animation = 'fade-in-up .6s cubic-bezier(.16,1,.3,1) forwards';
    }, 1500);
}

/* =========================================
   9. PARALLAX on Hero background
   ========================================= */
const heroBg = document.querySelector('.hero-bg-gradient');

const handleParallax = debounce(function() {
    if (!heroBg) return;
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateX(-50%) translateY(${scrolled * 0.25}px)`;
}, 5);

window.addEventListener('scroll', handleParallax, { passive: true });

/* =========================================
   10. UTILITY — Debounce
   ========================================= */
function debounce(fn, wait) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), wait);
    };
}

/* =========================================
   11. ACTIVE NAV LINK on scroll
   ========================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navHighlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.style.color = 'var(--primary-400)';
                }
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navHighlightObserver.observe(s));

/* =========================================
   12. KEYBOARD ACCESSIBILITY — Flip cards
   ========================================= */
flipCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Ver detalle del servicio');
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.classList.toggle('flipped');
        }
    });
});

console.log('%c✨ CosmoTech — Digital Marketing Agency', 'color:#3B82F6;font-size:14px;font-weight:800;');
console.log('%cTransformamos ideas en experiencias digitales', 'color:#60A5FA;font-size:12px;');
