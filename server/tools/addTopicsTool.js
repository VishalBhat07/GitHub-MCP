import { z } from "zod";
import { addTopics } from "../controllers/repoManipulation.js";

export default {
  name: "add-topics-to-repo",
  schema: {
    owner: z.string().describe("Owner of the repository"),
    repoName: z.string().describe("Name of the repository"),
    topics: z.array(z.string()).describe("Topics to add to the repository"),
  },
  handler: async ({ owner, repoName, topics }) => {
    const response = await addTopics(owner, repoName, topics);
    return {
      content: [
        {
          type: "text",
          text: `Topics added to '${repoName}': ${topics.join(", ")}`,
        },
      ],
    };
  },
};
