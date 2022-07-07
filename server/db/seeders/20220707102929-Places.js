'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Places', [{
      areaId: 1,
      name: 'Халактырский пляж ',
      coordinate: '52.995755, 158.854173',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 2,
      name: 'Бухта Радостная',
      coordinate: '44.822006, 34.869717',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 2,
      name: 'Малая бухта',
      coordinate: '44.8936134, 37.2805929',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 2,
      name: 'Широкая балка',
      coordinate: '44.6611828, 37.6800021',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 2,
      name: 'Аше',
      coordinate: '43.9553363, 39.2670714',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 2,
      name: 'Ривьера',
      coordinate: '43.5877923, 39.7118421',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 2,
      name: 'Хоста',
      coordinate: '43.5100874, 39.8651093',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Яблочное',
      coordinate: '47.1606481, 141.9882045',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Лесное',
      coordinate: '46.9099285, 143.0915097',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Бухта Астафьева',
      coordinate: '42.3609666, 130.7578273',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Бухта Чернышева',
      coordinate: '42.963932, 131.8988581',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Ахлёстышева',
      coordinate: '43.0019431,131.9223562',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Бухта Соболь',
      coordinate: '43.0745825,131.9538359',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      areaId: 3,
      name: 'Залив Касатка',
      coordinate: '44.9254581,147.6342273',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Places', null, {});

  }
};
