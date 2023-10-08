module.exports = {
  entry: './src/js/main.js',
  mode: 'production',
  watch: true,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.ttf$/,
        use: ['url-loader']
      }
    ]
  }
};
