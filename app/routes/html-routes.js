// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *************/
// Dependencies /
// *************/
var path = require("path");

//********/
// Routes /
//********/
module.exports = function(app) {

//**********************/
// view.html for search /
//**********************/
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, .., "view.html"));
});

//*************************/
// add.html to add records /
//*************************/
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

/*
  // all route loads the all.html page, where all books in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });*/

};
