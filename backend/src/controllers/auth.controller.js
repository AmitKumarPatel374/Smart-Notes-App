const { default: UserService } = require("../services/user.service");



class AuthController {
    constructor(){
        this.userService = new UserService();
    }

    register = async(req,res,next)=>{
        try {
            const userData = req.body;
            console.log("user data received successfully!",userData);
            
        } catch (error) {
            console.log("error",error);
            
        }
    }

}

export default new AuthController();