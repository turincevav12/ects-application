const { resolve } = require('path')

const dr = path => resolve(__dirname, path)

module.exports = {

  entry: {
	  main: dr('script/index'),
    print: dr('script/print'),
    users: dr('script/users')
  },

  output: {
    path: dr('dist'),
    filename: '[name].js'
  },
  
  target: 'electron-renderer',

  module: {

    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]

  },

  resolve: {
    extensions: ['.js']
  }
}