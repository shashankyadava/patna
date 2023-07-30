import User from "../model/User.js";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";

  export const login = async (req, res, next) => {
    try{
      const { email, password } = req.body;
      let existingUser;
     
     existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res
          .status(404)
          .json({ message: "user not found with this email please signup " });
      }
      const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect password" });
      }
      return res.status(200).json({ message: "Login Successfuly" });
    }
    catch (err) {
      console.log(err);
    }
    
  };
  


  
