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

applyFormPlaceholders(false);
setupMailtoContactForm();
