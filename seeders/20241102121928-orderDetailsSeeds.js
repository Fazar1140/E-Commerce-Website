'use strict';

const {faker} = require('@faker-js/faker')

 

let payIncrement = 0;
let orderDetailsLength = 5;
 
const payArray = []

for(let i = 0 ; i < orderDetailsLength;i++){
  payArray.push(faker.number.int({min:1,max:3}) * faker.number.int({min:10000,max:20000}));
}

function orderDetails(){
   
  payIncrement = payIncrement + 1;
  return{
    user_id : faker.number.int({min:1,max:5}),
    payment_id : payIncrement,
    total: payArray[payIncrement-1],
    createdAt:new Date(),
    updatedAt:new Date(),

  }
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  payArray,
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
    await queryInterface.bulkInsert('order_details',faker.helpers.multiple(orderDetails,{count:orderDetailsLength}), {});
    console.log(payArray)
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
 