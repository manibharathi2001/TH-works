const express = require("express");
const cors = require("cors");
const { initializeDB } = require("../backend/src/db/database");
const tasksRouter = require("../backend/src/routes/tasks.router");
const { getInsights } = require("../backend/src/controllers/insights.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", tasksRouter);
app.get("/insights", getInsights);

initializeDB().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
