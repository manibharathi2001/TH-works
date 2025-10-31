const { getDB } = require("../db/database");

function getInsights(req, res) {
  const db = getDB();
  db.all(`SELECT status, COUNT(*) as count FROM tasks GROUP BY status`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const summary = rows.map(r => `${r.status}: ${r.count}`).join(", ");
    res.json({ summary });
  });
  db.close();
}

module.exports = { getInsights };
