const index = require('./routes/index');
const price  = require('./routes/price');

const express = require('express');
const app = express();

app.use('/', index);
app.use('/v1/price', price);

app.use(function(req, res, next) {
    let err = new Error('Not Found');
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

module.exports = app;