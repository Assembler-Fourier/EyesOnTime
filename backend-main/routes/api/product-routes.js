const router = require("express").Router();
const {Product, Category, Tag, ProductTag} = require("../../models");
const path = require('path');
const { Op } = require("sequelize");
const fs = require('fs'); // Import fs module

// The `/api/products` endpoint


router.get("/", async (req, res) => {
	const { page = 1, limit = 10, minPrice = 0, maxPrice = Infinity } = req.query;
	const offset = (page - 1) * limit;
  
	// find all products with pagination and price range filter
	try {
		const products = await Product.findAndCountAll({
		  attributes: ["id", "product_name", "price", "stock"],
		  limit,
		  offset,
		  where: {
			  price: {
				  [Op.between]: [minPrice, maxPrice]
			  }
		  }
		});
		
		// send response
		res.json(products);
	} catch (error) {
		// handle error
		console.error(error);
		res.status(500).sendFile(path.join(__dirname, '..', '..', 'error.html'), {}, function (err) {
			if (err) {
				console.error(err);
			}
		});
		}
});


/*
router.get("/", async (req, res) => {
	const { page = 1, limit = 10 } = req.query;
	const offset = (page - 1) * limit;
  
	// find all products with pagination
	try {
		const products = await Product.findAndCountAll({
		  attributes: ["id", "product_name", "price", "stock"],
		  limit,
		  offset,
		});
		
		// send response
		res.json(products);
	} catch (error) {
		// handle error
		console.error(error);
		res.status(500).sendFile(__dirname, '..', '..', 'error.html');
	}
});
*/
/*
// get all products
router.get("/", async (req, res) => {
	// find all products
	// be sure to include its associated Category and Tag data
	try {
		const productData = await Product.findAll({
			attributes: ["id", "product_name", "price", "stock", "category_id"],
			include: [
				{
					model: Tag,
					attributes: ["id", "tag_name"],
					through: "ProductTag",
				},
				{
					model: Category,
					attributes: ["id", "category_name"],
				},
			],
		});
		res.json(productData);
	} catch (error) {
		// handle error
		console.error(error);
		res.status(500).sendFile(__dirname + '/error.html');
	}
});
*/
// get one product
router.get("/:id", async (req, res) => {
	// find a single product by its `id`
	// be sure to include its associated Category and Tag data
	try {
		const specificProduct = await Product.findByPk(req.params.id, {
			include: [
				{
					model: Tag,
					attributes: ["id", "tag_name"],
					through: "ProductTag",
				},
				{
					model: Category,
					attributes: ["id", "category_name"],
				},
			],
		});
		res.json(specificProduct);
	} catch (error) {
		// handle error
		console.error(error);
		res.status(500).sendFile(__dirname, '..', '..', 'error.html');
	}
});

// create new product
router.post("/", async (req, res) => {
	/* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
	try {
		const product = await Product.create(req.body);
		
		// if there's product tags, we need to create pairings to bulk create in the ProductTag model
		if (req.body.tagIds.length) {
			const productTagIdArr = req.body.tagIds.map((tag_id) => {
				return {
					product_id: product.id,
					tag_id,
				};
			});
			await ProductTag.bulkCreate(productTagIdArr);
		}
		
		res.status(200).json(product);
	} catch (error) {
		// handle error
		console.error(error);
		res.status(500).sendFile(__dirname, '..', '..', 'error.html');
	}
});

// update product
router.put("/:id", async (req, res) => {
    try {
        await Product.update(req.body, {
    where: {
    id: req.params.id,
    },
    });
    	// find all associated tags from ProductTag
	const productTags = await ProductTag.findAll({where: {product_id: req.params.id}});
	
	// get list of current tag_ids
	const productTagIds = productTags.map(({tag_id}) => tag_id);
	
	// create filtered list of new tag_ids
	const newProductTags = req.body.tagIds
		.filter((tag_id) => !productTagIds.includes(tag_id))
		.map((tag_id) => {
			return {
				product_id: req.params.id,
				tag_id,
			};
		});
	
	// figure out which ones to remove
	const productTagsToRemove = productTags
		.filter(({tag_id}) => !req.body.tagIds.includes(tag_id))
		.map(({id}) => id);
	
	// run both actions
	await Promise.all([
		ProductTag.destroy({where: {id: productTagsToRemove}}),
		ProductTag.bulkCreate(newProductTags),
	]);
	
	res.status(200).json({message: `Product with id ${req.params.id} has been updated`});
} catch (error) {
	// handle error
	console.error(error);
	res.status(500).sendFile(__dirname, '..', '..', 'error.html');
}
});
router.delete("/:id", async (req, res) => {
	// delete one product by its id value
	try {
		const deletedProduct = await Product.findByPk(req.params.id);
		await Product.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({message: `${deletedProduct.product_name} was removed from the database`});
	} catch (error) {
		// handle error
		console.error(error);
		res.status(500).sendFile(__dirname, '..', '..', 'error.html');
	}
});

// Error handling middleware
router.use((err, req, res, next) => {
	console.error(err);

	// Create or append the error to the error.txt file in the root folder
	fs.appendFile(path.join(__dirname, '..', '..', 'error.txt'), `${new Date().toISOString()} - ${err}\n`, (err) => {
		if (err) {
			console.error('Failed to write error to error.txt:', err);
		}
	});

	res.status(500).sendFile(path.join(__dirname, '..', '..', 'error.html'));
});

module.exports = router;