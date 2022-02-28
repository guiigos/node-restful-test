const BookModel = require('../models/book.model');

module.exports = function (server) {
  const book = BookModel();

  book.methods([
    'get',
    'post',
    'put',
    'delete',
  ]);

  book.updateOptions({
    new: true,
    runValidators: true,
  });

  book.register(server, '/book');
};

