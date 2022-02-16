const seedUsers = require('./user-seeds');
const seedProducts= require('./product-seeds');
const seedCategories = require('./category-seeds');
const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  
  await seedCategories();
  console.log('--------------');

  await seedProducts();
  console.log('--------------');

  await seedReviews();
  console.log('--------------');

  process.exit(0);
};

seedAll();
