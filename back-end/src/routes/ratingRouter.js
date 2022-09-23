import express from "express";
import { catchAsyncError } from "../middleware/catchAsync.js";
import Rating from "../models/rating.js";


const ratingRouter = express.Router();


ratingRouter.get(
   "/all",
   catchAsyncError(async (req, res, next) => {
      const ratings = await Rating.find();
      res.status(200).send(ratings);
   }),
);


export default ratingRouter;