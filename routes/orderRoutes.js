const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Order routes are now public; the user ID must be provided in the request.
router.post('/', orderController.createOrder);
router.get('/', orderController.getUserOrders);

module.exports = router;
