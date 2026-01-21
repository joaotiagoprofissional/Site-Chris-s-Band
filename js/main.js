const btnOpenMenu = document.querySelector('#btn-open-menu')
const btnCloseMenu = document.querySelector('#btn-close-menu')
const ul = document.querySelector('#menu-header')

const openMenu = () =>{
    ul.classList.toggle('show-menu')
    btnOpenMenu.style.display = 'none'
    btnCloseMenu.style.display = 'block'
}

btnOpenMenu.addEventListener('click', openMenu)

const closeMenu = () =>{
    ul.classList.toggle('show-menu')
    btnCloseMenu.style.display = 'none'
    btnOpenMenu.style.display = 'block'
}

btnCloseMenu.addEventListener('click', closeMenu)