module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventName: DataTypes.STRING,
    eventLocation: DataTypes.TEXT,
    eventDate: DataTypes.DATE
  });
  return Event;
};
