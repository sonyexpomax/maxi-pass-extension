const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { default: ImageminPlugin } = require('imagemin-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebExtManifestPlugin = require('./build/manifest-plugin');

const production = process.env.NODE_ENV === 'production';

let plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

    new webpack.LoaderOptionsPlugin({
        minimize: production,
        debug: false,
    }),

    new HtmlWebpackPlugin({
        excludeChunks: [
            'background',
        ],
        template: 'src/pages/popup/index.html',
        filename: 'popup.html',
        minify: {
            removeComments: production,
            collapseWhitespace: production,
        },
        inject: true,
    }),

    new HtmlWebpackPlugin({
        excludeChunks: [
            'popup',
        ],
        template: 'src/pages/background/index.html',
        filename: 'background.html',
        minify: {
            removeComments: production,
            collapseWhitespace: production,
        },
        inject: true,
    }),

    new CopyWebpackPlugin([{
        from: 'images',
        to: 'images',
    }]),

    new WebExtManifestPlugin(),

    // new ExtractTextPlugin(
    //     {
    //         filename: '[name].[contenthash].css',
    //     },
    // ),
];

if (production) {
    plugins = [
        ...plugins,

        new ImageminPlugin({ test: /\.png$/ }),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.resolve('reports/bundles.html'),
            defaultSizes: 'gzip',
        }),
    ];
}

const config = {
    mode: production ? 'production' : 'development',

    entry: {
        popup: [
            'regenerator-runtime/runtime',
            './src/pages/popup',
        ],

        background: [
            'regenerator-runtime/runtime',
            './src/pages/background',
        ],
    },

    output: {
        path: path.resolve('extension'),
        filename: production ? 'scripts/[name].[chunkhash].js' : 'scripts/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            // {
            //     test: /\.scss$/,
            //     use: ['css-hot-loader']
            //         .concat(ExtractTextPlugin.extract({
            //             fallback: 'style-loader',
            //             use: ['css-loader', 'sass-loader'],
            //         })),
            // },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2,
                    minSize: 0,
                },
            },
        },
        occurrenceOrder: true,
    },

    plugins,
};

// ## //

module.exports = config;

// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const HtmlPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// require("babel-core/register");
// require("babel-polyfill");
//
// const PAGES_PATH = './src/pages';
//
// function generateHtmlPlugins(items) {
//     return items.map(name => new HtmlPlugin(
//         {
//             filename: `./${name}.html`,
//             chunks: [name],
//         },
//     ));
// }
//
// module.exports = {
//     entry: {
//         background: [
//             'babel-polyfill',
//             `${PAGES_PATH}/background`,
//         ],
//         popup: [
//             'babel-polyfill',
//             `${PAGES_PATH}/popup`,
//         ],
//         content: [
//             'babel-polyfill',
//             `${PAGES_PATH}/content`,
//         ],
//     },
//     output: {
//         path: path.resolve('dist/pages'),
//         filename: '[name].js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: ['babel-loader'],
//             },
//             {
//                 test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
//                 use: 'file-loader?name=[name].[ext]?[hash]',
//             },
//             {
//                 test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//                 loader: 'url-loader?limit=10000&mimetype=application/fontwoff',
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//             {
//                 test: /\.scss$/,
//                 use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })) },
//         ],
//     },
//     plugins: [
//         new ExtractTextPlugin(
//             {
//                 filename: '[name].[contenthash].css',
//             },
//         ),
//         new CopyPlugin(
//             [
//                 {
//                     from: 'src',
//                     to: path.resolve('dist'),
//                     ignore: ['pages/**/*'],
//                 },
//             ],
//         ),
//         ...generateHtmlPlugins(
//             [
//                 'background',
//                 'popup',
//             ],
//         ),
//     ],
// };
