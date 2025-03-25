class UserDto {
    //tomamos la fecha de naci y calcula la edad
    constructor(user){
        this.first_name = user.first_name
        this.last_name = user.last_name
        this.full_name = `${user.first_name} ${user.last_name}`
        this.email = user.email
        this.password = user.password
        // this.active = true
    }
}

module.exports = {
    UserDto
}