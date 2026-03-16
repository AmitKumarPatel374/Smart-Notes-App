class IUserRepository {
    async createUser(userData){
        throw new AppError("Method not implemented");
    }
    async loginUser(loginData){
        throw new AppError("Method not implemented");
    }
    async findUserByEmail(email){
        throw new AppError("Method not implemented");
    }
}

module.exports = IUserRepository;