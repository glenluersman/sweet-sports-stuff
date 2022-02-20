const { Category } = require('../models');

const categorydata = [
  {
    category_name: "Men's"
  },
  {
    category_name: "Women's"
  },
  {
    category_name: "Kid's"
  }
];

const seedCategories = () => Category.bulkCreate(categorydata);

module.exports = seedCategories;
