# react-try-out
## Trello
[https://trello.com/b/5ugkxmBt/react-test](https://trello.com/b/5ugkxmBt/react-test)
## To start server
`npm run start`
## Notes
- Server will automatically reload on changes
- Code inside [dist](dist) are auto-generated, **DO NOT** make any change any code in it.
- Edit code inside [src](src) for development purpose
## Files
1. [.babelrc](.babelrc) - the babel configuration file, for configuring es6 traspilation configuration
1. [package.json](package.json) - npm package configuration. Contains list of dependencies and scripts. A [README](README.package.json.md) is available for it.
1. [README.md](README.md) - this file, contains necessary documentations
1. [README.package.json.md](README.package.json.md) - Describes the dependencies and scripts in package.json
1. [src](src) - the folder that contains the development code. Edit files in this folder for development purpose
    1. [main](src/main) - the dev code
        1. [back-end](src/main/back-end) - contains the back end code
            1. [app](src/main/back-end/app) - contains the mvc application
                1. [conrollers](src/main/back-end/app/conrollers) - contains the mvc conrollers
                1. [models](src/main/back-end/app/models) - contains the mvc models
            1. [config](src/main/back-end/config) - contains different app configurations
            1. [index.js](src/main/back-end/index.js) - the code that is run by nodemon for starting the back end server
            1. [ioc](src/main/back-end/ioc) - contains inversion of control configurations
            1. [routes.js](src/main/back-end/routes.js) - HTTP routing code
        1. [front-end](src/main/front-end) - contains the front end code
            1. [app](src/main/front-end/app) - contains the react application
                1. [components](src/main/front-end/app/components] - contains the react components
                    1. [App](src/main/front-end/app/components/app.js) - react entry component
                    1. [pages](src/main/front-end/app/components/pages) - contains the client side routed pages
                1. [template.html](src/main/front-end/app/template.html) - landing template for react application
            1. [img](src/main/front-end/img) - folder for storing custom images
            1. [index.js](src/main/front-end/index.js) - the code that is run by webpack dev server for starting the front end server
            1. [interfaces](src/main/front-end/interfaces) - library code for front-end
                1. [Page](src/main/front-end/interfaces/page.js) - interface for the client side routed pages
            1. [ioc](src/main/back-end/ioc) - contains dependency factories (needs to be improved)
            1. [scripts](src/main/front-end/scripts) - folder for storing custom js
            1. [styles](src/main/front-end/styles) - folder for storing custom css
            1. [webpack.config.js](src/main/front-end/webpack.config.js) - contains the webpack configurations
    1. [test](src/test) - the test code
## Generated folders and files
1. [dist](dist) - the folder in which the es6 code is transpiled into and the servers runs on
1. [node_modules](node_modules) - the folder in which the node modules are installed
1. [package-lock.json](package-lock.json) - the compiled npm package configuration file