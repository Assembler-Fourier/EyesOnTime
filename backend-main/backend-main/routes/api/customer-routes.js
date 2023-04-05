const router = require('express').Router();
const { Customer } = require('../../models');

// The `/api/customers` endpoint

router.get('/', async (req, res) => {
  // find all customers
  await Customer.findAll({})
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      res.json(err);
    });
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
