import { init, clear } from "./pages/initial-page-load";
import { loadHome } from "./pages/home.js";
import { loadContact } from "./pages/contact.js";
import { loadMenu } from "./pages/menu";
import "./styles/styles.css";

init();

let currentPage = "home";

const homeAnchor = document.getElementById("home");
homeAnchor.addEventListener("click", () => {
  clear();
  const oldPage = document.getElementById(currentPage);
  oldPage.classList.toggle('taken');
  loadHome();

  currentPage = "home";
  const newPage = document.getElementById(currentPage);
  newPage.classList.toggle('taken');
});
// once clicked:
// 1. clear screen
// 2. remove underline from current page
// 3. change current page
// 4. load new content
// 5. add underline
const contactAnchor = document.getElementById("contact");
contactAnchor.addEventListener("click", () => {
  clear();
  loadContact();
});

const menuAnchor = document.getElementById("menu");
menuAnchor.addEventListener("click", () => {
  clear();
  loadMenu();
});
