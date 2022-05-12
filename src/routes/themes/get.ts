import ThemesModel from "@models/Themes";
import { RequestHandler } from "express";

const getTheme: RequestHandler = (req, res) => {
  const categoryId = req.params.categoryId;
  ThemesModel.find({categoryId}).then((result) => {
    if(!result) return res.deliver('error.not-found')
    res.deliver(result)
  })
}

export default getTheme