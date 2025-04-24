import { z } from "zod";
import { starRepo } from "../controllers/repoManipulation.js";

export default {
  name: "star-a-repo",
  schema: {
    owner: z.string().describe("Owner of the repository"),
    repoName: z.string().describe("Name of the repository"),
  },
  handler: async ({ owner, repoName }) => {
    await starRepo(owner, repoName);
    return {
      content: [{ type: "text", text: `Repository '${repoName}' starred.` }],
    };
  },
};
