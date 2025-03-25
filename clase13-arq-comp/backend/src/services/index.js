const { UsersDao, ProductsDao } = require("../daos/factory");
const ProductRepository = require("./products.repository");
const { UserRepository } = require("./users.repository");

const usersService   = new UserRepository(new UsersDao())
const prodcutService = new ProductRepository(new ProductsDao)


module.exports = {
    usersService,
    prodcutService
}