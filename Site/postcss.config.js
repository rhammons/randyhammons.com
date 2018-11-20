module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            prefix: '.rh'
        }),
        require('autoprefixer'),
        require('postcss-discard-empty'),
        require('postcss-merge-rules')
    ]
}