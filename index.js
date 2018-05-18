var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var morgan = require('morgan');
var methodOverride = require('method-override');
var compression = require('compression');
var routes = require('./routes');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json());
// compress all responses
app.use(compression());
// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
app.use(methodOverride());
// HTTP request logger middleware for node.js
app.use(morgan('dev'));
// enable all CORS requests
app.use(cors());
// App routes
app.use(routes(express.Router()));
// Static files
app.use(express.static(__dirname + '/'));
// Models of the server
var models = require('./models');

models.sequelize
    .authenticate()
    .then(function() {
        console.log('Connection successful');
    })
    .catch(function(error) {
        console.log('Error creating connection');
    });

// Listen server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Servidor web en http://localhost:3000');
});