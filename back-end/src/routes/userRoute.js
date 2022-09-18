import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { catchAsyncError } from "../middleware/catchAsync.js";

const userRouter = express.Router();

// ===== Login User ===== //
userRouter.post(
   "/login",
   catchAsyncError(async (req, res, next) => {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
         if (bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).send({
               _id: user._id,
               username: user.username,
               email: user.email,
               password: user.password,
               isAdmin: user.isAdmin,
            });
            return;
         }
      }
      res.status(401).send({ message: "Invalid password or email !" });
   }),
);

// ===== Register User ===== //
userRouter.post(
   "/register",
   catchAsyncError(async (req, res, next) => {
      const oldUser = await User.findOne({ email: req.body.email });

      if (oldUser) {
         res.status(401).send({ message: "This user already exsest !" });
      }
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password),
      });
      const user = await newUser.save();
      res.status(201).send({
         _id: user._id,
         username: user.username,
         email: user.email,
         isAdmin: user.isAdmin,
      });
   }),
);

// ===== get All Users  ===== //

userRouter.get(
   "/all",
   catchAsyncError(async (req, res, next) => {
      const users = await User.find();
      res.status(200).send(users);
   }),
);

// ===== get User by id ===== //

userRouter.get(
   "/:id",
   catchAsyncError(async (req, res, next) => {
      const user = await User.findById(req.params.id);

      if (user) {
         res.status(200).send(user);
      } else {
         res.status(404).send({ message: "User not found!" });
      }
   }),
);

// ===== change password ===== //

userRouter.put(
   "/updatePass",
   catchAsyncError(async (req, res, next) => {
      const user = await User.findById(req.body._id);
   
      if (user) {
         user.username = req.body.username || user.username;
         user.email = req.body.email || user.email;
         if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password);
         }

         const updatedUser = await user.save();
         
         res.status(201).send({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            password: updatedUser.password,
            isAdmin: updatedUser.isAdmin,
         });
      } else {
         res.status(401).send({ message: "User not found " });
      }
   }),
);

export default userRouter;
