const passport = require('passport')
const jwt      = require('passport-jwt')
const { userModel } = require('../models/users.model')
const { PRIVATE_KEY } = require('../utils/authToken')


const JWTSrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt

const initializePassport = () => {
    // passport internamente no captura cookies
    const cookieExtractor = (req) => {
        let token = null
        if(req && req.cookies){
            token = req.cookies['coderCookieToken']
        }
        return token
    }

    console.log(PRIVATE_KEY)
    //configuración de estretégia === midd
    passport.use('jwt', new JWTSrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY
    }, async (dataFromToken, done) => {
        console.log('data form token: ', dataFromToken)
        try {
            return done(null, dataFromToken) 
        } catch (error) {
            done(error)
        }
    }))
    
    
    
}

module.exports = {
    initializePassport
}
