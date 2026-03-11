const { default: mongoUserRepository } = require("../repositories/implementations/mongoUserRepository");



class UserService {
    constructor(){
        this.userRepository = new mongoUserRepository();
    }

    async register(userData) {
        console.log("this is user data:",userData);
        
    }
}

export default UserService