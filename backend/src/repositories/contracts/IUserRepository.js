class IUserRepository {
    async createUser(userData){
        throw new AppError("Method not implemented");
    }
}

module.exports = IUserRepository;