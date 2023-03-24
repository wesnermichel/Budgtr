const express = require("express");
const app = express();
const port = 4000;

const dataController = require("./controllers/data");

const models = require("./models/data");

const data = models.data;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("Budgtr");
  next();
});

// Routes
// Hungry for more to create my own API, and APIs always should be in JSON
app.get("/api", (req, res) => {
  res.json({
    models,
    status: 200,
  });
});

app.get("/", (req, res) => {
  res.render("budgets.ejs");
});


app.use("/budgets", budgetsController);

app.get("/*", (req, res) => {
  res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port} `);
});
