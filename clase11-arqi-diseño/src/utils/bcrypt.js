const bcrypt = require('bcrypt')

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10)) // salt ñlakjsdflasdjas

//    boolean <- func
const isValidPassword  = (password, user) => bcrypt.compareSync(password, user.password)// user.password { password: ''}

module.exports = {
    createHash,
    isValidPassword
}
