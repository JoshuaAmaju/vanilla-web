import { renderToString } from "react-dom/server";
import { RequestHandler } from "express";
import App from "./app";

export const get: RequestHandler = (_, res) => {
  const content = renderToString(<App />);

  setTimeout(() => {
    res.render("react-ssr/index", { content });
  }, 2000);
};
