import compression from "compression";
import express from "express";
import { create } from "express-handlebars";
import methodOverride from "method-override";
import path from "path";
import { errorHandler } from "./utils";
import controller from "./controllers";
import api from "./api";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const { NODE_ENV } = process.env;

const port = process.env.PORT ?? 8070;

const viewsDir = path.join(__dirname, "pages");

const hbs = create({
  defaultLayout: false,
  helpers: {
    json: (json: any) => JSON.stringify(json),
  },
});

const start = () => {
  const app = express();

  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.engine("html", hbs.engine);

  app.set("view engine", "html");

  app.set("views", viewsDir);

  app.use(methodOverride("_method"));

  app.use("/api", api);

  app.use(controller);

  app.use(errorHandler);

  // serve static files
  app.use(express.static(viewsDir));

  return new Promise((resolve, reject) => {
    app.listen(port, () => resolve(port));
  });
};

start().then((port) => {
  console.log("Running @ " + port);
});
