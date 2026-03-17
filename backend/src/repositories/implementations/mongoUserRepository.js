const { useRouteLoaderData } = require("react-router-dom");
const userModel = require("../../models/User.model")
const IUserRepository = require("../contracts/IUserRepository")

class MongoUserRepository extends IUserRepository {
  async createUser(userData) {
    return await userModel.create(userData); 
  }
  async findUserByEmail(email) {
    const user = await userModel.findOne({email});
    return user; 
  }
}

module.exports = MongoUserRepository
