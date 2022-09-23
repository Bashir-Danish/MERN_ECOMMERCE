import mongoose from "mongoose";

const producSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        subcategory: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true, default: false },
        star: { type: String, required: true, default: false },
        sizes: [{ type: Object, required: true }],
        colors: [{ type: Object, required: true }],
        image: { type: String, required: true },
        imageOne: { type: String, required: true },
        imageTow: { type: String, required: true }
    },
    { timestamps: true },
);

const Product = mongoose.model("Product", producSchema);
export default Product;
