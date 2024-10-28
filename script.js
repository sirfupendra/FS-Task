var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentimg = 0;
const interval = 3000;
var timer;

// Function to change the image
function changeimg(n) {
    // Loop through all images to hide them and remove active class from dots
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0; // Hide all images
        dots[i].classList.remove('active'); // Remove 'active' class from all dots
    }

    // Show the current image and add 'active' class to the corresponding dot
    currentimg = n !== undefined ? n : (currentimg + 1) % imgs.length; // If n is provided, use it, otherwise increment
    imgs[currentimg].style.opacity = 1; // Show current image
    dots[currentimg].classList.add('active'); // Add 'active' class to current dot
}

// Start the interval to auto-slide images
function startAutoSlide() {
    timer = setInterval(() => {
        changeimg(); // Call changeimg with no arguments to automatically move to the next image
    }, interval);
}

// If user interacts (clicks on a dot), update image manually and reset timer
function userClickChange(n) {
    clearInterval(timer); // Stop auto-sliding
    changeimg(n); // Change to the selected image
    startAutoSlide(); // Restart auto-sliding
}

// Add event listeners to the dots for user interaction
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => userClickChange(index)); // Change image on dot click
});

// Initial setup: Show the first image and start auto-sliding
changeimg(currentimg);
startAutoSlide();
