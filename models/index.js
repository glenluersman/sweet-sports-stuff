const Category = require('./Category');
const Product = require('./Product');
const Review = require('./Review');
const User = require('./User');


Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.hasMany(Review, {
  foreignKey: 'product_id'
});

Review.belongsTo(Product, {
  foreignKey: 'product_id'
});

module.exports = { Category, Product, Review, User };