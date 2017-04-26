import User from '../models/user';

exports.listAll = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      res.status(400).json({ error: 'Could not return user list' });
      return next(err);
    }
    return res.status(200).json({ users : users });
  });
}