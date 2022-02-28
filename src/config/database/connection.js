const { mongoose } = require('node-restful');

module.exports = function () {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.CONNECTION);
};
