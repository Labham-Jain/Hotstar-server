import { Router } from "express";
import getTheme from "./get";

const ThemeController = Router();

ThemeController.get('/', getTheme)