const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpack = new HtmlWebpackPlugin({
    template: './assets/index.template.html',
    filename:'index.html'
});
module.exports = {
    entry: "./assets/javascript/entry.js",
    output: {
        publicPath: "/",
        path: path.join(__dirname, '..'),
        filename: "dist/javascript/bundle.js"
    },
    plugins: [HtmlWebpack],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
}