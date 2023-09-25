export default function loadHome() {
  const page = document.querySelector('div.page');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image');
  const pizza = document.createElement('img');
  pizza.src = './pizza.jpg';
  pizza.alt = 'A pizza pie';
  imageContainer.appendChild(pizza);
  page.appendChild(imageContainer);
  const description = document.createElement('p');
  description.textContent = 'We Make the best pizzas in THE WORLD!';
  page.appendChild(description);
}