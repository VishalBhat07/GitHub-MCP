import { z } from "zod";
import { createRepo } from "../controllers/repoManipulation.js";

export default {
  name: "create-a-repo",
  schema: {
    repoName: z.string().describe("The name of the GitHub repository"),
    isPrivate: z
      .boolean()
      .describe("Set to true for private repo, false for public"),
  },
  handler: async ({ repoName, isPrivate }) => {
    await createRepo(repoName, isPrivate);
    return {
      content: [{ type: "text", text: "Repo has been created" }],
    };
  },
};