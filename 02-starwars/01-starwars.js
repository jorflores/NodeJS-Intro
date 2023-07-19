// Dependencies
// ===========================================================
const express = require("express");

const app = express();
const PORT = 5000;

// Data
// ===========================================================
const yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
};

const darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200,
};

const obiwankenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 50,
  forcePoints: 1200,
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", function (req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function (req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function (req, res) {
  res.json(darthmaul);
});

app.get("/obiwankenobi", function (req, res) {
  res.json(obiwankenobi);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
