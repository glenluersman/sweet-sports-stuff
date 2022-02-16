const { Category } = require('../models');

const categorydata = [
  {
    category_name: "mens"
  },
  {
    category_name: "womens"
  },
  {
    category_name: "kids"
  }
];

const seedCategories = () => Category.bulkCreate(categorydata);

module.exports = seedCategories;
