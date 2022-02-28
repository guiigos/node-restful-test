const express = require('express');
const loader = require('./loader');

module.exports = function () {
  const server = express();
  loader.call(server);
  
  return server;
};
