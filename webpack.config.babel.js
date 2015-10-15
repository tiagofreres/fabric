const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const SRC = path.resolve(__dirname, 'src/js');
const PUBLIC = path.resolve(__dirname, 'public');
const PUBLIC_FILES = [PUBLIC.concat('/*.html')];

module.exports = {
  entry: SRC,
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PUBLIC,
    filename: 'js/app.js'
  },
  devtool: 'eval-source-map',
  module: {
    preLoaders: [
      { test: /\.js?$/, loaders: ['eslint', 'jscs'], include: SRC }
    ],
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel',
        include: SRC
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader?sourceMap' +
          '!autoprefixer-loader?browsers=last 2 version' +
          '!sass-loader?outputStyle=expanded&sourceMap&sourceMapContents')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css', {
      allChunks: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: PUBLIC },
      files: PUBLIC_FILES
    })
  ]
};
