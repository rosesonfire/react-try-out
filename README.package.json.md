# Scripts
1. webpack-build-with-watcher - bundles static files, then starts a watcher to detect changes in the static files
1. webpack-remove-extra-js - remove extra js file that is created by the webpack plugin css-loader
1. babel-clean - clears the 'dist' folder
1. babel-build - transpiles ES6 target code of 'src' folder in 'dist' folder
1. babel-build-with-watcher - transpiles ES6 target code of 'src' folder in 'dist' folder, then starts a watcher to detect changes in 'src' folder and re-transpiles every time a change is detected
1. node-start-with-watcher - starts node monitor, then starts a wathcer to detect changes in 'dist' folder and re-starts node monitor every time a change is detected
1. start-watchers - runs node-start-with-watcher, babel-build-with-watcher and webpack-build-with-watcher
1. start-server - runs babel-clean, then babel-build, then start-watchers
# Dependencies
1. babel-cli - for transpiling es6 code
1. babel-loader - for transpiling jsx and es6 in webpack
1. babel-preset-env - for transpiling es6 code
1. babel-preset-es2015 - for transpiling es6 code
1. babel-preset-react - for transpiling jsx
1. bootstrap - front end styling framework
1. css-loader - css loader for webpack
1. express - node web framework for developing the backend
1. extract-text-webpack-plugin - plugin for webpack to create separate bundled css file
1. html-webpack-exclude-assets-plugin - plugin for webpack to exclude static files from being injected into html file
1. html-webpack-plugin - for injecting webpack bundles into html file
1. jquery - for bootstrap
1. node - node core
1. nodemon - for detecting changes in dist folder and auto-restarting server
1. on-build-webpack - to run scripts after every webpack build
1. popper.js - for bootstrap
1. react - react core
1. react-dom - for rendering react components into HTML
1. react-router-dom - for client side routing
1. webpack - bundle static files and react files