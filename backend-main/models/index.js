// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Order = require('./Order');
const Customer = require('./Customer');
const Brand = require('./Brand');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id'
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:{
    model: ProductTag,
    foreignKey: 'tag_id'
  }
});

// Orders belongToMany Products (through ProductTag)
Order.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: 'order_id'
  }
});

// Products belongToMany Orders (through ProductTag)
Product.belongsToMany(Order, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id'
  }
});

// Customers have many Orders
Customer.hasMany(Order);

// Orders belong to a single Customer
Order.belongsTo(Customer);

// Brands have many Products
Brand.hasMany(Product);

// Products belong to a single Brand
Product.belongsTo(Brand);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  Order,
  Customer,
  Brand
};
