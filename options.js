// options.js

// Save color settings
function saveColors() {
  var primaryBackground = document.getElementById('primaryBackground').value;
  var secondaryBackground = document.getElementById('secondaryBackground').value;
  var contrastBackground = document.getElementById('contrastBackground').value;
  var textColor = document.getElementById('textColor').value;
  var highlightColor = document.getElementById('highlightColor').value;

  chrome.storage.sync.set({
    'primaryBackground': primaryBackground,
    'secondaryBackground': secondaryBackground,
    'contrastBackground': contrastBackground,
    'textColor': textColor,
    'highlightColor': highlightColor
  }, function() {
    console.log('Colors saved');
      var saved = document.getElementById("saved");
      saved.style.display = "block";
  });
}

// Load color settings
function loadColors() {
  chrome.storage.sync.get(['primaryBackground', 'secondaryBackground', 'contrastBackground', 'textColor', 'highlightColor'], function(result) {
    document.getElementById('primaryBackground').value = result.primaryBackground || '#15181d';
    document.getElementById('secondaryBackground').value = result.secondaryBackground || '#1d2026';
    document.getElementById('contrastBackground').value = result.contrastBackground || '#333943';
    document.getElementById('textColor').value = result.textColor || '#eff8ff';
    document.getElementById('highlightColor').value = result.highlightColor || '#3582fd';
  });
}

// Load color settings on page load
document.addEventListener('DOMContentLoaded', loadColors);

// Save color settings on button click
document.getElementById('saveButton').addEventListener('click', saveColors);
