// Elements to be observed
const textElements = document.querySelectorAll('.section-title, .menu');

// Function that adds visible whenever the class is in the viewport
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('invisible');
        }
    });
});

// Observe every element in textElements
textElements.forEach(textElement => {
    observer.observe(textElement);
});