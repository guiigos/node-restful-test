const morgan = require('morgan');

module.exports = function (server) {
  server.use(morgan('dev'));
};
