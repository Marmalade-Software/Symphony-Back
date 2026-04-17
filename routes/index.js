const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.use('/auth', require('./auth'));
router.use('/artists', require('./artists'));
router.use('/orgs', require('./orgs'));
router.use('/events', require('./events'));
router.use('/carts', require('./carts'));

router.use('/users', authMiddleware, require('./users'));

module.exports = router;
