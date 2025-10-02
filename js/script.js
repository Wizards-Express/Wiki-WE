document.addEventListener("DOMContentLoaded", () => {
    // Charger automatiquement le menu
    fetch("https://wizards-express.github.io/Wiki-WE/js/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Sélecteurs APRES avoir injecté le nav
            const hamburger = document.querySelector(".hamburger");
            const nav = document.querySelector(".Nav");
            const menuIcon = document.querySelector(".menuIcon");
            const closeIcon = document.querySelector(".closeIcon");

            // Gestion ouverture/fermeture menu
            hamburger.addEventListener("click", () => {
                nav.classList.toggle("active");
                if (nav.classList.contains("active")) {
                    menuIcon.style.display = "none";
                    closeIcon.style.display = "inline";
                } else {
                    menuIcon.style.display = "inline";
                    closeIcon.style.display = "none";
                }
            });

            // Marquer le lien actif
            const links = document.querySelectorAll("#navbar a");
            links.forEach(link => {
                if (link.href === window.location.href) {
                    link.classList.add("actuel");
                }
            });
        });
});
