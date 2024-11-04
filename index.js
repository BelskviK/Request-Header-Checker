import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// routers
import { HomeRouter } from "./src/modules/Home/home.router.js";
import { UserRouter } from "./src/modules/User/user.router.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

async function main() {
  app.use("/", HomeRouter);
  app.use("/api/users", UserRouter);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main();
