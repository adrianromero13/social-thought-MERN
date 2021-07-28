const passport = require('passport');

/**
 * @description passport looks for jwt and local strategy
 */

const requireAuth = passport.authenticate('jwt', { session: false });

const requireSignIn = passport.authenticate('local', { session: false });

module.exports = {
  requireAuth,
  requireSignIn,
};
