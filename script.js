// Login Popup starts here
// So far all it does is pop up and then close. No error messages display and it doesn't seem to point to anywhere so it doesn't really do anything.

// Get references to the login button, login modal, and close button
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeButton = document.getElementById('closeButton');
const loginSubmitButton = document.getElementById('loginSubmit');

// Initialize a variable to track the login state
let isLoggedIn = false;

// Open the login form when the login button is clicked
function showLoginPopup() {
    loginModal.classList.add('active');
}

// Add a function to hide the login popup
function hideLoginPopup() {
    loginModal.classList.remove('active');
}
// Open the login form when the login button is clicked
loginButton.addEventListener('click', function(e) {
    e.preventDefault();
    showLoginPopup(); // Show the login popup    
});

// Close the login form when the close button is clicked
closeButton.addEventListener('click', function() {
    hideLoginPopup(); // Hide the login popup
});

// Close the login form when clicking outside the modal
window.addEventListener('click', function(event) {
  if (event.target === loginModal) {
    hideLoginPopup(); // Hide the login popup
    }
});



// Search Button
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

