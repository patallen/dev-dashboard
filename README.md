## Dev Dashboard

### Getting Running
1. `$ yarn install` to get set up.
1. `$ yarn start` to start the webserver & file watcher.
1. Navigate to http://localhost:3000 to view.

In order to use the github api, you need to have a `secrets.js` file in the top level of the `src` folder that contains the following:

```javascript
export const githubSecret = "<Your GitHub API Key>";
```

Follow this walkthough to generate a personal access token:

https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
