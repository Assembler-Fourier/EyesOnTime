const router = require('express').Router();
const { Order, Product, User } = require('../../models');

// The `/api/orders` endpoint

// get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price'],
        },
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single order by id
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price'],
        },
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });

    if (!order) {
      res.status(404).json({ message: 'No order found with this id' });
      return;
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new order
router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update an order by id
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedOrder[0]) {
      res.status(404).json({ message: 'No order found with this id' });
      return;
    }

    res.status(200).json({ message: 'Order updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete an order by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedOrder) {
      res.status(404).json({ message: 'No order found with this id' });
      return;
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
