var express = require('express');
const controller = require('../controllers/usersController')
var router = express.Router();


//router.get('/', controller.index);

router.get('/:id?', controller.show);


module.exports = router;
