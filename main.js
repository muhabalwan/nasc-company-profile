function applyFormPlaceholders(isRtl) {
    document.querySelectorAll('#contact-form [data-ph-en]').forEach(function (el) {
        var ar = el.getAttribute('data-ph-ar');
        var en = el.getAttribute('data-ph-en');
        el.placeholder = isRtl ? ar : en;
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
