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

db.Event.hasMany(db.User, {as: 'Drivers'});
db.User.belongsToMany(db.Event, {through: 'EventDrivers', foreignKey: 'eventId', otherKey: 'userId'});
// db.User.hasMany(db.Event, {as: 'Drivers'});
// db.User.belongsToMany(db.Event, {through: 'EventDrivers', foreignKey: 'userId', otherKey: 'eventId'});
db.Event.hasMany(db.User, {as: 'Riders'});
// db.Event.belongsToMany(db.User, {through: 'EventRiders', foreignKey: 'eventId', otherKey: 'userId'});
// db.User.hasMany(db.Event, {as: 'Riders'});
db.User.belongsToMany(db.Event, {through: 'EventRiders', foreignKey: 'eventId', otherKey: 'userId'});


module.exports = db;
