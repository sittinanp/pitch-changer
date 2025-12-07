import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
import { env } from "../src/config/env";

dotenv.config();

const app = express();
const port = env.PORT;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

