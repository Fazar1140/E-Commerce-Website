'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('carts',[
    {
      user_id:1,
      total:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:1,
      total:6,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:1,
      total:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:2,
      total:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:2,
      total:6,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:2,
      total:4,
      createdAt:new Date(),
      updatedAt:new Date()
    }, {
      user_id:3,
      total:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:3,
      total:6,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      user_id:3,
      total:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
