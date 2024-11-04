import express from "express";

import UserController from "./user.controller.js";

import { checkDevice } from "../../middlewares/device.middleware.js";

export const UserRouter = express.Router();

// without middlaware
UserRouter.get("/current-user", UserController.getCurrentUser);

// with middlaware
UserRouter.get(
  "/current-user-chedevice",
  checkDevice(),
  UserController.checkDevice
);
