const menuContainer = document.querySelector('.menu-container');
const button = document.querySelector('button');
const hamburger = document.querySelector('.fa-bars');
const closing = document.querySelector('.fa-times');

const moveNav = () => {
    menuContainer.classList.toggle('show');
    button.classList.toggle('show');
    hamburger.classList.toggle('hide');
    closing.classList.toggle('hide');
}

button.addEventListener('click', moveNav);