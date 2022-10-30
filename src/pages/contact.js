function createContent(){
  const section = document.createElement('div');
  section.classList.add('card');

  const title = document.createElement('div');
  title.classList.add('card-title');
  title.textContent = 'Contact';

  const content = document.createElement('div');
  content.innerHTML = "If you have any questions regarding our food or anything else in the universe, feel free to contact us at: <br /> Email: alicesdiner@food.com <br /> Phone: 123-00124949";
  content.classList.add('card-content');

  section.appendChild(title);
  section.appendChild(content);
  return section;
}

export function loadContact() {
  const contactAnchor = document.getElementById("contact");
  contactAnchor.classList.add('taken');

  const content = document.getElementById('main');
  content.appendChild(createContent());
}