function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('div');
  title.classList.add('card-title');
  title.innerHTML = 'Pizza!';
  card.appendChild(title);

  const dishes = [
    {
      name: 'Margarita',
      ingredients: ['Tomato Sauce', 'Cheese']
    },
    {
      name: 'Vesuvio',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham']
    },
    {
      name: 'Hawaii',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Pineapple']
    },
    {
      name: 'Capricciosa',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Mushrooms']
    },
    {
      name: 'Mexicana',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Onion', 'Bell Peppers', 'Jalapeño']
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella']
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella']
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella']
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella']
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella']
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella']
    },

  ];

  const pizzas = document.createElement('div');

  dishes.forEach(dish => {
    const current = createDish(dish.name, dish.ingredients);
    pizzas.appendChild(current);
  });

  card.appendChild(pizzas);
  return card;
}

function createDish(name, ingredients) {
  const dish = document.createElement('div');

  const dishName = document.createElement('div');
  dishName.innerHTML = name;
  dishName.classList.add('menu-title'); // OBS! TO BE ADDED

  const dishIngredients = document.createElement('div');
  dishIngredients.innerHTML = ingredients.join(', ');
  dishIngredients.classList.add('ingredients'); // OBS! TO BE ADDED


  dish.appendChild(dishName);
  dish.appendChild(dishIngredients);

  return dish;
}

export function loadMenu() {
  const content = document.getElementById('main');
  content.appendChild(createCard());
}