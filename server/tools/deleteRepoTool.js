import { z } from "zod";
import { deleteRepo } from "../controllers/repoManipulation.js";

export default {
  name: "delete-a-repo",
  schema: {
    owner: z.string(),
    repoName: z.string(),
  },
  handler: async ({ owner, repoName }) => {
    await deleteRepo(owner, repoName);
    return {
      content: [{ type: "text", text: `Repository '${repoName}' deleted.` }],
    };
  },
};
