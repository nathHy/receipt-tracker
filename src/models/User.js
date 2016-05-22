var Bookshelf = require('../helpers/bookshelf.js');
var Promise = require('bluebird');
var logger = require('../helpers/logger');

var User = Bookshelf.Model.extend({
	tableName : 'user',

	}, 
	{
		visibleAttributes: ['id','username','email'],
		getAll : function() {
			logger.log('getting users from in model')
			return User.forge().fetchAll()
		},
		create : function (username,email,password) {
			logger.log("Creating user");
			var userModel = User.forge();
			userModel.attributes.username = username;
			userModel.attributes.email    = email;
			userModel.attributes.password = password;
			return userModel.save();
		}
	});

module.exports = User;