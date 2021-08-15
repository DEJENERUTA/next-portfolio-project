//form validation contact page
const form = document.querySelector("#submit");
const errorMessage = document.querySelector("#message");
const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

form.addEventListener("click", validate);

function validate(e) {
    const email = document.querySelector("#email");
    const name = document.querySelector("#name");
    const message = document.querySelector("#textarea");
    if (name.value.length === 0) {
        errorMessage.innerHTML = "name is requred";
        e.preventDefault();
        return false;
    }
    if (email.value.length === 0) {
        errorMessage.innerHTML = "email is requred";
        e.preventDefault();
        return false;
    }
    if (!emailTest.test(email.value)) {
        errorMessage.innerHTML = "incorrect email! ";
        e.preventDefault();
        return false;
    }
    if (message.value.length === 0) {
        errorMessage.innerHTML = "message is requred";
        e.preventDefault();
        return false;
    }
}
