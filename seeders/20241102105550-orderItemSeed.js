'use strict';

const {faker} = require('@faker-js/faker');

let multiple = 5;
let orderIncrement = 0;

const Order_Item = ()=>{
  let number = faker.number.int({min:1,max:10})
  orderIncrement = orderIncrement + 1
  return{
    order_id:orderIncrement,
    products_id:number,
    products_stock_id:number,
    quantity:faker.number.int({min:1,max:5}),
    createdAt:new Date(),
    updatedAt:new Date()
  }
}
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
   await queryInterface.bulkInsert('order_items',faker.helpers.multiple(Order_Item,{count:multiple}),{})
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
