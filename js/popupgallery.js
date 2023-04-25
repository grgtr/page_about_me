const galleryImages = document.querySelectorAll('.gallery-image');
const links = document.querySelectorAll('.gallery__link');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.popup__content');
const totalImages = galleryImages.length;

let start;
let currentImageIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Add click event listener to each gallery image
links.forEach((link) => {
    link.addEventListener('click', function (evt) {
        evt.preventDefault();
    });
})
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Set the current image index and display the popup
        currentImageIndex = index;
        start = true;
        container.classList.add('popup__content-start');
        displayPopup();
        start = false;
        container.classList.remove('popup__content-start');

    });
});

closeBtn.addEventListener('click', () => {
    hidePopup();
    container.innerHTML = ``;
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
    popup.classList.add('show-popup');
    container.style.display = 'block';
    updatePopupImage();
}
function hidePopup() {
    popup.classList.remove('show-popup');
}
function updatePopupImage() {
    if (!start) {
        container.classList.remove('popup__content-show');
    }    // Get the image source from the corresponding gallery image
    setTimeout(() => {
        const imageSrc = galleryImages[currentImageIndex].getAttribute('src');
        // Add the image source to the popup image
        container.innerHTML = `<img class="popup__content-image" id ="popup-image" src="${imageSrc}">`;
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
        if (!start) {
            container.classList.add('popup__content-show');
        }
    }, 400);

}