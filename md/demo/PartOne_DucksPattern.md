## Create and manage redux store with Ducks Pattern (Demo)
Refer [here](../LLD/FileStructure.md) for the folder structure
### Objective  
* Add a module that connects to json-server for API calls
* Retrieve and update data from server
* Implement Ducks pattern in handling redux state
##### I. Create dummy data
1.  For this demo, create a dummy data on `db.json` file:  
    ```
    {
        "test": [
            {
              "id": 1,
              "testvalue": "I'm the default data"
            }
        ],
    }
    ```  
    Click [here](../setup/json-server.md) to learn how to setup a json-server
    
##### II. Ducks Pattern
1. Create a folder under `src/views/containers`  named `Test`
2. Create a folder named `state` under `src/views/container/Test`
3. Create the following files under the newly created folder:  
    ```
    /Test
        /state
          /actions.js
          /apiRoutes.js
          /index.js
          /operations.js
          /reducers.js
          /saga.js (OPTIONAL)
          /selectors.js
          /types.js
    ```
4. Define the action types to be used under `/types.js` 
    **Naming convention:** export const ACTION_NAME = [moduleName] + "/ACTION_NAME"  

    ```javascript
    export const UPDATE_STATE = "Test/UPDATE_STATE";
    ```
    
5. Define the module's reducer under `/reducers.js`
    ```javascript
    //Import the action types
    import * as types from "./types";
    
    //Define the default state values
    const defaultState = {
        reducerVariable: "I'm the default value",
        testForm:{ // Form
            model: "TestForm",   //Define your model name
            form:[
                {
                    type: "text",
                    label: "Update State Value",
                    placeholder: "Update State Value",
                    minLength: 1,
                    maxLength: 125,
                    name: "testvalue", //name of state to be used on form
                    default: '' //default form state value
                },
            ]
        }
    }
    
    //Define how the states will change based on the dispatched action
    export default function reducer (state = defaultState, action) {
        switch (action.type) {
            case types.UPDATE_STATE:
                return {...state, reducerVariable: action.payload};
            default: return state;
        }
    };
    
    ```
    `testForm` state is an example of JSON to form implementation.  
    To know more about dynamic rendering of forms, check [JSON to Form](../setup/JSONtoForm.md).
    
6. Create your action creators under `/actions.js`
    ```javascript
    //Import the action types
    import * as types from "./types";
    
    export const updateState = (value) => ({
        type: types.UPDATE_STATE,    // dispatch definition
        payload: value               // data passed to action
    });
    
    ```

7. If you have functions that requires calling an API, define the API Routes under `/apiRoutes.js`
    Example:
    ```javascript
    export const TEST = "/test";
    export const TEST_ITEM = "/test/1";
    
    //Other example
    // export const API_PATH = "https://sampleApiPath.com/examples/2"
    ```
8. Create your module functions and API calls under `/operations.js`  
     ```javascript
    //Import the ApiService utility if you need to call an API
    import ApiService from "../../../../utils/apiService";
    import * as Path from './apiRoutes';
    
    //Import the action creators
    import * as Actions from "./actions";
    
    /* Example API calls to json server */
    //Retrieves value from json-server and dispatch an action
    export const getApiValue = () => (dispatch) => {
        ApiService.get(Path.TEST)
        .then((response)=>{
            // Save retrieved testvalue to store
            dispatch(Actions.updateState(response.data[0].testvalue));
        })
    }
    
    //Updates value in json-server and retrieves the updated value
    export const updateApiValue = (value) => (dispatch) => {
        ApiService.patch(Path.TEST_ITEM, {testvalue: value}) //`testvalue` is the key name in json-server data
        .then(()=>{
            //Retrieve updated item
            dispatch(getApiValue());
        })
    }
    
    ```
    
    Learn more about [ApiService](../setup/ApiService.md) utility.
9. Define form validation, state conversion, type checking, calculations and filtering under `/selectors.js`
    ```javascript
    //Checks if user input is a number
    function checkIfNumber(state){
        let errors = {};
        
        //Check value inside `TestForm` form model `testvalue` field
        if(isNaN(state.TestForm.testvalue)){
            errors[`TestForm.testvalue`] = "Input value is not a number."   //set error message for TestForm.testvalue 
        }
        
        return errors;
    }
    
    export{
        checkIfNumber
    };
    ```
10. After setting up the `reducers.js`, `operations.js`, and `selectors.js` files, export them under `/index.js`
    ```javascript
    import reducer from "./reducers";
    
    import * as testOperations from "./operations";
    import * as testSelectors from "./selectors";
    
    export {
        testOperations,
        testSelectors
    };
    
    export default {
        reducer
    };
    
    ```
11. Export the module reducer file under `./src/app.modules.js`
     ```javascript
    import Test from "./views/containers/Test/state";
    ... other codes
    
    //Module Reducers
        const rootReducer = combineReducers({
        auth: Login.reducer,
        test: Test.reducer // register reducer to store. `test` is the name of the Test store
    });
    ```
**``PLEASE TAKE NOTE``**: 
In case the reducer doesn't reload everytime you make changes on the `reducer.js` file, press `F12` and under the `Application > Clear Storage`, click `Clear site data` to refresh/remove the localStorage for your changes to reflect.

#### You're done with the module's state using Ducks Pattern! 
#### Time to create the module component. Click [here](./DemoComponent.md) to continue.