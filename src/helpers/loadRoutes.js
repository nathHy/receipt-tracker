var fs     = require('fs');

var _      = require('lodash');
var logger = require('../helpers/logger')


module.exports = function(app) {
	var controllerDir = __dirname + '/../controllers'
	routers = fs.readdirSync(controllerDir);
	_.each(routers, router => {
		if (router == 'baseRoute.js') return
		// logger.log("loading", router)
		route = require('../controllers/' + router);
		router = route.init();
		// logger.log("Router is")
		// logger.debug(router())
		logger.log("Mounting at ",route.api)
		app.use(route.api,router());
	})
};