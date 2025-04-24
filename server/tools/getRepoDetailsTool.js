import { z } from "zod";
import { getRepoDetails } from "../controllers/repoManipulation.js";

export default {
  name: "get-repo-details",
  schema: {
    owner: z.string().describe("Owner of the repo"),
    repoName: z.string().describe("The name of the GitHub repository"),
  },
  handler: async ({ owner, repoName }) => {
    const details = await getRepoDetails(owner, repoName);
    return {
      content: [
        {
          type: "text",
          text: `Repository Details:\n${JSON.stringify(details, null, 2)}`,
        },
      ],
    };
  },
};
