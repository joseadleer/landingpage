// Codigo para o menu responsivo

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);