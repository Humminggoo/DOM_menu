import  './css-reset.css'
import './header.css';
import  './menu.css'

let menuBtn = document.getElementById('menu-btn'),
    menu = document.getElementById('menu');

menuBtn.addEventListener("click", toggleMenu.bind(null, menu, 'menu-active'));

function toggleMenu(menu, classname) {
    menu.classList.toggle(classname);
}