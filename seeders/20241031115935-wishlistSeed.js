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
   await queryInterface.bulkInsert('wishlists',[
    {
      product_wishlist_id:1,
      user_id:1,
      deleted_at:null,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      product_wishlist_id:3,
      user_id:2,
      deleted_at:null,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      product_wishlist_id:4,
      user_id:3,
      deleted_at:null,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ])
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
