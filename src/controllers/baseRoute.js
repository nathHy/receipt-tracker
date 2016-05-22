var express = require('express')
var logger = require('../helpers/logger')
module.exports = function () {
	// logger.log("this is");
	logger.debug(this)
	var customRoute = this;
	var router = express.Router();
	// logger.log(this.api)
	router.route('/')
	.all(function(req,res,next) {
		next();
	})
	.get(function(req,res,next) {
		// logger.debug(this);
		// console.log(this);
		res.send(customRoute.get());
		// res.send("this is the get response");
	})
	.post(function(req,res,next) {
		// this.post();
		res.send("this is the post response");
	})
	.delete(function(req,res,next) {
		// this.delete();
		res.send("this is the delete response");
	})
	// logger.debug('Router is',router)
	return router;
}