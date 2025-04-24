# 🛠️ GitHub-MCP Tooling Server

This project is an **MCP (Model Context Protocol) Server** that integrates with the **GitHub API** via the **Octokit** library, allowing Claude 3.7 Sonnet Model to call tools for GitHub repository and user management.

## 🔧 Features

- 📁 Create, delete, update GitHub repositories
- 🌟 Star, fork, and add topics to repos
- 👤 View and update user profiles
- 📜 List repositories, followers, etc.
- 🧠 Fully integrated with Model Context Protocol (MCP)

## 📦 Tech Stack

- Node.js
- Octokit (GitHub REST API)
- Model Context Protocol (MCP) SDK
- Zod (for schema validation)
- dotenv (for secrets)

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/github-mcp-server.git
cd github-mcp-server
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Create a .env File**

Add your GitHub Personal Access Token:

```bash

GITHUB_TOKEN=your_personal_access_token_here
```

📌 Make sure your token has appropriate scopes like repo, read:user, user, etc.

### 4. **Configure MCP in claude desktop**

- Open your claude desktop application in developer mode.
- Go to settings > MCP configuration.
- Choose the absolute path to the index.js script file.
- Restart claude and you are good to go.
- Sometimes claude does not recognise env files so as of now you might have to hardcode the env.

### 5. **Start Conversation**

Once Claude is connected to the MCP server, you can begin prompting it like:

- "Create a new private GitHub repo named awesome-ai-tools"
- "Star the repo openai/gpt-4"
- "Update my GitHub bio to say: Building cool tools with AI ⚙️"

Claude will invoke your server and respond based on the tool’s handler.

## 🙌 Contributing

Feel free to **fork this repository**, submit a **pull request**, or open an **issue** if you find a bug or have a feature request.

Whether it's fixing a typo, improving a feature, or adding a new tool — all contributions are welcome!

If you find this project helpful, give it a ⭐️ to show your support!

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
Made with ❤️ for the open-source community.
