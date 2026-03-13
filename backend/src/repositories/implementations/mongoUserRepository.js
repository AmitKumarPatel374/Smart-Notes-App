const userModel = require("../../models/User.model");
const IUserRepository = require("../contracts/IUserRepository");


class MongoUserRepository extends IUserRepository{
    async createUser(userData){

    }
}

module.exports = MongoUserRepository;