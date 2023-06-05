## JSON to Form (Dynamic rendering of forms and tables)
**``PLEASE TAKE NOTE``**: 
In case the reducer doesn't reload everytime you make changes on the `reducer.js` file, press `F12` and under the `Application > Clear Storage`, click `Clear site data` to refresh/remove the localStorage for your changes to reflect.
----------------------------------------------------------------------

In this codebase, forms and tables are rendered dynamically using template components.  
These presentational components can be found at:  

* Table Template: `src/views/components/TableTemplate.js`  
* Form Template: `src/views/components/FormTemplate.js`  


#### How does it work?
##### 1. Table Template
The `TableTemplate.js` component renders a table, table headers, table body, and row buttons with the use of passed props.  

***Required props:***  
* `tableHeader` - contains the header titles for each columns of the table  
* `tableColumns` - defines the names for the column where the table list data is to be rendered (`name` refers to state name)  
* `tableList` - contains the content of the table body  

***Optional props:***  
* `rowButtons` - render buttons on each row of the table  

***Usage:***
* Define the table props (list, tableHeader and tableColumns) definition in the module's `reducers.js` file.  
```javascript
--- reducers.js

import * as types from "./types";

const defaultState = {
    
    list: [
      {
        "id": "101",
        "app": "Jinjaguars",
        "company": "Jenga Inc.",
        "description": "Mobile application game"
      },
      {
        "id": "102",
        "app": "TigerMania",
        "company": "Jungle Corp.",
        "description": "Web application game"
      }
    ], //holds the data to be presented on the table
    
    table:{
    	// Table headers
        tableHeader:[
            "ID #",
            "App Name",
            "Company Name",
            "Description",
            ""
        ],
        
        //The array values should match the names or ["keys"] on the list array data.
        tableColumns:[
            "id",
            "app",
            "company",
            "description"
        ]
    },
}
......
```
* Include the reducer values in the `mapStateToProps` in the component where you want to render the table.  
*(Let's say the reducer was  exported as `nameOfReducer`)*
```javascript
...
    const mapStateToProps = (state) =>{
      return{
          tableHeader: state.nameOfReducer.table.tableHeader,
          tableColumns: state.nameOfReducer.table.tableColumns,
          tableList: state.nameOfReducer.list
      }
    };

...
    export default connect(mapStateToProps)(ComponentName);
...
```
* Import the Table Template component in the container component
```javascript
--- ComponentName.js

	import TableTemplate from '../../components/TableTemplate';
```

* Render the Table Template and pass the props to the component
```javascript
	render(){
      return(
        ...other codes
        
        <TableTemplate 
            {...this.props} //pass the props to the component
        />
        
        //Alternative
        <TableTemplate 
            tableHeader = this.props.[propName]
            tableColumns = this.props.[propName]
            tableList = this.props.[propName]
        />
        //End
        ...
      )
    }
```


* (Optional) To add buttons for each row, create a prop definition for `rowButtons` inside the `<TableTemplate/>` component  

	***Required array definition:***  
	* `variant` - react-bootstrap button's color style
	* `label` - text of the button
	* `onClick`  - action when button is clicked
	
```javsacript
	<TableTemplate 
        {...this.props}
        
        // Define rowButtons props
        rowButtons={[
            {variant: "danger", label: "Button 1", onClick: ()=>alert("Clicked Button 1")},
            {variant: "success", label: "Button 2", onClick: ()=>alert("Clicked Button 2")},
            {variant: "warning", label: "Button 3", onClick: ()=>alert("Clicked Button 3")}
        ]}
        
    />
```  
Refer [here](https://react-bootstrap.github.io/components/buttons/) for other button styles.  

##### Refresh the page. You're table is ready!  


##### 2. Form Template  
The `FormTemplate.js` component renders a form based on the passed props.  
Currently the template's layout only handles single column form.  

***Required Props***   
(Basic Form)
* `formInputs` - definition of the reducer form input values  
* `formButtons` - definition of buttons to be rendered

(Tabbed Form)
* `tabbed` - defines the form as multi-tabbed form
* `tabbedInputs` - definition of the reducer form tabbed input values  

***Optional Props***   
* `selectInput` - defines the objects for select inputs
* `radioInput` - defines the objects for radio inputs
* `checkboxInput` - defines the objects for muilti-checkbox inputs

*Available fields:*  
* Text (Plain, Email, Password)
* Textarea
* Number
* Select
* Radio Button
* Checkbox
* Multi-Checkbox 
* Date Picker
* File Upload
 
*Available Field Types:*
*(Defined in reducers form)*
* "text"
* "password"
* "number"
* "email"
* "select"
* "datepicker"
* "multi-checkbox" - `name` of the field should be the same with the checkboxInput props items' name.
* "checkbox"
* "radio"
* "file"
* "textarea" - should be defined as "`component: "textarea`" not "`type: "textarea`"

***Usage***  
`NOTE`: The `model` props for each form is used for validation and form state definition
##### a) Basic Form
* Define the form inputs in the module's `reducer.js` file.  

```javascript
...

const defaultState = {
	inputForm:{
	    model: "ModelName", // define model name for the form
	    form: [ // define the form fields
            { //TEXT
                type: "text",
                label: "App Name",
                placeholder: "Application Name",
                maxLength: 125,
                name: "app", // defines the field / state name
                default: "Default text" //defines the default field value 
            },
            { //TEXTAREA
                component: "textarea", //component is used for textarea instead of type
                label: "Description",
                placeholder: "Description",
                maxLength: 250,
                name: "description"
            },
            { //SELECT
                type: "select",  
                label: "Select Input",
                name: "inputSelect", // name should match with the select objects name
                default: '',
                placeholder: "Select Item . . ."
            },
            { //DATEPICKER
                type: "datepicker",
                label: "Select Date",
                name: "dateInput"
            },
            { //SINGLE CHECKBOX
                type: "checkbox",
                label: "Single Checkbox",
                name: "singleCheckbox",
                default: false //define boolean/value default
            },
            { //MULTI-CHECKBOX
                type: "multi-checkbox",
                label: "Multiple Checkbox",
                name: "multiCheckbox", // name should match with the checkbox objects name
                default: []  // default is blank array
            },
            { //RADIO BUTTON GROUP
                type: "radio",
                label: "Radio Button Group",
                name: "radioInput", // name should match with the radio objects name
                default: ''
            },
            { //FILE
                type: "file",
                label: "File Upload",
                name: "uploadFile",
                default: null
            }
        ]
    },
}
```
`NOTE`: You can declare multiple forms in your reducer. Make sure that they are grouped according to what form it belong.  

* Include the reducer form values in the mapStateToProps in the component where you want to render the form.  
*(Let's say the reducer was exported as `nameOfReducer`)*
```javascript
...
    const mapStateToProps = (state) =>{
      return{
          formInputs: state.nameOfReducer.inputForm
      }
    };

...
    export default connect(mapStateToProps)(ComponentName);
...
```

* Import the Form Template component in the container component
```javascript
--- ComponentName.js

	import FormTemplate from '../../components/FormTemplate';
```  

* Define the `handleSubmit` method before the render() method
NOTE: You can define other function name but it should be passed in the FormTemplate under `handleSubmit` props
```javascript
    handleSubmit = (values) => {
        //insert your submit method
        //`values` contains the form key[name] values
        //API calls are usually placed in this method
        console.log(values)
    }
```

* Render the Form Template and pass the `props` and `handleSubmit` to the component
```javascript
	render(){
      return(
        ...other codes
        
        <FormTemplate 
            {...this.props} //pass the props to the component
            handleSubmit={this.handleSubmit} //pass handleSubmit as props
        />
        
        //Alternative
        <FormTemplate 
            formInputs = {this.props.formInputs} //pass the forminput to the component
            handleSubmit={this.handleSubmit} //pass handleSubmit as props
        />
        ...
      )
    }
```

* Define the form's buttons and pass it as `formButtons` props  
***Required array definition:***  
	* `variant` - react-bootstrap button's color style
	* `label` - text of the button
	* `onClick`  - action when button is clicked  
	* `submit` - if set to `true`, this will trigger the handleSubmit() method
	
	***Optional array definition:***  
	* `className` - custom style for the button
	
```javascript
	render(){
      return(
        ...other codes
        
        <FormTemplate 
            {...this.props}
            handleSubmit={this.handleSubmit}
            formButtons={[
                {variant: "success", label: "Save", className:"pull-right", submit: true}, //set as submit trigger
                {variant: "danger", label: "Cancel", className:"pull-right", onClick: ()=>alert("Clicked Cancel") }
            ]}
            
            //"pull-right" will place the button to the right-most area of the form
        />
        
        ...
      )
    }
```
##### b) Tabbed / Nested Form
* This form defines multiple models under one parent form.
* Define the form inputs in the module's `reducer.js` file.  

```javascript
...
const defaultState = {
	multiFormInputs: [
        {
            label: "Tab One",   // label of the Tab
            model: "ModelOne"   // model name of the subform 1
            form: [             //"form" props contains the form definition found inside the tab   
                {
                    type: "text",
                    label: "Tab One Input 1",
                    name: "tabOneInput1",
                    default: ''
                },
                {
                    type: "text",
                    label: "Tab One Input 2",
                    name: "tabOneInput2",
                    default: ''
                }
            ]
        },
        {
            label: "Tab Two",
            model: "ModelTwo"  // model name of the subform 2
            form: [            // form fields definition
                {
                    type: "text",
                    label: "Tab Two Input 1",
                    name: "tabTwoInput1",
                    default: ''
                },
                {
                    type: "text",
                    label: "Tab Two Input 2",
                    name: "tabTwoInput2",
                    default: ''
                }
            ]
        },
        {
            label: "Tab Three",
            model: "ModelThree" // model name of the subform 2
            form: [             // form fields definition
                {
                    type: "select",
                    label: "Select Input",
                    name: "tabThreeInput1",
                    default: '',
                    placeholder: "Select Item . . ."
                },
                {
                    type: "datepicker",
                    label: "Select Date",
                    name: "tabThreeInput2",
                }
            ]
        }
    ],
}
```
* Include the reducer form values in the mapStateToProps in the component where you want to render the form. 

NOTE: `multiFormInputs` props is used for nested / tabbed forms instead of `formInputs`.

*(Let's say the reducer was exported as nameOfReducer)*
```javascript
...
    const mapStateToProps = (state) =>{
      return{
          multiFormInputs: state.nameOfReducer.multiFormInputs
      }
    };

...
    export default connect(mapStateToProps)(ComponentName);
...
```

* Import the Form Template component in the container component
```javascript
--- ComponentName.js

	import FormTemplate from '../../components/FormTemplate';
```  

* Define the `handleSubmit` method before the render() method
```javascript
    handleSubmit = (values) => {
        //insert your submit method
        //`values` contains the form key[name] values
        //API calls are usually done here
        console.log(values)
    }
```

* Render the Form Template and pass the `props` and `handleSubmit` to the component
```javascript
	render(){
      return(
        ...other codes
        
        <FormTemplate // (tabbed)
            tabbed={true} //set "tabbed" props to TRUE to create tabbed forms
            {...this.props} //pass the props to the component
            handleSubmit={this.handleSubmit} //pass handleInputChange as props
        />
        
        //Alternative
        <FormTemplate // (nested)
            //tabbed={true}
            nested={true} //set "nested" props to TRUE to create top-down nested forms
            multiFormInputs = {this.props.multiFormInputs} //pass the tabbedInputs to the component
            handleSubmit={this.handleSubmit} //pass handleInputChange as props
        />
        ...
      )
    }
```

* Define the form's buttons and pass it as `formButtons` props  
***Required array definition:***  
	* `variant` - react-bootstrap button's color style
	* `label` - text of the button
	* `onClick`  - action when button is clicked  
	* `submit` - if set to `true`, this will trigger the handleSubmit() method
	
	***Optional array definition:***  
	* `className` - custom style for the button
	
```javascript
	render(){
      return(
        ...other codes
        
        <FormTemplate 
            {...this.props}
            handleSubmit={this.handleSubmit}
            formButtons={[
                {variant: "success", label: "Save", className:"pull-right", submit: true}, //set as submit trigger
                {variant: "danger", label: "Cancel", className:"pull-right", onClick: ()=>alert("Clicked Cancel") }
            ]}
            
            //"pull-right" will place the button to the right-most area of the form
        />
        
        ...
      )
    }
```

##### Refresh the page. You're form is ready!  