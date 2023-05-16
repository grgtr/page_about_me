const button = document.querySelector(".all-black__btn");
const text = document.querySelector(".all-black__text");
const body = document.querySelector('.body');
const headerName = document.querySelector('.header__name');
const headerPosition = document.querySelector('.header__position');
const workExperienceTitle = document.querySelector('.work-experience__title');
const skillsBlockTitle = document.querySelector('.skills-block__title');
const portfolioTitle = document.querySelector('.portfolio-block__title');
localStorage.setItem("style", "non-black");
button.addEventListener("click", function() {
    if (!localStorage.getItem("style") || localStorage.getItem("style") === "black") {
        console.log("return");
        text.textContent = "Make all Black";
        button.textContent = "BLACK!";
        if (localStorage.getItem("style") === "black") {
            body.style.filter = 'grayscale(0%)';
        }
        headerName.style.color = 'whitesmoke';
        headerPosition.style.color = 'whitesmoke';
        headerName.style.fontSize = '5em';
        headerPosition.style.fontSize = '3em';
        workExperienceTitle.classList.remove('work-experience__title-upper');
        portfolioTitle.classList.remove('work-experience__title-upper');
        skillsBlockTitle.style.fontSize = '35px';
        body.classList.add("body__container-normal");
        body.classList.remove("body__container-black");
        localStorage.setItem("style", "non-black");
    } else {
        console.log("black");
        text.textContent = "Restore the original style";
        button.textContent = "RETURN!";
        localStorage.setItem("style", "black");
        body.style.filter = 'grayscale(100%)';
        headerName.style.color = 'var(--black-color)';
        headerPosition.style.color = 'var(--black-color)';
        headerName.style.fontSize = '5.5em';
        headerPosition.style.fontSize = '3.5em';
        workExperienceTitle.classList.add('work-experience__title-upper');
        portfolioTitle.classList.add('work-experience__title-upper');
        skillsBlockTitle.style.fontSize = '45px';
        body.classList.add("body__container-black");
        body.classList.remove("body__container-normal");
    }
})

