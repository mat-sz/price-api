const express = require('express');
const app = express();
const http = require('http');

const index = require('./routes/index');
const price  = require('./routes/price');

const initializeCronjobs = require('./cronjobs');

app.use('/', index);
app.use('/v1/price', price);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
const server = http.createServer(app);
server.listen(port, ip);
console.log('Server ready, listening at ' + ip + ':' + port);

initializeCronjobs();