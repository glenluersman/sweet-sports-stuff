const { Product } = require('../models');

const productdata = [
  {
    product_name: 'shirt',
    category_id: 1,
    price: 50.00,
    product_desc: 'this is a shirt'
  },
  {
    product_name: 'shirt',
    category_id: 2,
    price: 80.00,
    product_desc: 'this is a hat'
  },
  {
    product_name: 'shirt',
    category_id: 3,
    price: 100.00,
    product_desc: 'these are pants'
  }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;