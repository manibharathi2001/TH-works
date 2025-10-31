const { getDB } = require("../db/database");

const TaskService = {
  getAll: (callback) => {
    const db = getDB();
    db.all("SELECT * FROM tasks ORDER BY created_at DESC", [], callback);
    db.close();
  },

  create: (task, callback) => {
    const db = getDB();
    const { title, description, priority, due_date, status } = task;
    db.run(
      "INSERT INTO tasks (title, description, priority, due_date, status) VALUES (?, ?, ?, ?, ?)",
      [title, description, priority, due_date, status],
      function (err) {
        callback(err, { id: this.lastID, ...task });
      }
    );
    db.close();
  },

  update: (id, task, callback) => {
    const db = getDB();
    const { title, description, priority, due_date, status } = task;
    db.run(
      `UPDATE tasks SET title=?, description=?, priority=?, due_date=?, status=? WHERE id=?`,
      [title, description, priority, due_date, status, id],
      callback
    );
    db.close();
  },

  delete: (id, callback) => {
    const db = getDB();
    db.run("DELETE FROM tasks WHERE id=?", [id], callback);
    db.close();
  }
};

module.exports = TaskService;
