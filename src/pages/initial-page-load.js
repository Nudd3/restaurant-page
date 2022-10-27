function createHeader(){
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const nav = createNav();
  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = "Eat n' Greet!";

  header.appendChild(title);
  header.appendChild(nav);
  return header;
}

function createNav() {

  const nav = document.createElement('nav');
  const homeAnchor = document.createElement('a');
  homeAnchor.textContent = 'Home';
  homeAnchor.href = '#';
  const menuAnchor = document.createElement('a');
  menuAnchor.textContent = 'Menu';
  menuAnchor.href = '#';
  const contactAnchor = document.createElement('a');
  contactAnchor.textContent = 'Contact';
  contactAnchor.href = '#';
  nav.appendChild(homeAnchor);
  nav.appendChild(menuAnchor);
  nav.appendChild(contactAnchor);
  return nav;

}

function createMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  const p = document.createElement('p');
  p.textContent = 'hello world!';
  main.appendChild(p);
  return main;
}



export function init(){
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
}