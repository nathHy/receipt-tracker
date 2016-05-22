var User = require('../models/User');

var logger = require('../helpers/logger');

var user = {
	api:'/user',
	init : function() {
		baseRoute = require('./baseRoute');
		// logger.debug(baseRoute);
		var router = baseRoute.bind(this);
		// logger.log("Loaded router");
		// logger.debug(router)
		return router;
	},
	get: function() {
		return 'this is the get from user.js'
	},
	get: function() {
		return 'this is the get from user.js'
	},
	get: function() {
		return 'this is the get from user.js'
	}
	get: function() {
		return 'this is the get from user.js'
	}
}

module.exports = user;