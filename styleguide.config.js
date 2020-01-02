const path = require('path');
const { version } = require('./package');

module.exports = {
  version,
  assetsDir: 'assets',
  components: 'src/index.js',
  // ignore: ['**/components/ui/**', '**/components/react-feedback-dialog/**'],
  ribbon: {
    url: 'https://github.com/benpetsch/react-feedback-dialog',
    text: 'Fork me on GitHub'
  },
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
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
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
