const jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'CoderKeyFuncionSecrte'

// genera el token
const generateToken = userDataToken =>  jwt.sign(userDataToken, PRIVATE_KEY, {expiresIn: '1d'}) 
// middleware - authentication

const authToken = (req, res, next ) => {
    const authHeader = req.headers['authorization']
    // Bearer añkdsflldsafj-asd-f.askjdfasdflikasodfjhoasdfjlñadjsfosadfojasodfjaljsdf
    const token = authHeader.split(' ')[1]
    jwt.verify(token, PRIVATE_KEY, (error, userDecode)=>{
        if (error) return res.status(401).send({status: 'error', error: 'no authorized'})

        req.user = userDecode
        next()
    })
}

module.exports = {
    generateToken,
    authToken
}