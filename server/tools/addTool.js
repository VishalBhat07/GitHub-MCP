import { z } from "zod";

export default {
  name: "add",
  schema: { a: z.number(), b: z.number() },
  handler: async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
  }),
};
