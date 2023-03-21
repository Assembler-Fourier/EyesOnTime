const { Order } = require('../models');

const orderData = [
  {
    customer_id: 1,
  },
  {
    customer_id: 2,
  },
  {
    customer_id: 3,
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;
