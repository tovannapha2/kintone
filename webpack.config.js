const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = (env = {}) => {
    return {
        entry: {
            "my-customization.min": './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react-app','@babel/preset-env'],
                            plugins: ["transform-class-properties"]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                      { loader: "style-loader" },
                      { loader: "css-loader" }
                    ]
                }
            ]
        },
        watch: env.watch,
        optimization: {
            minimizer: [
                new UglifyJsPlugin({ 
                    include: /\.min\.js$/,
                })
            ]
        }
    }
}