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

router(app);

mongoose.Promise = require('bluebird');
mongoose.connect(config.database);

//app.use(express.static(path.join(__dirname, 'public')));

app.get("/", renderPage);
app.get("*", renderPage);

function renderPage(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
}

server = app.listen(config.port);
console.log(`Running on localhost:${config.port}`);


module.exports = server;