const { configObject } = require("../config");

const { persistence } = configObject
let UsersDao
let ProductsDao
let CartsDao

switch (persistence) { 
    case 'MEMORY':
        const UserDaoMemory = require('./MEMORY/usersMemory.dao.js')
        UsersDao = UserDaoMemory
        break;
    case 'FS':
        
        break;
    case 'SQL':
        
        break;

    default:
        const UsersDaoMongo = require('./MONGO/users.dao.js')
        UsersDao = UsersDaoMongo
        break;
}

module.exports = {
    UsersDao
}