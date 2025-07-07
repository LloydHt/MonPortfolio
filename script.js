// Ajoute une petite animation au chargement
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio de robotique chargé !");
    const projets = document.querySelectorAll(".projet");
    projets.forEach((projet, index) => {
        setTimeout(() => {
            projet.style.opacity = "1";
            projet.style.transform = "translateY(0)";
        }, index * 200);
    });
});