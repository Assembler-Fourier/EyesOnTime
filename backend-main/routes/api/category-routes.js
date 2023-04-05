const router = require('express').Router();
const { Category, Product } = require('../../models');
const path = require('path');
const { Op } = require("sequelize");
const fs = require('fs'); // Import fs module

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Extract pagination and filtering parameters from the request
  const limit = 1; // Set the limit to 10 items per page
  const page = parseInt(req.query.page) || 1; // Get the page number from the URL, defaulting to 1 if not provided
  const minPrice = parseFloat(req.query.minPrice) || 0; // Get the minimum price filter, defaulting to 0 if not provided
  const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_VALUE; // Get the maximum price filter, defaulting to the maximum possible number if not provided

  // Find all categories
  await Category.findAll({
    attributes: ["id", "category_name"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      where: {
        price: {
          [Op.between]: [minPrice, maxPrice]
        }
      }
    }],
    limit: limit,
    offset: (page - 1) * limit,
  })
  .then((categories) => {
    res.json(categories);
  })
  .catch((error) => {
    res.status(500).json({ message: "Error retrieving categories: " + error });
  });
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  await Category.findByPk(req.params.id, {
    attributes: ["id", "category_name"],
		include: [
			{
				model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
			}
		],
	})
  .then((category) => {
    res.json(category);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.post('/', async (req, res) => {
  // create a new category
  await Category.create(req.body)
		.then((newCategory) => res.status(200).json(newCategory))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
  .then(cat => Category.findByPk(req.params.id))
  .then((updatedCategory) => res.status(200).json(updatedCategory))
  .catch((err) => {res.json(err);});
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
	await Category.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((rmvdCategory) => {
		res.json(`The category was removed from the database`);
	})
	.catch((err) => {
		res.json(err);
	});
});

module.exports = router;
