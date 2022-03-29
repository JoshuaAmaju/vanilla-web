import * as trpc from "@trpc/server";
import z from "zod";

const router = trpc
  .router()
  .query("getUser", {
    resolve: () => ({ id: "1", name: "John", age: 0 }),
  })
  .mutation("saveUser", {
    input: z.object({
      id: z.string(),
      age: z.number(),
      name: z.string().optional(),
    }),
    resolve: ({ input }) => ({ ...input, age: input.age + 1 }),
  });

export type Router = typeof router;

export default router;
