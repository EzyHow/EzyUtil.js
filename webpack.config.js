const path = require('path');

module.exports = {
    entry: './src/_merged.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /lib/],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'ezyutil.js',
        path: path.resolve(__dirname),
        libraryTarget: 'var',
        library: 'ezyutil'
    },
};