var express = require('express');
var app = express();
var PORT = process.env.port || 3000;

var middleware =require('./middleware.js');

app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication,function (req, res) {
	res.send('About Us!!!!');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(PORT, function(){
    console.log('server started pn port: '+ PORT);
});
