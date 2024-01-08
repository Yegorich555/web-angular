/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
// const path = require("path");
// const isDevServer = false;

// https://github.com/just-jeb/angular-builders/issues/185
// https://www.npmjs.com/package/@angular-builders/custom-webpack

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$|\.scss$/,
        use: [
          // isDevServer
          //   ? "style-loader" // it extracts style directly into html (MiniCssExtractPlugin works incorrect with hmr and modules architecture)
          //   : MiniCssExtractPlugin.loader, // it extracts styles into file *.css
          // "css-loader", // it interprets @import and url() like import/require() and it resolves them (you can use [import *.css] into *.js).
          // "css-unicode-loader", // fixes weird issue when browser sometimes doesn't render font-icons (https://stackoverflow.com/questions/69466120/troubles-with-webpack-sass-and-fontawesome/73363510#73363510)
          {
            loader: "sass-loader", // it compiles Sass to CSS, using Node Sass by default
            // uncomment if you have separated file with @scss vars
            // options: {
            //   additionalData: '@import "variables";', // inject this import by default in each scss-file
            //   sassOptions: {
            //     includePaths: [path.resolve(__dirname, "src/styles")], // using paths as root
            //   },
            // },
          },
          "postcss-loader", // it provides adding vendor prefixes to CSS rules using values from Can I Use (see postcss.config.js in the project)
        ],
      },
    ],
  },
};

// todo add obsolete plugin
