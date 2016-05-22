var User = require('../models/User');
var Promise = require('bluebird');

var logger = require('../helpers/logger')
var express = require('express');

var Router = express.Router();

var handleData = require('../helpers/handleData').handleData;
var handleError = require('../helpers/handleData').handleError;


Router.route('/')
	.all(function(req,res,next) {
		logger.log("Passing through user.all")
		next();
	})
	.get(function(req,res,next) {
		logger.log("getting users")
		User.getAll()
		.then(users => {
			req.data = users;
			next();
		})
		.catch(e => {
			logger.log('catch trigger');
			logger.debug(e);
			next("error occured")
		})
	})
	.post(function(req,res,next) {
		logger.debug(req.body);
		var username = req.body.username,
				email    = req.body.email,
				password = req.body.password;

		logger.log("Creating user with ",username,email,password)

		User.create(username,email,password)
		.then(data => handleData(data,req,res,next))
		// .then(response => {
			// req.data = response;
			// next();
		// })
		.catch(e => handleError(e,req,res,next))
	})
	.delete(function(req,res,next) {
		res.send("this is the delete response");
	})

module.exports = Router