const withOptimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
    withOptimizedImages({
        //optimizeImagesInDev
        inlineImageLimit: 16384,
        optimizeImagesInDev: false,

        // next-css
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }
    })
);
