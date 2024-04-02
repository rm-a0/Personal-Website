// Function for imitating typing in html
function typeWriter(textElement, speed) {
    const text = textElement.innerHTML;
    textElement.innerHTML = '';

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            textElement.textContent = textElement.textContent.slice(0, -1); // Remove last character
            textElement.textContent += text[i]; // Append the character from the text
            textElement.textContent += '_'; // Add the underline character (character must be used directly, unicode wont work)
            i++;
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