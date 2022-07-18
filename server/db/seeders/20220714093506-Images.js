'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [{
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=413969&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
      placeId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=413968&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
      placeId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=413964&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
      placeId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=411918&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
      placeId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=406963&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
      placeId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=406961&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
      placeId: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=398643&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3',
      placeId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=387902&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3',
      placeId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=387646&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3',
      placeId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=382792&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3',
      placeId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=381810&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3',
      placeId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://ec2-im-1.msw.ms/md/image.php?id=381809&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3',
      placeId: 53,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});

  }
};
