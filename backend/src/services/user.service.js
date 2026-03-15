const MongoUserRepository = require("../repositories/implementations/mongoUserRepository"); 



class UserService {
    constructor(){
        this.userRepository = new MongoUserRepository();
    }

    async register(userData) {
        console.log("this is user data:",userData);
        
    }
}

module.exports = UserService;