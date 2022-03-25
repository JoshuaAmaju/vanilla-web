import compression from "compression";
import express, { ErrorRequestHandler } from "express";
import { create } from "express-handlebars";
import methodOverride from "method-override";
import path from "path";

import App from "./pages/ssr/app";
import Counter from "./pages/counter/counter";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

const app = express();

const port = process.env.PORT ?? 7070;

const viewsDir = path.join(__dirname, "pages");

const hbs = create({
  defaultLayout: false,
  helpers: {
    json: (json: any) => JSON.stringify(json),
  },
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send("500");
};

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("html", hbs.engine);

app.set("view engine", "html");

app.set("views", viewsDir);

app.use(methodOverride("_method"));

app.get("/", (_, res) => {
  res.render("index", { title: "John Doe" });
});

app.get("/about", (_, res) => {
  res.render("about/index", { props: { title: "John Doe" } });
});

app.get("/counter", (_, res) => {
  const html = ReactDOMServer.renderToString(<Counter />);
  res.render("counter/index", { content: html });
});

app.get("/ssr/:path?", (req, res) => {
  console.log(req.url);
  const html = ReactDOMServer.renderToString(
    <StaticRouter basename="/ssr" location={req.url}>
      <App />
    </StaticRouter>
  );

  res.render("ssr/index", { content: html });
});

app.use(errorHandler);

app.use(express.static(viewsDir));

app.listen(port, () => {
  console.log("Running @ " + port);
});
