import React, {Component} from 'react';
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { empOperations, empSelectors } from "./state";

import FormTemplate from '../../components/FormTemplate';
import TableTemplate from '../../components/TableTemplate';
import  moment from 'moment';

class Employee extends Component {
    //componentDidMount lifecycle is called after the component has mounted
    componentDidMount(){
        //calls the getApiValue() method defined in mapDispatchToProps
        this.props.getListEmployee()
    }

    //custom function to handle form submission
    //Pass values from formTemplate to handleSubmit and call method
    handleSubmit = (values) => {
        let newValue = values.EmployeeForm;
        newValue.technologies = JSON.stringify(newValue.technologies);
        newValue.regular = newValue.regular ? 1 : 0;
        newValue.birthdate = moment(newValue.birthdate).format("YYYY-MM-DD")
        this.props.addEmployee(newValue);
        //let newValue = values.EmployeeForm.testvalue; //get testvalue data from form's TestForm model
        //this.props.updateApiValue(newValue);
    }
    
    delete = (values) => {
        this.props.deleteEmployee(values.id);
    }

    edit = (data) => {
        this.props.history.push("/EditForm" + "/" + data.id)
    }

    render(){
        return(
            <Container>

                    <Card>
                        <TableTemplate 
                            {...this.props} //pass the props to the component
                            rowButtons={[
                                {variant: "info", label: "Edit", onClick: this.edit},
                                {variant: "danger", label: "Delete", onClick: this.delete},
                            ]}
                        />
                        <h1>{this.props.reducerVariable}</h1>
                        <FormTemplate
                            {...this.props}
                            validate={empSelectors.validateForm}  //Validation for form
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

// mapStateToProps method is used to access redux store values
const mapStateToProps = (state) =>{
    return{
        reducerVariable: state.emp.reducerVariable, //Value from the module's reducer.js file
        formInputs: state.emp.employeeForm,
        radioInput:state.emp.radioInput,
        checkboxInput:state.emp.checkboxInput,
        tableHeader: state.emp.table.tableHeader,
        tableColumns: state.emp.table.tableColumns,
        tableList: state.emp.list,
         //Form definition in the module's reducer.js file
    }    
};

// mapDispatchToProps method is used to call action creators
// bindAction creators is used to bind the methods with store dispatch
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        //define methods here
        updateApiValue: empOperations.updateApiValue,
        getListEmployee: empOperations.getListEmployee,
        addEmployee: empOperations.addEmployee,
        deleteEmployee: empOperations.deleteEmployee
    }, 
        dispatch 
    );

//connect method is used to connect the container to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Employee);