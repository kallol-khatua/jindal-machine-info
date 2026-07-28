import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import plantRoutes from "./routes/plant.routes.js";
import areaRoutes from "./routes/area.routes.js";
import machineRoutes from "./routes/machine.routes.js";
import authRoutes from "./routes/auth.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/areas", areaRoutes);
app.use("/api/machines", machineRoutes);

app.use(errorMiddleware);

export default app;