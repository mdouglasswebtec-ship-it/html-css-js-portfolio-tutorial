function toggleMenu() {
	// grab the menu container and the hamburger icon
	const menuLinks = document.querySelector(".menu-links");
	const hamburgerIcon = document.querySelector(".hamburger-icon");

	if (!menuLinks || !hamburgerIcon) return; // defensive: do nothing if elements missing

	menuLinks.classList.toggle("open");
	hamburgerIcon.classList.toggle("open");
}

// Smooth scroll and close hamburger menu when a menu link is clicked
document.addEventListener('DOMContentLoaded', () => {
	// enable CSS-based smooth scrolling as a progressive enhancement
	try { document.documentElement.style.scrollBehavior = 'smooth'; } catch (e) {}

	const menuLinks = document.querySelector('.menu-links');
	if (!menuLinks) return;

	menuLinks.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.matches('a[href^="#"]')) {
			e.preventDefault();
			const href = target.getAttribute('href');
			const dest = document.querySelector(href);
			if (dest) dest.scrollIntoView({ behavior: 'smooth', block: 'start' });

			// close menu after clicking
			const hamburgerIcon = document.querySelector('.hamburger-icon');
			menuLinks.classList.remove('open');
			if (hamburgerIcon) hamburgerIcon.classList.remove('open');
		}
	});
});