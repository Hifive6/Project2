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
        len: [5]
      }
    }
  });

  Events.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Events.hasMany(models.Items, {
      // onDelete: "cascade"
    });
  };

  return Events;
};
