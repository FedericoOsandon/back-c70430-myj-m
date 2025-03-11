const mongoose = require('mongoose')
const dotenv   = require('dotenv')
const { program } = require('../utils/process')

const { mode } = program.opts()
console.log(mode)
dotenv.config({
    path: mode === 'production'? './.env.production' : './.env.developer' 
})


const configObject = {
    port:       process.env.PORT || 8080,
    privateKey: process.env.PRIVATE_KEY,
    mongo_url:  process.env.MONGO_URL
}


const connectDB = () => {
    console.log('base de datos conectada')
    return mongoose.connect('mongodb://localhost:27017/c70430')
}

module.exports = {
    connectDB,
    configObject
}