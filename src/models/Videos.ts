import mongoose from "mongoose";

// Videos Schema

const VideosSchema = new mongoose.Schema({
  refId: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  }
})

const VideosModel = mongoose.model("video", VideosSchema);
export default VideosModel;