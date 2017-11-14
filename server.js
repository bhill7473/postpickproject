var express = require('express');
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var env = require('dotenv').load();
var bodyParser = require('body-parser');
var flash = require('connect-flash');

 //For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Handlebars
var exphbs = require('express-handlebars');
app.set('views', './app/views');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Static directory
app.use(express.static(__dirname + '/app/public'));

// For Passport 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.get('/', function(req, res) {
	res.redirect('/signin');
  
});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
require('./app/routes/api-routes.js')(app);
 
//Sync Database
models.sequelize.sync().then(function() {
 console.log('Nice! Database looks fine')
 }).catch(function(err) {
 console.log(err, "Something went wrong with the Database Update!") 
});

app.listen(5000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

