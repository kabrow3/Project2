var db = require("../models");

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

  app.get("/events", function(req, res) {
    db.Event.findAll({}).then(function(dbUser) {
      res.render("events", {
        users: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
