import { RequestHandler } from "express";
import UserModel from "@models/User";
import bcrypt from 'bcrypt';
import getToken from "@middlewares/JWT/getToken";

const loginHandler: RequestHandler = (req, res) => {
  
  if(!req.body) return res.status(400).deliver("Empty body!")
  const {phoneOrEmail, password} = req.body;

  // find if user exists in database

  if(!phoneOrEmail || !password) return res.status(400).deliver("Missing Payload.")

  UserModel.findOne({$or: [{phone: phoneOrEmail}, {email: phoneOrEmail}]}).then((userDocument) => {
    if(!userDocument){
      return res.status(404).deliver("User Not Found.");
    }
    // validate user's password

    bcrypt.compare(password, userDocument.password).then((passwordMatchResult) => {
      if(!passwordMatchResult) return res.status(401).deliver("Incorrect Password.");
      const token = getToken({id: userDocument._id, email:userDocument.email, name: userDocument.name, admin: userDocument.admin});
      res.deliver({token})
    })
  });
}


export default loginHandler;