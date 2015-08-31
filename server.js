var express = require('express'),
	app = express(),
	logger = require('morgan'),
	path = require('path');


app.use(express.static(path.join(__dirname + '/public')));
app.set('appName', 'myFavQuotes');
app.set('port', 3000);

app.use(function(req, res, next) {	
	console.log('A user has come to your app ', req.ip);
	next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(app.get('port') || process.env.PORT, function() {
	console.log('App listening on port ', app.get('port'));
});