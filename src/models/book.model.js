const { model } = require('node-restful');

const bookSchema = {
  title: {
    type: String,
    required: true,
  },
  gender: String,
  summary: String,
  pages: Number,
  authors: [String],
};

module.exports = Book = function () {
  return model('Book', bookSchema);
};
