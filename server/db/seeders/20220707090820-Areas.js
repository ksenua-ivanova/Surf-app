'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Areas', [{
      name: 'Полуостров Камчатка',
      count: 4,
      coordinate: '57.842605, 153.3450548',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Восточная часть Черного моря',
      count: 7,
      coordinate: '44.7806396, 30.7224366',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Восточная Россия',
      count: 19,
      coordinate: '44.5667875, 131.61858',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Русская Балтика',
      coordinate: '58.508306, 20.372838',
      count: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Areas', null, {});

  }
};
