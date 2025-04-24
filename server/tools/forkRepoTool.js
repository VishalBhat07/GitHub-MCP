import { z } from "zod";
import { forkRepo } from "../controllers/repoManipulation.js";

export default {
  name: "fork-a-repo",
  schema: {
    owner: z.string().describe("Owner of the repository"),
    repoName: z.string().describe("Name of the repository"),
  },
  handler: async ({ owner, repoName }) => {
    const response = await forkRepo(owner, repoName);
    return {
      content: [
        {
          type: "text",
          text: `Repository forked: ${response.html_url}`,
        },
      ],
    };
  },
};
