const darkThemeBtn = document.getElementById('dark-theme-btn');
const root = document.documentElement;

// Function to check if it's night time
function isNightTime() {
    const currentTime = new Date().getHours();
    return currentTime >= 19 || currentTime <= 6; // 19:00 - 6:00
}

// Function that changes svg icon color based on theme and class
function changeIconColor(className, theme) {
    var icons = document.getElementsByClassName(className);
    for (var i = 0; i < icons.length; i++) {
        var src = icons[i].src;
        var parts = src.split('/');
        parts[parts.length - 2] = theme; // Assuming the folder name is always before the file name
        icons[i].src = parts.join('/');
    }
}

// Function to toggle theme based on time
function toggleThemeByTime() {
    if (isNightTime()) {
        root.classList.add('dark-theme');
        changeIconColor('icon', 'dark-theme');
        changeIconColor('icon-2', 'light-theme');
    } else {
        root.classList.remove('dark-theme');
        changeIconColor('icon', 'light-theme');
        changeIconColor('icon-2', 'dark-theme');
    }
}

// Call the function to initially set the theme based on the time
toggleThemeByTime();

// Add event listener to toggle theme manually
darkThemeBtn.addEventListener('click', function() {
    root.classList.toggle('dark-theme');

    if (root.classList.contains('dark-theme')) {
        changeIconColor('icon', 'dark-theme');
        changeIconColor('icon-2', 'light-theme');
    } else {
        changeIconColor('icon', 'light-theme');
        changeIconColor('icon-2', 'dark-theme');
    }
});