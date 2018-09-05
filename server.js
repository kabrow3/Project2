var env = require("dotenv").config();
var path = require("path");
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;


// Middleware
//For BP
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// For Passport
app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// Handlebars
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("views", __dirname + "/views");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
var models = require("./models");

// Routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
var authRoute = require('./routes/auth.js')(app,passport);
//load passport strategies
require("./config/passport/passport.js")(passport, models.User);

var syncOptions = { force: process.env.NODE_ENV!=="production" };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
models.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
