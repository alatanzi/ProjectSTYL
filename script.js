// Get references to the login button, login modal, and close button
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeButton = document.getElementById('closeButton');
const loginSubmitButton = document.getElementById('loginSubmit');

// Initialize a variable to track the login state
let isLoggedIn = false;

// Open the login form when the login button is clicked
loginButton.addEventListener('click', function(e) {
    e.preventDefault();
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

// Handle login form submission
loginSubmitButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Simulate a login process (you should replace this with your actual login logic)
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (/* your login validation logic here */) {
        isLoggedIn = true;
        loginModal.style.display = 'none';
        loginButton.style.display = 'none'; // Hide the "Login" button after successful login
    } else {
        alert('Invalid login credentials. Please try again.');
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

