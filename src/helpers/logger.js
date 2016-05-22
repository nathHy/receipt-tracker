var util = require('util');
var logger = { 
	log: function(...args) {
		console.log(args.join(' '));
	},
	debug : function(...args) {
		if (args.length >= 2) {
			this.log(args[0]);
			console.log(util.inspect(args[1],{ showHidden: true, depth: null }))
		}
		else
		{
			console.log(util.inspect(args[0],{ showHidden: true, depth: null }))
		}
	}
}

module.exports = logger;