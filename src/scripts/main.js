// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active"); //Activamos o no el menú
        });

        // Cerramos el menú al hacer clic en un enlace
        document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }
});
