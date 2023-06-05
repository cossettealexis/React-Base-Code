import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { empOperations, empSelectors } from "./state";
import moment from "moment";

import FormTemplate from '../../components/FormTemplate';
import TableTemplate from '../../components/TableTemplate';
import { getListEmployee, addEmployee } from './state/operations';

class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeForm: null
        }
    }

    //componentDidMount lifecycle is called after the component has mounted
    componentDidMount() {
        let id = this.props.match.params.id; //this will get the id from the URL parameter
        //This is your local state. initialFormValue will hold your form's initial value
        //All local states of your smart components are defined here
        this.props.getEmployeeById(id)
            .then((response) => {
                this.setState({
                    employeeForm: {
                        EmployeeForm: {
                            id: response.id,
                            name: response.name,
                            position: response.position,
                            salary: response.salary,
                            birthdate: response.birthdate,
                            gender: response.gender,
                            regular: response.regular,
                            technologies: JSON.parse(response.technologies)
                        }
                    }
                }, () => { console.log(this.state) });


            });
    }

    //custom function to handle form submission
    //Pass values from formTemplate to handleSubmit and call method
    handleSubmit = (values) => {
        let newValue = values.EmployeeForm;
        newValue.technologies = JSON.stringify(newValue.technologies);
        newValue.regular = newValue.regular ? 1 : 0;
        //newValue.birthdate = new Date(newValue.birthdate.replace(/-/g,"/"));
        newValue.birthdate = moment(newValue.birthdate).format("YYYY-MM-DD");
        this.props.updateEmployee(newValue, this.state.employeeForm.EmployeeForm.id);
        this.props.history.push("/Employee");
        //let newValue = values.EmployeeForm.testvalue; //get testvalue data from form's TestForm model
        //this.props.updateApiValue(newValue);
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Edit Form</h1>
                    <FormTemplate
                        {...this.props}
                        validate={empSelectors.validateForm}  //Validation for form
                        handleSubmit={this.handleSubmit}        //Submit action handler
                        initialValues={this.state.employeeForm}
                        editMode={true} //add this to indicate edit mode and check initial values
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
const mapStateToProps = (state) => {
    return {
        reducerVariable: state.emp.reducerVariable, //Value from the module's reducer.js file
        formInputs: state.emp.employeeForm,
        radioInput: state.emp.radioInput,
        checkboxInput: state.emp.checkboxInput,
        //Form definition in the module's reducer.js file
    }
};

// mapDispatchToProps method is used to call action creators
// bindAction creators is used to bind the methods with store dispatch
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        //define methods here
        updateApiValue: empOperations.updateApiValue,
        getApiValue: empOperations.getApiValue,
        getListEmployee: empOperations.getListEmployee,
        addEmployee: empOperations.addEmployee,
        deleteEmployee: empOperations.deleteEmployee,
        getEmployeeById: empOperations.getEmployeeById,
        updateEmployee: empOperations.updateEmployee
    },
    dispatch
);

//connect method is used to connect the container to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);