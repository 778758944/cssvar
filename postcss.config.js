module.exports = {
    plugins: [
	    require('postcss-cssnext'),
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 75,
            propList: ['*'],
            minPixelValue: 2,
        }),
    ]
}