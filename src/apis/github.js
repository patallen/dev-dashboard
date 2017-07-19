import axios from "axios";
import { githubSecret } from "../secrets";

const githubUrl = "https://api.github.com/graphql";

const axiosGithub = axios.create({
  headers: {
    Authorization: `Bearer ${githubSecret}`,
    "Content-Type": "application/graphql"
  },
  baseURL: githubUrl,
  timeout: 5000
});
export const queryGithub = query => {
  return axiosGithub.post("", query);
};
export const orgQuery = (orgName, callback) => {
  let query = `{
    organization(login: "${orgName}") {
      id
      name
      url
      login
      avatarUrl
    }
  }`;
  return { query };
};

export const membersQuery = orgName => {
  let query = `{
    organization(login: "${orgName}") {
      members(first: 20) {
        nodes {
          name
          avatarUrl
          login
          email
          url
        }
      }
    }
  }`;
  return { query };
};
