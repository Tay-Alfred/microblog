"use strict";

const loginForm = document.querySelector(".login");

loginForm.onsubmit = function (event) {
    event.preventDefault();

    const loginData = {
        loginUsername: loginForm.loginUsername.value,
        loginPassword: loginForm.loginPassword.value
    }

    loginForm.loginButton.disabled = true;
    
    login(loginData);
}