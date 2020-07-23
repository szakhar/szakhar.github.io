const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


// Функція потрібно якщо збирається продакшен збірка то мінімізує css файли
const optimization = () => {
    const config = { // оптимізація (дивиться файли на наявність зовнішніх бібліотек)
        splitChunks: { // збирає підключені зовнішні бібліотеки в окремі файли
            chunks: "all"
        }
    };

    // Якщо режим продакшена то додаються ці два плагіна
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(), // Minify CSS
            new TerserWebpackPlugin() // Minify JS
        ]
    }

    return config;
};

// Тільки в продакшені додає хеші до файлових імен.
const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// Щоб не дублювати постійно масив для css, sass, less ...
const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            }
        },
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                config: {
                    path: 'postcss.config.js'
                }
            }
        }
    ];

    // Якщо існує extra то додає її в масив loaders
    if (extra) {
        loaders.push(extra);
    }

    return loaders;
}


module.exports = {
    context: path.resolve(__dirname, 'src'),
    // entry: ['@babel/polyfill', './index.js'],
    entry: './index.js', // точка входу (вказує файл js з якого починається збірка)
    output: { // папка вихідної збірки
        // [contenthash] - додає хеш до імені, щоб файли не кешувались
        filename: filename('js'), // js який отримаємо на виході
        path: path.resolve(__dirname, 'dist') // папка куди все збереться
    },
    plugins: [ // плагіни
        new HtmlWebpackPlugin({  // плагін для роботи з html
            template: './index.html',
            // minify: {
            //     collapseWhitespace: isProd
            // }
        }),
        new CleanWebpackPlugin(), // плагін який очищує папку dist перед збіркою
        new CopyWebpackPlugin({ // плагін для копіювання файлів
            patterns: [
                // {
                //     from: path.resolve(__dirname, 'src/img/favicon.png'),
                //     to: path.resolve(__dirname, 'dist/img')
                // },
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    devServer: { // сервер
        port: 4200,
        hot: isDev
    },
    optimization: optimization(),
    module: {
        rules: [
            // {
            //     // Проганяє файли js через babel ігноруючи node_modules
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env'
            //             ]
            //         }
            //     }
            // },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)$/,
                /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
                exclude: path.resolve(__dirname, 'src/img'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
                exclude: path.resolve(__dirname, 'src/fonts'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ]
    }
};