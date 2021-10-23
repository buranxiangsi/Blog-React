import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.scss"
import { Octokit } from "octokit";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `brxs1-personal-access-token` });

console.log(octokit)
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


