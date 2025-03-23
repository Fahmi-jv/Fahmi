// Theme Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// GSAP Animations
gsap.from('.glass-card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.glass-card',
        start: 'top 80%',
    }
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
