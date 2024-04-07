const elements = document.querySelectorAll('.projects-menu-item');

elements.forEach((element) => {
        // Add touchstart event listener
        element.addEventListener('touchstart', () => {
        element.classList.add('touch-hover');
    });

    element.addEventListener('touchend', () => {
        // Remove touch effect
        element.classList.remove('touch-hover');
    });
});