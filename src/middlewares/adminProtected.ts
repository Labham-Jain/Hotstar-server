import UserModel from "@models/User";
import { NextFunction, Request, Response } from "express";
import verifyToken from "./JWT/verifyToken";

const adminProtected = (req: Request, res: Response, next: NextFunction) => {
  // exception for /update route to allow any user to change admin access with admin password without being an admin
  if(req.path === "/update") {
    const pswd = req.params.admin_password
    if(pswd === process.env.ADMIN_PASS){
      next();
    } else {
      res.deliver("admin.incorrect-password")
    }
    return;
  }
  const token = req.headers.authorization?.split(' ')[1]
  if(!token) return res.deliver('auth.no-token')
  const userInfo = verifyToken(token);
  if(userInfo){
    UserModel.findById(userInfo.id).then((userDoc) => {
      if(userDoc.admin){
        req.state.user = {
          id: userDoc._id,
          name: userDoc.name,
          email: userDoc.email,
          admin: true,
        }
        next()
      } else {
        res.deliver('admin.access-denied')
      }
    })
  }
}

export default adminProtected