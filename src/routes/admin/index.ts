import { Router } from "express";
import updateAdminHandler from "./update";
import uploadVideo from "./upload";
import AdminUsersController from "./users";

const adminRouter = Router();

adminRouter.post('/update', updateAdminHandler);
adminRouter.post('/upload', uploadVideo);
adminRouter.post('/users', AdminUsersController);

export default adminRouter;