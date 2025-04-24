import { listRepos } from "../controllers/repoManipulation.js";

export default {
  name: "list-repos",
  schema: {},
  handler: async () => {
    const repos = await listRepos();
    const formatted = repos
      .map((repo) => `- ${repo.name}: ${repo.html_url}`)
      .join("\n");
    return {
      content: [{ type: "text", text: `Repositories:\n${formatted}` }],
    };
  },
};
