# react-try-out
## To start server

`npm run start-server`

## Notes

- Server will automatically reload on changes
- Code inside [dist](dist) are auto-generated, **DO NOT** make any change any code in it.
- Edit code inside [src](src) for development purpose

## Files

1. [.gitignore](.gitignore) - the git ignore file
1. [.babelrc](.babelrc) - the babel configuration file, for configuring es6 generation configuration
1. [dist](dist) - the folder in which the es6 code is generated into and the server runs on
1. [package.json](package.json) - npm package configuration. Contains list of dependencies and scripts.
    1. Scripts
        1. [babel-clean](package.json#L8) - clears the [dist](dist) folder
        1. [babel-build](package.json#L9) - generates ES6 target code of [src](src) folder in [dist](dist) folder
        1. [babel-build-with-watcher](package.json#L10) - generates ES6 target code of [src](src) folder in [dist](dist) folder, then starts a watcher to detect changes in [src](src) folder and re-generate every time a change is detected
        1. [node-start-with-watcher](package.json#L11) - starts node monitor, then starts a wathcer to detect changes in [dist](dist) folder and re-starts node monitor every time a change is detected
        1. [run-server](package.json#L12) - runs [babel-clean](package.json#L8), then [babel-build](package.json#L9), then [node-start-with-watcher](package.json#L11) and [babel-build-with-watcher](package.json#L10)
    1. Dependencies
        1. [babel-cli](package.json#L17) - for generating es5 specific code
        1. [babel-preset-env](package.json#L18) - for generating es5 specific code
        1. [babel-preset-es2015](package.json#L19) - for generating es5 specific code from es6
        1. [babel-preset-react](package.json#L20) - for generating es5 specific code from jsx
        1. [express](package.json#L21) - node web framework for developing the backend
        1. [node](package.json#L22) - node core
        1. [nodemon](package.json#L23) - for detecting changes in [dist](dist) folder and auto-restarting server
        1. [react](package.json#L24) - react core
        1. [react-dom](package.json#L25) - react dom for rendering jsx
1. [README.md](README.md) - this file, contains necessary documentations
1. [src](src) - the folder that contains the development code. Edit files in this folder for development purpose
    1. [main](src/main) - the dev code
        1. [components](src/main/components) - the compnents used for the front end
            1. [Body](src/main/components/body.js) - Html body component
            1. [Container](src/main/components/container.js) - container component
            1. [Head](src/main/components/head.js) - Html head component
            1. [Html](src/main/components/html.js) - Html component
        1. [server](src/main/server) - the server code
            1. [index](src/main/server/index.js) - the code that is run by nodemon for starting the server
            1. [routes](src/main/server/routes.js) - HTTP routing code
        1. [views](src/main/views) - the view codes
            1. [index](src/main/views/index.js) - view of the landing page
    1. [test](src/test) - the test code