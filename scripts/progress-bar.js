const progressBars = document.querySelectorAll('.skill-graph-container .progress-bar');

// Loop through each progress bar and set the width of the div to the given percentage
progressBars.forEach(progressBar => {
    // Get the value from the inner text of the progress bar
    const computedStyles = window.getComputedStyle(progressBar);
    const width = parseFloat(computedStyles.getPropertyValue('width')); // Parse width to float
    const percentage = parseInt(progressBar.innerText);
    
    const widthPx = (percentage / 100) * width; // Calculate width in pixels
    // Set the width of the progress bar based on the percentage
    progressBar.style.width = widthPx + 'px';
});