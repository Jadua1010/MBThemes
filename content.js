var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'https://drive.jaduastudios.com/images/webdata/mb2.ico';

function initializeCheckboxes() {
	// Your CSS as text
	var styles = `
		.two-weeks-calendar tbody td.day ul li {
		  display: grid !important;
		  grid-template-columns: 23px 1fr !important; /* Create a two-column grid */
		  align-items: center !important; /* Vertically center the checkbox and content */
		  gap: 0px !important; /* Remove spacing between the checkbox and content */
		  justify-items: start;
		}
	`
	var styleSheet = document.createElement("style")
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
  // Get all the elements that match your selector
  const listItems = document.querySelectorAll('.two-weeks-calendar tbody td.day ul li');

  // Loop through each list item and split into left and right sections
  listItems.forEach(item => {
    // Get the event_id attribute value
    const eventId = item.getAttribute('event_id');

    // Check if eventId is null or undefined
    if (eventId === null || eventId === undefined) {
      // If eventId is null or undefined, skip further processing for this item
      return;
    }

    // Create a new div to wrap the contents
    const container = document.createElement('div');
    container.classList.add('todoitem'); // Add a class for styling
	
	 // Find the child element with the class 'color-box' inside the list item
    const colorBox = item.querySelector('.color-box');

    if (colorBox) {
        // Get the custom property --f-color-box-color from the 'color-box' element's style
        const customBackgroundColor = getComputedStyle(colorBox).getPropertyValue('--f-color-box-color');

        // Set the background color of the container to the custom background color
        item.style.backgroundColor = customBackgroundColor;
    }

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Check if there's a stored value for this checkbox in local storage based on the event_id
    const storedValue = localStorage.getItem(`checkbox_${eventId}`);

    // Set the initial state based on the stored value (if available)
    checkbox.checked = storedValue === 'true';

    // Add an event listener to update local storage when the checkbox state changes
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`checkbox_${eventId}`, checkbox.checked);
	  
	  chrome.storage.local.get(['toggleHidden'], function(result) {
        const toggleHidden = result.toggleHidden;

        // Check the slider state and perform actions if needed
        if (toggleHidden === true) {
			item.classList.toggle('hide', checkbox.checked);
        }
    });

      // Toggle the 'saturation-effect' class on the li element
      item.classList.toggle('saturation-effect', checkbox.checked);
	  
	  if (checkbox.checked) {
		let sound = new Audio('https://drive.jaduastudios.com/images/webdata/ping.mp3');
        // Play fun audio sound
		  sound.play();
      }
    });

    // Apply the saturation effect to elements that were loaded as checked from cookies
    if (checkbox.checked) {
		chrome.storage.local.get(['toggleHidden'], function(result) {
			const toggleHidden = result.toggleHidden;

			// Check the slider state and perform actions if needed
			if (toggleHidden === true) {
				item.classList.toggle('hide', checkbox.checked);
			}
		});
      item.classList.add('saturation-effect');
    }

    // Append the checkbox to the left section
    container.appendChild(checkbox);

    // Create a div for the right section (content) and move the content from the original li into it
    const rightSection = document.createElement('div');
    rightSection.classList.add('todo-content'); // Add a class for styling

    while (item.firstChild) {
      rightSection.appendChild(item.firstChild);
    }

    // Append the container (checkbox + content) to the list item
    item.innerHTML = ''; // Clear the content of the original li
    item.appendChild(container);
    item.appendChild(rightSection);

    // Add the event_id as a data attribute for later reference (optional)
    item.dataset.event_id = eventId;
  });
}

// Check the slider state at regular intervals
const intervalId = setInterval(function() {
    // Retrieve the slider state from extension storage
    chrome.storage.local.get(['toggleCheckboxes'], function(result) {
        const sliderEnabled = result.toggleCheckboxes;

        // Check the slider state and perform actions if needed
        if (sliderEnabled === undefined || sliderEnabled === true) {
            const todoItemElement = document.querySelector('.todoitem');
            if (!todoItemElement) {
                initializeCheckboxes();
            }
        }
    });
}, 1000);

// Find all img elements on the page
const images = document.querySelectorAll('img');

images.forEach((image) => {
  // Store the original src attribute in data-src
  image.dataset.src = image.src;

  // Remove the src attribute to prevent immediate loading
  image.removeAttribute('src');
});

// Define a callback function for the Intersection Observer
const lazyLoadCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const dataSrc = image.dataset.src;

      // Set the src attribute to load the image
      image.src = dataSrc;

      // Remove the dataset attribute to mark it as loaded
      delete image.dataset.src;

      // Unobserve the image to stop observing it
      observer.unobserve(image);
    }
  });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(lazyLoadCallback);

// Observe all img elements with a data-src attribute
images.forEach((image) => {
  if (image.dataset.src) {
    observer.observe(image);
  }
});

