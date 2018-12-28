import  './css-reset.css';
import './header.css';
import  './menu.css';
import  './content.css';
import * as data from './task.json';
const word = data.projects;
console.log(word); // output 'testing'

let menuBtn = document.getElementById('menu-btn'),
    menu = document.getElementById('menu'),
    menuItems = document.getElementsByClassName('nav-item'),
    contentContainer = document.getElementById('content');

showContent(data.projects[0].name);

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
        if(document.getElementById('content-name').textContent!==e.target.textContent) {
            removeContent();
            showContent(e.target.textContent);
        }
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
/*Dynamic content*/
function showContent(name) {
    let content = data.projects.filter(i => {
        return i.name === name;
    })[0];
    console.log(content);
    let fragment = document.createDocumentFragment();
    let nameDiv = document.createElement('div');
    nameDiv.textContent = content.name;
    nameDiv.setAttribute('id', 'content-name');
    nameDiv.classList.add('content-name');
    fragment.appendChild(nameDiv);
    for(let i = 0; i < content.tasks.length; i++){
        let task = document.createElement('div');
        task.textContent = content.tasks[i];
        task.classList.add('task-item');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        task.insertAdjacentElement('afterbegin', checkbox);
        fragment.appendChild(task);
    }
    contentContainer.appendChild(fragment);
}
function removeContent() {
        while (contentContainer.hasChildNodes()) {
            contentContainer.removeChild(contentContainer.firstChild);
        }
}