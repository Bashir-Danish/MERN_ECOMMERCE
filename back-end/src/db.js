import { connect } from "mongoose";
import { config } from "dotenv";
config();

const connectDatabase = () => {
   connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
   })
      .then(() => {
         console.log("Connected to DB 💫");
      })
      .catch((error) => {
         console.log(error);
      });
};
export default connectDatabase;
