const { UsersDao } = require("../daos/factory");
const { UserRepository } = require("./users.repository");

const usersService = new UserRepository(new UsersDao())


module.exports = {
    usersService
}