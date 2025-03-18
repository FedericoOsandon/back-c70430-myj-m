// NEGOCIO o  CONTROLADOR

const SessionsDaoMongo = require("../managers/sessions.dao.js")
const { generateToken } = require("../utils/authToken.js")
const { createHash, isValidPassword } = require("../utils/bcrypt.js")

class SessionsController {
    constructor(){
        this.service = new SessionsDaoMongo()
    }
    register = async (req, res) => {
        try {
            const { first_name, last_name, email, password } = req.body
            console.log(req.body)
        
            // validación si llegan los campos importantes
            if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})
        
            // const userFound = await userModel.findOne({email}) // persistencia o modelo
            const userFound =  await this.service.getUser(email)// persistencia o modelo
            if (userFound) return res.status(401).send({status: 'error', error: 'El usuario ya existe'})
        
            const newUser = {
                first_name, 
                last_name, 
                email,
                password: createHash(password) // encriptar
            }
        
            const result = await this.service.createUser(newUser)
            res.send({status: 'success', paylad: result})
        } catch (error) {
            console.log(error)
        }
       
    }
    login = async(req, res) => {
        const { email, password } = req.body
        // console.log(email, password)
        // validación si llegan los campos importantes
        if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})
    
        // fue a la base de datos y volvio
        const userFound = await this.service.getUser(email)
        if (!userFound) return res.status(401).send({status: 'error', error: 'El usuario no existe'})
    
        // if (userFound.password !== password || userFound.email !== email) {
        //     return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})
        // }
    
        if(!isValidPassword(password, { password: userFound.password })) return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})
        // const {role} = userFound
              
        const token = generateToken({
            id:userFound._id,
            email: userFound.email,
            role: userFound.role
        })
      
        res
            .cookie('coderCookieToken', token, {
                maxAge: 60*60*1000,
                httpOnly: true
            })
            .send({status: 'success', messagge: 'Logged succes'})
    }
    logout = ()=>{}
    current = (req, res) => {
        console.log(req.user)
        res.send({status: 'success', payload: req.user})
    }
}

module.exports = SessionsController