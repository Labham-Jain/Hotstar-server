import { Router } from "express";
import updateAdminHandler from "./update";
import uploadVideo from "./upload";

const adminRouter = Router();

adminRouter.post('/update', updateAdminHandler);
adminRouter.post('/upload', uploadVideo);

export default adminRouter;