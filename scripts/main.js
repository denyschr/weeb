import { debounce } from "./helpers.js";

const body = document.body;
const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navbarMenu = document.querySelector("[data-navbar-menu]");
const navbarToggleButton = document.querySelector(
  "[data-navbar-toggle-button]"
);

function toggleMenu() {
  body.classList.toggle("lock");
  overlay.classList.toggle("active");
  navbarMenu.classList.contains("open")
    ? navbarToggleButton.setAttribute("aria-expanded", "false")
    : navbarToggleButton.setAttribute("aria-expanded", "true");
  navbarMenu.classList.toggle("open");
  navbarToggleButton.classList.toggle("active");
}

navbarToggleButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

window.addEventListener(
  "resize",
  debounce(() => {
    if (window.innerWidth >= 768) {
      body.classList.remove("lock");
      overlay.classList.remove("active");
      navbarToggleButton.setAttribute("aria-expanded", "false");
      navbarMenu.classList.remove("open");
      navbarToggleButton.classList.remove("active");
    }
  })
);

const navbarHeight = navbar.offsetHeight;
let previousScrollPosition = window.scrollY;

document.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;
  if (previousScrollPosition > currentScrollPosition) {
    document.querySelector("[data-navbar]").style.top = "0";
  } else if (currentScrollPosition > navbarHeight) {
    document.querySelector("[data-navbar]").style.top = `-${navbarHeight}px`;
  }
  previousScrollPosition = currentScrollPosition;
});
