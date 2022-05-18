import MulterUpload from "@utils/multer";
import { Router } from "express";
import getVideo from "./get";
import uploadVideo from "./post";


const VideosController = Router();

VideosController.get('/:id', getVideo)
VideosController.post('/upload', MulterUpload.single('video'), uploadVideo)

export default VideosController