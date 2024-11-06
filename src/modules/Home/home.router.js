// Import necessary modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//middlaware
import { checkDevice } from "../../middlewares/device.middleware.js";

const HomeRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'warehouse' directory
HomeRouter.use(
  "/forbiden",
  express.static(path.join(__dirname, "../../view/forbiden"))
);
// Serve static files from 'warehouse' directory
HomeRouter.use(
  "/",
  checkDevice(),
  express.static(path.join(__dirname, "../../view/home"))
);

export { HomeRouter };
