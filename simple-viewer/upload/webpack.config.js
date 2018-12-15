// module.exports = require('./webpack.' + process.env.NODE_ENV + '.config.js');
require('@babel/register');

module.exports = require('./webpack.production.config.babel.js');
