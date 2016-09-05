var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'app/app.jsx'),
  output: {
    'path': path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
    ]
  }
}
