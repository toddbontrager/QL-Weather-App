var express = require('express');

var app = express();

require('./server/utils/middleware.js')(app, express);
require('./server/routes')(app, express);
module.exports = app;
