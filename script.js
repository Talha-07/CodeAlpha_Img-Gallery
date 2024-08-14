// JavaScript for showing and hiding sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    // Hide the welcome section
    document.getElementById('welcome').style.display = 'none';
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to open lightbox
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const images = document.querySelectorAll('.gallery-grid img');
    lightboxImage.src = images[index].src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    const images = document.querySelectorAll('.gallery-grid img');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    openLightbox(currentIndex);
}

// Initialize default view
document.addEventListener('DOMContentLoaded', () => {
    showSection('welcome');
});

// Filter images by category
function filterCategory(category) {
    const images = document.querySelectorAll('.gallery-grid img');
    images.forEach(img => {
        img.style.display = category === 'all' || img.classList.contains(category) ? 'block' : 'none';
    });
}
