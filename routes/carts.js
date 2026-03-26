const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/cartsController');

router.get('/', ctrl.getAll);
router.get('/user/:userId', ctrl.getByUser);
router.post('/', ctrl.create);
router.delete('/:id', ctrl.remove);

module.exports = router;
