const express = require('express');

module.exports = function (server) {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
};
