const exjwt = require('express-jwt');
var passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const errors = require('../errors')
const {DefaultError} = errors

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

exports.jwt = (roles) =>{
    const m1=  exjwt({
        secret: process.env.USER_SECRET_KEY,
        getToken: tokenUserFromHeader,
        algorithms: ['HS256']
    })
    const m2 = (req,res,next)=>{
        if(!roles) return next();
        let err = new DefaultError(errors.PERMISSION_ERROR);
        // console.log(req.user.type,roles)
        if(Array.isArray(roles)){
            
            if(!roles.includes(req.user.type)){
                
                return res.status(403).json(err).end(); 
            }
            
        }
        else if(req.user.type != roles){
            // console.log(4,req.user.type,roles)
            return res.status(403).json(err).end(); 
        }
        next();
    }
    return [m1,m2];
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