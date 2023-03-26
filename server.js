const express = require("express");
const app = express();
const port = 4000;
const router = express.Router();
const methodOverride = require("method-override");

// Models - Database stuff
const pokemons = require("./models/budjets.js");

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("Middleware working");
  next();
});

//INDEX ROUTE
app.get("/", (req, res) => {
  res.render("budgets", { budgets }); // or { budgets: budjets }
});

//SHOW ROUTE
app.get("/budgets/:index", (req, res) => {
  let budjet = budgets[req.params.id];
  res.render("budgets.js", { show: budgets });
  console.log(show);
});
//NEW ROUTE
app.get("/budgets/new/"),
  (req, res) => {
    res.render("new.ejs", { budgets });
  };

//CREATE ROUTE
app.post("/budgets/"),
  (req, res) => {
    res.render("budgets", { budgets });
  };

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port}`);
});
