import  './css-reset.css'
import './header.css';
import  './menu.css'

let menuBtn = document.getElementById('menu-btn'),
    menu = document.getElementById('menu'),
    menuItems = document.getElementsByClassName('nav-item');

menuBtn.addEventListener("click", toggleMenu.bind(null, menu, 'menu-active'));
menu.addEventListener("click", clickItem, false);
menu.addEventListener("mouseenter", highlightItem, true);
menu.addEventListener("mouseleave", blurItem, true);

function toggleMenu(menu, classname) {
    menu.classList.toggle(classname);
}
function clickItem(e) {
    if(e.target.classList.contains('nav-item')){
        Array.prototype.forEach.call(menuItems, i => {
                if(i.classList.contains('nav-item-clicked')){
                    i.classList.remove('nav-item-clicked', 'nav-item-active');
                }
            }
        );
        e.target.classList.add('nav-item-clicked', 'nav-item-active');
    }
}
function highlightItem(e) {
    if(e.target.classList.contains('nav-item')) {
        if (!e.target.classList.contains('nav-item-clicked')) {
            e.target.classList.add('nav-item-active');
        }
    }
}
function blurItem(e) {
    if(e.target.classList.contains('nav-item')) {
        if (!e.target.classList.contains('nav-item-clicked')) {
            e.target.classList.remove('nav-item-active');
        }
    }
}