import dotenv from "dotenv";
dotenv.config();
import config from "./src/config/index.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import healthRouter from "./src/routes/health.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/health", healthRouter);
import steamRouter from "./src/routes/steam.js";
app.use("/api/v1/steam", steamRouter);

const PORT = config.port;

app.listen(PORT, () => {

    console.log(`Listening on ${PORT}`);

});