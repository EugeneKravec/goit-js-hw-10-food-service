// import './menu.json'
// import './templates/cards.hbs'

import menuArr from './menu.json'
import templateCard from './templates/cards.hbs'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuList = document.querySelector('.js-menu')
const markUp = templateCard(menuArr)

menuList.insertAdjacentHTML('beforeend', markUp)

const currentTheme = localStorage.getItem('theme')
const switchToggle = document.querySelector('#theme-switch-toggle')

switchToggle.addEventListener('change', onToggleChange);

if (currentTheme) {
    document.body.classList.add(currentTheme);
}

if (currentTheme === Theme.DARK) {
    switchToggle.checked = true;
}

function onToggleChange() {
    if (switchToggle.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}