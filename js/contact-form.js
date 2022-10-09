import { checkLength, validateEmail } from "./form-validation.js";
import {
  form,
  firstName,
  lastName,
  email,
  fNameError,
  lNameError,
  emailError,
} from "./form-variables.js";
//form

const message = document.querySelector("#message");
const submitMessage = document.querySelector("#submit-message");

//Error containers

const messageError = document.querySelector("#message-error");

function validateForm(event) {
  event.preventDefault();

  if (!checkLength(firstName.value, 1)) {
    fNameError.innerHTML = "You need to input a first name.";
  }

  if (!checkLength(lastName.value, 1)) {
    lNameError.innerHTML = "You need to input a last name.";
  }

  if (!validateEmail(email.value)) {
    emailError.innerHTML = "You need to input a valid e-mail.";
  }

  if (!checkLength(message.value, 25)) {
    messageError.innerHTML = "Your message needs to be atleast 25 characters.";
  }

  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 1) &&
    validateEmail(email.value) &&
    checkLength(message.value, 25)
  ) {
    submitMessage.innerHTML = `<div class="form-message"><p>Your message has been sent. You will receive a response on your e-mail.</p></div>`;
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
