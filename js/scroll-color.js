const body = document.body;

// Couleurs définies
const originalColor = "#ffffff"; // Blanc
const scrollColor = "#111";     // Gris foncé

// Facteur multiplicatif pour la hauteur du cycle en fonction de la taille de l'écran
const cycleFactor = 1.5; // Multiplie la hauteur de l'écran visible

// Fonction pour calculer la hauteur du cycle
function getCycleHeight() {
  return window.innerHeight * cycleFactor;
}

// Ajouter un gestionnaire d'événements pour le défilement
window.addEventListener("scroll", () => {
  // Calculer la position de défilement
  const scrollY = window.scrollY;

  // Calculer la hauteur dynamique du cycle
  const cycleHeight = getCycleHeight();

  // Déterminer si la section est paire ou impaire
  const isOddSection = Math.floor(scrollY / cycleHeight) % 2 !== 0;

  // Appliquer la couleur en fonction de la section
  body.style.backgroundColor = isOddSection ? scrollColor : originalColor;
});

// Ajouter un gestionnaire d'événements pour redimensionner la fenêtre
window.addEventListener("resize", () => {
  // Forcer une mise à jour immédiate de la couleur en cas de redimensionnement
  const scrollY = window.scrollY;
  const cycleHeight = getCycleHeight();
  const isOddSection = Math.floor(scrollY / cycleHeight) % 2 !== 0;
  body.style.backgroundColor = isOddSection ? scrollColor : originalColor;
});
