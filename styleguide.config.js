const path = require('path');
const { version } = require('./package');

module.exports = {
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ],
      noParse: /\.(css|scss)/
    },
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx', '.json']
    }
  }
};

// module.exports = {
//   webpackConfig: {
//     module: {
//       rules: [
//         {
//           test: /\.jsx?$/,
//           exclude: /node_modules/,
//           loader: 'babel-loader'
//         }
//       ]
//     }
//   }
// };
