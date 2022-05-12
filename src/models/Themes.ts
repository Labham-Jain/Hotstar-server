import mongoose from "mongoose";

const ThemeType = {
  primary: {
    type: String,
    required: true,
  },
  secondary: {
    type: String,
    required: true,
  },
  accent: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
}

// Themes Schema

const ThemesSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
  },
  theme: {
    type: ThemeType,
    required: true,
  }
})

const ThemesModel = mongoose.model("theme", ThemesSchema);
export default ThemesModel;