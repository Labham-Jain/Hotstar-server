import { RequestHandler } from "express";
import UserModel from "@models/User";
import bcrypt from 'bcrypt';
import getToken from "@middlewares/JWT/getToken";

interface BodyPayload {
  name?: string,
  password?: string,
  email?: string;
}

const registerHandle: RequestHandler = (req, res) => {
  
  if(!req.body) return res.status(400).deliver("Empty body!")
  const {email, password, name}: BodyPayload = req.body;
  
  // find if user exists in database

  if(!email || !password || !name) return res.status(400).deliver("Missing Payload.")

  UserModel.findOne({email}).then((userDocument) => {
    if(userDocument){
      return res.status(400).deliver("User already exists.");
    }
    bcrypt.genSalt().then((salt) => {
      bcrypt.hash(password, salt).then((hashedPassword) => {
        UserModel.create({
          name,
          email,
          password: hashedPassword,
        }).then((result) => {
          const token = getToken({id: result._id, name: result.name, email: result.email});
          res.deliver({token})
        }).catch(() => {
          res.status(500).deliver("Unable to create user.")
        })
      }).catch(() => {
        res.status(500).deliver("Cannot generate salt! User not created!")
      })
    }).catch(() => {
      res.status(500).deliver("Server Error! User not created.")
    })
  });
}


export default registerHandle;