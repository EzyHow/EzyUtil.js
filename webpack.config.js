const path = require('path');

module.exports = {
    entry: './src/index.ts',
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

        alias: {
            root: path.resolve('./src')
        }
    },
    output: {
        filename: 'ezyutil.js',
        path: path.resolve(__dirname + '/lib'),
        libraryTarget: 'var',
        library: 'ezyutil'
    },
};