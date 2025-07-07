document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio de robotique chargé !");

    // Animation pour les cartes
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Gestion du mode sombre
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") ? "Mode Clair" : "Mode Sombre";
    });
});