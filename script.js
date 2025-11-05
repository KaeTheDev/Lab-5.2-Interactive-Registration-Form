const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const registrationForm = document.getElementById("registrationForm");

// Username Event Listener with Validity Checks
username.addEventListener('input', function(event){
    if(username.validity.tooShort){
        username.setCustomValidity("Username entered is too short. It must be at least 6 characters.");
    } else if(username.validity.valueMissing){
        username.setCustomValidity("Username is required. Please enter a username.");
    } else {
        username.setCustomValidity(''); // Clear 
    }
    usernameError.textContent = username.validationMessage;
});


  registrationForm.addEventListener('submit', function(event) {
    if (!registrationForm.checkValidity()) {
      event.preventDefault();
      // You might want to focus on the first invalid field or show a summary
    }
  });