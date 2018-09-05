var db = require("../models");

<<<<<<< HEAD
module.exports = function (app) {
=======
module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

>>>>>>> master
  // Get all events
  app.get("/api/events", function (req, res) {
    db.Event.findAll({}).then(function (dbEvents) {
      res.json(dbEvents);
    });
  });

  //Add an Event
  app.post("/api/events/:event", function (req, res) {
    db.Event.create(req.body).then(function (dbEvents) {
      res.json(dbEvents);
    });
  });

  // Delete an event by id
  app.delete("/api/events/:id", function (req, res) {
    db.Event.destroy({ where: { id: req.params.id } }).then(function (dbEvents) {
      res.json(dbEvents);
    });
  });

  // Add a Driver for an event
  app.post("/api/events/:event/drivers/:user", function (req, res) {
    db.EventDrivers.create({
      // req.body
    }).then(function (dbDrivers) {
      res.json(dbDrivers);
    });
  });

  // Add a Rider for an event
  app.post("/api/events/:event/riders/:user", function (req, res) {
    db.EventRiders.create({
      // req.body
    }).then(function (dbRiders) {
      res.json(dbRiders);
    });
  });

  app.get('/api/test', (req, res) => {
    db.Event.findAll({
      include: [{
        model: db.User,
        as: 'Drivers'
      }]
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json({ success: false, error: err })
    });
  })
};
