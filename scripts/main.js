const navbar = document.querySelector("[data-navbar]");
const navbarMenu = document.querySelector("[data-navbar-menu]");
const navbarToggleButton = document.querySelector(
  "[data-navbar-toggle-button]"
);
const overlay = document.querySelector("[data-overlay]");

function toggleMenu() {
  document.body.classList.toggle("lock");
  overlay.classList.toggle("active");
  navbarMenu.classList.contains("open")
    ? navbarToggleButton.setAttribute("aria-expanded", "false")
    : navbarToggleButton.setAttribute("aria-expanded", "true");
  navbarMenu.classList.toggle("open");
  navbarToggleButton.classList.toggle("active");
}

navbarToggleButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

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
