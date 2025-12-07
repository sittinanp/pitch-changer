import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
import { env } from "../src/config/env";

import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = env.PORT;

app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:443",
  credentials: true,
}));
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

