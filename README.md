

# LAB – Interactive Registration Form

## Overview

In this lab, I created an interactive registration form using vanilla JavaScript, the Constraint Validation API, and localStorage. The form  includes fields for username, email, password, and confirm password, and will provide real-time validation feedback. Users will receive a confirmation when registration is successful, and the username will persist across page reloads.

----------

## Learning Objectives

By completing this lab, you will be able to:

Select and manipulate DOM elements using JavaScript.

Implement real-time form validation using the ValidityState object and setCustomValidity().

Provide user-friendly error messages for invalid input.

Use localStorage to persist user data across page reloads.

Prevent form submission if any validation rules are violated.

Handle password confirmation and pattern-based validation for strong passwords.
    

----------

## Description

You will build a registration form that validates user input in real-time. Each field must meet specific requirements:

Username: Minimum 6 characters, required.
Email: Must be a valid email format, required.
Password: Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number.
Confirm Password: Must match the password field.

The form will prevent submission if any validation fails and display appropriate error messages next to each input. Upon successful submission, the username is saved in localStorage, allowing it to pre-fill the username field on future visits.

----------

## Resources

-   [MDN Web Docs – HTMLInputElement.validity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/validity)
    
-   [MDN Web Docs – setCustomValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity)
    
-   [MDN Web Docs – localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
    
----------

## Getting Started

### Requirements

-   A modern browser (Chrome, Firefox, Safari, or Edge)
    
-   **Node.js**  (optional, only needed if using npm scripts)
    
-   **Live Server**  extension for VS Code (or any similar local server)
    

### OS Compatibility

This lab can be completed on  **Windows**,  **macOS**, or  **Linux**.

----------

## Installation

1.  **Clone this repository**  to your computer:
    
    `git clone https://github.com/KaeTheDev/Lab-5.2-Interactive-Registration-Form.git
    
2.  **Open the project folder**  in your code editor:
    
    `cd interactive-registration-form
    
3.  **Preview your project**:
    
    -   Open  `index.html`  in VS Code.
        
    -   Right-click and select  **“Open with Live Server.”**


# REFLECTION

1. How did event.preventDefault() help in handling form submission?
event.preventDefault() stopped the form from submitting immediately, which allowed the JavaScript validation to run first. This ensured that all fields were correctly validated before allowing submission, giving the user a chance to fix any errors.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation is for client side validation or user feedback while JavaScript-based validation is more for server side validation. You would use client side to give the user proper feedback and server side to ensure that the proper information is being added to the database. 

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
I used localStorage.setItem('username', username.value) to save the username after successful form submission.
On page load, I retrieved the value using localStorage.getItem('username') to pre-fill the username input field.

Limitations:
Data in localStorage is not encrypted, so it’s visible to anyone with access to the browser.
It should never store sensitive data, like passwords or personal information.
Storage is limited (usually around 5–10 MB) and only accessible on the same origin.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
With the password, I did not include special characters in the pattern attribute so even when I met the other requirements for the password it still did not accept. In order to meet project requirements, I tested the app without using special characters in the password.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
By setting the validationMessage of each input to the error variables inside the event listeners. I used setCustomValidity() within the input event listeners for each field. The error messages were then assigned to corresponding <span> elements via validationMessage. This allowed messages to appear in real-time as the user typed, and they were cleared automatically when the input became valid.