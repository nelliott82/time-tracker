const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.m?js$/, /\.jsx$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};