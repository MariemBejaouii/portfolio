document.addEventListener("DOMContentLoaded", function() {
    let menuBtn = document.getElementById("menu-btn");
    let menuOverlay = document.getElementById("menu-overlay");
    let menu = document.querySelector(".menu");
    let closeBtn = document.querySelector(".close-btn");

    // Ouvrir le menu
    menuBtn.addEventListener("click", function() {
        menuOverlay.classList.add("active");
        menu.classList.add("active");
        menuBtn.style.display = "none"; // Masquer le bouton ☰
    });

    // Fermer le menu
    closeBtn.addEventListener("click", function() {
        menuOverlay.classList.remove("active");
        menu.classList.remove("active");
        setTimeout(() => {
            menuBtn.style.display = "block"; // Réafficher le bouton ☰ après animation
        }, 300);
    });

    // Fermer si on clique en dehors du menu
    menuOverlay.addEventListener("click", function(event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove("active");
            menu.classList.remove("active");
            setTimeout(() => {
                menuBtn.style.display = "block";
            }, 300);
        }
    });
});