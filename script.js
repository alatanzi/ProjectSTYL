// Get references to the login button, login modal, and close button
const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
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

