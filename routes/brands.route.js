const { Router } = require('express');
const { brandsController } = require('../controllers/brands.controller.js');

const router = Router();

router.get('/brands', brandsController.getMessages);
router.post('/brands', brandsController.createMessage);
router.delete('/brands/:id', brandsController.deleteMessage);
router.patch('/brands/:id', brandsController.patchMessage);
router.get('/brands', brandsController.getMessages1);

module.exports = router;
