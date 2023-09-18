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