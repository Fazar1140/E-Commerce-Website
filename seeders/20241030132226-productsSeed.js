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
    await queryInterface.bulkInsert('products',[{
      name:'indo cola',
      description:'minuman soda berkarbonasi',
      short_description:'soda',
      cover:'cover.png',
      category_id:10,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Potato Crisp',
      description:'ciki kentang',
      short_description:'ciki',
      cover:'cover.png',
      category_id:11,
      createdAt:new Date(),
      updatedAt:new Date()
      
    },{
      name:'baju kotak kotak',
      description:'baju kotak kotak',
      short_description:'baju lengan',
      cover:'cover.png',
      category_id:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'ThoughtPad',
      description:'laptop merek toughtPad milik IDM',
      short_description:'laptop toughtPad',
      cover:'cover.png',
      category_id:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Iphone',
      description:'Handphone buatan apple',
      short_description:'Iphone phone newest edition',
      cover:'cover.png',
      category_id:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Keyboard gaming ',
      description:'keyboard gaming mechanical',
      short_description:'mechanical keyboard',
      cover:'cover.png',
      category_id:2,
      createdAt:new Date(),
      updatedAt:new Date()
    }
    ,{
      name:'rolex',
      description:'jam mewah buatan inggris',
      short_description:'jam tangan',
      cover:'cover.png',
      category_id:6,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'teplon',
      description:'panci teplon murah meriah',
      short_description:'teplon masak',
      cover:'cover.png',
      category_id:14,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'matematika kelas 3',
      description:'matematika materi kelas 3 perkalian pengurangan dan lain lain',
      short_description:'buku matematika',
      cover:'cover.png',
      category_id:8,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'bola kaki sepak',
      description:'bola murah merek afc cup replika',
      short_description:'bola',
      cover:'cover.png',
      category_id:7,
      createdAt:new Date(),
      updatedAt:new Date()
    }
    
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
