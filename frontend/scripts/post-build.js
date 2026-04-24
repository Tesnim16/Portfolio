const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '../dist');
const browserPath = path.join(distPath, 'browser');

// Vérifie que le dossier browser existe
if (!fs.existsSync(browserPath)) {
  console.log('✓ Dossier browser/dist non trouvé - structure déjà optimale');
  process.exit(0);
}

console.log('Moving files from dist/browser to dist/ for cPanel compatibility...');

try {
  // Copie tous les fichiers de browser/ vers dist/
  const files = fs.readdirSync(browserPath);
  
  files.forEach(file => {
    const source = path.join(browserPath, file);
    const destination = path.join(distPath, file);
    
    if (fs.lstatSync(source).isDirectory()) {
      // Copie les dossiers
      if (!fs.existsSync(destination)) {
        copyDirectorySync(source, destination);
      }
      console.log(`  ✓ Dossier ${file}/ copié`);
    } else {
      // Copie les fichiers
      fs.copyFileSync(source, destination);
      console.log(`  ✓ Fichier ${file} copié`);
    }
  });

  // Supprime le dossier browser/
  removeDirectorySync(browserPath);
  console.log('  ✓ Dossier browser/ supprimé');

  // Supprime les fichiers inutiles
  const filesToRemove = ['prerendered-routes.json', '3rdpartylicenses.txt'];
  filesToRemove.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`  ✓ Fichier ${file} supprimé`);
    }
  });

  console.log('✓ Structure dist/ optimisée pour cPanel!');
  console.log('');
  console.log('Fichiers prêts à uploader dans public_html/');
  
} catch (error) {
  console.error('✗ Erreur lors du post-build:', error.message);
  process.exit(1);
}

// Fonctions utilitaires
function copyDirectorySync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    
    if (fs.lstatSync(srcFile).isDirectory()) {
      copyDirectorySync(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

function removeDirectorySync(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        removeDirectorySync(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}
