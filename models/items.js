module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Items.associate = function(models) {
    // We're saying that a Items should belong to an Author
    // A Items can't be created without an Author due to the foreign key constraint
    Items.belongsTo(models.Events, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  };

  return Items;
};
