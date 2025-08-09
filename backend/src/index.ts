// src/index.ts
import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes"; // Combines all route files

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1", routes);

export default app;
