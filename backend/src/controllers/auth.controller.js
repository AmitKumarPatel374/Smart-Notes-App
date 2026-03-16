const UserService = require("../services/user.service"); // ✅ FIXED

class AuthController {
  constructor() {
    this.userService = new UserService();
  }

  register = async (req, res, next) => {
    try {
      const userData = req.body;

    //   console.log("user data received successfully!", userData);
      const result = await this.userService.register(userData);

      res.status(201).json({success:true,data:result});

    } catch (error) {
      next(error); // ✅ important for errorHandler
    }
  };
}

module.exports = new AuthController(); // ✅ FIXED