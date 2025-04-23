import { z } from "zod";
import { createRepo } from "../controllers/repoManipulation.js";

export default {
  name: "create-a-repo",
  schema: { a: z.string(), b: z.boolean() },
  handler: async ({ a, b }) => {
    await createRepo(a, b);
    return {
      content: [{ type: "text", text: "Repo has been created" }],
    };
  },
};
