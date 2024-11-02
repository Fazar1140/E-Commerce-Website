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
   await queryInterface.bulkInsert('product_stocks',[{
    product_id:1,
    size:0.5,
    price:4000,
    quantity:30,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    product_id:2,
    size:0.3,
    price:6000,
    quantity:10,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    product_id:3,
    size:0.7,
    price:100000,
    quantity:13,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    product_id:4,
    size:2,
    price:1400000,
    quantity:3,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    product_id:5,
    size:1,
    price:9400000,
    quantity:10,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    product_id:6,
    size:1,
    price:400000,
    quantity:5,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    product_id:7,
    size:0.4,
    price:40000000,
    quantity:5,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    product_id:8,
    size:2,
    price:700000,
    quantity:12,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    product_id:9,
    size:1.2,
    price:70000,
    quantity:13,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    product_id:10,
    size:1.6,
    price:90000,
    quantity:4,
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
