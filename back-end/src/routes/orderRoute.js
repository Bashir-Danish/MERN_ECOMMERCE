import express from 'express';
import { catchAsyncError } from '../middleware/catchAsync.js';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

orderRouter.post('/',catchAsyncError( async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems?.map((x) => ({ ...x, product: x._id })),
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        subTotal: req.body.subTotal,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,

    });
    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order })
}));

orderRouter.get("/all",catchAsyncError(async (req, res, next) => {
       const orders = await Order.find();
       res.status(200).send(orders);
    }),
 );
 orderRouter.get("/mine/:id",catchAsyncError(async (req, res, next) => {
    const order = await Order.find({userId : req.params.id});
    res.status(200).send(order);
 }),
);
orderRouter.get("/:id",catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(order){
        res.status(200).send(order);
    } else {
        res.status(404).send({message : 'Order not found'});
    }
 }),
);
export default orderRouter;