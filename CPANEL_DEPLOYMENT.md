# Guide de Déploiement cPanel

## Instructions de déploiement pour cPanel

### Étape 1: Générer la version production
```bash
cd frontend
npm run build
```

Cela créera les fichiers optimisés dans le dossier `dist/`.

### Étape 2: Préparer les fichiers pour l'upload

Le dossier `dist/` contient :
- `index.html` - Fichier principal
- `browser/` - Dossier avec les fichiers JavaScript et CSS compilés
- `assets/` - Dossier avec les images et ressources
- `.htaccess` - Configuration pour les routages Angular

### Étape 3: Upload vers cPanel

1. Connectez-vous à votre **File Manager** cPanel
2. Naviguez vers le dossier **public_html**
3. Téléchargez les fichiers depuis le dossier `dist/` :
   - Uploadez tout le contenu du dossier `dist/` dans `public_html/`
   - ⚠️ **Important**: Le fichier `.htaccess` doit être visible (activez "Show Hidden Files" si nécessaire)

### Étape 4: Vérification

- Visitez votre domaine pour vérifier que l'application s'affiche
- Testez la navigation entre les pages (accueil, projets, compétences, etc.)
- Vérifiez que les fichiers CSS et JS se chargent correctement

### Configuration alternate (si les rewrite rules ne fonctionnent pas)

Si vous avez des problèmes de routage, essayez cette alternative dans `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [QSA,L]
</IfModule>
```

### Troubleshooting

**Erreur 404 sur les routes :**
- Vérifiez que le fichier `.htaccess` est bien uploadé dans `public_html/`
- Vérifiez que mod_rewrite est activé dans cPanel (Apache Modules)

**Fichiers CSS/JS ne se chargent pas :**
- Videz le cache navigateur (Ctrl+Shift+Delete)
- Vérifiez que le dossier `browser/` a été uploadé

**Fichiers statiques manquants :**
- Assurez-vous que le dossier `assets/` a été uploadé avec tous ses contenus

### Points importants

- ✅ Le fichier `.htaccess` inclut la compression gzip et les headers de cache
- ✅ Les fichiers statiques (CSS, JS, images) sont mis en cache pendant 1 an
- ✅ Le HTML n'est pas mis en cache pour toujours récupérer la dernière version
- ✅ Toutes les routes non-fichiers/dossiers sont redirigées vers `index.html`

### Notes supplémentaires

- Les chemins API/backend doivent être configurés dans `environment.ts` si nécessaire
- Assurez-vous que les CORS sont correctement configurés côté backend
- Pour les mises à jour, répétez les étapes 1-3
