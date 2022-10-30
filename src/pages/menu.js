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
      ingredients: ['Tomato Sauce', 'Cheese'],
      price: "8.60"
    },
    {
      name: 'Vesuvio',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham'],
      price: "9.59"
    },
    {
      name: 'Hawaii',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Pineapple'],
      price: "9.59"
    },
    {
      name: 'Capricciosa',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Mushrooms'],
      price:" 9.59"
    },
    {
      name: 'Mexicana',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Onion', 'Bell Peppers', 'Jalapeño'],
      price:"10.00"
    },
    {
      name: 'Alice Special',
      ingredients: ['Tomato Sauce', 'Cheese', 'Ham', 'Spicy Salami', 'Mozzarella'],
      price: "10.49"
    },
    {
      name: 'Italia',
      ingredients: ['Tomato Sauce', 'Cheese', 'Onion', 'Tuna'],
      price: "10.99"
    },
    {
      name: 'Amigo',
      ingredients: ['Tomato Sauce', 'Cheese', 'Mushrooms', 'Bell Peppers', 'Minced Meat'],
      price: "10.49"
    },
    {
      name: 'Vegetariana',
      ingredients: ['Tomato Sauce', 'Cheese', 'Onion', 'Mushrooms', 'Pineapple', 'Bell Peppers', 'Artichoke'],
      price: "9.49"
    },
    {
      name: 'Jamaica',
      ingredients: ['Tomato Sauce', 'Cheese', 'Mushrooms', 'Shrimp'],
      price: "10.99"
    },

  ];

  const pizzas = document.createElement('div');
  pizzas.classList.add('pizzas');

  dishes.forEach(dish => {
    const current = createDish(dish.name, dish.ingredients, dish.price);
    pizzas.appendChild(current);
  });

  card.appendChild(pizzas);
  return card;
}

function createDish(name, ingredients,price) {
  const dish = document.createElement('div');

  const dishName = document.createElement('div');
  const theName = document.createElement('h4');
  theName.textContent = name;
  const thePrice = document.createElement('h4');
  thePrice.textContent = "$" + price;
  dishName.appendChild(theName);
  dishName.appendChild(thePrice);
  dishName.classList.add('menu-title');

  const dishIngredients = document.createElement('div');
  dishIngredients.innerHTML = ingredients.join(', ');
  dishIngredients.classList.add('ingredients');


  dish.appendChild(dishName);
  dish.appendChild(dishIngredients);

  return dish;
}

export function loadMenu() {
  const menuAnchor = document.getElementById("menu");
  menuAnchor.classList.add('taken');
  
  const content = document.getElementById('main');
  content.appendChild(createCard());
}