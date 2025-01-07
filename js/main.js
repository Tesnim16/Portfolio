// Scripts pour le menu déroulant avec animation inverse
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menuList = document.querySelector('.menu-list');

    // Gestion du clic pour afficher/masquer la liste avec animation
    menuButton.addEventListener('click', () => {
        if (menuList.classList.contains('open')) {
            // Si la liste est déjà ouverte, applique l'animation de fermeture
            menuList.classList.remove('open');
            menuList.classList.add('closing');
            // Attendre la fin de l'animation avant de masquer complètement
            menuList.addEventListener('animationend', () => {
                if (menuList.classList.contains('closing')) {
                    menuList.style.display = 'none';
                    menuList.classList.remove('closing');
                }
            }, { once: true });
        } else {
            // Sinon, ouvre le menu avec l'animation d'ouverture
            menuList.style.display = 'block';
            menuList.classList.add('open');
        }
    });

    // Masquer la liste si on clique en dehors
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !menuList.contains(e.target)) {
            if (menuList.classList.contains('open')) {
                menuList.classList.remove('open');
                menuList.classList.add('closing');
                menuList.addEventListener('animationend', () => {
                    if (menuList.classList.contains('closing')) {
                        menuList.style.display = 'none';
                        menuList.classList.remove('closing');
                    }
                }, { once: true });
            }
        }
    });
});