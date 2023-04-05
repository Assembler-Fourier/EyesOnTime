const router = require('express').Router();
const { Customer } = require('../../models');
const path = require('path');
const { Op } = require("sequelize");
const fs = require('fs'); // Import fs module

// The `/api/customers` endpoint

router.get('/', async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 5; // default limit is 10
  const page = req.query.page ? parseInt(req.query.page) : 1; // default page is 1
  const offset = (page - 1) * limit;
  
  try {
    const customers = await Customer.findAll({
      limit: limit,
      offset: offset
    });
    const count = await Customer.count(); // get total count of customers
    const totalPages = Math.ceil(count / limit);
    const currentPage = page > totalPages ? totalPages : page;

    res.json({
      currentPage: currentPage,
      totalPages: totalPages,
      totalCount: count,
      customers: customers
    });
  } catch (err) {
    res.json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find one customer by its `id` value
  await Customer.findByPk(req.params.id)
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', async (req, res) => {
  // create a new customer
  await Customer.create(req.body)
    .then((newCustomer) => res.status(200).json(newCustomer))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', async (req, res) => {
  // update a customer by its `id` value
  await Customer.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCustomer) => res.status(200).json(updatedCustomer))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete a customer by its `id` value
  await Customer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rmvdCustomer) => {
      res.json(`The customer was removed from the database`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
