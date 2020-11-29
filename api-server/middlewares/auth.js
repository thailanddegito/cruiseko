const exjwt = require('express-jwt');
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;

// passport.use(new FacebookStrategy({
//     clientID: process.env['FACEBOOK_CLIENT_ID'],
//     clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
//     callbackURL: '/api/auth/facebook/callback'
// },
// function(accessToken, refreshToken, profile, cb) {
//     // In this example, the user's Facebook profile is supplied as the user
//     // record.  In a production-quality application, the Facebook profile should
//     // be associated with a user record in the application's database, which
//     // allows for account linking and authentication with other identity
//     // providers.
//     return cb(null, profile);
// }));

function tokenUserFromHeader (req) {
    // return req.headers.token_u
    if (req.headers.authorization && (req.headers.authorization.split(' ')[0] === 'Bearer' ||req.headers.authorization.split(' ')[0] === 'bearer' )) {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    } else if (req.body && req.body.token){
        return req.body.token;
    }
    return null;
}

function tokenAdminFromHeader (req) {
    return req.headers.token_x

}

exports.jwt = (user_type) =>{
    switch (user_type) {
        case 'user':
            return exjwt({
                secret: process.env.USER_SECRET_KEY,
                getToken: tokenUserFromHeader,
                algorithms: ['HS256']
            });
        case 'admin':
            return exjwt({
                secret: process.env.ADMIN_SECRET_KEY,
                getToken: tokenUserFromHeader,
                algorithms: ['HS256']
            });
    
        default:
            throw new Error('Invalid user type')
    }
}

// exports.passport = passport