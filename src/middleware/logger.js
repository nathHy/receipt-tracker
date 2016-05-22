var logger = require('../helpers/logger');
module.exports = function(req,res,next) {
	// logger(req.method + ' at ' + req.url);
	logger.log(req.method, 'at', req.url);
	next();
}