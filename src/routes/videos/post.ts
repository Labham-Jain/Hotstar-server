import VideosModel from "@models/Videos";
import { RequestHandler } from "express";
import {nanoid} from 'nanoid'
const uploadVideo: RequestHandler = (req, res) => {
  const video = req.file;
  if(!video) return res.deliver("payload.insufficient-payload");
  VideosModel.create({src: video.path, refId: nanoid(12)}).then((result) => {
    res.deliver({videoId: result.refId, src: result.src})
  }).catch(error => {
    console.log(error);
    res.deliver('error.internal-error')
  })
}
export default uploadVideo;