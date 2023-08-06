// Import necessary modules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration object for Webpack
module.exports = {
  // Entry point for the application, where Webpack starts bundling
  entry: './src/index.tsx',

  // Output configuration for bundled files
  output: {
    filename: 'bundle.js', // The name of the output bundle file
    path: path.resolve(__dirname, 'dist'), // The path where the bundled files will be saved
    publicPath: '/', // Public URL path to the output directory
  },

  // Configuration for resolving module extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // List of file extensions to be resolved when importing modules
  },

  // Module rules for handling different types of files
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Test for TypeScript and TypeScript React files
        exclude: /node_modules/, // Exclude node_modules directory from being processed
        use: {
          loader: 'ts-loader', // Use ts-loader to transpile TypeScript files
        },
      },
      {
        test: /\.(js|jsx)$/, // Test for JavaScript and JavaScript React files
        exclude: /node_modules/, // Exclude node_modules directory from being processed
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JavaScript files
        },
      },
      {
        test: /\.css$/, // Test for CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader to handle CSS files
      },
    ],
  },

  // Plugins used by Webpack
  plugins: [
    // HtmlWebpackPlugin generates an HTML file to serve the bundled files
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML template as the base
      filename: 'index.html', // The name of the output HTML file
    }),
  ],

  // Development server configuration
  devServer: {
    historyApiFallback: true, // Enable history API fallback, allowing client-side routing
  },
};