import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import { notFound, errorHandler } from "./middlewares.js";
import connectDatabase from "./db.js";

config();
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====== Routers ====== //
import seedRouter from "./routes/seedRoute.js";
import userRouter from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";
import productRouter from "./routes/productRoute.js";
import categoryRouter from "./routes/categoryRouter.js";
import subcategoryRouter from "./routes/subcategoryRouter.js";
import ratingRouter from "./routes/ratingRouter.js";
app.use("/api/v1/seed", seedRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/subcategories", subcategoryRouter);
app.use("/api/v1/ratings", ratingRouter);



app.get("/", (req, res) => {
   res.json({
      message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
   });
});



// ====== connect database ====== //
connectDatabase();

app.use(notFound);
app.use(errorHandler);

export default app;
