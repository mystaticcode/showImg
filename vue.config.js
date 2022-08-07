//引入去除console.log的模块
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    publicPath: './', 
    productionSourceMap: false,
 
    configureWebpack: config => {
        //解决资源(asset)和入口起点超过指定文件限制的警告
        config.performance = {
            maxEntrypointSize: 30000,
            maxAssetSize: 30000
        };

        const plugins = [];

        plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false, // 去掉注释
                    },
                    warnings: false,
                    compress: {
                        drop_console: true,
                        drop_debugger: false,
                        pure_funcs: ['console.log']//移除console
                    }
                }
            })
        );

        // 公共代码抽离
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        test: /node_modules/,
                        name: 'vendor',
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: 'all',
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: 'common',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true
                    },
                    runtimeChunk: {
                        name: 'manifest'
                    }
                }
            }
        }

    }

}
