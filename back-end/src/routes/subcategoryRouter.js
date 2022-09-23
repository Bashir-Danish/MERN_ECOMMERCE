import express from "express";
import { catchAsyncError } from "../middleware/catchAsync.js";
import Subcategory from "../models/subcategory.js";

const subcategoryRouter = express.Router();


subcategoryRouter.get(
   "/all",
   catchAsyncError(async (req, res, next) => {
      const subcategories = await Subcategory.find();
      res.status(200).send(subcategories);
   }),
);


export default subcategoryRouter;