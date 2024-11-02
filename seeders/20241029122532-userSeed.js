'use strict';
 

//panggil faker dalam library @faker-js
const {faker} = require('@faker-js/faker')

//definisikan objek user yang akan disimpan kedalam table user

function User(){
  
  return{
    avatar:'avatar.png',
    username:faker.person.fullName(),
    email:faker.internet.email(),
    telephone:faker.phone.imei(),
    isAdmin:false,
    isVerified:false,
    createdAt:new Date(),
    updatedAt:new Date()
  }
}

/** @type {import('sequelize-cli').Migration} */
 

module.exports = {
  
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',faker.helpers.multiple(User,{count:3}), {});
  // },
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
