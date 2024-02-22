import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"

import authRoutes from "./backend/routes/auth.routes.js";
import connctToMongoDb from "./backend/db/connectToMongoDb.js";


const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use("/api/auth", authRoutes);
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("test");
// });

app.listen(PORT, () => {
  connctToMongoDb();
  console.log(`server runninig on port ${PORT}`);
});
