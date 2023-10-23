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
		case '7':
            var styles = `
				:root {
					--j-primary-bg: #f8ceec;
					--j-secondary-bg: #ffe7f9;
					--j-contrast-bg: #ffade4;
					--j-dark-bg: #fffafd;
					--j-primary-text: #000000;
					--j-tinted-text: #412836;
					--j-highlight-color: #bf0081;
					--j-hover-color: #bf0081;
					--j-border-color: #ffc4ee;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
		case '8':
            var styles = `
				:root {
					--j-primary-bg: #f3f3f3;
					--j-secondary-bg: #ffffff;
					--j-contrast-bg: #ffffff;
					--j-dark-bg: #fde6d3;
					--j-primary-text: #000000;
					--j-tinted-text: #283241;
					--j-highlight-color: #e0601c;
					--j-hover-color: #e0601c;
					--j-border-color: #c8d0dd;
				}
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
        case '9':
            var styles = `
				:root {
                    --j-primary-bg: #f3f3f3;
                    --j-secondary-bg: #ffffff;
                    --j-contrast-bg: #ffffff;
                    --j-dark-bg: #fde6d3;
                    --j-primary-text: #000000;
                    --j-tinted-text: #283241;
                    --j-highlight-color: #ca815a;
                    --j-hover-color: #e0601c;
                    --j-border-color: #c8d0dd;
                }
				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet)
            break;
        case '10':
            var styles = `
				:root {
                    --j-primary-bg: #100d0b;
                    --j-secondary-bg: #26201b;
                    --j-contrast-bg: #604b3d;
                    --j-dark-bg: #180f18;
                    --j-primary-text: #ffffff;
                    --j-tinted-text: #f7e8ff;
                    --j-highlight-color: #e09965;
                    --j-hover-color: #e09965;
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

// Load the saved theme value from browser storage
storage.sync.get(['theme'], function(result) {
    const savedTheme = result.theme;

    // Check if a theme is saved and perform actions accordingly
    if (savedTheme) {
        performThemeActions(savedTheme);
    } else {
        // Handle the case when no theme is saved (you can add default actions here)
        performThemeActions(savedTheme);
    }
});

storage.local.get(['toggleThreeD'], function(result) {
	const sliderEnabled = result.toggleThreeD;
	console.log('Checking for 3D');
	// Check the slider state and perform actions if needed
	if (sliderEnabled === true) {
		var styles = `


main .content-wrapper .content-block, .f-menu {
    box-shadow: 0 0 10px var(--j-dark-bg) !important;
}

.theme-dark_blue, .theme-white, .reference-guides, .dropdown-menu, .avatar {
	box-shadow: 0 0 10px var(--j-dark-bg) !important;
}

.reference-guides, .btn {
	box-shadow: 0 0 5px var(--j-dark-bg) !important;
}

.btn-main, .date-badge {
	box-shadow: 0 0 5px var(--j-highlight-color) !important;
}

::-webkit-scrollbar {
  box-shadow: 0 0 10px var(--j-dark-bg) !important;
}

::-webkit-scrollbar-thumb {
  box-shadow: 0 0 10px var(--j-highlight-color) !important;
}


				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet) 
	}
});
