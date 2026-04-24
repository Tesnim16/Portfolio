@echo off
REM Script de déploiement pour cPanel
REM Ce script nettoie et rebuild le projet pour le déploiement

echo.
echo ============================================
echo Build pour déploiement cPanel
echo ============================================
echo.

cd /d "%~dp0frontend"

echo [1/3] Nettoyage du dossier dist...
rmdir /s /q dist 2>nul
echo ✓ Dossier dist nettoyé

echo.
echo [2/3] Réinstallation des dépendances...
call npm install
if errorlevel 1 (
    echo ✗ Erreur lors de l'installation des dépendances
    exit /b 1
)
echo ✓ Dépendances installées

echo.
echo [3/3] Build de production...
call npm run build
if errorlevel 1 (
    echo ✗ Erreur lors du build
    exit /b 1
)
echo ✓ Build complété

echo.
echo ============================================
echo ✓ Succès! Le dossier dist est prêt
echo ============================================
echo.
echo Les fichiers sont prêts à être uploadés dans:
echo C:\Portfolio\frontend\dist\
echo.
echo Consultez CPANEL_DEPLOYMENT.md pour les instructions d'upload
echo.
pause
