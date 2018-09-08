var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUser
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/users/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("example", {
        users: dbUser
      });
    });
  });

  // app.get("/events", function(req, res) {
  //   db.Event.findAll({}).then(function(dbUser) {
  //     res.render("events", {
  //       users: dbUser
  //     });
  //   });
  // });

  
  // authors route loads author-manager.html
  // app.get("/events", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/events.html"));
  // });

  app.get("/events", function(req, res) {
    db.Event.findAll({
      include: [{
        model: db.User,
        as: 'Drivers'
      }]
    })
    .then(function(users) {
      res.render('events', {
        users: users
        // res.json(users);
      
      });
      console.log(users);
    });
  })

  
//   app.get("/events", function(req, res) {
//   db.Event.findAll({
//     include: [{
//       model: db.User,
//       as: 'Drivers'
//     }]
//   })
//   .then(data => res.json(data))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({ success: false, error: err })
//   });
// })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};