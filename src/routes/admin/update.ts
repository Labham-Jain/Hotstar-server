import UserModel from "@models/User";
import { RequestHandler } from "express";

interface BodyPayload {
  phoneOrEmail: string;
  access: boolean;
}

const updateAdminHandler: RequestHandler = (req, res) => {
  const {phoneOrEmail, access}: BodyPayload = req.body;
  let phone: number = 0;
  let email: string = '';

  if(!phoneOrEmail && !access) return res.status(400).deliver("payload.insufficient-payload");
  
  if(phoneOrEmail.includes('@')){
    email = phoneOrEmail
  } else {
    phone = parseInt(phoneOrEmail.split(' ').join().replace('+91', ''))
  }

  UserModel.findOne({$or: [{phone}, {email}]}).then((result) => {
    if(!result) return res.status(400).deliver("payload.invalid-phone");
    
    UserModel.findOneAndUpdate({email: result.email}, {admin: access}).then(() => {
      res.deliver("ok.success")
    }).catch((error) => {
      console.log(error)
      res.status(500).deliver("error.internal-error")
    })
  }).catch(error => console.log(error.message))
}

export default updateAdminHandler