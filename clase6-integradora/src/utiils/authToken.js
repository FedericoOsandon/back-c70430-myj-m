import jwt from 'jsonwebtoken'

// ???????? que creamos aquí 
export const PRIVATE_KEY = 'askdfaskfdas.--%$klaskdfj'

export const generateToken = userData => jwt.sign(userData, PRIVATE_KEY, {expiresIn: '1d'})

