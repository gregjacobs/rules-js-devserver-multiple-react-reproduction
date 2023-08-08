const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

console.log(`Running webpack in directory: '${process.cwd()}'`);

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        symlinks: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'ts-loader', 
                        options: { 
                            transpileOnly: true,
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: true
        }),
    ]
};