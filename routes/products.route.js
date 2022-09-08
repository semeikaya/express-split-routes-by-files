const { Router } = require('express');
const { productsController } = require('../controllers/products.controller.js');

const router = Router();

router.get('/users', productsController.getMessages);
router.post('/users', productsController.createMessage);
router.delete('/users/:id', productsController.deleteMessage);
router.patch('/users/:id', productsController.patchMessage);
router.get('/users/admin', productsController.getMessages1);

module.exports = router;
