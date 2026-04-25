const UserService = require("../services/user.service")

class UserController {
  constructor() {
    this.userService = new UserService()
  }

  userProfile = async (req, res, next) => {
    try {
      const { email } = req.user
      const user = await this.userService.findUserByEmail(email)

      res.status(200).json({ success: true, user: user })
    } catch (error) {
        next(error)
    }
  }
}

module.exports = new UserController();
