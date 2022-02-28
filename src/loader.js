const dotenv = require('dotenv');
const consign = require('consign');

const MOCKS_DATABASE = 'config/database/__mocks__';

module.exports = function () {
  dotenv.config();

  consign({
    cwd: 'src',
    verbose: false,
  })
    .include('config')
    .then('routes')
    .exclude(MOCKS_DATABASE)
    .into(this);
};
