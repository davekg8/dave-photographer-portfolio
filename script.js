// Intersection Observer pour les révélations au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.photo-container img');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(img => img.src); // Get all image sources from the gallery

    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[currentImageIndex];
        lightboxModal.classList.remove('hidden');
    }

    function closeLightbox() {
        lightboxModal.classList.add('hidden');
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);

    // Close on overlay click
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('hidden')) { // Only if lightbox is open
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
});
