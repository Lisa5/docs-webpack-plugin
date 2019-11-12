const path = require('path');

const LuDocWebpackPlugin = require('../dist/index.js');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.bundle.js'
  },
  plugins: [
    new LuDocWebpackPlugin({
      port: 5000
    })
  ]
};