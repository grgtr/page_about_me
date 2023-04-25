const setValidation = function () {
    const forms = document.querySelectorAll('.forms__form');
    console.log(forms);
    forms.forEach((form) => {
        setEventListener(form);
    })
}
const setEventListener = function (form) {
    const buttonElement = form.querySelector('button[type="submit"]');
    const inputList = form.querySelectorAll('input');

    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            isValiud(form, input);
            isAllValid(form, inputList);
        })
    })
}
const isAllValid = function (form, inputList) {
    let block = false;
    inputList.forEach((input) => {
        if (!input.validity.valid) {
            block = true;
        }
    })
    let buttonElement = form.querySelector('button[type="submit"]');
    if (block) {
        buttonElement.classList.add('invalid');
    } else {
        buttonElement.classList.remove('invalid');
    }
}
const isValiud = function (form, input) {
    if (input.id){
        if (!input.validity.valid){
            showInputError(form, input, input.validationMessage);
        } else {
            hideInputError(form, input);
        }
    }
}
const showInputError = function (form, input, errorMessage) {
    console.log("showInputError");
    let smth = document.querySelector(`.${input.id}-error`);
    smth.textContent = "ОШИБКА";
    smth.classList.add('visible');
}
const hideInputError = function (form, input) {
    console.log("hideInputError");
    let smth = document.querySelector(`.${input.id}-error`);
    smth.textContent = "";
    smth.classList.remove('visible');
}
setValidation();
