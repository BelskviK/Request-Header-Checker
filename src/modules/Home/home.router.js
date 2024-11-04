// Import necessary modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// controllers
import HomeController from "./home.controller.js";

const HomeRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
HomeRouter.use(bodyParser.urlencoded({ extended: true }));
HomeRouter.use(bodyParser.json());

// Serve static files from 'warehouse' directory
HomeRouter.use("/", express.static(path.join(__dirname, "../../view/")));
HomeRouter.use("/", express.static(path.join(__dirname, "../../view/home")));

// Routes
// Serve the home view
HomeRouter.get("/", async (_, res) => {
  HomeController.viewHome;
});

export { HomeRouter };
