# Portfolio - Dossier Distribution (dist)

Ce dossier contient les fichiers optimisés prêts pour le déploiement en production sur cPanel.

## Structure

```
dist/
├── .htaccess              # Configuration Apache pour le routage Angular
├── index.html             # Fichier principal de l'application
├── browser/               # Fichiers JavaScript et CSS compilés
│   ├── main-*.js
│   └── styles-*.css
└── assets/                # Images et ressources statiques
    ├── img/
    └── pdf/
```

## Pour déployer sur cPanel

### Quickstart

1. **Générer les fichiers :**
   ```bash
   npm run build:cpanel
   ```

2. **Uploader via cPanel File Manager :**
   - Connectez-vous à votre cPanel
   - Ouvrez File Manager
   - Naviguez vers `public_html`
   - Uploadez le contenu du dossier `dist/` ici
   - Assurez-vous que le fichier `.htaccess` est uploadé (activez "Show Hidden Files")

3. **Tester :**
   - Ouvrez votre domaine dans le navigateur
   - Testez la navigation

### Détails importants

- ✅ **Fichier .htaccess** : Redirige toutes les routes vers index.html pour que Angular gère le routage
- ✅ **Compression gzip** : Activée pour réduire la taille des fichiers
- ✅ **Cache headers** : Configurés pour optimiser les performances
- ✅ **Fichiers optimisés** : Minifiés et avec hachage de contenu pour la validité du cache

### Troubleshooting

| Problème | Solution |
|----------|----------|
| Pages affichent 404 | Vérifiez que `.htaccess` est bien uploadé |
| CSS/JS ne chargent pas | Videz le cache navigateur (Ctrl+Shift+Delete) |
| Fichiers manquants | Assurez-vous que tous les dossiers ont été uploadés |

### Fichiers de configuration

- `angular.json` - Configuration du build Angular (outputPath: `dist`)
- `.htaccess` - Configuration Apache (dans le dossier `public/`)
- `CPANEL_DEPLOYMENT.md` - Guide détaillé de déploiement

---

**Version** : 1.0.0  
**Dernière mise à jour** : 2026-04-24
