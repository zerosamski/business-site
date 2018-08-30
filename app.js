var express = require("express");
var app = express();

app.use(express.static('root'));

app.use('/images', express.static(__dirname + '/Images'));
app.use('/include', express.static(__dirname + '/Include'));


app.listen(3000, () =>
	console.log('Server has started!'))
