

// Get references to the login button, login modal, and close button
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeButton = document.getElementById('closeButton');

// Open the login form when the login button is clicked
loginButton.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

// Close the login form when the close button is clicked
closeButton.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

// Close the login form when clicking outside the modal
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
// This is a simplified example for demonstration purposes. In a real-world application, you should use a secure authentication strategy and store sensitive data securely.

// Sample user data (for demonstration)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

// Simulate user login and authentication
function authenticateUser(username, password) {
    // Search for the user in the users array (this is just a simple demonstration)
    const user = users.find((user) => user.username === username);

    if (!user) {
        return { success: false, message: 'User not found' };
    }

    // Simulate password validation (in a real app, you should hash and compare passwords)
    if (user.password === password) {
        return { success: true, user: user, message: 'Login successful' };
    } else {
        return { success: false, message: 'Incorrect password' };
    }
}

// Event listener for the login form submission
document.getElementById('loginSubmit').addEventListener('click', function (e) {
    e.preventDefault();

    // Get input values
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Authenticate the user
    const authResult = authenticateUser(username, password);

    if (authResult.success) {
        // Successful login, you can redirect to a dashboard or perform other actions
        alert(authResult.message);
        // Redirect to a secure page or perform other actions here
    } else {
        // Failed login, display an error message to the user
        alert(authResult.message);
    }
});



// Get references to the search input and search button
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
    // Get the search query from the input field
    const query = searchInput.value;

    // Perform the search or redirect to the search results page
    // Example: window.location.href = '/search-results?query=' + query;
    console.log('Performing search for query: ' + query);
});

