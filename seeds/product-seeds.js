const { Product } = require('../models');

const productdata = [
  {
    product_name: 'Mens Shirt',
    category_id: 1,
    price: 37.99,
    product_desc: 'Ohio State Buckeyes Colosseum Campbell Long Sleeve Hoodie T-Shirt - Camo',
    product_image: '/images/shirts/mensShirt1.jpg'
  },
  {
    product_name: 'Mens Shirt',
    category_id: 1,
    price: 29.99,
    product_desc: 'Ohio State Buckeyes Nike Stencil Wordmark T-Shirt - Olive',
    product_image: '/images/shirts/mensShirt2.jpg'
  },
  {
    product_name: 'Mens Shirt',
    category_id: 1,
    price: 48.00,
    product_desc: 'Ohio State Buckeyes Nike Long Sleeve Mantra T-Shirt',
    product_image: '/images/shirts/mensShirt3.jpg'
  },
  {
    product_name: 'Womens Shirt',
    category_id: 2,
    price: 44.99,
    product_desc: "Ohio State Buckeyes Women's Call the Shots Luxe Boyfriend Long Sleeve T-Shirt - Charcoal",
    product_image: '/images/shirts/womensShirt1.jpg'
  },
  {
    product_name: 'Womens Shirt',
    category_id: 2,
    price: 99.00,
    product_desc: "#0 Ohio State Buckeyes Nike Women's Game Football Jersey - Scarlet",
    product_image: '/images/shirts/womensShirt2.jpg'
  },
  {
    product_name: 'Womens Shirt',
    category_id: 2,
    price: 39.99,
    product_desc: "Ohio State Buckeyes Women's Plus Size Logo Long Sleeve T-Shirt - Heathered Gray",
    product_image: '/images/shirts/womensShirt3.jpg'
  },
  {
    product_name: 'Kids Shirt',
    category_id: 3,
    price: 49.99,
    product_desc: '#1 Ohio State Buckeyes Nike Toddler Replica Football Jersey - Black',
    product_image: '/images/shirts/kidsShirt1.jpg'
  },
  {
    product_name: 'Kids Shirt',
    category_id: 3,
    price: 49.99,
    product_desc: '#1 Ohio State Buckeyes Nike Toddler Replica Football Jersey - Red',
    product_image: '/images/shirts/kidsShirt2.jpg'
  },
  {
    product_name: 'Kids Shirt',
    category_id: 3,
    price: 34.99,
    product_desc: 'Ohio State Buckeyes Colosseum Youth VF Cut Sew Pullover Hoodie - Scarlet',
    product_image: '/images/shirts/kidsShirt3.jpg'
  }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;