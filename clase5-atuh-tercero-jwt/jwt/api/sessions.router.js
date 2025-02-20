const { Router } = require('express')
const { userModel } = require('../../models/users.model.js')
const { authentication } = require('../../middlewares/auth.middleware.js')
const { createHash, isValidPassword } = require('../../utils/bcrypt.js')
const passport = require('passport')
const { generateToken, authToken } = require('../../utils/authToken.js')

const router = Router()

// register y login sin passport solo con jwt

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    console.log(req.body)

    // validación si llegan los campos importantes
    if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})

    // validar usuario único - control de error 
    const userFound = await userModel.findOne({email})
    if (userFound) return res.status(401).send({status: 'error', error: 'El usuario ya existe'})

    const newUser = {
        first_name, 
        last_name, 
        email,
        password: createHash(password) // encriptar
    }

    const result = await userModel.create(newUser)
    res.send({status: 'success', paylad: result})
})

// login
router.post('/login', async(req, res) => {
    const { email, password } = req.body
    // console.log(email, password)
    // validación si llegan los campos importantes
    if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})

    // fue a la base de datos y volvio
    const userFound = await userModel.findOne({email})
    if (!userFound) return res.status(401).send({status: 'error', error: 'El usuario no existe'})

    // if (userFound.password !== password || userFound.email !== email) {
    //     return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})
    // }

    if(!isValidPassword(password, { password: userFound.password })) return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})

    const token = generateToken({
        id:userFound._id,
        email: userFound.email,
        role: 'admin'
    })
 
    res.send({status: 'success', token})
})

// current
router.get('/current', authToken, (req, res) => {
    console.log(req.user)
    res.send('info sensible de usuarios')
})


module.exports = router