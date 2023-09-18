const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, 'src/main.js'),

    //выход
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // работа с модулями
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/, //исключаем js файлы 
                use: 'babel-loader', // прогоняем все js файлы через babel-loader
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            },
        ]
    },

    // работа с плагинами
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new VueLoaderPlugin()
    ]

};



