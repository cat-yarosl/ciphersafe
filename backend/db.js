const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./passwordManager.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS passwords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    website TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )`);
});

module.exports = db;
