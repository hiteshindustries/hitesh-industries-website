(() => {
  const key = 'hitesh-industries-theme';
  const style = document.createElement('style');
  style.textContent =     'body.dark-mode{--forest:#b7ff00;--green:#a8ff00;--lime:#39ff14;--pale:#101810;--paper:#050705;--ink:#edffe8;--muted:#a8b9a4;--line:#283b25;color-scheme:dark;background:#050705!important;color:#edffe8!important}' +
    'body.dark-mode .topbar{background:rgb(4 7 4 / 94%)!important;border-color:#22351e!important}' +
    'body.dark-mode .hero{background:radial-gradient(circle at 82% 25%,rgb(57 255 20 / 9%),transparent 32%),#050705!important}' +
    'body.dark-mode .services,body.dark-mode .gallery-section,body.dark-mode .quote-section{background:#080c08!important}' +
    'body.dark-mode .section,body.dark-mode .contact,body.dark-mode footer{background:#050705!important}' +
    'body.dark-mode .card,body.dark-mode .uses,body.dark-mode .quote-form,body.dark-mode .contact-links a,body.dark-mode .links a,body.dark-mode .button.light{background:#0e140f!important;border-color:#293d27!important;color:#edffe8!important}' +
    'body.dark-mode .card h3,body.dark-mode .copy h2,body.dark-mode .uses h2,body.dark-mode .contact h2,body.dark-mode .quote-intro h2{color:#b7ff00!important}' +
    'body.dark-mode .card p,body.dark-mode .copy p,body.dark-mode .uses ul,body.dark-mode .intro,body.dark-mode .contact p,body.dark-mode .quote-intro>p{color:#b2c1ad!important}' +
    'body.dark-mode .hero-art{border-color:#152216!important;background:#0b110c!important}' +
    'body.dark-mode .gate-label{background:#0c130d!important;color:#b7ff00!important;border:1px solid #31552a}' +
    'body.dark-mode .gate-label span{color:#b2c1ad!important}' +
    'body.dark-mode .about-panel{background:radial-gradient(circle at 85% 14%,rgb(57 255 20 / 12%),transparent 34%),linear-gradient(145deg,#101a10,#080d08)!important;border-color:#294325!important}' +
    'body.dark-mode .cta{background:radial-gradient(circle at 95% 0%,#173d14 0,transparent 35%),#080d08!important;border-block:1px solid #294325}' +
    'body.dark-mode .cta p{color:#b2c1ad!important}' +
    'body.dark-mode .cta .button{background:#b7ff00!important;color:#061000!important}' +
    'body.dark-mode .project-photo{background:#0e140f!important;border-color:#182419!important}' +
    'body.dark-mode .project-photo figcaption{color:#b7ff00!important}' +
    'body.dark-mode input,body.dark-mode select,body.dark-mode textarea{background:#090e0a!important;color:#edffe8!important;border-color:#2c412a!important}' +
    'body.dark-mode input::placeholder,body.dark-mode textarea::placeholder{color:#82927e!important}' +
    'body.dark-mode .theme-toggle{background:#b7ff00;color:#061000;border-color:#b7ff00;box-shadow:0 0 18px rgb(183 255 0 / 25%)}' +
    '.theme-toggle{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:40px;padding:0 14px;border:1px solid #cfe0c9;border-radius:999px;background:#fff;color:#174b34;font:700 12px/1 system-ui,-apple-system,Segoe UI,sans-serif;cursor:pointer;transition:background .2s,color .2s,border-color .2s,box-shadow .2s;white-space:nowrap}' +
    '.theme-toggle:hover{box-shadow:0 0 0 3px rgb(57 255 20 / 15%);border-color:#8acb60}' +
    '@media(max-width:700px){.theme-toggle{min-height:36px;padding:0 10px;font-size:11px}}';
  document.head.appendChild(style);
  const dark = localStorage.getItem(key) === 'dark';
  const button = document.createElement('button');
  button.className = 'theme-toggle';
  button.type = 'button';
  button.setAttribute('aria-label', 'Switch color theme');
  const nav = document.querySelector('.nav-actions') || document.querySelector('.nav');
  if (!nav) return;
  const before = nav.querySelector('.button') || nav.querySelector('.back');
  nav.insertBefore(button, before || null);
  function applyTheme(useDark) {
    document.body.classList.toggle('dark-mode', useDark);
    button.textContent = useDark ? '☀ Light mode' : '☾ Dark mode';
    button.setAttribute('aria-pressed', String(useDark));
    localStorage.setItem(key, useDark ? 'dark' : 'light');
  }
  applyTheme(dark);
  button.addEventListener('click', () => applyTheme(!document.body.classList.contains('dark-mode')));
})();
