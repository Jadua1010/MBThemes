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
					--j-grey-text: #8296c5;
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
					--j-primary-bg: #fad0d1;
					--j-secondary-bg: #faf0e7;
					--j-contrast-bg: #fef0f0;
					--j-dark-bg: #fffafd;
					--j-primary-text: #020b0a;
					--j-tinted-text: #534859;
					--j-highlight-color: #f9698d;
					--j-hover-color: #f9698d;
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

// Load the saved theme value from Chrome storage
chrome.storage.sync.get(['theme'], function(result) {
    const savedTheme = result.theme;

    // Check if a theme is saved and perform actions accordingly
    if (savedTheme) {
        performThemeActions(savedTheme);
    } else {
        // Handle the case when no theme is saved (you can add default actions here)
        performThemeActions(savedTheme);
    }
});

chrome.storage.local.get(['toggleThreeD'], function(result) {
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

.reference-guides, .btn, .projects-wrapper .project-section {
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

.popover {
	transform: perspective(1500px) rotateY(-15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;

  &:hover {
    transform: perspective(3000px) rotateY(5deg);
  }
}

.content-block-header {
	border-radius: 1rem;
	margin-left: -20px !important;
	margin-right: -20px !important;
	box-shadow: 0 0 10px var(--j-dark-bg) !important;
}

.date-badge {
	  transform:
    perspective(1000px)
    rotateX(2deg)
    rotateY(-deg)
    rotateZ(4deg);
  box-shadow: 24px 16px 64px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
}

.two-weeks-calendar tbody td.day ul li {
	transform: perspective(400px) rotate3d(1,-1,0,calc(var(--i,1)*6deg));
	  mask:
		linear-gradient(135deg,#000c 40%,#000,#000c 60%)
		100% 100%/240% 240%;
	  transition: .4s;
	  cursor: pointer;
}

.two-weeks-calendar tbody td.day ul li:hover {
	--i: -1;
	mask-position: 0 0;
}

.reference-guides, .sidebar-box-item, .sidebar-items-list {
margin-top: 20px !important;
  transform:
    perspective(1000px)
    rotateY(-15deg);
  box-shadow: 24px 16px 64px 0 rgba(0, 0, 0, 0.08);
}
.dropdown-menu {
	opacity: 0.95;
	animation: bounce-in2 ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
	&:hover {
		transform: perspective(800px) rotateY(0deg);
  }
}

@keyframes bounce-in2 {
  0% {
    opacity: 0;
    transform: scale(.3) perspective(800px) rotateY(-50deg);;
  }
  50% {
    opacity: 1;
    transform: scale(1.05) perspective(800px) rotateY(-20deg);
  }
  70% { transform: scale(.9) perspective(800px) rotateY(-10deg); }
  100% { transform: scale(1) perspective(800px) rotateY(-2deg); }
}

.blank-slate-content {
	opacity: 0.9;
	padding: 15px;
    width: 30%;
	margin: auto;
	color: #fff !important;
	background: var(--j-highlight-color);
	 transform:
    perspective(800px)
    rotateY(-10deg);
  transition: transform 1s ease 0s;
  border-radius: 15px;
  box-shadow:
    rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;

  &:hover {
    transform: perspective(800px) rotateY(-4deg);
  }
}

.current-day {
  transform: perspective(1500px) rotateY(15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;

  &:hover {
    transform: perspective(3000px) rotateY(5deg);
  }
}

.carousel-inline-section, .menu-tiles .item-row {
	transition: transform 0.3s ease 0s;

  &:hover {
    transform: perspective(3000px) translate3d(0px, 0px, 150px);
  }
}

.item-row, .content-navigation a {
	transition: transform 0.3s ease 0s;

  &:hover {
	box-shadow: 0 0 10px #fff;
    transform: perspective(3000px) translate3d(0px, 0px, 150px) rotateY(15deg) ;
  }
}

.fusion-card-list .fusion-card-item {
	transition: transform 0.3s ease 0s, background 0.3s ease 0s;

  &:hover {
	background: var(--j-contrast-bg);
    transform: perspective(3000px) translate3d(0px, 0px, 15px);
  }
}
	

.show-more {
    background: var(--j-contrast-bg);
    border-radius: 15px;
    padding: 15px;
	padding-bottom: 4px;
	box-shadow: 0 0 5px var(--j-dark-bg) !important;
}


				`
				var styleSheet = document.createElement("style")
				styleSheet.innerText = styles
				document.head.appendChild(styleSheet) 
	}
});
