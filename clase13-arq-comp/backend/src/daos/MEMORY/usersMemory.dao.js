

class UsersDaoMemory {
    constructor(){
        this.users = [
            {
                _id: "67bdd01bc541f60988ff0631",
                first_name: "fede",
                last_name: "fede",
                email: "fede@gmail.com",
                password: "$2b$10$ICsBmv7yNoDYfP1ETqqHmeUgo2GV/tBLakBYfTgVUIrQVqzdsFyXm",
                role: "admin",
            
              },
              {
                _id: "67c078cdb3c9f71ea071154b",
                first_name: "fede",
                last_name: "fede",
                email: "f@gmail.com",
                password: "$2b$10$OwzDCmAKwKVpiPzBu5Tn8.R0xk4Fc8V0r0UFwjtVGp38V2Fm8CfnK",
                role: "user",
              
              },
            {
                _id: "67bdd01bc541f60988ff0631",
                first_name: "fede",
                last_name: "fede",
                email: "fede@gmail.com",
                password: "$2b$10$ICsBmv7yNoDYfP1ETqqHmeUgo2GV/tBLakBYfTgVUIrQVqzdsFyXm",
                role: "admin",
            
              },
              {
                _id: "67c078cdb3c9f71ea071154b",
                first_name: "fede",
                last_name: "fede",
                email: "f@gmail.com",
                password: "$2b$10$OwzDCmAKwKVpiPzBu5Tn8.R0xk4Fc8V0r0UFwjtVGp38V2Fm8CfnK",
                role: "user",
              
              },
            {
                _id: "67bdd01bc541f60988ff0631",
                first_name: "fede",
                last_name: "fede",
                email: "fede@gmail.com",
                password: "$2b$10$ICsBmv7yNoDYfP1ETqqHmeUgo2GV/tBLakBYfTgVUIrQVqzdsFyXm",
                role: "admin",
            
              },
              {
                _id: "67c078cdb3c9f71ea071154b",
                first_name: "fede",
                last_name: "fede",
                email: "f@gmail.com",
                password: "$2b$10$OwzDCmAKwKVpiPzBu5Tn8.R0xk4Fc8V0r0UFwjtVGp38V2Fm8CfnK",
                role: "user",
              
              },
            {
                _id: "67bdd01bc541f60988ff0631",
                first_name: "fede",
                last_name: "fede",
                email: "fede@gmail.com",
                password: "$2b$10$ICsBmv7yNoDYfP1ETqqHmeUgo2GV/tBLakBYfTgVUIrQVqzdsFyXm",
                role: "admin",
            
              },
              {
                _id: "67c078cdb3c9f71ea071154b",
                first_name: "fede",
                last_name: "fede",
                email: "f@gmail.com",
                password: "$2b$10$OwzDCmAKwKVpiPzBu5Tn8.R0xk4Fc8V0r0UFwjtVGp38V2Fm8CfnK",
                role: "user",
              
              }
        ]
    }

    get =  () => this.users
    create = async newUser => this.users.push(newUser)
}

module.exports = UsersDaoMemory
