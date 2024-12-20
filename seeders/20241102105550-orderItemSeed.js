'use strict';

const {faker} = require('@faker-js/faker');

let multiple = 5;

const productArr = [];
const quantityArr = [];

const Order_Item = ()=>{
  let number = faker.number.int({min:1,max:10})
  let quantity = faker.number.int({min:1,max:5})

  productArr.push(number)
  quantityArr.push(quantity)

  console.log(productArr)
  return{
  
    products_id:number,
    products_stock_id:number,
    quantity:quantity,
    createdAt:new Date(),
    updatedAt:new Date()
  }
}
 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  productArr,quantityArr,
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
