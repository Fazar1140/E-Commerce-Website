'use strict';

const {faker} = require('@faker-js/faker')
const productArr = require('./20241102105550-orderItemSeed');
const quantityArr = require('./20241102105550-orderItemSeed')
 
let payIncrement = 0;
let orderDetailsLength = 5;
const payArray = [] 

let price = [0,1,2,10,100,2000,30,3999,50,10,8]
const productPrice = [];

for(let i = 0 ; i < productArr.productArr.length;i++){
  let id = productArr.productArr[i];
  let priceId = price[id];
  productPrice.push(priceId)
  console.log(id + " - " +priceId);

 
}

for(let i = 0 ; i < orderDetailsLength;i++){
  const num = faker.number.int({min:1,max:3});
  
  payArray.push( quantityArr.quantityArr[i] * productPrice[i]);
}

function orderDetails(){
   
  payIncrement = payIncrement + 1;
  return{
    user_id : faker.number.int({min:1,max:4}),
    
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
 