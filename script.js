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