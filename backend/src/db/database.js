const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.resolve(__dirname, "../../task_tracker.db");

function initializeDB() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) reject(err);
      else {
        db.run(`
          CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            priority TEXT CHECK(priority IN ('Low', 'Medium', 'High')) DEFAULT 'Medium',
            due_date TEXT NOT NULL,
            status TEXT CHECK(status IN ('Open', 'In Progress', 'Done')) DEFAULT 'Open',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          )
        `, (err2) => {
          if (err2) reject(err2);
          else resolve();
        });
      }
    });
  });
}

function getDB() {
  return new sqlite3.Database(dbPath);
}

module.exports = { initializeDB, getDB };
