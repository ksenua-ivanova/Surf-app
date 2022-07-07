'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Area }) {
      Place.belongsTo(Area, { foreignKey: 'areaId' })
    }
  }
  Place.init({
    areaId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Areas',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING
    },
    coordinate: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};
