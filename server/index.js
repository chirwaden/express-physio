import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import config from './config/conf';
import router from './router'; 

let app = express();
let server;

const compiler = webpack(webpackConfig);
const schema = mongoose.Schema;

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

mongoose.Promise = require('bluebird');
mongoose.connect(config.database);

app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

<<<<<<< HEAD
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

server = app.listen(config.port);
console.log(`Running on localhost:${config.port}`);

router(app);

module.exports = server;
=======
app.listen(3000, () => console.log('Running on localhost:3000'));

router(app);
>>>>>>> 2b78ba0da48c1880b9d1b3a3fb0019732dbd810e
