'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Areas', [{
      name: 'Полуостров Камчатка',
      count: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Восточная часть Черного моря',
      count: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Восточная Россия',
      count: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Русская Балтика',
      count: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Areas', null, {});

  }
};
