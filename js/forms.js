const form = document.getElementById("forms-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const nameError = document.querySelector(".input_text1-error");
const emailError = document.querySelector(".input_text2-error");

// function to validate name input
function validateName() {
    const nameValue = nameInput.value.trim();
    const regex = /^[A-Za-zА-Яа-я]+$/;
    if (nameValue === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("error");
        return false;
    } else if (!regex.test(nameValue)) {
        nameError.textContent = "Name can only contain letters";
        nameInput.classList.add("error");
        return false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error");
        return true;
    }
}

// function to validate email input
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("error");
        return false;
    } else if (!regex.test(emailValue)) {
        emailError.textContent = "Invalid email format";
        emailInput.classList.add("error");
        return false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error");
        return true;
    }
}

// function to validate message input
function validateMessage() {
    const messageValue = messageInput.value.trim();
    const regex = /^[A-Za-zА-Яа-я\s]+$/;
    if (messageValue === "") {
        messageInput.classList.add("error");
        return false;
    } else if (!regex.test(messageValue)) {
        messageInput.classList.add("error");
        return false;
    } else {
        messageInput.classList.remove("error");
        return true;
    }
}

// function to enable/disable submit button based on form validity
function toggleSubmitBtn() {
    if (validateName() && validateEmail() && validateMessage()) {
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        submitBtn.classList.add("disabled");
        setTimeout(() => {
            submitForm();
        }, 1000);
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove("disabled");
        submitBtn.textContent = "Send";
    }
}

// function to submit form
function submitForm() {
    console.log('submitted');
    submitBtn.textContent = "Sent!";
    submitBtn.classList.add("sent");
    setTimeout(() => {
        submitBtn.classList.remove("sent");
        submitBtn.textContent = "Send";
        submitBtn.classList.remove("disabled");
        submitBtn.disabled = false;
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, 1000);
}

// event listeners for input and form submission
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    toggleSubmitBtn();
});
