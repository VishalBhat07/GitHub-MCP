import { z } from "zod";
import { deleteRepo } from "../controllers/repoManipulation.js";

export default {
  name: "delete-a-repo",
  schema: {
    owner: z
      .string()
      .describe("Name of the repo owner, default value is : VishalBhat07"),
    repoName: z.string().describe("The name of the GitHub repository"),
  },
  handler: async ({ owner, repoName }) => {
    await deleteRepo(owner, repoName);
    return {
      content: [{ type: "text", text: `Repository '${repoName}' deleted.` }],
    };
  },
};
