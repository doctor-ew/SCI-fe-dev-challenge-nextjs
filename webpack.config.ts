import path from 'path';

module.exports = {
  entry: './src/index.js', // Replace with your actual entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injects styles into the DOM
          {
            loader: 'css-loader',
            options: {
              modules: true, // Enables CSS Modules
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Adjust based on your project
  },
};
