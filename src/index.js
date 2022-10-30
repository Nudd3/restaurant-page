import { init, clear } from './pages/initial-page-load';
import { loadHome } from './pages/home.js';
import { loadContact } from './pages/contact.js';
import { loadMenu } from './pages/menu';
import './styles/styles.css';

init();
loadHome();

const homeAnchor = document.getElementById('home');
const contactAnchor = document.getElementById('contact');
const menuAnchor = document.getElementById('menu');

homeAnchor.addEventListener('click', () => {
  clear();
  loadHome();
  contactAnchor.classList.remove('taken');
  menuAnchor.classList.remove('taken');
});

contactAnchor.addEventListener('click', () => {
  clear();
  loadContact();
  menuAnchor.classList.remove('taken');
  homeAnchor.classList.remove('taken');
});

menuAnchor.addEventListener('click', () => {
  clear();
  loadMenu();
  contactAnchor.classList.remove('taken');
  homeAnchor.classList.remove('taken');
});
