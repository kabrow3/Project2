var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

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
  app.post("/api/events/driver", function (req, res) {
    db.EventDrivers.create({
      eventID: req.body.eventID,
      userID: req.body.userID
    }).then(function (dbDrivers) {
      res.json(dbDrivers);
    });
  });

  // Add a Rider for an event
  app.post("/api/events/rider", function (req, res) {
    db.EventRiders.create({
      eventID: req.body.eventID,
      userID: req.body.userID
    }).then(function (dbRiders) {
      res.json(dbRiders);
    });
  });

  app.get('/api/test', function (req, res) {
    db.Event.findAll({
      include: [{
        model: db.User,
        as: 'Riders'
      }]
    })
    .then(function(data) {
      res.json(data);
    }).catch(function(err) {
      console.log(err);
      res.status(500).json({ success: false, error: err });
    });
  });
};
