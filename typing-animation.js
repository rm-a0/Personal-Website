// Function for imitating typing in html
function typeWriter(textElement, speed) {
    const text = textElement.innerHTML;
    textElement.innerHTML = '';

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            textElement.textContent += text[i]; // Append the character from the text
            textElement.textContent += '_'; // Add the underline character (character must be used directly, unicode wont work)
            i++;

            // Remove the underline character after a short delay
            setTimeout(() => {
                textElement.textContent = textElement.textContent.slice(0, -1); // Remove the last character
            }, speed/1.2); // Delay refinement (might not work properly with different speed)
        } else {
            clearInterval(typingInterval);
            textElement.innerHTML += '_'; // Leave the underscore at the end (looks nice)
        }
    }, speed);
}

// Run the animation when the HTML document loads
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelectorAll('.typing-animation');
    typingText.forEach(function(textElement) {
        const speed = 100;
        typeWriter(textElement, speed);
    });
});