
class UsersDaoFS {
    constructor(){
        this.users = ''
    }
    readFlie = 
    getUsers =  () => this.users
    createUser = async newUser => this.users.push(newUser)
}

module.exports = UsersDaoFS
