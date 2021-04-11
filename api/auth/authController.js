const passport = require('passport');
const user = require('./../user/users');

exports.login = function (req, res, next) {
    passport.authenticate('login', function (err, user, info) {
      if (err) {
          return next(err);
      }


      if (info) {
          return next(Error(info.message))
      }

    })(req, res, next)
};
