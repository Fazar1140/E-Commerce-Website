'use strict';

const {faker} = require('@faker-js/faker');

function reviewComment(rating){
  let review = ['produk ini oke','ok saya terima sesuai dengan di gambar','produk ini recommended!']

  switch(rating){
    case 3:
      return review[0]
    
    case 4:
      return review[1]
   
    case 5:
      return review[2]
   
    default:
      return 'no such thing';
      
  }

}
function review (){
  let ratingScore = faker.number.int({min:3,max:5});
  return{
    user_id:Math.floor(Math.random() * (4 - 1) + 1),
    product_id:Math.floor(Math.random() * (4 - 1) + 1),
    rating:ratingScore,
    comment:reviewComment(ratingScore),
    createdAt: new Date(),
    updatedAt: new Date()
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
    await queryInterface.bulkInsert('reviews',faker.helpers.multiple(review,{count:3}),{})
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
