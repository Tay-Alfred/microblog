
const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com/"; // Replace with your actual API base URL


document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const signupData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        registerUser(signupData);
    });
});

function registerUser(signupData) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(signupData),
    };

    return fetch(apiBaseURL + "/api/users", options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            return response.json();
        })
        .then(registerData => {
            if (registerData.hasOwnProperty("message")) {
                console.error(registerData);
                displayRegistrationError(registerData.message);
                return null;
            }

            console.log("User registered successfully:", registerData);
            // Optionally, redirect the user or show a success message
        })
        .catch(error => {
            console.error("Network or server error:", error);
            displayRegistrationError("Unable to connect. " + error.message);
        });
}

function displayRegistrationError(message) {
    const errorElement = document.getElementById("registration-error");
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}
