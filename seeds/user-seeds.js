const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    email: 'dave@gmail.com',
    username: 'dave',
    password: 'password'
  },
  {
    email: 'steve@gmail.com',
    username: 'steve',
    password: 'password'
  },
  {
    email: 'bill@gmail.com',
    username: 'bill',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;