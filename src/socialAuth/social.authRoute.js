const router = require('express').Router();
const sc = require("./social.controller");
const passport = require('passport');


//google Auth
router.get('/google', sc.googleLogIn);

//redirect callback (cookie stuff here)
router.get('/google/redirect', passport.authenticate('google'), sc.googleAuth
);

router.get('/sociallogin', (req, res) => {
    req.session.loggedin = true;
    req.session.username = req.user.username;

    res.redirect('/');
    // res.render('socialSignUp', {user: req.user || null});
})

module.exports = router;