//Dependencies

var express = require("express");
var path = require("path");

//Setup the express App

var app = express ();
var PORT = process.env.PORT || 8080;

//Set up the Express App to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  var reservations = [
    {
      guestName: "Dwynn Evans",
      guestPhone: 8675309,
      guestEmail: "dwynn.evans@halloweennight.com",
      guestUID: 314
    },
];

// var waitList = [];
// var tables = [];   

//     // for (i = 5; i < reservations.length; i++) {
//     //     waitList.push(reservations[i]);
//     // }


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "all.html"));
  });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

//   app.get("/api/tables", function(req, res) {
    
//     for (i = 0; i < 5; i++) {
//         tables.push(reservations[i]);
//     }
//     return res.json(tables);
//   });

//   app.get("/api/wait-list", function(req, res) {
//     return res.json(waitList);
//   });


  app.post("/api/reservations", function(req, res) {
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});