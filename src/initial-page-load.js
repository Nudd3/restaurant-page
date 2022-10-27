function createHeader(){
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const homeAnchor = document.createElement('a');
  homeAnchor.textContent = 'Home';
  homeAnchor.href = '#';
  const menuAnchor = document.createElement('a');
  menuAnchor.textContent = 'Menu';
  menuAnchor.href = '#';
  const contactAnchor = document.createElement('a');
  contactAnchor.textContent = 'Contact';
  contactAnchor.href = '#';

  header.appendChild(homeAnchor);
  header.appendChild(menuAnchor);
  header.appendChild(contactAnchor);

  return header;
}

function createMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  return main;
}



export function init(){
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
}