const { Schema, model } = require('mongoose')

const userCollection = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        
    },
    last_name: String,
    full_name:String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    // cartID: 

})

const userModel = model(userCollection, userSchema)

module.exports = {
    userModel
} 