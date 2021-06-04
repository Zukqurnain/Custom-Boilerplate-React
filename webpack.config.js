const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    return{
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src'),
            },
            extensions: ['.js', '.jsx'],
        },
        devServer: {
            contentBase: "./build",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader',
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template:  path.resolve('./index.html'),
            }),
        ],
        devtool : isProduction ?'source-map' : 'inline-source-map'
    }

};