const router = require('express').Router();
const { Brand, Product } = require('../../models');

// The `/api/brands` endpoint

router.get('/', async (req, res) => {
  // find all brands
  await Brand.findAll({
    attributes: ["id", "brand_name"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "brand_id"]
    }]
  })
  .then((brands) => {
    res.json(brands);
  })

  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one brand by its `id` value
  // be sure to include its associated Products
  await Brand.findByPk(req.params.id, {
    attributes: ["id", "brand_name"],
		include: [
			{
				model: Product,
        attributes: ["id", "product_name", "price", "stock", "brand_id"],
			}
		],
	})
  .then((brand) => {
    res.json(brand);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.post('/', async (req, res) => {
  // create a new brand
  await Brand.create(req.body)
		.then((newBrand) => res.status(200).json(newBrand))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

router.put('/:id', async (req, res) => {
  // update a brand by its `id` value
  await Brand.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
  .then(bra => Brand.findByPk(req.params.id))
  .then((updatedBrand) => res.status(200).json(updatedBrand))
  .catch((err) => {res.json(err);});
});

router.delete('/:id', async (req, res) => {
  // delete a brand by its `id` value
	await Brand.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((rmvdBrand) => {
		res.json(`The brand was removed from the database`);
	})
	.catch((err) => {
		res.json(err);
	});
});

module.exports = router;
