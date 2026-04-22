const userModel = require("../models/User.model");
const MongoUserRepository = require("../repositories/implementations/mongoUserRepository"); 
const { getCookiesOptions } = require("../utils/cookie.utils");
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

    async loginUser(userData){
        const {email,password}=userData;

        const existingUser = await this.userRepository.findUserByEmail(email);
        if(!existingUser){
            throw new AppError("email does not exists",404);
        }

        let cp = await existingUser.comparePass(password);
        if(!cp){
            throw new AppError("Invalid Credientials!",400);
        }

        return existingUser;
        
    }
}

module.exports = UserService;