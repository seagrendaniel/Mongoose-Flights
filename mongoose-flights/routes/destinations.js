var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.put('/flights/:id', destinationsCtrl.add);

module.exports = router;