# react-try-out
## Trello
[https://trello.com/b/5ugkxmBt/react-test](https://trello.com/b/5ugkxmBt/react-test)
## To start application
`npm run start`
## Notes
- Servers will automatically reload on changes.
- Browsers will automatically reload on changes in [frontEnd](src/main/frontEnd) folder.
- Code inside [dist](dist) are auto-generated, **DO NOT** make any change in it.
- Edit code inside [src](src) for development purpose.
- Database used is **mongoDB**.
## Mode
- **Development mode** - set `NODE_ENV` to `development`.
- **Production mode** - set `NODE_ENV` to `production`.
## Configuration files
All the necessary configurations like back end server, front end server, database, etc are stored in the [configuration folder](src/main/config). A [README](config.README.md) is available for it.
## Database migraiton
- To create a new migration run `npm run create-migration <name>`. This will create a new migration in [src/main/db/migrations](src/main/db/migrations) with the given _name_.
- To migrate up run `npm run migrate`. This will migrate up all the migrations into the database.
- To migrate down run `npm run migrate down <name>`. This will migrate down the migration with the given name from the database.
- To list migrations run `npm run list-migrations`. This will list all the migrations with their statuses.
- To prun migrations run `npm run prune-migrations`. This will remove all the deleted migrations from the database.
## Files
1. [.babelrc](.babelrc) - the babel configuration file, for configuring es6 traspilation configuration.
1. [config.README.md](config.README.md) - describes the configurations.
1. [package.json](package.json) - npm package configuration. Contains list of dependencies and scripts. A [README](package.json.README.md) is available for it.
1. [package.json.README.md](package.json.README.md) - describes the dependencies and scripts in package.json.
1. [README.md](README.md) - this file, contains necessary documentations.
1. [src](src) - the folder that contains the development code. Edit files in this folder for development purpose.
    1. [main](src/main) - the dev code.
        1. [backEnd](src/main/backEnd) - contains the back end code.
            1. [app](src/main/backEnd/app) - contains the mvc application.
                1. [controllers](src/main/backEnd/app/controllers) - contains the mvc controllers.
                1. [services](src/main/backEnd/app/services) - contains the business logic.
            1. [config](src/main/backEnd/config) - configurations of the back-end app like routers, middlewares, etc.
                1. [Middlewares](src/main/backEnd/config/middlewares.js) - contains the middleware configurations.
                1. [Router](src/main/backEnd/config/router.js) - HTTP router.
            1. [index.js](src/main/backEnd/index.js) - the code that is run by nodemon for starting the back end server.
            1. [ioc](src/main/backEnd/ioc) - contains inversion of control configurations.
            1. [lib](src/main/backEnd/lib) - contains customized libraries.
        1. [config](src/main/config) - contains different configurations.
            1. [dev.conf.js](src/main/config/dev.conf.js) - configuration file for **devlopment mode**.
            1. [index.js](src/main/config/index.js) - configuration resolved based on **mode**.
            1. [prod.conf.js](src/main/config/prod.conf.js) - configuration file **production mode**.
        1. [dataAccess](src/main/dataAccess) - contains the database schemas.
        1. [db](src/main/db) - contains the database migration configurations.
            1. [migrations](src/main/db/migrations) - contains the database migration files.
            1. [migrate.conf.js](src/main/db/migrate.conf.js) - contains the database migration configurations.
            1. [MigrationHelper](src/main/db/migrationHelper.js) - contains helper functionality for migration.
        1. [frontEnd](src/main/frontEnd) - contains the front end code.
            1. [app](src/main/frontEnd/app) - contains the react application.
                1. [components](src/main/frontEnd/app/components) - contains the react components.
                    1. [App](src/main/frontEnd/app/components/app.js) - react entry component.
                    1. [pages](src/main/frontEnd/app/components/pages) - contains the client side routed pages.
                1. [template.html](src/main/frontEnd/app/template.html) - landing template for react application.
            1. [img](src/main/frontEnd/img) - folder for storing custom images.
            1. [index.js](src/main/frontEnd/index.js) - the code that is run by webpack dev server for starting the front end server.
            1. [registry](src/main/frontEnd/registry) - contain registered stuff (needs to be improved).
            1. [scripts](src/main/frontEnd/scripts) - folder for storing custom js.
            1. [styles](src/main/frontEnd/styles) - folder for storing custom css.
            1. [webpack.config.js](src/main/frontEnd/webpack.config.js) - contains the webpack configurations.
    1. [test](src/test) - the test code.
## Generated folders and files
1. [dist](dist) - the folder in which the es6 code is transpiled into and the servers runs on.
1. [node_modules](node_modules) - the folder in which the node modules are installed.
1. [package-lock.json](package-lock.json) - the compiled npm package configuration file.