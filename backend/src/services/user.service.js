const MongoUserRepository = require("../repositories/implementations/mongoUserRepository"); 



class UserService {
    constructor(){
        this.userRepository = new MongoUserRepository();
    }

    async register(userData) {
        console.log("this is user data:",userData);
        
        const user = await this.userRepository.createUser(userData);

        return user;
    }

    async findUserByEmail(email){
        const user = await this.userRepository.findUserByEmail(email);
        return user;
    }
}

module.exports = UserService;