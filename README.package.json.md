# Scripts
1. **clean** - clears the "dist" folder
1. **build** - transpiles ES6 code of "src" folder into "dist" folder
1. **clean-build** - runs **clean**, then **build**
1. **build-with-watch** - transpiles ES6 code of "src" folder into "dist" folder, then starts a watcher to detect changes in "src" folder and re-transpiles every time a change is detected
1. **start-back-end-server** - starts node monitor, then starts a watcher to detect changes in "dist/back-end" folder and re-starts node monitor every time a change is detected
1. **start-front-end-server** - starts webpack dev server, then starts a watcher to detect changes in "dist/front-end" folder and re-starts webpack dev server every time a change is detected
1. **start-servers-and-watchers** - runs **start-back-end-server**, **start-front-end-server** and **build-with-watch**
1. **start** - runs **clean-build**, then **start-servers-and-watchers**
# Dependencies
1. **babel-cli** - for transpiling es6 code
1. **babel-loader** - for transpiling jsx and es6 in webpack
1. **babel-preset-env** - for transpiling es6 code
1. **babel-preset-es2015** - for transpiling es6 code
1. **babel-preset-react** - for transpiling jsx
1. **colors** - for adding colors to console logs
1. **css-loader** - css loader for webpack
1. **electrolyte** - for managing inversion of control and dependency injection
1. **express** - node web framework for developing the backend
1. **extract-text-webpack-plugin** - plugin for webpack to create separate bundled css file
1. **html-webpack-exclude-assets-plugin** - plugin for webpack to exclude static files from being injected into html file
1. **html-webpack-plugin** - for injecting webpack bundles into html file
1. **mongodb** - for accessing mongoDB
1. **node** - node core
1. **node-sass** - for compile sass files
1. **nodemon** - for detecting changes in dist folder and auto-restarting server
1. **on-build-webpack** - to run scripts after every webpack build
1. **react** - react core
1. **react-addons-css-transition-group** - for styling infinite calendar
1. **react-dom** - for rendering react components into HTML
1. **react-infinite-calendar** - react component for calendar
1. **react-router-dom** - for client side routing
1. **sass-loader** - for bundling scss in webpack
1. **webpack** - bundle static files and react files
1. **webpack-dev-server** - for serving static files after bundling with webpack