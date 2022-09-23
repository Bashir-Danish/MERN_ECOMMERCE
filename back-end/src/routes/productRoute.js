import express from "express";
import { catchAsyncError } from "../middleware/catchAsync.js";
import Product from "../models/productModel.js";


const productRouter = express.Router();


// ===== get All Product  ===== //

productRouter.get(
   "/all",
   catchAsyncError(async (req, res, next) => {
      const products = await Product.find();
      res.status(200).send(products);
   }),
);


// ===== get Product by id ===== //

productRouter.get(
   "/:id",
   catchAsyncError(async (req, res, next) => {
      const product = await Product.findById(req.params.id);

      if (product) {
         res.status(200).send(product);
      } else {
         res.status(404).send({ message: "Product not found!" });
      }
   }),
);

export default productRouter;
