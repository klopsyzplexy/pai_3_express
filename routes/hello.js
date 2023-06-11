var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('sieee-manko');
});

module.exports = router;
