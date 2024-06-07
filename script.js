document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });

    // Dark mode switch functionality
    const switchModeButton = document.querySelector('.switch-mode');
    const body = document.body;
    const icon = switchModeButton.querySelector('i');
    const logoImg = document.querySelector('.logo-nav img');
    const footerImg = document.querySelector('.contact-left-footer img');

    switchModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const allTextElements = document.querySelectorAll('body *');
        allTextElements.forEach(element => {
            element.classList.toggle('dark-text');
        });
        
        if (body.classList.contains('dark-mode')) {
            logoImg.src = 'images/logo-white.png';
            footerImg.src = 'images/logo-white.png';
        } else {
            logoImg.src = 'images/logo.png';
            footerImg.src = 'images/logo.png';
        }

        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Button styling based on system preference
   //  const button = document.querySelector('.Started-btn');
    // const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyDarkModeStyles() {
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
    }

    function handleColorSchemeChange(event) {
        if (event.matches) {
            applyDarkModeStyles();
        }
    }

    // Initial check
    handleColorSchemeChange(darkModeMediaQuery);

    // Listen for changes
    darkModeMediaQuery.addListener(handleColorSchemeChange);
});
