import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.GITHUB_TOKEN);

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function createRepo(repoName, isPrivate = false) {
  try {
    const response = await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      private: isPrivate,
    });
    console.log("Repository created at:", response.data.html_url);
  } catch (error) {
    console.error("Error creating repository:", error);
  }
}

export async function listRepos() {
  try {
    const response = await octokit.rest.repos.listForAuthenticatedUser();
    console.log("Repositories:");
    let arr = [];
    response.data.forEach((repo) => {
      console.log(`- ${repo.name}: ${repo.html_url}`);
    });
    return response.data;
  } catch (error) {
    console.error("Error listing repositories:", error);
  }
}

export async function deleteRepo(owner, repoName) {
  try {
    await octokit.rest.repos.delete({
      owner,
      repo: repoName,
    });
    console.log(`Repository '${repoName}' deleted successfully.`);
  } catch (error) {
    console.error("Error deleting repository:", error);
  }
}
