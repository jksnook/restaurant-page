export default function loadMenu() {
  const page = document.querySelector('div.page');
  const menu = document.createElement('ul');
  menu.classList.add('menu');
  const item1 = document.createElement('li');
  item1.textContent = 'Big Pizza: $20';
  menu.appendChild(item1);
  const item2 = document.createElement('li');
  item2.textContent = 'Small Pizza: $10';
  menu.appendChild(item2);
  const item3 = document.createElement('li');
  item3.textContent = 'Tiny Pizza: $5';
  menu.appendChild(item3);
  page.appendChild(menu);
}