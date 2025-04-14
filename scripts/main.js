const body = document.body;
const overlay = document.querySelector('[data-overlay]');
const navbarMenu = document.querySelector('[data-navbar-menu]');
const navbarToggleButton = document.querySelector('[data-navbar-toggle-button]');


function toggleMenu() {
	body.classList.toggle('lock');
	overlay.classList.toggle('active');
	navbarMenu.classList.contains('open')
		? navbarToggleButton.setAttribute('aria-expanded', 'false')
		: navbarToggleButton.setAttribute('aria-expanded', 'true');
	navbarMenu.classList.toggle('open');
	navbarToggleButton.classList.toggle('active');
}

navbarToggleButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);