'use strict';

/** @type {import('sequelize-cli').Migration} */

const {faker} = require('@faker-js/faker');
const payArray = require('./20241102121928-orderDetailsSeeds')
 
let orderIdIncrement = 0;
let paymentDetailsLength = 5;
function paymentDetails(){
  orderIdIncrement = orderIdIncrement + 1
  return{
    order_id : orderIdIncrement,
    amount :payArray.payArray[orderIdIncrement-1],
    provider : 'NON',
    status: 'PENDING',
    payment_mode: 'COD',
    createdAt: new Date(),
    updatedAt: new Date()
    
  }
} 

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
    await queryInterface.bulkInsert('payment_details',faker.helpers.multiple(paymentDetails,{count:paymentDetailsLength}))
    console.log(payArray.payArray)
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
