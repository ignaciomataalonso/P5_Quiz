var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const {models} = require('../models/index.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

router.get('/credits', function(req, res, next) {
	res.render('credits', { title: 'P5_Quiz' , name: 'Ignacio Mata Alonso'});
});

router.get('/quizzes', function(req, res, next) {
	models.quiz.findAll()
	.then(quizzes => {
		res.render('quizzes', {quizzes});
	})
})

module.exports = router;
