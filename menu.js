// Initialize the slider state from extension storage
initializeSliderState();

// Saving the slider state to extension storage
document.getElementById('toggleCheckboxes').addEventListener('change', function() {
    const sliderEnabled = this.checked;
    
    // Save the slider state to extension storage
    storage.local.set({ 'toggleCheckboxes': sliderEnabled }, function() {
        console.log('Slider state saved to extension storage');
    });
});

document.getElementById('toggleHidden').addEventListener('change', function() {
    const sliderEnabled = this.checked;
    
    // Save the slider state to extension storage
    storage.local.set({ 'toggleHidden': sliderEnabled }, function() {
        console.log('Slider state saved to extension storage');
    });
});

document.getElementById('toggleThreeD').addEventListener('change', function() {
    const threeDEnabled = this.checked;
    
    // Save the slider state to extension storage
    storage.local.set({ 'toggleThreeD': threeDEnabled }, function() {
        console.log('Slider state saved to extension storage');
    });
});

// Function to initialize the slider state from extension storage
function initializeSliderState() {
    // Retrieve the slider state from extension storage
    storage.local.get(['toggleCheckboxes'], function(result) {
        const sliderEnabled = result.toggleCheckboxes;

        // Get the slider element
        const slider = document.getElementById('toggleCheckboxes');

        // Set the slider's checked state based on the value from extension storage
        if (sliderEnabled !== undefined) {
            slider.checked = sliderEnabled;
        }
    });
	storage.local.get(['toggleHidden'], function(result) {
        const sliderEnabled = result.toggleHidden;

        // Get the slider element
        const slider = document.getElementById('toggleHidden');

        // Set the slider's checked state based on the value from extension storage
        if (sliderEnabled !== undefined) {
            slider.checked = sliderEnabled;
        }
    });
	storage.local.get(['toggleThreeD'], function(result) {
        const sliderEnabled = result.toggleThreeD;

        // Get the slider element
        const slider = document.getElementById('toggleThreeD');

        // Set the slider's checked state based on the value from extension storage
        if (sliderEnabled !== undefined) {
            slider.checked = sliderEnabled;
        }
    });
}

// Load the saved theme value from browser storage
storage.sync.get(['theme'], function(result) {
    const savedTheme = result.theme;

    // Set the saved theme as the initial selected value in the dropdown
    const dropdown = document.querySelector('select');
    if (savedTheme) {
        dropdown.value = savedTheme;
    }
});

// Add the event listener to capture changes in the dropdown
document.querySelector('select').addEventListener('change', function() {
    // Get the selected value
    const selectedValue = this.value;

    // Save the selected value to browser storage
    storage.sync.set({ theme: selectedValue }, function() {
        // You can add a callback function here if needed
        console.log('Theme value saved to browser storage: ' + selectedValue);
    });
});