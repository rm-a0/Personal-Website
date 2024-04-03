const darkThemeBtn = document.getElementById('dark-theme-btn');
const root = document.documentElement;

// Function to check if it's night time
function isNightTime() {
    const currentTime = new Date().getHours();
    return currentTime >= 19 || currentTime <= 6; // Assuming night time is between 7 PM and 6 AM
}

// Function to toggle theme based on time
function toggleThemeByTime() {
    if (isNightTime()) {
        root.classList.add('dark-theme');
    } else {
        root.classList.remove('dark-theme');
    }
}

// Call the function to initially set the theme based on the time
toggleThemeByTime();

// Add event listener to toggle theme manually
darkThemeBtn.addEventListener('click', function() {
    root.classList.toggle('dark-theme');
});