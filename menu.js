// Initialize the slider state from extension storage
initializeSliderState();

// Saving the slider state to extension storage
document.getElementById('toggleCheckboxes').addEventListener('change', function() {
    const sliderEnabled = this.checked;
    
    // Save the slider state to extension storage
    chrome.storage.local.set({ 'toggleCheckboxes': sliderEnabled }, function() {
        console.log('Slider state saved to extension storage');
    });
});

// Function to initialize the slider state from extension storage
function initializeSliderState() {
    // Retrieve the slider state from extension storage
    chrome.storage.local.get(['toggleCheckboxes'], function(result) {
        const sliderEnabled = result.toggleCheckboxes;

        // Get the slider element
        const slider = document.getElementById('toggleCheckboxes');

        // Set the slider's checked state based on the value from extension storage
        if (sliderEnabled !== undefined) {
            slider.checked = sliderEnabled;
        }
    });
}
