
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Изменение стиля навигации при скролле
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.opacity = 0.5;
        
    } else {
        navbar.style.background = '#333';
        navbar.style.backdropFilter = 'none';
    }
    if(window.scrollY <= 50) {
        navbar.style.opacity = 1;
        
    }
});