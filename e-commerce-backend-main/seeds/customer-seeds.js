const { Customer } = require('../models');

const customerData = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    password: 'password1'
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'janedoe@example.com',
    password: 'password2'
  },
  {
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobsmith@example.com',
    password: 'password3'
  }
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;
