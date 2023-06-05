## Setting the application's Component Routes
##### Application routes are compiled under `src/app.modules.js` file.
Refer [here](../LLD/FileStructure.md) for the folder structure

### 1) Basic Single Route
Let's assume that you have created your module's container component under `src/views/containers` folder.
File name: `DemoComponent.js`

Define the route definition `src/app.modules.js` file `export const rootRoutes = []`
Example: 
```
import DemoComponent from './views/containers/DemoComponent'; 
....
export const rootRoutes = [
    ...other path definition
    {
        label: "Demo", 
        path: "/demo", 
        component: DemoComponent,
        showNav: true //set to true to display in main header
    }
]
```
    
### 2) Module Routes
Let's assume that you already have created a Module under `./views/containers`
```
File Structure:
 /views
    /containers
        /ModuleName
             /state
                  /index.js
                  /.. other ducks folders
            ModuleParent.js //Main module page
            ModuleChild1.js //Other module page
            ModuleChild2.js //Other module page
```
* Create a `routes.js` file under `./views/containers/ModuleName`
* Define the module routes:
    ```
    import ModuleParent from "./ModuleParent";
    import ModuleChild1 from "./ModuleChild1";
    import ModuleChild2 from "./ModuleChild2";
    
    export const routes = [
        {
            label: "Module Nav", //define label to be displayed
            path: "/module",
            component: ModuleParent,
            exact: true,
            showNav: true //if true, displays the label in the mainHeader.js component
        },
        {
            label: "Child 1",
            path: "/moduleChild1",
            component: ModuleChild1,
            exact: true
        },
        {
            label: "Child 2",
            path: "/moduleChild2",
            component: ModuleChild2,
            exact: true
        },
    ]
    ```
* Import the routes under `./state/index.js`
    ```
    import reducer from "./reducers";
    import { routes } from "../routes";

    export default {
        reducer,
        routes
    };
    ```
* Import the default export of the `index.js` to `app.modules.js` file.
    ```
    import ModuleName from './views/containers/ModuleName/state';
    ... other code
    //Module Reducers
    
    const rootReducer = combineReducers({
        auth: Login.reducer,
        moduleName: ModuleName.reducer // store data
    });
    
    //Module Routes
    export const rootRoutes = [
        ...Login.routes,
        ...ModuleName.routes // register module routes
        {component: Error404}
    ]
    ```
#### You can now access your page using defined route `path` you've set up.
#### Check this [link](https://reacttraining.com/react-router/web/guides/quick-start) to learn more about React Router DOM
