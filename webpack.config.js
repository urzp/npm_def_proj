const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: path.resolve(__dirname, 'scr/main.js'),

    //выход
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // работа с модулями
    modules:{
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
            template: path.resolve(__dirname, 'scr/index.html'),
        }),
        new VueLoaderPlugin()
    ]

};



