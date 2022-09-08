const { Router } = require('express');
const { productsController } = require('../controllers/products.controller.js');

const router = Router();

router.get('/products', productsController.getMessages);
router.get('/products/:id', productsController.getMessages1);
router.post('/products', productsController.createMessage);
router.delete('/products/:id', productsController.deleteMessage);



module.exports = router;
