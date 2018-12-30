const Authentication = require('./controllers/authentication.js');
const passportService = require('./services/passport.js');

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    console.log(req.user);
    res.send({hi: req.user});
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
