import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import config from './config/db';
import bcrypt from 'bcrypt-nodejs';
import passport from 'passport'; 
import LocalStrategy from 'passport-local';
      

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Classes
import User from './models/user';

let app = express();

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

mongoose.connect(config.database);

app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));