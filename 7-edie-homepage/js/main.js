const menuToggle = document.getElementById('menu')
let firstTime = true
menuToggle.onclick = function () {

    const menu_items = menuToggle.parentElement.getElementsByTagName('ul')[0]
    if (menu_items.classList.contains('sm-menu-hidden') || firstTime) {
        menu_items.classList.remove('sm-menu-hidden')
        menu_items.classList.add('sm-menu-shown')
        firstTime = false
    } else {
        menu_items.classList.remove('sm-menu-shown')
        menu_items.classList.add('sm-menu-hidden')
    }
}


// Get the image elements
const images = document.querySelectorAll('.image-container img');

// Set the desired percentage widths for different media queries
const percentages = [
    { mediaQuery: '(max-width: 480px)', width: '40%' },   // Example for max-width: 480px
    { mediaQuery: '(max-width: 768px)', width: '70%' },   // Example for max-width: 768px
    { mediaQuery: '(max-width: 992px)', width: '55%' },   // Example for max-width: 992px
    { mediaQuery: '(max-width: 1200px)', width: '80%' }, // Examp
    { mediaQuery: '(max-width: 10000px)', width: '100%' }, // Examp
    // Add more media queries and desired widths as needed
];
// Calculate and set the width for each image based on the current media query
function setWidths() {
    const matchingPercentage = percentages.find(({ mediaQuery }) => matchMedia(mediaQuery).matches);
    console.log(matchingPercentage);
    console.log('try to changed to ', matchingPercentage.width);

    if (matchingPercentage) {
        const desiredWidth = matchingPercentage.width;
        console.log('image changed to ', matchingPercentage.width)
        images.forEach(image => {
            const originalWidth = image.naturalWidth;
            const calculatedWidth = `${(parseInt(desiredWidth) / 100) * originalWidth}px`;

            image.style.width = calculatedWidth;
        });
    }
}

// Set the initial widths based on the current media query
setWidths();

// Listen for changes in the media query and update the widths accordingly
percentages.forEach(({ mediaQuery }) => {
    const media = matchMedia(mediaQuery);
    media.addEventListener('change', setWidths);
});
