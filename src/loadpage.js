export default function loadPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  header.classList.add('header');
  const title = document.createElement('h1');
  title.textContent = "Joe's Pizzeria";
  const nav = document.createElement('ul');
  nav.classList.add('nav');
  const navItem1 = document.createElement('li');
  navItem1.id = 'nav-home';
  navItem1.classList.add('current-tab')
  navItem1.textContent = 'Home';
  nav.appendChild(navItem1);
  const navItem2 = document.createElement('li');
  navItem2.id = 'nav-menu';
  navItem2.textContent = 'Menu';
  nav.appendChild(navItem2);
  const navItem3 = document.createElement('li');
  navItem3.id = 'nav-contact';
  navItem3.textContent = 'Contact';
  nav.appendChild(navItem3);
  header.appendChild(title);
  header.appendChild(nav);
  content.appendChild(header);
  const page = document.createElement('div');
  page.classList.add('page');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image');
  const pizza = document.createElement('img');
  pizza.src = './pizza.jpg';
  pizza.alt = 'A pizza pie';
  imageContainer.appendChild(pizza);
  page.appendChild(imageContainer);
  content.appendChild(page);
}