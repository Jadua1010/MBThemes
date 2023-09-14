var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'https://drive.jaduastudios.com/images/webdata/mb2.ico';

window.onload = function () {
    // Create a container for the logo overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Create the logo image element
    const logo = document.createElement('img');
    logo.src = 'https://drive.jaduastudios.com/images/webdata/mb.png'; // Replace with the actual path to your logo image
    logo.alt = 'Your Logo';
    logo.classList.add('logo');
    overlay.appendChild(logo);

    // Function to remove the logo after the animation is complete
    function removeLogo() {
        overlay.removeChild(logo);
		overlay.classList.remove('overlay')
    }

    // Show the overlay and play the animation
    setTimeout(function () {
    // Play 'hithere' animation twice
    logo.addEventListener('animationiteration', function () {
        // When 'hithere' animation completes twice, add 'bounce-out' animation
        logo.classList.add('animate-bounce-out');
        logo.addEventListener('animationend', removeLogo, { once: true }); // Remove the logo after 'bounce-out' animation
    });
    overlay.classList.add('show');
    }, 0); // Show after 1 second
};