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
     * 
    */
    await queryInterface.bulkInsert('categories',[{
      name:'Electronic',
      description:'peralatan listrik',
      createdAt:new Date(),
      updatedAt:new Date()

    },{
      name:'Fashion',
      description:'pakaian',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Hobi',
      description:'peralatan hobi',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Makanan & minuman',
      description:'Makanan dan minuman',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'furniture & perabotan',
      description:'perabotan rumah tangga',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  }
};
