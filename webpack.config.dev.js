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
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.jsx$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot','babel?presets[]=stage-0']
            },
            {
<<<<<<< HEAD
=======
                test: /\.jsx$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot','babel?presets[]=stage-0']
            },
            {
>>>>>>> 2b78ba0da48c1880b9d1b3a3fb0019732dbd810e
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