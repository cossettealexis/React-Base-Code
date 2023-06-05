## Creating your module's container component (Demo)
Refer [here](../LLD/FileStructure.md) for the folder structure
### Objective  
* Create a container for the demo module
* Implement JSON to Form rendering
* Call state actions on button clicks

##### I. Container Component
1. Create `Test.js` file under `src/views/containers/Test` folder that will serve as your module's parent container 

     ```javascript
    import React, {Component} from 'react';
    import { Container, Card } from 'react-bootstrap';
    class Test extends Component {
        render(){
            return(
                <Container>
                    <Card>
                        <h1>Test Page</h1>
                    </Card>
                </Container>
            );
        }
    }
    
    export default Test;
    
    ```
2. Create `routes.js` file under `src/views/containers/Test`.
`routes.js` file will hold all your module's routes:
    ```javascript
    import Test from "./Test";
    
    const TestRoutes = [
        {
            label: "Test",
            path: "/Test",
            component: Test,
            exact: true,
            showNav: true //if true, displays the label in the mainHeader.js component
        }
    ]
    
    export default TestRoutes;
    ```
3. Import the module routes file under the `./state/index.js` file and export it as default.
   
    ```javascript
    import reducer from "./reducers";
    import { routes } from "../routes"; //IMPORT ROUTE FILE
    import * as testOperations from "./operations";
    import * as testSelectors from "./selectors";
    
    export {
        testOperations,
        testSelectors
    };
    
    export default {
        reducer,
        routes   // EXPORT ROUTE FILE
    };

    ```

4. Add the route under `./src/app.modules.js` file
    ```javascript
    //Module Routes
    export const rootRoutes = [
        ...Login.routes,
        ...Test.routes,
        {component: Error404}
    ]

    ```
5. Connect the component to redux to have access to the `test` reducer
    ```javascript
    import React, {Component} from 'react';
    import { Container, Card } from 'react-bootstrap';
    import { connect } from 'react-redux'; // Added code
    
    class Test extends Component {
        render(){
            return(
                <Container>
                    <Card>
                        <h1>Test Page</h1>
                    </Card>
                </Container>
            );
        }
    }
    
    // mapStateToProps method is used to access redux store values
    const mapStateToProps = (state) =>{
        return{
            reducerVariable: state.test.reducerVariable. //Value from the module's reducer.js file
            formInputs: state.testForm,                  //Form definition in the module's reducer.js file
        }    
    };
    
    //connect method is used to connect the container to the redux store
    export default connect(mapStateToProps)(Test);
    
    ```
    
6. import the `selectors` and `operations` of the module, `bindActionCreators` of redux and define `operations` methods under mapDispatchToProps  
    ```javascript
    import React, {Component} from 'react';
    import { Container, Card } from 'react-bootstrap';
    import { connect } from 'react-redux';
    import { testOperations, testSelectors } from './state';
    import { bindActionCreators } from 'redux'  //required for binding action creators
    
    class Test extends Component {
        render(){
            return(
                <Container>
                    <Card>
                        <h1>Test Page</h1>
                    </Card>
                </Container>
            );
        }
    }
    
    const mapStateToProps = (state) =>{
        return{
            reducerVariable: state.test.reducerVariable,
            formInputs: state.test.testForm,
        }    
    };
    
    // mapDispatchToProps method is used to call action creators
    // bindAction creators is used to bind the methods with store dispatch
    const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        //define methods here
        updateApiValue: testOperations.updateApiValue,
        getApiValue: testOperations.getApiValue
    }, 
        dispatch 
    );
    export default connect(mapStateToProps, mapDispatchToProps)(Test);
    ```

7. Define functions inside the module before the `render()` method
    ```javascript
    
    //componentDidMount lifecycle is called after the component has mounted
    componentDidMount(){
        //calls the getApiValue() method defined in mapDispatchToProps
        this.props.getApiValue();
    }
    
    //custom function to handle form submission
    //Pass values from formTemplate to handleSubmit and call method
     handleSubmit = (values) => {
        let newValue = values.TestForm.testvalue; //get testvalue data from form's TestForm model
        this.props.updateApiValue(newValue);
    }

    ```

8. Render the Form as defined in the module's reducer file,
    ```javascript
    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import { Container, Card } from 'react-bootstrap';
    import { testOperations, testSelectors } from './state';
    import FormTemplate from '../../components/FormTemplate'; //insert this code
    import { bindActionCreators } from 'redux' 
    
    class Test extends Component {
    
        componentDidMount() {
            this.props.getApiValue();
        }
    
        //Pass values from form to handleSubmit and call method
        handleSubmit = (values) => {
            let newValue = values.TestForm.testvalue; //get testvalue data from form's TestForm model
            this.props.updateApiValue(newValue);
        }
    
        render() {
            return (
                <Container>
                    <Card>
                        <!--Display redux store value of 'test.reducerVariable'-->
                        <h1>{this.props.reducerVariable}</h1>
    
                        <FormTemplate
                            {...this.props}
                            validate={testSelectors.checkIfNumber}  //Validation for form
                            handleSubmit={this.handleSubmit}        //Submit action handler
                            formButtons={[
                                { variant: "success", label: "Save", submit: true }
                                // buttons with [submit: true] will trigger the handleSubmit as defined in FormTemplate.js
                            ]}
                        />
                    </Card>
                </Container>
            );
        }
    }
    
    const mapStateToProps = (state) => {
        return {
            reducerVariable: state.test.reducerVariable,
            formInputs: state.test.testForm,
        }
    };
    
    const mapDispatchToProps = (dispatch) => bindActionCreators(
        {
            //define methods here
            updateApiValue: testOperations.updateApiValue,
            getApiValue: testOperations.getApiValue
        }, 
        dispatch 
    );
    
    export default connect(mapStateToProps, mapDispatchToProps)(Test);
    ```

### Save your changes and run the application
### You're done!