const exjwt = require('express-jwt');

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
                getToken: tokenUserFromHeader
            });
        case 'admin':
            return exjwt({
                secret: process.env.ADMIN_SECRET_KEY,
                getToken: tokenUserFromHeader
            });
    
        default:
            throw new Error('Invalid user type')
    }
}
