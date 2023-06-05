
import { isNullOrUndefined } from "util";
import moment from 'moment';

export const validateForm = (values) => {
    let errors = {};

    if (isNaN(values.EmployeeForm.id)) {
        errors[`EmployeeForm.id`] = "Input value is not a number."   //set error message for TestForm.testvalue 
    }

    //add validations

    return errors;


}


