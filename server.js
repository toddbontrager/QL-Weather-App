var express = require('express');

var app = express();

require('./server/middleware.js')(app, express);
require('./server/routes.js')(app, express);
module.exports = app;
