export default function loadMenu() {
  const page = document.querySelector('div.page');
  const menu = document.createElement('ul');
  menu.classList.add('menu');
  const item1 = document.createElement('li');
  item1.textContent = 'Big Pizza: $20';
  menu.appendChild(item1);
  page.appendChild(menu);
}