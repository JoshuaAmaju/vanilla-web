import { createRouter } from "../lib/route";
import * as trpcExpress from "@trpc/server/adapters/express";
import trpc from "./trpc";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res });

const router = createRouter();

router.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    createContext,
    router: trpc,
  })
);

export default router;
