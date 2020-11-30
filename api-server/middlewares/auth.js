const exjwt = require('express-jwt');
var passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

passport.use(new FacebookTokenStrategy({
    clientID: process.env['FACEBOOK_CLIENT_ID'],
    clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
    
}, function(accessToken, refreshToken, profile, done) {
    profile = {...profile._json , provider : profile.provider,picture : profile.photos[0].value}
    return done(null,profile);
}
));

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

exports.facebook = (req,res,next)=>{
    passport.authenticate('facebook-token', { session: false }, function(err, user, info) { 
        
        if (err) { 
            
            return next(err); 
        } 
        if (!user) { 
            return res.status(401).json({error:"Unauthorized"}).end(); 
        } 

        req.user = user;   // Forward user information to the next middleware
        next();
    })(req, res, next);
}

// exports.passport = passport