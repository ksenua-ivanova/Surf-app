'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Place }) {
      Image.belongsTo(Place, { foreignKey: 'placeId' })
    }
  }
  Image.init({
    url: {
      type: DataTypes.STRING
    },
    placeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Places',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
