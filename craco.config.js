const path = require('path');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new StyleLintPlugin({
          configBasedir: __dirname,
          context: path.resolve(__dirname, 'src'),
          files: ['**/*.css']
        })
      ]
    }
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  plugins: []
};
