# Backend MySQL (phpMyAdmin)

Ce backend enregistre les messages du formulaire contact dans MySQL.

## 1) Creer la base via phpMyAdmin

1. Ouvrir phpMyAdmin.
2. Aller dans l'onglet SQL.
3. Executer le script contenu dans `sql/create_messages_table.sql`.
4. Executer ensuite `sql/grant_app_user.sql` pour creer un utilisateur MySQL dedie a l'application.

## 2) Configurer l'environnement

1. Copier `.env.example` en `.env`.
2. Adapter les variables selon votre installation MySQL.

Exemple:

PORT=3000
FRONTEND_ORIGIN=http://localhost:4200
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=eportfolio_user
DB_PASSWORD=ChangeMe_123!
DB_NAME=eportfolio

## 3) Lancer le backend

npm install
npm run start

## API

- GET `/api/health`
- POST `/api/contact`

Payload `POST /api/contact`:

{
  "name": "Nom",
  "email": "email@example.com",
  "message": "Votre message"
}

## Depannage

- Si `/api/health` retourne `Host '...' is not allowed to connect`, le compte MySQL n'a pas les droits pour l'hote du backend.
- Relancer le script `sql/grant_app_user.sql`, puis verifier que le `.env` utilise bien `DB_USER=eportfolio_user`.
