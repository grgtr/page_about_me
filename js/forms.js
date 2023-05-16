const form = document.getElementById("forms-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const nameError = document.querySelector(".input_text1-error");
const emailError = document.querySelector(".input_text2-error");
const messageError = document.querySelector(".input_text3-error");

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
    const regex1 = /^[a-zA-Z\s]+$/;
    const regex2 = /[а-яА-Я\s]+$/;
    const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
    const englishPattern = /^\p{Script=Latin}+$/u;
    const russian = /^[а-яА-ЯёЁ\s]+$/;
    const english = /^[a-zA-Z\s]+$/;
    let param = -1;
    if (russian.test(messageValue)) {
        param = 0;
        console.log('Contains only Russian words');
    } else if (english.test(messageValue)) {
        param = 1;
        console.log('Contains only English words');
    } else {
        param = 2;
        console.log('Contains both Russian and English words');
    }
    //console.log("cyrillic", cyrillicPattern.test(messageValue));
    //console.log("english", englishPattern.test(messageValue));
    //console.log("reg1", !regex1.test(messageValue));
    //console.log("reg2", !regex2.test(messageValue));
    //console.log("vivod", !(!regex1.test(messageValue) ^ !regex2.test(messageValue)));
    if (messageValue === "") {
        messageError.textContent = "Message is required";
        messageInput.classList.add("error");
        return false;
    } else if (param === -1 || param === 2) {
        messageError.textContent = "Message can only contain letters and spaces";
        messageInput.classList.add("error");
        return false;
    } else {
        messageError.textContent = "";
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
    createPost({"name" : nameInput.value, "email" : emailInput.value, "message" : messageInput.value});
}

function createPost(newPost) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: newPost.name,
            email: newPost.email,
            message: newPost.message
        })
    })
        .then( function (response) {
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
        })
}

// event listeners for input and form submission
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    toggleSubmitBtn();
});
