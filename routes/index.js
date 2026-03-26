const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/artists', require('./artists'));
router.use('/orgs', require('./orgs'));
router.use('/events', require('./events'));
router.use('/carts', require('./carts'));

module.exports = router;
