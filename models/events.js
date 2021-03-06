module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Associate each Event with Items
  Events.associate = function(models) {
    Events.hasMany(models.Items, {
      onDelete: "cascade"
    });
  };

  return Events;
};
