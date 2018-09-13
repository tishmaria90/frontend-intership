const path = require('path');

module.exports = {
  entry: {
        add: './src/js/add.js',
        animation: './src/js/animation.js',
        final: './src/js/final.js',
        flex: './src/js/flex.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader'
           ]
         }
       ]
     }
};