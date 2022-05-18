import { RequestHandler } from "express";

const uploadVideo: RequestHandler = (req, res) => {
  const {name, videoId, description, tags, category} = req.body;
  res.deliver(req.body)
}

export default uploadVideo