function toggleMenu() {
	// grab the menu container and the hamburger icon
	const menuLinks = document.querySelector(".menu-links");
	const hamburgerIcon = document.querySelector(".hamburger-icon");

	if (!menuLinks || !hamburgerIcon) return; // defensive: do nothing if elements missing

	menuLinks.classList.toggle("open");
	hamburgerIcon.classList.toggle("open");
}