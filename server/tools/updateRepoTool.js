import { z } from "zod";
import { updateRepo } from "../controllers/repoManipulation.js";

export default {
  name: "update-repo",
  schema: {
    owner: z.string().describe("Owner of the repository"),
    repoName: z.string().describe("Name of the repository"),
    updates: z
      .record(z.any())
      .describe(
        "Update fields, e.g., { description: 'Updated', private: true }"
      ),
  },
  handler: async ({ owner, repoName, updates }) => {
    const result = await updateRepo(owner, repoName, updates);
    return {
      content: [
        {
          type: "text",
          text: `Repository '${repoName}' updated: ${JSON.stringify(
            result,
            null,
            2
          )}`,
        },
      ],
    };
  },
};
