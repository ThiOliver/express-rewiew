var express = require('express');
const controller = require('../controllers/usersController')
var router = express.Router();


router.get('/', controller.index);
router.get('/1', controller.show);

module.exports = router;
