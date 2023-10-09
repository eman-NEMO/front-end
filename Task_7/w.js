const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');

// Display the user's name on the page
const userNameElement = document.getElementById('kk');
if (userNameElement) {
    userNameElement.textContent = "Welcome"+" "+ userName;
}

const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        // Perform logout actions (e.g., clear session, cookies, etc.)
        // Redirect the user back to the login page
        window.location.href = 'index.html'; // Replace 'login.html' with your login page's URL
    });
}