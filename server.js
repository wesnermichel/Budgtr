const express = require("express");
const app = express();
const port = 4001;
const router = express.Router();
const methodOverride = require("method-override");

// Models - Database stuff
const Budgets = require("./models/budget.js");

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("Middleware working");
  next();
});

//INDEX ROUTE
app.get("/", (req, res) => {
  res.send("Hello World"); // or { Budgets: budgets }
  console.log("Index forward slashed passed");
});

app.get("/budgets", (req, res) => {
  res.render("index.ejs", { Budgets: Budgets });
});


//NEW ROUTE
app.get("/budgets/newitem", (req, res) => {
  res.render("new.ejs"), console.log(req.body);
});


//SHOW ROUTE
app.get("/budgets/:id", (req, res) => {
  console.log("show route hit");

  const data = Budgets[req.params.id];
  res.render("show.ejs", { Budgets: data }); //whats to show and its data
});

//CREATE ROUTE
app.post("/budgets", (req, res) => {
  // res.render("new.ejs");
  console.log(req.body);
  req.body.amount=parseInt(req.body.amount);
  Budgets.push(req.body);
  res.redirect('/budgets/');

});

//DELETE ROUTE
app.delete("/budgets/id", (req, res) => {
  Budgets.splice(req.body);// I think splice is for removing something from an array, you need to delete the whole entry
  console.log(req.body);
  res.redirect('/budgets/');
});
//BANK ACCOUNT

// let bankAccount//if statement   & CSS

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port}`);
});
