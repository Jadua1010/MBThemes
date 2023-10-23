/*
// Get the current page's URL
const currentPageUrl = window.location.href;

// Check if the Page is Already Cached
if (localStorage.getItem(currentPageUrl) === null) {
    // Page is not cached, so let's cache it.
    // Fetch the page content and store it in localStorage.
    fetch(currentPageUrl)
        .then(response => response.text())
        .then(pageContent => {
            localStorage.setItem(currentPageUrl, pageContent);
        })
        .catch(error => {
            console.error('Error fetching or caching the page:', error);
        });
} else {
    // Page is already cached, so load it from the cache.
    const cachedPage = localStorage.getItem(currentPageUrl);
    // Insert the cached content into the DOM where needed.
    document.body.innerHTML = cachedPage;
	console.log('Using cached page');
}
*/

// Function to set default values in browser storage if they are empty or undefined
function setDefaultValues() {
    storage.local.get(['toggleCheckboxes'], function(result) {
        let sliderEnabled = result.toggleCheckboxes;

        // Check if the value is empty or undefined
        if (sliderEnabled === undefined || sliderEnabled === null) {
            // Set a default value
            sliderEnabled = true; // Change this to your desired default value
            // Save the default value to extension storage
            storage.local.set({ toggleCheckboxes: sliderEnabled }, function() {
                console.log('Default slider state saved to extension storage');
            });
        }
    });
    storage.local.get(['toggleHidden'], function(result) {
        let sliderEnabled = result.toggleHidden;

        // Check if the value is empty or undefined
        if (sliderEnabled === undefined || sliderEnabled === null) {
            // Set a default value
            sliderEnabled = false; // Change this to your desired default value
            // Save the default value to extension storage
            storage.local.set({ toggleHidden: sliderEnabled }, function() {
                console.log('Default slider state saved to extension storage');
            });
        }
    });
    storage.local.get(['theme'], function(result) {
        let themeType = result.theme;
        // Check if the value is empty or undefined
        if (themeType === undefined || themeType === null) {
            themeType = 1; // Assign the default value directly to the outer variable
            storage.local.set({ theme: themeType }, function() {
                console.log('Default theme value saved to extension storage');
            });
        }
    });
}

// Call the function to set default values
setDefaultValues();