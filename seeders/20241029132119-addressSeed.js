'use strict';

const { faker } = require('@faker-js/faker');

let userIdIncrement = 0 ;
function Address(){
  userIdIncrement = userIdIncrement + 1
  return {
    user_id:userIdIncrement,
    title:'Home',
    address_line:faker.location.streetAddress(),
    country:faker.location.county(),
    city:faker.location.city(),
    postal_code:faker.location.buildingNumber(),
    landmark:null,
    phone_number:faker.phone.imei(),
    createdAt:new Date(),
    updatedAt:new Date()
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

    await queryInterface.bulkInsert('addresses',faker.helpers.multiple(Address,{count:4}), {});
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
