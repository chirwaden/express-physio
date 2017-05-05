import User from '../models/user';
import helpers, { setUserInfo } from '../util/helpers';
var ObjectId = require('mongoose').Types.ObjectId;

exports.listAll = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      res.status(400).json({ error: 'Could not return user list' });
      return next(err);
    }
    return res.status(200).json({ users : users });
  });
}

exports.myDetails = function(req, res, next){
  const userId = req.user._id.toString();

  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    const userToReturn = setUserInfo(user);

    return res.status(200).json({ user: userToReturn });
  });
}

exports.getDetails = function(req, res, next){
  const userId = req.params.userId;

  User.findById(ObjectId(userId), (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    const userToReturn = setUserInfo(user);

    return res.status(200).json({ user: userToReturn });
  });
}