// Function to perform actions based on the selected theme
function performThemeActions(theme) {
    switch (theme) {
        case '1':
            // Dark Mode
            	var styles = `
				:root {
					--j-primary-bg: #15181d;
					--j-secondary-bg: #1d2026;
					--j-contrast-bg: #333943;
					--j-dark-bg: #121317;
					--j-primary-text: #ffffff;
					--j-tinted-text: #eff8ff;
					--j-highlight-color: #3582fd;
					--j-hover-color: #2f2f39;
					--j-border-color: #393f4a;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
        case '2':
            var styles = `
				:root {
					--j-primary-bg: #f2f4f7;
					--j-secondary-bg: #ffffff;
					--j-contrast-bg: #ffffff;
					--j-dark-bg: #f2f2f2;
					--j-primary-text: #000000;
					--j-tinted-text: #283241;
					--j-highlight-color: #1570ef;
					--j-hover-color: #175cd3;
					--j-border-color: #c8d0dd;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
		case '3':
            var styles = `
				:root {
					--j-primary-bg: #f0eff6;
					--j-secondary-bg: #ffffff;
					--j-contrast-bg: #ffffff;
					--j-dark-bg: #f2f2f2;
					--j-primary-text: #000000;
					--j-tinted-text: #283241;
					--j-highlight-color: #a41ce0;
					--j-hover-color: #a41ce0;
					--j-border-color: #c8d0dd;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
		case '4':
            var styles = `
				:root {
					--j-primary-bg: #160e16;
					--j-secondary-bg: #211421;
					--j-contrast-bg: #462b47;
					--j-dark-bg: #180f18;
					--j-primary-text: #ffffff;
					--j-tinted-text: #f7e8ff;
					--j-highlight-color: #b42fd0;
					--j-hover-color: #b42fd0;
					--j-border-color: #393f4a;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
		case '5':
            var styles = `
				:root {
					--j-primary-bg: #15181d;
					--j-secondary-bg: radial-gradient(circle, rgba(22,34,54,1) 0%, rgba(21,24,29,1) 100%);
					--j-contrast-bg: linear-gradient(63deg, rgba(38,58,91,1) 0%, rgba(45,55,73,1) 100%);
					--j-dark-bg: #121317;
					--j-primary-text: #ffffff;
					--j-tinted-text: #eff8ff;
					--j-highlight-color: #3582fd;
					--j-hover-color: #2f2f39;
					--j-border-color: #393f4a;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
		case '6':
            	var styles = `
				:root {
					--j-primary-bg: url("https://j.gifs.com/vMO2wL.gif");
					--j-secondary-bg: url("https://j.gifs.com/vMO2wL.gif");
					--j-contrast-bg: url("https://j.gifs.com/vMO2wL.gif");
					--j-dark-bg: #121317;
					--j-primary-text: #ffffff;
					--j-tinted-text: #eff8ff;
					--j-highlight-color: #3582fd;
					--j-hover-color: #2f2f39;
					--j-border-color: #393f4a;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
        default:
            var styles = `
				:root {
					--j-primary-bg: #15181d;
					--j-secondary-bg: #1d2026;
					--j-contrast-bg: #333943;
					--j-dark-bg: #121317;
					--j-primary-text: #ffffff;
					--j-tinted-text: #eff8ff;
					--j-highlight-color: #3582fd;
					--j-hover-color: #2f2f39;
					--j-border-color: #393f4a;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
    }
}

// Load the saved theme value from Chrome storage
chrome.storage.sync.get(['theme'], function(result) {
    const savedTheme = result.theme;

    // Check if a theme is saved and perform actions accordingly
    if (savedTheme) {
        performThemeActions(savedTheme);
    } else {
        // Handle the case when no theme is saved (you can add default actions here)
        console.log('No theme saved.');
    }
});