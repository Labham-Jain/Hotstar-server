import UserModel from "@models/User";
import { RequestHandler } from "express";

const getUserInfo: RequestHandler = (req, res) => {
  const userPayload = req.state.user;
  if(userPayload){
    UserModel.findById(userPayload.id).then((result) => {
      if(result) {
        res.deliver({
          name: result.name,
          phone: result.phone,
          id: result._id,
        })
      } else {
        res.deliver({})
      }
    })
  } else {
    res.deliver('error.internal-error')
  }
}


export default getUserInfo