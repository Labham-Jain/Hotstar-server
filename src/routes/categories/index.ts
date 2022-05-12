import { Router } from "express";
import getCategories from "./get";
import postCategories from "./post";

const CategoriesController = Router();

CategoriesController.get('/all', getCategories)
CategoriesController.post('/new', postCategories)


export default CategoriesController