var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(cookieParser());
app.use(session({secret: 'loltextber123454321'}));

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000);