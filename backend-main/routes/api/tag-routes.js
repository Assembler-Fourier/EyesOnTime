const router = require("express").Router();
const {
	Tag,
	Product,
	ProductTag
} = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
	const { minPrice, maxPrice, page = 1, limit = 10 } = req.query;
  
	const filter = {
	  attributes: ["id", "tag_name"],
	  include: [
		{
		  model: Product,
		  attributes: ["id", "product_name", "price", "stock", "category_id"],
		  through: "ProductTag",
		  where: {},
		},
	  ],
	};
  
	if (minPrice && maxPrice) {
	  filter.include[0].where.price = {
		[Op.between]: [minPrice, maxPrice],
	  };
	} else if (minPrice) {
	  filter.include[0].where.price = {
		[Op.gte]: minPrice,
	  };
	} else if (maxPrice) {
	  filter.include[0].where.price = {
		[Op.lte]: maxPrice,
	  };
	}
  
	const offset = (page - 1) * limit;
  
	try {
	  const { count, rows: parsedTagData } = await Tag.findAndCountAll({
		...filter,
		limit,
		offset,
	  });
	  const totalPages = Math.ceil(count / limit);
	  res.json({
		total_pages: totalPages,
		current_page: parseInt(page),
		total_items: count,
		items_per_page: limit,
		data: parsedTagData,
	  });
	} catch (err) {
	  res.json(err);
	}
  });
  

router.get("/:id", (req, res) => {
	// find a single tag by its `id`
	Tag.findByPk(req.params.id, {
			include: [{
				model: Product,
				attributes: ["id", "product_name", "price", "stock", "category_id"],
				through: "ProductTag",
			}],
		})
		.then((retrievedTag) => {
			res.json(retrievedTag);
		})
		.catch((err) => {
			res.json(err);
		});

	// be sure to include its associated Product data
});

router.post("/", (req, res) => {
	// create a new tag
	Tag.create({
			tag_name: req.body.tag_name,
		})
		.then((tag) => {
			res.json(tag);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
	Tag.update({
			tag_name: req.body.tag_name,
		},{
			where: {
				id: req.params.id,
			},
		})
		.then((tag) => {
			res.json(tag);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
	Tag.destroy({
			where: {
				id: req.params.id,
			},
		})
		.then((qtyRemoved) => {
			res.json(`${qtyRemoved} tag were removed from the database`);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;