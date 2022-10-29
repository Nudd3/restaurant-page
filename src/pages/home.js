function aboutSection() {
  const about = document.createElement('div');
  about.classList.add('card');

  const aboutTitle = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('card-title');
  title.textContent = 'About';
  aboutTitle.appendChild(title);

  const aboutContent = document.createElement('div');
  aboutContent.classList.add('card-content');
  aboutContent.innerHTML = "Welcome to Alice's Pizza-Plaza!<br/> We really like pizza! But we also want others to like pizza. Hence, we make pizza!";

  about.appendChild(aboutTitle);
  about.appendChild(aboutContent);
  return about;

}

function hoursSection() {
  const hours = document.createElement('div');
  hours.classList.add('card');

  const hoursTitle = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('card-title');
  title.textContent = 'Opening Hours';
  hoursTitle.appendChild(title);

  const hoursContent = document.createElement('div');
  hoursContent.classList.add('card-content');
  const list = document.createElement('ul');
  const l1 = document.createElement('li');
  l1.innerHTML = 'Monday - Thursday: 10AM - 9PM';
  const l2 = document.createElement('li');
  l2.innerHTML = 'Friday - Saturday: 9AM - 12PM';
  const l3 = document.createElement('li');
  l3.innerHTML = 'Sunday: 10AM - 8PM';

  list.appendChild(l1);
  list.appendChild(l2);
  list.appendChild(l3);

  hoursContent.appendChild(list);

  hours.appendChild(hoursTitle);
  hours.appendChild(hoursContent);
  return hours;
}

function locationSection() {
  const location = document.createElement('div');
  location.classList.add('card');

  const locationTitle = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('card-title');
  title.textContent = 'Location';
  locationTitle.appendChild(title);

  const locationContent = document.createElement('div');
  locationContent.classList.add('card-content');
  locationContent.innerHTML = "You find us at:<br/>Boulevard of happiness, NY";

  location.appendChild(locationTitle);
  location.appendChild(locationContent);
  return location;
}

export function loadHome() {
  const main = document.getElementById('main');
  main.appendChild(aboutSection());
  main.appendChild(hoursSection());
  main.appendChild(locationSection());
}

