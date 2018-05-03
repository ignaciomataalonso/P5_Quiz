var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

router.get('/credits', function(req, res, next) {
	res.render('credits', { title: 'P5_Quiz' , name: 'Ignacio Mata Alonso'});
});

module.exports = router;
