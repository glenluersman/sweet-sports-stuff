const { Product } = require('../models');

const productdata = [
  {
    product_name: 'Mens Shirt',
    category_id: 1,
    price: 50.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/mensShirt1.jpg'
  },
  {
    product_name: 'Mens Shirt',
    category_id: 1,
    price: 50.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/mensShirt2.jpg'
  },
  {
    product_name: 'Mens Shirt',
    category_id: 1,
    price: 50.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/mensShirt3.jpg'
  },
  {
    product_name: 'Womens Shirt',
    category_id: 2,
    price: 75.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/womensShirt1.jpg'
  },
  {
    product_name: 'Womens Shirt',
    category_id: 2,
    price: 75.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/womensShirt2.jpg'
  },
  {
    product_name: 'Womens Shirt',
    category_id: 2,
    price: 75.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/womensShirt3.jpg'
  },
  {
    product_name: 'Kids Shirt',
    category_id: 3,
    price: 100.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/kidsShirt1.jpg'
  },
  {
    product_name: 'Kids Shirt',
    category_id: 3,
    price: 100.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/kidsShirt2.jpg'
  },
  {
    product_name: 'Kids Shirt',
    category_id: 3,
    price: 100.00,
    product_desc: 'this is a shirt',
    product_image: '/images/shirts/kidsShirt3.jpg'
  }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;