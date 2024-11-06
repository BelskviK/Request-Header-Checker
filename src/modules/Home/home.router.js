// Import necessary modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const HomeRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'warehouse' directory
HomeRouter.use("/", express.static(path.join(__dirname, "../../view/home")));

export { HomeRouter };
