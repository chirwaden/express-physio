import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, './client/index.js'),
    ],

    output: {
        path: '/',
        publicPath: '/'
    },

    plugins: [
        // Handle error messages in a cleaner way
        new webpack.NoErrorsPlugin(),
        // Handle consistent build hashes
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [

            {
                test: /\.jsx$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot','babel?presets[]=stage-0']
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot','babel?presets[]=stage-0']
            },
            {         
                test: /\.css$/,
                loader: 'style!css'
            },
            {         
                test: /\.sass$/,
                loader: 'style!css!sass'
            }
        ]
    },

    resolve: {
        extentions: ['','.js','.jsx','.css']
    }
}