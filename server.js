const express = require("express");
const app = express();
const port = 4001;
const router = express.Router();
const methodOverride = require("method-override");

// Models - Database stuff
const Budgets = require("./models/budget.js");

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
  res.send("Hello World"); // or { Budgets: budgets }
  console.log("Index forward slashed passed");
});

app.get("/index", (req, res) => {
  res.render("index.ejs", { Budgets: Budgets });
});

//SHOW ROUTE
app.get("/show/:id", (req, res) => {
  console.log("show route hit");

  const data = Budgets[req.params.id];
  res.render("show.ejs", { Budgets: data }); //whats to show and its data
});

//NEW ROUTE
app.get("/newitem", (req, res) => {
  res.render("new.ejs"), console.log(req.body);
});

//CREATE ROUTE
app.post("/newitem", (req, res) => {
  // res.render("new.ejs");
  res.send("this is working")
  
  console.log(req.body);
  Budgets.push(req.body);

});


//BANK ACCOUNT

// let bankAccount//if statement   & CSS

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port}`);
});
