import menuArr from './menu.json'
import { template } from '../templates/cards.hbs'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuList = document.querySelector('.js-menu')
const markUp = template(menuArr)

menuList.insertAdjacentHTML('beforeend', markUp)
console.log(1);