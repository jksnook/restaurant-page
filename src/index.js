import loadPage from "./loadpage";
import loadHome from "./loadhome";
import loadMenu from "./loadmenu";
import loadContact from "./loadcontact";

loadPage();

const page = document.querySelector('div.page');
const menu = document.querySelector('#nav-menu');
const home = document.querySelector('#nav-home');
const contact = document.querySelector('#nav-contact')

menu.addEventListener('click', () => {
  document.querySelector('.current-tab').classList.remove('current-tab');
  menu.classList.add('current-tab');
  page.innerHTML = '';
  loadMenu();
})

home.addEventListener('click', () => {
  document.querySelector('.current-tab').classList.remove('current-tab');
  home.classList.add('current-tab');
  page.innerHTML = '';
  loadHome();
})

contact.addEventListener('click', () => {
  document.querySelector('.current-tab').classList.remove('current-tab');
  contact.classList.add('current-tab');
  page.innerHTML = '';
  loadContact();
})