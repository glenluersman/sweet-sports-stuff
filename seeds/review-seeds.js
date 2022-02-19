const { Review } = require('../models');

const reviewdata = [
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 1,
    product_id: 1
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 1,
    product_id: 2
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 1,
    product_id: 3
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 1,
    product_id: 4
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 1,
    product_id: 5
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 1,
    product_id: 6
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 1,
    product_id: 7
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 1,
    product_id: 8
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 1,
    product_id: 9
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    product_id: 1
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 2,
    product_id: 2
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 2,
    product_id: 3
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    product_id: 4
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 2,
    product_id: 5
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 2,
    product_id: 6
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    product_id: 7
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 2,
    product_id: 8
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 2,
    product_id: 9
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    product_id: 1
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 3,
    product_id: 2
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    product_id: 3
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    product_id: 4
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 3,
    product_id: 5
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    product_id: 6
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    product_id: 7
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 3,
    product_id: 8
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    product_id: 9
  }
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;