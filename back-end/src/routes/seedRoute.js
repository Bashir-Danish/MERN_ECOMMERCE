import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import Blog from "../models/blogModel.js";
import Product from "../models/productModel.js";
import Category from "../models/category.js";
import Subcategory from "../models/subcategory.js";
import Rating from "../models/rating.js";

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {

    await User.remove({});
    const createdUser = await User.insertMany(data.users);

    await Blog.remove({});
    const createdBlog = await Blog.insertMany(data.blogs);

    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);

    await Category.remove({});
    const createdCategory = await Category.insertMany(data.category);

    await Subcategory.remove({});
    const createdSubcategory = await Subcategory.insertMany(data.subcategory);

    await Rating.remove({});
    const createdRating = await Rating.insertMany(data.rating);

    res.send({ createdUser, createdBlog, createdProduct, createdCategory, createdSubcategory, createdRating });
});

export default seedRouter;