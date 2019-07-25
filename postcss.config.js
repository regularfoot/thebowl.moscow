module.exports = {
    plugins: [
        require('reshadow/postcss'),
        require('postcss-preset-env')({stage: 0}),
    ]
}
