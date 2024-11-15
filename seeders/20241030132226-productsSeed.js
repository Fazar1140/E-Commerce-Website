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
      name:'coca cola',
      description:'Coca-Cola Original - Kemasan Kaleng 250mL x 6pcs Coca-Cola Minuman Berkarbonasi Rasa Kola Coca-Cola adalah minuman ringan paling populer dan paling laris dalam sejarah, serta salah satu merek yang paling dikenal di dunia. Kemasannya terbuat dari kaleng sehingga praktis dan mudah dibawa kemana saja. Disajikan dingin lebih nikmat. rasakanmomennya Produk: Halal ',
      short_description:'soda',
      cover:'cola.png',
      category_id:10,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'cheetos',
      description:'ciki kentang ready snack cemilan cheetos kemasan 200gr enak gurih dan renyah exp april 2025',
      short_description:'ciki',
      cover:'cheetos.png',
      category_id:11,
      createdAt:new Date(),
      updatedAt:new Date()
      
    },{
      name:'baju kotak kotak',
      description:'Kemeja Flanel Pria Unisex Kasual Wanita Lengan Panjang Kotak Flannel STAY CALM - STAY COOL Banyak Motif Kekinian',
      short_description:'baju lengan',
      cover:'baju.png',
      category_id:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Thinkpad',
      description:'laptop merek toughtPad milik IDM dengan spek mumpuni intel core i5 generasi ke 7',
      short_description:'laptop toughtPad',
      cover:'laptop.png',
      category_id:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Iphone',
      description:'Handphone buatan apple dengan ram 8 gb storage sebesar 256 gb dan menggunakan chip apple 17',
      short_description:'Iphone phone newest edition',
      cover:'iphone.png',
      category_id:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Keyboard gaming ',
      description:'keyboard gaming mechanical semi mechanical rubber dome',
      short_description:'mechanical keyboard',
      cover:'keyboard.png',
      category_id:2,
      createdAt:new Date(),
      updatedAt:new Date()
    }
    ,{
      name:'rolex',
      description:'jam mewah buatan inggris',
      short_description:'jam tangan',
      cover:'rolex.png',
      category_id:6,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'teplon',
      description:'panci teplon murah meriah dari stainles steel',
      short_description:'teplon masak',
      cover:'teplon.png',
      category_id:14,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'matematika kelas 3',
      description:'matematika materi kelas 3 perkalian pengurangan dan lain lain',
      short_description:'buku matematika',
      cover:'buku.png',
      category_id:8,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'bola kaki sepak',
      description:'bola murah merek afc cup replika',
      short_description:'bola',
      cover:'bola.png',
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
