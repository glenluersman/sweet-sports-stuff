const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');


Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

