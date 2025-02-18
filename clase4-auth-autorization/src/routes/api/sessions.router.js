const { Router } = require('express')
const { userModel } = require('../../models/users.model.js')
const { authentication } = require('../../middlewares/auth.middleware.js')
const { createHash, isValidPassword } = require('../../utils/bcrypt.js')
const passport = require('passport')

const router = Router()

// register

router.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/failregister'}), async (req, res) => {
    res.send({status: 'succes', message: 'User Registrado'})
})
router.get('/failregister', (req, res) => {
    res.send({status: 'error', error: 'Failed Register'})
})

router.post('/login', passport.authenticate('login', {failureRedirect: '/api/sessions/faillogin'}), async (req, res) => {
    if (!req.user) return res.send(401).send({status: 'error', error: 'credenciales inválidas'})
        
    req.session.user = {
        email: req.user.email,
        first_name: req.user.first_name
    }

    res.send({status: 'success', message: 'Login correcto'})
})
router.get('/faillogin', (req, res) => {
    res.send({status: 'error', error: 'Failed Register'})
})

// current
router.get('/current', authentication,(req, res) => {
    res.send('info sensible de usuarios')
})




// router.post('/register', async (req, res) => {
//     const { first_name, last_name, email, password } = req.body
//     console.log(req.body)

//     // validación si llegan los campos importantes
//     if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})

//     // validar usuario único - control de error 
//     const userFound = await userModel.findOne({email})
//     if (userFound) return res.status(401).send({status: 'error', error: 'El usuario ya existe'})

//     const newUser = {
//         first_name, 
//         last_name, 
//         email,
//         password: createHash(password) // encriptar
//     }

//     const result = await userModel.create(newUser)
//     res.send({status: 'success', paylad: result})
// })

// // login
// router.post('/login', async(req, res) => {
//     const { email, password } = req.body
//     // console.log(email, password)
//     // validación si llegan los campos importantes
//     if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})

//     // fue a la base de datos y volvio
//     const userFound = await userModel.findOne({email})
//     if (!userFound) return res.status(401).send({status: 'error', error: 'El usuario no existe'})

//     // if (userFound.password !== password || userFound.email !== email) {
//     //     return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})
//     // }

//     if(!isValidPassword(password, { password: userFound.password })) return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})

//     req.session.user = {
//         email,
//         isAdmin: true
//     }

//     // req.sessions.user => {email, admin}

//     res.send('login exitoso')
// })




// logout
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if (error) return  res.send(error)
        res.send('logout')
        
    })
})




module.exports = router