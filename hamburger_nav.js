const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#links ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });