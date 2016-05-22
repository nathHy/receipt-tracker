"use strict";
var express = require('express');
var User = require('./src/models/User.js');
var log  = require('./src/middleware/logger');
var logger  = require('./src/helpers/logger');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// require('./src/helpers/loadRoutes')(app);

app.use('/user',require('./src/routers/user'));

app.use(log);

// logger.debug(app._router.stack)

function sendResponse(req,res,next) {
	console.log("Sending response")
	res.send(res.data);
}

app.use(sendResponse);

app.listen(PORT, function() {
	console.log("app listening on port ", PORT);
});
