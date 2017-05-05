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

    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },

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
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/,
                include: path.join(__dirname, 'client'),
                loader: 'file-loader'
            }
        ]
    },

    resolve: {
        extentions: ['','.js','.jsx','.css','.svg']
    }
}