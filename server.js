var express = require('express'),
    app = express(),
    server = require('http').Server(app)



app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  res.setHeader("X-Application-Version", "0.0.0");
  return next();
});

app.use('/nodejs', express.static(__dirname + '/public'));

server.listen(3000, "127.0.0.1", function(){
    console.log("Server working on 127.0.0.1:3000");
});
