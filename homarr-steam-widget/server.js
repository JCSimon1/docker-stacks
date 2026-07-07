import dotenv from "dotenv";
dotenv.config();

import express from "express";

import path from "path";
import { fileURLToPath } from "url";

import healthRouter from "./src/routes/health.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/health", healthRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Listening on ${PORT}`);

});