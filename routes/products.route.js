const { Router } = require('express');
const { productsController } = require('../controllers/products.controller.js');

const router = Router();

router.get('/products', productsController.getMessages);
router.post('/products', productsController.createMessage);
router.delete('/products/:id', productsController.deleteMessage);
router.patch('/products/:id', productsController.patchMessage);
router.get('/products', productsController.getMessages);

module.exports = router;
