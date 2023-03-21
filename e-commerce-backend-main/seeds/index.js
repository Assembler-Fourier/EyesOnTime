const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedOrders = require('./order-seeds');
const seedCustomers = require('./customer-seeds');
const seedBrands = require('./brand-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedBrands();
  console.log('\n----- BRANDS SEEDED -----\n');

  process.exit(0);
};

seedAll();
