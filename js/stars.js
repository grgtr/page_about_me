const fallButton = document.querySelector(".footer__button-fall");
const fall = document.querySelector(".fall");

fallButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (window.innerWidth >= 800) {
        fall.classList.add("fall_open");
        fall.classList.add("fall_animation");
    }
})

window.addEventListener('resize', function () {
    if (fall.classList.contains("fall_open")) {
        fall.classList.toggle("fall_animation");
    }
})
fall.addEventListener('click', function () {
    if (fall.classList.contains("fall_open")) {
        fall.classList.remove("fall_open");
    }
})