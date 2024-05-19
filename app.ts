import express from "express";
import morgan from "morgan";
import cors from "cors";

import tasksRoutes from "./routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Calling Routes
app.use("/api", tasksRoutes);

export default app;