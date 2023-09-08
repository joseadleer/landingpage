
// Codigo  para  scroll

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 100)
})

window.addEventListener("scroll", function(){
    let titulo = this.document.querySelector('#id-titulo')
    titulo.classList.toggle('rolagem2',window.scrollY > 120)
})

// Codigo para o menu responsivo

function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile')
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
    }
}