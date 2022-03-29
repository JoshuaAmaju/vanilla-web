import { createTRPCClient } from "@trpc/client";
import { Router } from "../../api/trpc";

const client = createTRPCClient<Router>({
  url: "/api/trpc",
});

export default client;
