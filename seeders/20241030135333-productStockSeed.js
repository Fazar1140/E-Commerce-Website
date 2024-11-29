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
     
    size:0.5,
    price:1,
    quantity:30,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   { 
    size:0.3,
    price:2,
    quantity:10,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    
    size:0.7,
    price:10,
    quantity:13,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
   
    size:2,
    price:100,
    quantity:3,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    
    size:1,
    price:2000,
    quantity:10,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
   
    size:1,
    price:30,
    quantity:5,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
   
    size:0.4,
    price:3999,
    quantity:5,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
   
    size:2,
    price:50,
    quantity:12,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
     
    size:1.2,
    price:10,
    quantity:13,
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    
    size:1.6,
    price:8,
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
