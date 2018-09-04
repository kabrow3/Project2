"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('../models/user.js')(sequelize, Sequelize);
db.event = require('../models/event.js')(sequelize, Sequelize);

db.event.hasMany(db.user, {as: 'Drivers'});
db.event.belongsToMany(db.user, {through: 'EventDrivers', foreignKey: 'eventId', otherKey: 'userId'});
db.user.hasMany(db.event, {as: 'Drivers'});
db.user.belognsToMany(db.event, {through: 'EventDrivers', foreignKey: 'userId', otherKey: 'eventId'});
db.event.hasMany(db.user, {as: 'Riders'});
db.event.belongsToMany(db.user, {through: 'EventRiders', foreignKey: 'eventId', otherKey: 'userId'});
db.user.hasMany(db.event, {as: 'Riders'});
db.user.belognsToMany(db.event, {through: 'EventRiders', foreignKey: 'userId', otherKey: 'eventId'});


module.exports = db;
