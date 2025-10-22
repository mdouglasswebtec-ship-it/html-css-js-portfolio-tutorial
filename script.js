function toggleMenu() {
	// grab the menu container and the hamburger icon
	const menuLinks = document.querySelector(".menu-links");
	const hamburgerIcon = document.querySelector(".hamburger-icon");

	if (!menuLinks || !hamburgerIcon) return; // defensive: do nothing if elements missing

	const isOpen = menuLinks.classList.toggle("open");
	hamburgerIcon.classList.toggle("open");

	// accessibility: update aria-hidden and focus
	menuLinks.setAttribute('aria-hidden', !isOpen);
	if (isOpen) {
		const firstLink = menuLinks.querySelector('a');
		if (firstLink) firstLink.focus();
	}
}