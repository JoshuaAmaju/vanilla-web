import { RequestHandler } from "express";

export const get: RequestHandler = (_, res) => {
  res.render("about/index", { props: { title: "John Doe" } });
};
