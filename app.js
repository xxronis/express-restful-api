var express = require('express')
var app = express()
var bodyParser = require('body-parser');
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
})

app.get('/:id', function (req, res) {
  res.json({
  	message: 'id provides',
  	id: req.params.id,
  	exId: req.params.id * 2 });
})

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
})

var server = app.listen(2999, 'localhost', function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
