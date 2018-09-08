require('dotenv').config();

var path = require('path');

var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var express = require('express');
var passport = require('passport');
var session = require('express-session');

var models = require('./models');

var app = express();
var PORT = process.env.PORT || 3000;

// Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
//For body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Static Assets
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, models.User);
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
//load passport strategies

// Starting the server, syncing our models ------------------------------------/
models.sequelize.sync({ force: process.env.NODE_ENV === 'test'}).then(function() {
    app.listen(PORT, function() {
        console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    });
});
