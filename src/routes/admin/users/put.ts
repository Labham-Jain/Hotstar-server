import UserModel from "@models/User";
import { RequestHandler } from "express";
import { ObjectId } from "mongodb";

interface Users {
  id: string;
}
const toggleBlockUsers: RequestHandler = (req, res) => {
  const listOfUsers: string = req.body.users;
  let users: Users[] = [];
  try {
    users = JSON.parse(listOfUsers);
    if(!Array.isArray(users)){
      throw Error()
    }
  } catch (error) {
    return res.deliver("payload.invalid-payload")
  }
  users.map(async (user) => {
    try {
      const userInfo = await UserModel.findById(user.id)
      let status: boolean = false;
      if(userInfo){
        if(userInfo.blocked){
          status = false;
        } else {
          status = true;
        }
        return UserModel.updateOne({_id: new ObjectId(user.id)}, {blocked: status})
      }
    } catch (error) {}
  })
  Promise.all(users).then(() => {
    return res.deliver('ok.success');
  }).catch(() => {
    res.deliver("error.internal-error")
  })
}
export default toggleBlockUsers