module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/recetarion/' : '/',
    css: {
        sourceMap: true
    },
    devServer: {
        host: 'localhost',
        https: true
    }
}