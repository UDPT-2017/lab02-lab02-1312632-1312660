var express = require('express');
var app = express();

require('./config')(app)

//start server 
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on port ' + port + '!');
});
