//*******************************************************************************************/
// api-routes.js - this file offers a set of routes for displaying and saving data to the db /
//*******************************************************************************************/
var db = require("../models");

//********/
// Routes /
//********/
module.exports = function(app) {
  //*************************/
  // Get all fantasy records /
  //*************************/
  app.get("/api/all", function(req, res) {
    FanRecord.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  //**************************/
  // Get records by last name /
  //**************************/
  app.get("/api/lname/:lname/:email", function(req, res) {
    if (req.params.lname) {
      db.FanRecord.findAll({
        where: {
          lname: req.params.lname,
          userid: req.params.email
        },
        order: [['fanpoints', 'ASC']]
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  //*********************/
  // Get records by team /
  //*********************/
  app.get("/api/team/:team/:email", function(req, res) {
      console.log("team: " + req.params.team + "    " + req.params.email)
    if (req.params.team) {
     db.FanRecord.findAll({
        where: {
          team: req.params.team,
          userid: req.params.email
        },
        order: [['lname', 'ASC']]
      }).then(function(results) {
        res.json(results);
      });
    }
  });
  //***********************************/
  // Get records by position and email /
  //***********************************/
  app.get("/api/position/:position/:email", function(req, res) {
    if (req.params.position) {
      db.FanRecord.findAll({
        where: {
          position: req.params.position,
          userid: req.params.email
        },
        order: [['lname', 'ASC']]
      }).then(function(results) {
        res.json(results);
      });
    }
  });
  //**************************/
  // Get records by fanpoints /
  //**************************/
  app.get("/api/fanptsop/:fanpts/:op/:email", function(req, res) {
    console.log("Help")
    if (req.params.op == "greaterthan") {
      console.log("Help2")
      if (req.params.fanpts) {
        console.log("Help3")
        db.FanRecord.findAll({
          where: {
            fanpoints: {$gte: req.params.fanpts},
              userid: req.params.email
          },
          order: [['lname', 'ASC'],['fanpoints','ASC']]
        }).then(function(results) {
          res.json(results);
        });
      }
    } else {
      if (req.params.fanpts) {
        db.FanRecord.findAll({
          where: {
            fanpoints: {$lte: req.params.fanpts},
              userid: req.params.email
          },
          order: [['lname', 'ASC'],['fanpoints','ASC']]
        }).then(function(results) {
          res.json(results);
        });
      }
    }
  });
//************************************************/
// Get records by last name and opponent and email/
//************************************************/
  app.get("/api/lnameOpp/:lname/:opponent/:email", function(req, res) {
    if (req.params.lname) {
      db.FanRecord.findAll({
        where: {
          lname: req.params.lname,
          opponent: req.params.opponent,
          userid: req.params.email
        },
        order: [['fanpoints','ASC']]
      }).then(function(results) {
        res.json(results);
      });
    }
  });
  //********************************************/
  // Get records by team and opponent and email /
  //********************************************/
  app.get("/api/teamOpp/:team/:opponent/:email", function(req, res) {
    if (req.params.team) {
      db.FanRecord.findAll({
        where: {
          team: req.params.team,
          opponent: req.params.opponent,
          userid: req.params.email
        },
        order: [['lname', 'ASC'],['fanpoints','ASC']]
      }).then(function(results) {
        res.json(results);
      });
    }
  });
  //************************************************/
  // Get records by position and opponent and email /
  //************************************************/
  app.get("/api/positionOpp/:position/:opponent/:email", function(req, res) {
    if (req.params.position) {
      db.FanRecord.findAll({
        where: {
          position: req.params.position,
          opponent: req.params.opponent,
          userid: req.params.email
        },
        order: [['lname', 'ASC'],['fanpoints','ASC']]
      }).then(function(results) {
        res.json(results);
      });
    }
  });
  //*************************************************/
  // Get records by fanpoints and opponent and email /
  //*************************************************/
  app.get("/api/fanptsOpp/:fanpts/:opponent/:op/:email", function(req, res) {
      if (req.params.op == "greaterthan") {
        if (req.params.fanpts) {
          db.FanRecord.findAll({
            where: {
              fanpoints: {$gte: req.params.fanpts},
              opponent: req.params.opponent,
              userid: req.params.email
            },
            order: [['lname', 'ASC'],['fanpoints','ASC']]
          }).then(function(results) {
            res.json(results);
          });
        }
      } else {
        if (req.params.fanpts) {
          db.FanRecord.findAll({
            where: {
              fanpoints: {$lte: req.params.fanpts},
              opponent: req.params.opponent,
              userid: req.params.email
            },
            order: [['lname', 'ASC'],['fanpoints','ASC']]
          }).then(function(results) {
            res.json(results);
          });
        }
      }
  });
  //*****************/
  // Add a fanRecord /
  //*****************/
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    db.FanRecord.create({
      lname: req.body.lname,
      position: req.body.position,
      gamedate: req.body.gamedate,
      fanpoints: req.body.fanpoints,
      minsplayed: req.body.minsplayed,
      wongame: req.body.wongame,
      injured: req.body.injured,
      teamactpts: req.body.teamactpts,
      oppactpts: req.body.oppactpts,
      team: req.body.team,
      opponent: req.body.opponent,
      notes: req.body.notes,
      userid: req.body.userid,
      entryid: req.body.entryid
    });
  });
};
