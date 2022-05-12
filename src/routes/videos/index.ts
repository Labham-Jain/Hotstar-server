import { Router } from "express";
import getVideo from "./get";


const VideosController = Router();

VideosController.get('/:id', getVideo)
VideosController.post('/upload', getVideo)

export default VideosController