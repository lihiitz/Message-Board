const jwt = require('jsonwebtoken')

exports.verify = function (req, res, next) {
    let accessToken = req.headers.authorization.split(' ')[1]

    //if there is no token stored in cookies, the request is unauthorized
    if (!accessToken) {
        return res.status(403).send()
    }
    let payLoad
    try {
        //use the jwt.verify method to verify the access token
        //throws an error if the token has expired or has a invalid signature
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        next()
    }
    catch (e) {
        //if an error occured return request unauthorized error
        console.log(e);
        return res.status(401).send()
    }
}
