//form
const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const button = document.querySelector("#submit-button");

//Error containers
const fNameError = document.querySelector("#fn-error");
const lNameError = document.querySelector("#ln-error");
const emailError = document.querySelector("#email-error");
const password1Error = document.querySelector("#pass1-error");
const password2Error = document.querySelector("#pass2-error");

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

  if (!validatePassword(password1.value)) {
    password1Error.innerHTML =
      "Your password most contain one number and one uppercase letter";
  }

  if (!confirmPassword(password2)) {
    password2Error.innerHTML = "You need to input a valid password.";
  }

  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 1) &&
    validateEmail(email.value) &&
    validatePassword(password1.value) &&
    confirmPassword(password2)
  ) {
    button.onClick((location.href = "account.html"));
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, length) {
  if (value.trim().length >= length) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}

function validatePassword(password1) {
  const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const passPatternMatch = passRegEx.test(password1);
  return passPatternMatch;
}

function confirmPassword(password2) {
  if (password2.value === password1.value) {
    return true;
  }
  return false;
}

//Aaaaaaa1
