const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, 'src/main.js'),

    //выход
    output:{
        path: path.resolve(__dirname, 'dist'),
       // filename: 'bundle.[contenthash:6].js', //сборка в общий файл, [contenthash:6] изменяем имя чтобы в браузере контент обновлялся после обновления проекта
       filename: '[name].[contenthash:6].js', // сборка по подулям
        clean: true, //удалять мусор в деректории от старых сборок
    },

    // для сборки файлов в отдельные модули

    optimization: {
        //сборка по частям
        splitChunks: {
            cacheGroups:{
                //выделяем сторонние библиотеки в отдельные модули
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial',
                }
            }
        }
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
                oneOf:[
                    {
                        resourceQuery: /module/,
                        use: [ 'style-loader',{
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        }]
                    },
                    {
                        use: ['style-loader', 'css-loader']
                    }
                ]
                
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                exclude: /node_modules/,
                type: 'asset',
                generator:{
                    filename: 'images/[name].[contenthash:6][ext]',
                }
            },
            {
                test: /\.(woff2&|eot|ttf|oft)$/i,
                exclude: /node_modules/,
                type: 'asset',
                generator:{
                    filename: 'fonts/[name].[contenthash:6][ext]',
                }
            }
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



