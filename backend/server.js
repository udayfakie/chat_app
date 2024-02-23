import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connctToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("test");
// });

app.listen(PORT, () => {
  connctToMongoDb();
  console.log(`server runninig on port ${PORT}`);
});
