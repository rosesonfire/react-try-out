# react-try-out
## To start server

`npm run start-server`

## Notes

- Server will automatically reload on changes
- Code inside [dist](dist) are auto-generated, **DO NOT** make any change any code in it.

## Files

1. [package.json](package.json) - npm package configuration. Contains list of dependencies and scripts.
    1. scripts
        1. [babel-clean](package.json#L8) - clears the [dist](dist) folder
        1. [babel-build](package.json#L9) - generates ES6 target code of [src](src) folder in [dist](dist) folder
        1. [babel-build-with-watcher](package.json#L10) - generates ES6 target code of [src](src) folder in [dist](dist) folder, then starts a watcher to detect changes in [src](src) folder and re-generate every time a change is detected
        1. [node-start-with-watcher](package.json#L11) - starts node monitor, then starts a wathcer to detect changes in [dist](dist) folder and re-starts node monitor every time a change is detected
        1. [run-server](package.json#L12) - runs [babel-clean](package.json#L8), then [babel-build](package.json#L9), then [node-start-with-watcher](package.json#L11) and [babel-build-with-watcher](package.json#L10)
    1. Dependencies
        1. [babel-cli](package.json#L17) - for generating es6 specific code
        1. [babel-preset-env](package.json#L18) - for generating es6 specific code
        1. [babel-preset-es2015](package.json#L19) - for generating es6 specific code
        1. [babel-register](package.json#L20) - for generating es6 specific code. This can be used for development and debugging purposes.
        1. [express](package.json#L21) - node web framework for developing the backend
        1. [node](package.json#L22) - node core
        1. [nodemon](package.json#L23) - for detecting changes in [dist](dist) folder and auto-restarting server
1. [README.md](README.md) - this file, contains necessary documentations.
