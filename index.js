const http = require('http');

const initializeCronjobs = require('./cronjobs');
const app = require('./app');

const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
const server = http.createServer(app);
server.listen(port, ip);
console.log('Server ready, listening at ' + ip + ':' + port);

initializeCronjobs();