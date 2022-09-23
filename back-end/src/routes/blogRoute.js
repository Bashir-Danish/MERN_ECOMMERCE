import express from "express";
import Blog from "../models/blogModel.js";
import { catchAsyncError } from "../middleware/catchAsync.js";
const blogRouter = express.Router();

// ===== Add Blog ===== //
blogRouter.post(
   "/add",
   catchAsyncError(async (req, res, next) => {
      const newBlog = new Blog({
         title: req.body.title,
         description: req.body.description,
      });
      const blog = await newBlog.save();

      res.status(201).send({
         _id: blog._id,
         title: blog.title,
         description: blog.description,
         author: blog.author,
      });
   }),
);


blogRouter.get(
   "/all",
   catchAsyncError(async (req, res, next) => {
      const blogs = await Blog.find();
      res.status(200).send(blogs);
   }),
);


blogRouter.get(
   "/:id",
   catchAsyncError(async (req, res, next) => {
      const blog = await Blog.findById(req.params.id);

      if (blog) {
         res.status(200).send(blog);
      } else {
         res.status(404).send({ message: "Blog not found!" });
      }
   }),
);


export default blogRouter;
