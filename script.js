// Intersection Observer pour les révélations au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero Section Slideshow
document.addEventListener('DOMContentLoaded', () => {
    const heroSlideshowBackground = document.getElementById('hero-slideshow-background');
    if (!heroSlideshowBackground) return;

    const heroImages = [
        'images/portrait_01.jpg',
        'images/portrait_02.jpg',
        'images/portrait_03.jpg',
        'images/portrait_04.jpg',
        'images/portrait_05.jpg',
        'images/portrait_06.jpg',
        'images/portrait_07.jpg',
        'images/portrait_08.jpg',
        'images/portrait_09.jpg',
        'images/portrait_10.jpg', // The previously unused image
        'images/hero_background.jpg' // The dedicated hero image
    ];

    let currentImageIndex = 0;

    function changeHeroBackground() {
        heroSlideshowBackground.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }

    // Preload images
    heroImages.forEach(image => {
        const img = new Image();
        img.src = image;
    });

    // Set initial background
    changeHeroBackground();

    // Change background every 30 seconds
    setInterval(changeHeroBackground, 30000);
});
