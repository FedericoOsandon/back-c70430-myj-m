const passport = require('passport')
const local    = require('passport-local')
const { userModel } = require('../models/users.model')
const { createHash, isValidPassword } = require('../utils/bcrypt')

const LocalStrategy = local.Strategy

const initializePassport = () => {
    // Estrategias register (arg1 nombre de la estrategia, instancia LocalStrategy) midd=(req, res, next)
    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async (req, username, password, done) => {
        try {
            const {first_name, last_name} = req.body

            let userFound = await userModel.findOne({email: username})
            if(userFound) return done(null, false) 

            let userNew = {
                first_name,
                last_name,
                email: username,
                password: createHash(password)                
            }
            let result = await userModel.create(userNew) // user con _id <- db mongo
            return done(null, result) 
        } catch (error) {
            return done('Error al crear un usuario: ' + error)
        }
    }))

    passport.serializeUser((user, done)=>{
        done(null, user.id) // id -> session
    }) // 
    
    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findOne({_id: id})
        done(null, user)
    }) // 
    
    // Estrategia login 
    passport.use('login', new LocalStrategy({
        usernameField: 'email'
    }, async (username, password, done) => {
        try {
            const user = await userModel.findOne({email: username})
            // console.log(user)
            if (!user) return done(null, false)

            if(!isValidPassword(password, {password: user.password})) return done(null, false)
            
            done(null, user) // req.user
        } catch (error) {
            done(error)
        }
    }))
}

module.exports = {
    initializePassport
}
