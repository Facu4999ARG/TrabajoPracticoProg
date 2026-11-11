const botonMenu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (botonMenu && nav) {
    botonMenu.addEventListener('click', function () {
        nav.classList.toggle('abierto');
        botonMenu.setAttribute('aria-expanded', nav.classList.contains('abierto'));
    });
}
