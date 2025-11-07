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
// ...existing code...
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form elements
    const form = event.target;
    const status = form.querySelector('.form-status');
    const name = form.querySelector('#cf-name').value.trim();
    const email = form.querySelector('#cf-email').value.trim();
    const subject = form.querySelector('#cf-subject').value.trim() || 'Contact Form Message';
    const message = form.querySelector('#cf-message').value.trim();

    // Validate required fields
    if (!name || !email || !message) {
        status.textContent = 'Please fill in all required fields.';
        status.style.color = '#d23f31';
        return false;
    }

    // Construct mailto URL
    const mailtoUrl = `mailto:mdouglasswebtec@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // Update status and open mail client
    status.textContent = 'Opening mail client...';
    status.style.color = '#2d6a4f';
    window.location.href = mailtoUrl;

    // Reset form after small delay
    setTimeout(() => {
        form.reset();
        status.textContent = '';
    }, 2000);

    return false;
}