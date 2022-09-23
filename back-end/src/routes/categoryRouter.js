import express from "express";
import Category from "../models/category.js";
import { catchAsyncError } from "../middleware/catchAsync.js";

const categoryRouter = express.Router();


categoryRouter.get(
   "/all",
   catchAsyncError(async (req, res, next) => {
      const categories = await Category.find();
      res.status(200).send(categories);
   }),
);


export default categoryRouter;