const router = require('express').Router();
const brandRoutes = require('./brand-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const customerRoutes = require('./customer-routes');
const orderRoutes = require('./order-routes');

router.use('/brands', brandRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/customers', customerRoutes);
router.use('/orders', orderRoutes);

module.exports = router;