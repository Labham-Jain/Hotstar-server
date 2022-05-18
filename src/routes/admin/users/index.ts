import { Router } from "express";
import toggleBlockUsers from "./put";

const AdminUsersController = Router();

AdminUsersController.put('/', toggleBlockUsers)

export default AdminUsersController