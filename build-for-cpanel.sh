#!/bin/bash

# Script de déploiement pour cPanel
# Ce script nettoie et rebuild le projet pour le déploiement

echo ""
echo "============================================"
echo "Build pour déploiement cPanel"
echo "============================================"
echo ""

cd "$(dirname "$0")/frontend"

echo "[1/3] Nettoyage du dossier dist..."
rm -rf dist
echo "✓ Dossier dist nettoyé"

echo ""
echo "[2/3] Réinstallation des dépendances..."
npm install
if [ $? -ne 0 ]; then
    echo "✗ Erreur lors de l'installation des dépendances"
    exit 1
fi
echo "✓ Dépendances installées"

echo ""
echo "[3/3] Build de production..."
npm run build
if [ $? -ne 0 ]; then
    echo "✗ Erreur lors du build"
    exit 1
fi
echo "✓ Build complété"

echo ""
echo "============================================"
echo "✓ Succès! Le dossier dist est prêt"
echo "============================================"
echo ""
echo "Les fichiers sont prêts à être uploadés dans:"
echo "$(pwd)/dist/"
echo ""
echo "Consultez CPANEL_DEPLOYMENT.md pour les instructions d'upload"
echo ""
