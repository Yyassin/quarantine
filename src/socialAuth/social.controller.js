const passport = require('passport');

exports.googleLogIn = passport.authenticate('google', {
    scope:['profile', 'email']
});

exports.googleAuth = (req, res) => {

    console.log("Success, socially entered as " + req.user.username);
    res.redirect('/auth/sociallogin');
};