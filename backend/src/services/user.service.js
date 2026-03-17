const MongoUserRepository = require("../repositories/implementations/mongoUserRepository"); 
const AppError = require("../utils/error");



class UserService {
    constructor(){
        this.userRepository = new MongoUserRepository();
    }

    async register(userData) {
        console.log("this is user data:",userData);

        const existingUser = await this.userRepository.findUserByEmail(userData.email);
        if (existingUser) {
            throw new AppError("Email already exists", 409);
        }
        const user = await this.userRepository.createUser(userData);

        return user;
    }

    async findUserByEmail(email){
        const user = await this.userRepository.findUserByEmail(email);
        return user;
    }
}

module.exports = UserService;