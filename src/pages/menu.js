function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('div');
  title.classList.add('card-title');
  title.innerHTML = 'Pizza!';
  card.appendChild(title);

  const dishes = [];

  

  return card;
}

function createDish(name, ingredients) {

}

export function loadMenu() {
  const content = document.getElementById('main');
  content.appendChild(createCard());
}