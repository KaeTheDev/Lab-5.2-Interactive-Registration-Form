const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const registrationForm = document.getElementById("registrationForm");

// Prefill username if it exists in localStorage
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
  username.value = savedUsername;
}

// Username Event Listener with Validity Checks
username.addEventListener('input', function(){
    if(username.validity.tooShort){
        username.setCustomValidity("Username entered is too short. It must be at least 6 characters.");
    } else if(username.validity.valueMissing){
        username.setCustomValidity("Username is required. Please enter a username.");
    } else {
        username.setCustomValidity(''); // Clear 
    }
    usernameError.textContent = username.validationMessage;
});

// Email Event Listener with Validity Checks
email.addEventListener('input', function(){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Please enter a valid email address, for example, name@gmail.com.");
    } else if(email.validity.valueMissing){
        email.setCustomValidity("Email is required. Please enter a valid email.");
    } else {
        email.setCustomValidity(''); // Clear
    }
    emailError.textContent = email.validationMessage;
});

// Password Event Listener with Validity Checks
password.addEventListener('input', function(){
    if(password.validity.tooShort){
        password.setCustomValidity("Password is too short. Must be at least 8 characters.");
    } else if(password.validity.patternMismatch){
        password.setCustomValidity("Invalid Password. Password must be 8 characters, contain one uppercase letter, one lowercase letter and a number.")
    } else if(password.validity.valueMissing){
        password.setCustomValidity("Password is required. Please enter a valid password.")
    } else {
        password.setCustomValidity(''); // Clear
    }
    passwordError.textContent = password.validationMessage;
});

// Confirm Password Event Listener with Checks to Original Password
confirmPassword.addEventListener("input", function () {
    if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
      confirmPassword.setCustomValidity("");
    }
    confirmPasswordError.textContent = confirmPassword.validationMessage;
  });
  
// Prevent Submit Until Validation Checks Pass
registrationForm.addEventListener('submit', function(event) {
    if (!registrationForm.checkValidity()) {
        event.preventDefault();

        // Check all fields individually
        if (!username.validity.valid) {
            alert('Please enter a valid username.');
            username.focus();
            return;
        }

        if (!email.validity.valid) {
            alert('Please enter a valid email.');
            email.focus();
            return;
        }

        if (!password.validity.valid) {
            alert('Please enter a valid password.');
            password.focus();
            return;
        }

        if (!confirmPassword.validity.valid) {
            alert('Passwords do not match.');
            confirmPassword.focus();
            return;
        }

    } else {
        // Everything is valid
        localStorage.setItem('username', username.value);
        const user = localStorage.getItem('username');
        alert('Form submitted! Welcome ' + user + "!");
        registrationForm.reset();
    }
});