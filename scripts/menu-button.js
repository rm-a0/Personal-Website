document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menu-btn");
    var menus = document.querySelectorAll(".menu");

    menuButton.addEventListener("click", function() {
    menus.forEach(function(menu) {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } 
    else {
        menu.style.display = "flex";
    }
    });
});
});