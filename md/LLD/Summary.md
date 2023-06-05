# Summary
 
| Directory           | Remarks  |
| ------------- | -----:|
| ```build```      | Created build files directory |
| ```config```      | Configuration settings for the environment, development server, and builds |
| ```config/jest/cssTransform.js```      | CSS Jest Transformer |
| ```config/jest/fileTransform.js```      | Files Jest Transformer |
| ```config/env.js```      | Application environment settings |
| ```config/paths.js```      | Configuration paths settings |
| ```config/webpack.config.dev.js```      | Development environment configurations |
| ```config/webpack.config.prod.js```      | Production environment configurations |
| ```webpackDevServer.config.js```      | Development server settings |
| ```node_modules```      | Node packages used in the application |
| ```scripts```     | Custom scripts for starting development server, testing and creating builds |
| ```scripts/build```     | Script to create a build of the app |
| ```scripts/start```     | Script to run the development server |
| ```scripts/start```     | Script to run app test |
| ```src```      | Main application directory |
| ```src/config```      | Custom app configuration settings and constants |
| ```src/config/settings.js```      | Application constants and defaults|
| ```src/includes```      | App assets including CSS, JS, images |
| ```src/includes/bootstrap```      | Bootstrap assets directory |
| ```src/includes/bootstrap/css```      | Bootstrap CSS directory |
| ```src/includes/bootstrap/fonts```      | Bootstrap Fonts directory |
| ```src/includes/bootstrap/js```      | Bootstrap JS directory |
| ```src/includes/custom```      | Custom CSS files directory |
| ```src/includes/img```      | Application images directory |
| ```src/utils```    |   Custom application utilities directory |
| ```src/utils/apiService.js```    |   Axios interceptors and wrapper |
| ```src/utils/clearAuth.js```    |   Removes authentication key to browser's local storage |
| ```src/utils/constants.js```    |   Constant variables exports |
| ```src/utils/setAuthorizationToken.js```    |  Sets axios authorization token |
| ```src/views```    |   Components and Containers directory |
| ```src/views/components```      | Common presentational components |
| ```src/views/containers```      | Container components per module |
| ```src/views/containers/Main```      | Main Container directory for the app |
| ```src/views/containers/Main/index.js```      | Parent Container for the app |
| ```src/views/containers/Main/PageRoutes.js```      | Main modules routes definition |
| ```src/views/containers/*/CustomComponents```      | Distinct components used by the module|
| ```src/views/containers/*/[FolderName]```      | Deep level nested containers of the module |
| ```src/views/containers/*/[FileName]```      | Containers of the module |
| ```src/views/containers/*/routes.js```      | Defines all subroutes of the module |
| ```src/views/containers/*/state```    |   Ducks module directory |
| ```src/views/containers/*/state/index.js```      | Compiler of module state exports |
| ```src/views/containers/*/state/actions.js```      | Action creators for the module |
| ```src/views/containers/*/state/apiRoutes.js```      | Routes for the module API calls |
| ```src/views/containers/*/state/index.js```      | Exports module reducer, operations, and selectors |
| ```src/views/containers/*/state/operations.js```     | Module functions and API calls |
| ```src/views/containers/*/state/reducers.js```      |  Defines the module states and state changes |
| ```src/views/containers/*/state/saga.js```    |   Saga watchers and side effects |
| ```src/views/containers/*/state/selectors.js```      | Takes a state and return a new information derived from the state |
| ```src/views/containers/*/state/types.js```    |   Action type constants |
| ```src/views/containers/Login/Login.js```      | Default login page |
| ```src/views/containers/Login/state```      | Ducks folder for authentication |
| ```src/views/containers/Errors```      | Errors layout directory|
| ```src/views/containers/Errors/*```      | Custom Error page |
| ```src/app.modules.js```      | Main store/route configuration file |
| ```src/index.js```      | Root component file to render ReactDOM |