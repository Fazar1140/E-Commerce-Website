'use strict';
 

//panggil faker dalam library @faker-js
const {faker} = require('@faker-js/faker')

const bcrypt = require('bcryptjs')
//definisikan objek user yang akan disimpan kedalam table user
const password = '12345678';
function User(){
  
  return{
    avatar:'views/uploads/default.jpg',
    username:faker.person.fullName(),
    email:faker.internet.email(),
    telephone:faker.phone.imei(),
    password:bcrypt.hashSync(password,10),
    isAdmin:false,
    isVerified:false,
    createdAt:new Date(),
    updatedAt:new Date()
  }
}

function UserAdmin(){
  
  return{
    avatar:'views/uploads/default.jpg',
    username:faker.person.fullName(),
    email:faker.internet.email(),
    telephone:faker.phone.imei(),
    password:bcrypt.hashSync(password,10),
    isAdmin:true,
    isVerified:false,
    createdAt:new Date(),
    updatedAt:new Date()
  }
}

/** @type {import('sequelize-cli').Migration} */
 

module.exports = {
  
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',faker.helpers.multiple(User,{count:3}), {});
    await queryInterface.bulkInsert('users',faker.helpers.multiple(UserAdmin,{count:1}), {});
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
