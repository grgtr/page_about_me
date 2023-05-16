const fallButton = document.querySelector(".footer__button-fall");
const fall = document.querySelector(".fall");
fallButton.addEventListener('click', function (evt) {
    if ((!localStorage.getItem("stars") || localStorage.getItem("stars") === "none")) {
        evt.preventDefault();
        if (window.innerWidth >= 800) {
            fall.classList.add("fall_open");
            fall.classList.add("fall_animation");
        }
        localStorage.setItem("stars", "raining");
    } else if (localStorage.getItem("stars") === "raining") {
        evt.preventDefault();
        fall.classList.remove("fall_open");
        fall.classList.remove("fall_animation");
        localStorage.setItem("stars", "none");
    }

})

window.addEventListener('resize', function () {
    if (fall.classList.contains("fall_open")) {
        fall.classList.toggle("fall_animation");
    }
})