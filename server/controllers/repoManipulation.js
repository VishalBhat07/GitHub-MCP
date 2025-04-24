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

export async function getRepoDetails(owner, repoName) {
  try {
    const response = await octokit.rest.repos.get({
      owner,
      repo: repoName,
    });
    console.log(`Details for '${repoName}':`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository details:", error);
  }
}

export async function updateRepo(owner, repoName, updates) {
  try {
    const response = await octokit.rest.repos.update({
      owner,
      repo: repoName,
      ...updates, // { description: "Updated", private: false, ... }
    });
    console.log(`Repository '${repoName}' updated successfully.`);
    return response.data;
  } catch (error) {
    console.error("Error updating repository:", error);
  }
}

export async function starRepo(owner, repoName) {
  try {
    await octokit.rest.activity.starRepoForAuthenticatedUser({
      owner,
      repo: repoName,
    });
    console.log(`Starred '${repoName}' successfully.`);
  } catch (error) {
    console.error("Error starring repository:", error);
  }
}

export async function forkRepo(owner, repoName) {
  try {
    const response = await octokit.rest.repos.createFork({
      owner,
      repo: repoName,
    });
    console.log(`Forked '${repoName}' successfully.`);
    return response.data;
  } catch (error) {
    console.error("Error forking repository:", error);
  }
}

export async function addTopics(owner, repoName, topics) {
  try {
    const response = await octokit.rest.repos.replaceAllTopics({
      owner,
      repo: repoName,
      names: topics, // e.g. ["javascript", "octokit"]
    });
    console.log(`Topics added to '${repoName}':`, topics);
    return response.data;
  } catch (error) {
    console.error("Error adding topics to repository:", error);
  }
}
