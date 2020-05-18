const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./default')
const User = require('../src/register/register.model')

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
})

passport.use(
    new GoogleStrategy({
        //options for strat
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:'/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
    //callback passport (after redirect)
    
    //check if existing user
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if (currentUser) {
            //existing user
            console.log('existing user detected')
            done(null, currentUser);
        } else {
            try {
                new User({
                    username: profile.displayName,
                    googleId: profile.id, 
                    email: profile.emails[0].value,
                    image: profile._json.picture
                }).save().then((newUser) => {
                    console.log('new user created')
                    done(null, newUser);
                });
            } catch (error) {
                console.log(error.message);
            }
        }
    })
})
);