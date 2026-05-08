function applyFormPlaceholders(isRtl) {
    document.querySelectorAll('#contact-form [data-ph-en]').forEach(function (el) {
        var ar = el.getAttribute('data-ph-ar');
        var en = el.getAttribute('data-ph-en');
        el.placeholder = isRtl ? ar : en;
    });
}

function setupMailtoContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var nameInput = document.getElementById('contact-name');
        var emailInput = document.getElementById('contact-email');
        var msgInput = document.getElementById('contact-msg');

        var name = nameInput ? nameInput.value.trim() : '';
        var email = emailInput ? emailInput.value.trim() : '';
        var message = msgInput ? msgInput.value.trim() : '';

        var subject = 'Website Inquiry - NASC';
        var bodyLines = [
            'Name/Company: ' + (name || '-'),
            'Email: ' + (email || '-'),
            '',
            'Project requirements:',
            message || '-'
        ];

        var mailtoUrl = 'mailto:info@nas-c.com'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(bodyLines.join('\n'));

        window.location.href = mailtoUrl;
    });
}

function toggleLang() {
    var html = document.getElementById('main-html');
    var btn = document.querySelector('.lang-switch');
    var rtl = html.getAttribute('dir') === 'rtl';

    if (rtl) {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        btn.innerText = 'العربية';
        applyFormPlaceholders(false);
    } else {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        btn.innerText = 'English';
        applyFormPlaceholders(true);
    }
}

function setupScrollReveals() {
    var shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealTargets = document.querySelectorAll(
        '.hero-content, .origin-grid > *, .service-card, .founder-strip, .contact-container > *'
    );
    var serviceStaggerIndex = 0;

    if (!revealTargets.length) return;

    revealTargets.forEach(function (el) {
        el.classList.add('reveal');
        if (el.classList.contains('service-card')) {
            el.style.setProperty('--reveal-delay', (serviceStaggerIndex * 85) + 'ms');
            serviceStaggerIndex += 1;
        }
    });

    if (shouldReduceMotion || !('IntersectionObserver' in window)) {
        revealTargets.forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px'
    });

    revealTargets.forEach(function (el) {
        observer.observe(el);
    });
}

function setupHeroEntrance() {
    var shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hero = document.querySelector('.hero');
    if (!hero) return;

    var sequence = hero.querySelectorAll('.section-tag, h1, p, .submit-btn');
    sequence.forEach(function (el, index) {
        el.style.setProperty('--reveal-delay', (index * 110) + 'ms');
    });

    if (shouldReduceMotion) {
        hero.classList.add('hero-animate-in');
        return;
    }

    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            hero.classList.add('hero-animate-in');
        });
    });
}

applyFormPlaceholders(false);
setupMailtoContactForm();
setupScrollReveals();
setupHeroEntrance();
