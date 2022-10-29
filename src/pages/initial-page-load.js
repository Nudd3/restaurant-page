function createHeader(){
  const header = document.createElement('div');
  header.classList.add('header');

  const nav = createNav();
  const title = createTitle();

  header.appendChild(title);
  header.appendChild(nav);
  return header;
}

function createTitle() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.textContent = "Alice's Diner";
  return title;
}

function createNav() {

  const nav = document.createElement('nav');
  nav.id = 'nav';
  const homeAnchor = createAnchor('Home');
  const menuAnchor = createAnchor('Menu');
  const contactAnchor = createAnchor('Contact');
  nav.appendChild(homeAnchor);
  nav.appendChild(menuAnchor);
  nav.appendChild(contactAnchor);
  return nav;

}

function createAnchor(textContent) {
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.textContent = textContent;
  anchor.id = textContent.toLowerCase();
  return anchor;
}

function createMain() {
  const main = document.createElement('div');
  main.id = 'main';
  return main;
}

export function clear() {
  const main = document.getElementById('main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

export function init(){
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
}