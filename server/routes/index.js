const router = require('express').Router();
const user = require('./user');
const auth = require('./auth');

router.use('/api/user', user);
router.use('/api/auth', auth)

module.exports = router;