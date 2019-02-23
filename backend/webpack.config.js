const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './src/main.ts',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    externals: [nodeExternals()]
};
