// endpoint que maneja nuestra sesión ( login register logout)
import { Router } from 'express'
import { userModel } from '../../models/users.model.js'
import { createHash, isValidPassword } from '../../utiils/hash.js'
import { generateToken } from '../../utiils/authToken.js'
import { authToken } from '../../middlewares/auth.middleware.js'

export const sessionsRouter = Router()

sessionsRouter
    .post('/register', async (req, res) => {
        const {first_name, last_name, email, password} = req.body
        console.log(req.body)
        if(!email || !password) return res.status(400).send({status: 'error', error: 'Email y password son requeridos'})
        const userFound = await userModel.findOne({email})
        if(userFound) return res.status(401).send({status: 'error', error: 'El usuraio ya existe'})

        const newUser = {
            first_name,
            last_name,
            email,
            password: createHash(password)  //
        }
        const result = await userModel.create(newUser)
        res.send({status: 'success', result})
    })
    .post('/login', async (req, res) => {
        const {email, password} = req.body
        if(!email || !password) return res.status(400).send({status: 'error', error: 'Email y password son requeridos'})
        const userFound = await userModel.findOne({email})
        if(!userFound) return res.status(401).send({status: 'error', error: 'El usuraio no existe'})
        if(!isValidPassword(password, userFound.password)) return res.status(401).send({status: 'error', error: 'No coinciden las credenciales'})
        const token = generateToken({
            id:      userFound._id,
            email:   userFound.email,
            role:    userFound.role,
            isAdmin: userFound.role === 'admin'
        })

        res.send({status: 'success', token}) // clase que viene la vamos a guardar en las cookie client
    })


    .get('/current' , authToken, (req, res) => {
        if(!req.user.isAdmin) return res.send('no es admin')
        res.send('datos sensibles que solo el admin o user puede ver')
    })
    // zod para validar campos