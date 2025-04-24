import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";
dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getAuthenticatedUser() {
  try {
    const response = await octokit.rest.users.getAuthenticated();
    console.log("Authenticated user:", response.data.login);
    return response.data;
  } catch (error) {
    console.error("Error fetching authenticated user:", error);
  }
}

export async function listUserRepos() {
  try {
    const response = await octokit.rest.repos.listForAuthenticatedUser();
    console.log("User's repositories:");
    response.data.forEach((repo) => {
      console.log(`- ${repo.name}: ${repo.html_url}`);
    });
    return response.data;
  } catch (error) {
    console.error("Error listing user repositories:", error);
  }
}

export async function updateUserProfile(updates) {
  try {
    const response = await octokit.rest.users.updateAuthenticated({
      ...updates, // e.g. { name: "New Name", bio: "Updated bio", blog: "https://your-site.com" }
    });
    console.log("User profile updated successfully.");
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
}

export async function listFollowers() {
  try {
    const response =
      await octokit.rest.users.listFollowersForAuthenticatedUser();
    console.log("Followers:");
    response.data.forEach((user) => {
      console.log(`- ${user.login}`);
    });
    return response.data;
  } catch (error) {
    console.error("Error listing followers:", error);
  }
}

export async function getUserByUsername(username) {
  try {
    const response = await octokit.rest.users.getByUsername({ username });
    console.log(`User profile of ${username}:`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
}
