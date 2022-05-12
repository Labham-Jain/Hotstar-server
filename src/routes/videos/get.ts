import VideosModel from "@models/Videos";
import { RequestHandler } from "express";

const getVideo: RequestHandler = (req, res) => {
  const videoId = req.params.id;
  VideosModel.findOne({refId: videoId}).then(videoDoc => {
    if(!videoDoc) return res.deliver('media.playback-not-found');
    return res.deliver(videoDoc)
  })
}

export default getVideo