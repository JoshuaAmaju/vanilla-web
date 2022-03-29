import { RequestHandler } from "express";

export const get: RequestHandler = (_, res) => {
  res.render("home", { props: { title: "John Doe" } });
};
