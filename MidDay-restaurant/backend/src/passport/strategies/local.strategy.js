const passport = require('passport');
const { Strategy } = require('passport-local');
const UserRestaurant = require('../../models/restaurantModel');

function LocalStrategy() {
  passport.use(
    new Strategy(
      {
        usernameField: 'userName',
        passwordField: 'password',
      },
      (userName, password, done) => {
        (async () => {
          UserRestaurant.findOne({ userName }, (err, user) => {
            if (err) { return done(err); }

            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        })();
      },
    ),

  );
}

module.exports = LocalStrategy;
