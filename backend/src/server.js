import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const port = Number(process.env.PORT || 3000);
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:4200';
const dbName = process.env.DB_NAME || 'eportfolio';

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

app.use(cors({ origin: frontendOrigin }));
app.use(express.json());

let dbReady = false;

async function ensureSchema() {
  await pool.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS \`${dbName}\`.contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
}

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
      detail: error instanceof Error ? error.message : 'unknown_error'
    });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'name, email and message are required' });
    return;
  }

  if (!dbReady) {
    res.status(503).json({ error: 'database_not_ready' });
    return;
  }

  try {
    await pool.execute(
      `INSERT INTO \`${dbName}\`.contact_messages (name, email, message) VALUES (?, ?, ?)`,
      [String(name).trim(), String(email).trim(), String(message).trim()]
    );

    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Failed to insert contact message:', error);
    res.status(500).json({ error: 'database_insert_failed' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});

ensureSchema()
  .then(() => {
    dbReady = true;
    console.log(`MySQL schema ready on database '${dbName}'.`);
  })
  .catch((error) => {
    dbReady = false;
    console.error('MySQL initialization failed:', error);
  });
