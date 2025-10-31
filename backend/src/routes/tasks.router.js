const express = require("express");
const router = express.Router();
const { getDB } = require("../db/database");

// GET all tasks
router.get("/", (req, res) => {
  const db = getDB();
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
  db.close();
});

// POST new task
router.post("/", (req, res) => {
  const { title, description, priority, due_date, status } = req.body;
  const db = getDB();
  db.run(
    `INSERT INTO tasks (title, description, priority, due_date, status)
     VALUES (?, ?, ?, ?, ?)`,
    [title, description, priority, due_date, status],
    function (err) {
      if (err) res.status(500).json({ error: err.message });
      else res.status(201).json({ id: this.lastID });
    }
  );
  db.close();
});

module.exports = router;
