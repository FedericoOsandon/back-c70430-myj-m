const mongoose = require('mongoose')

const connectDB = () => {
    console.log('base de datos conectada')
    return mongoose.connect('mongodb://localhost:27017/c70430')
}

module.exports = {
    connectDB
}