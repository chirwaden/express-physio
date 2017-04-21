import AuthenticationController from './controllers/authentication'; 
import express from 'express';
import passportService from './config/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  

const REQUIRE_ADMIN = "Admin";  
const REQUIRE_PHYSIO = "Owner";
const REQUIRE_MEMBER = "Member";

module.exports = function(app) {  
  const apiRoutes = express.Router(),
        authRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);

  authRoutes.post('/register', AuthenticationController.register);

  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  app.use('/api', apiRoutes);
};