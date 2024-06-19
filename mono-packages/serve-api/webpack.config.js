const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '~src': path.resolve('src'),
    },
  },
};
