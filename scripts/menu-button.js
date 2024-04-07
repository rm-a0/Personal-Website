document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menu-btn");
    var menus = document.querySelectorAll(".menu");

    menuButton.addEventListener("click", function() {
        menus.forEach(function(menu) {
            menu.classList.toggle("menu-open");
            if (menu.classList.contains("menu-open")) {
                menuButton.textContent = "✕";
            } 
            else {
                menuButton.textContent = "|||";
            }
        });
    });
});