const nodeExternals = require('webpack-node-externals');

module.exports = (env, args) => {
    const production = args.mode === 'production';
    return {
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
            }, {
                test: /\.ts$/,
                enforce: 'pre',
                use: {
                    loader: 'tslint-loader',
                    options: {
                        typeCheck: true,
                        fix: !production
                    }
                }
            }]
        },
        externals: [nodeExternals()]
    }
};
