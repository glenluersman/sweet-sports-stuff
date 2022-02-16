const { Review } = require('../models');

const reviewdata = [
  {
    content: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    product_id: 1
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    product_id: 2
  },
  {
    content: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    product_id: 3
  }
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;