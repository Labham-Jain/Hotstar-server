import mongoose from "mongoose";

// Categories Schema

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  identifier: {
    type: String,
  },
  themeId: {
    type: String,
    required: true,
  }
})

const CategoriesModel = mongoose.model("category", CategoriesSchema);
export default CategoriesModel;