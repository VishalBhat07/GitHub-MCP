import { z } from "zod";

export default {
  name: "factorial",
  schema: { a: z.number() },
  handler: async ({ a }) => {
    let ans = 1;
    for (let i = 2; i <= a; i++) ans *= i;
    return { content: [{ type: "text", text: String(ans) }] };
  },
};
