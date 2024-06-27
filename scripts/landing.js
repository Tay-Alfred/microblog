// Carousel js that changes the carousel items to active and hides the inactive items. Fix the js so it hides the other carousels
let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const itemCount = items.length;

        function showNextItem() {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % itemCount;
            items[currentIndex].classList.add('active');
        }

        setInterval(showNextItem, 3000); // Change slide every 3 seconds

// Login function tat will show a display message once the information is entered, otherwise the form will display an error message of some sorts.
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                document.getElementById('loginForm').style.display = 'none';
                const welcomeText = document.getElementById('welcomeText');
                welcomeText.textContent = `Welcome, ${username}!`;
                document.getElementById('welcomeMessage').style.display = 'flex';
            } else {
                alert('Please enter both username and password.');
            }
        } 
        const loginForm = document.querySelector("#login");

loginForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    }

    // Disables the button after the form has been submitted already:
    loginForm.loginButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
};


        // You can add JavaScript here if you need to handle form submission or any additional functionality

// Example: Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Process form submission, e.g., send data to server
    // You can add AJAX requests or form validation logic here
    // Close the modal if submission succeeds
    let registrationModal = new bootstrap.Modal(document.getElementById('registrationModal'));
    registrationModal.hide();
});
