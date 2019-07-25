const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
    withImages({
        inlineImageLimit: 16384,
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }
    })
);
