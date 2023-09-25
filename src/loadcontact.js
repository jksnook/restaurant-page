export default function loadContact() {
  const page = document.querySelector('div.page');
  const info = document.createElement('p');
  info.textContent = "Contact us. Where? I don't know."
  page.appendChild(info);
}