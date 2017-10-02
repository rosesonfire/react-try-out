# react-try-out
## Trello
[https://trello.com/b/5ugkxmBt/react-test](https://trello.com/b/5ugkxmBt/react-test)
## To start server
`npm run start-server`
## Notes
- Server will automatically reload on changes
- Code inside [dist](dist) are auto-generated, **DO NOT** make any change any code in it.
- Edit code inside [src](src) for development purpose
## Files
1. [.gitignore](.gitignore) - the git ignore file
1. [.babelrc](.babelrc) - the babel configuration file, for configuring es6 traspilation configuration
1. [customization](customization) - folder for storing custom css, js and images
    1. [img](customization/img) - folder for storing custom img
    1. [index.html](customization/index.html) - landing template for react application
    1. [style](customization/style) - folder for storing custom css
    1. [scripts](customization/scripts) - folder for storing custom js
1. [package.json](package.json) - npm package configuration. Contains list of dependencies and scripts. A [README](README.package.json.md) is available for it.
1. [public](public) - folder for storing static public files
    1. [index.html](public/index.html) - landing page
1. [README.md](README.md) - this file, contains necessary documentations
1. [src](src) - the folder that contains the development code. Edit files in this folder for development purpose
    1. [main](src/main) - the dev code
        1. [back-end](src/main/back-end) - contains the back end code
            1. [routes](src/main/back-end/routes.js) - HTTP routing code
        1. [front-end](src/main/back-end) - contains the front end code
            1. [App](src/main/front-end/app.js) - react entry point
            1. [interfaces](src/main/front-end/interfaces) - library code for front-end
                1. [Page](src/main/front-end/interfaces/page.js) - interface for the client side routed pages
            1. [pages](src/main/front-end/pages) - contains the client side routed pages
        1. [server](src/main/server) - the server code
            1. [index](src/main/server/index.js) - the code that is run by nodemon for starting the server
    1. [test](src/test) - the test code
1. [webpack.config.js](webpack.config.js) - contains the webpack configurations
## Generated folders and files
1. [dist](dist) - the folder in which the es6 code is transpiled into and the server runs on
1. [node_modules](node_modules) - the folder in which the node modules are installed
1. [package-lock.json](package-lock.json) - the compiled npm package configuration file
1. [public](public) - folder for storing static public files
    1. [app.min.js](public/styles.min.js) - bundled customized css
    1. [index.html](public/index.html) - landing page with injected webpack module links
    1. [scripts.min.js](public/scripts.min.js) - bundled customized javascript
    1. [styles.min.js](public/styles.min.js) - bundled customized css