const { Router } = require('express');
const { brandsController } = require('../controllers/brands.controller.js');

const router = Router();

router.get('/brands', brandsController.getMessages);
router.post('/brands', brandsController.createMessage);
router.delete('/brands', brandsController.deleteMessage);


module.exports = router;
