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
    await queryInterface.bulkInsert('subCategories',[{
      parent_id:1,
      name:'laptop',
      description:'komputer portable',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:1,
      name:'komputer',
      description:'alat komputasi untuk menjalankan software',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:1,
      name:'hp',
      description:'alat komunikasi dapat dibawa',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:2,
      name:'baju',
      description:'pakaian baju',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:2,
      name:'celana',
      description:'pakaian celana',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:2,
      name:'jam',
      description:'jam portable yang dapat dibawa kemana saja',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:3,
      name:'olahraga',
      description:'alat olahraga',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:3,
      name:'literasi',
      description:'membaca menulis dan lain lain',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:3,
      name:'memancing',
      description:'alat memancing',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:4,
      name:'soft drink',
      description:'minuman bersoda dan lain lain',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:4,
      name:'snack',
      description:'makanan snack',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:4,
      name:'precooked',
      description:'makanan yang mudah dibekukan mudah dimasak',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:5,
      name:'furniture',
      description:'perabotan perabotan rumah',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:5,
      name:'alat masak',
      description:'perabotan untuk memasak',
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      parent_id:5,
      name:'perabotan kantor',
      description:'perabotan untuk kantor',
      createdAt:new Date(),
      updatedAt:new Date(),
    }
    ],{});
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
