var _ = require('lodash')
var logger = require('./logger')
var handleData = function (data,req,res,next) {
	var obj = {}
	if (data.constructor.visibleAttributes) {
		_.each(data.constructor.visibleAttributes,function(attr) {
			obj[attr] = data.attributes[attr]
		});
	} 
	else
	{
		obj= data.attributes;
	}

	res.data = obj;
	next();
}
var handleError = function (e,req,res,next) {
	logger.log('catch trigger');
	logger.debug(e);
	next(e)
}


module.exports.handleError = handleError;
module.exports.handleData	 = handleData;