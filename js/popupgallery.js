const galleryImages = document.querySelectorAll('.gallery-image');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;
const totalImages = galleryImages.length;

// Add click event listener to each gallery image
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
// Set the current image index and display the popup
        currentImageIndex = index;
        displayPopup();
    });
});

closeBtn.addEventListener('click', () => {
    hidePopup();
});

prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
    }
    updatePopupImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
    }
    updatePopupImage();
});

function displayPopup() {
    popup.style.display = 'block';
    updatePopupImage();
}
function hidePopup() {
    popup.style.display = 'none';
}
function updatePopupImage() {
// Get the image source from the corresponding gallery image
    const imageSrc = galleryImages[currentImageIndex].getAttribute('src');
// Update the popup image source
    popupImage.setAttribute('src', imageSrc);
// Hide the previous button if the current image is the first image
    if (currentImageIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
// Hide the next button if the current image is the last image
    if (currentImageIndex === totalImages - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}