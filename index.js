const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')               // toggle -> adiciona e remove automaticamente, caso clique no botaoMenu, adiciona a classe "menu-lateral--ativo"
})