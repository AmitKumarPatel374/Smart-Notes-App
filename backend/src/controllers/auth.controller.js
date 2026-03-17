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

  findUserByEmail = async(req,res,next)=>{
    try {
        const {email} = req.body;

        const user = await this.userService.findUserByEmail(email);

        res.status(200).json({success:true, user:user});
    } catch (error) {
        next(error);
    }
  }
}

module.exports = new AuthController(); // ✅ FIXED