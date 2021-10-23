import { Octokit, App } from "octokit";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `brxs1-personal-access-token` });

console.log(octokit)