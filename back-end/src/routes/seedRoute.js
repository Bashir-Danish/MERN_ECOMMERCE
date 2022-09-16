import express  from "express";
import User from "../models/userModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get('/' , async(req,res)=>{

    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    
    res.send({createdUser});
});

export default seedRouter;