
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 100)
})

window.addEventListener("scroll", function(){
    let titulo = this.document.querySelector('#id-titulo')
    titulo.classList.toggle('rolagem2',window.scrollY > 120)
})