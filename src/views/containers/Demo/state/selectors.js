import { isNullOrUndefined } from "util";
import moment from 'moment';

//'Basic' model validation
const validateForm = (values) => {
    let errors = {};

    if (!values.Basic.inputTwo) {
        errors[`Basic.inputTwo`] = "* This field should not be empty."
    }
    

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Basic.inputEmail)) {
        errors[`Basic.inputEmail`]= '* Invalid email address';
    }

    if ('' === values.Basic.inputSelect) {
        errors[`Basic.inputSelect`] = "* Please select one."
    }
    
    if (0 >= values.Basic.multiCheckbox.length) {
        errors[`Basic.multiCheckbox`] = "* Please check at least one."
    }

    if (0 >= values.Basic.multiInlineCheckbox.length) {
        errors[`Basic.multiInlineCheckbox`] = "* Please check at least one."
    }

    if (!values.Basic.singleCheckbox) {
        errors[`Basic.singleCheckbox`] = "* This field should be checked."
    }

    if (isNullOrUndefined(values.Basic.radioInput) || '' === values.Basic.radioInput) {
        errors[`Basic.radioInput`] = "* Please select one."
    }

    if (isNullOrUndefined(values.Basic.radioInlineInput) || '' === values.Basic.radioInlineInput) {
        errors[`Basic.radioInlineInput`] = "* Please select one."
    }

    if (!moment(values.Basic.inputDate).isValid()) {
        errors[`Basic.inputDate`] = "* Please enter a valid date."
    }

    if (values.Basic.numberInput > 10 || values.Basic.numberInput < 0) {
        errors[`Basic.numberInput`] = "* Value should be between 0 to 10.";
    }

    if (!values.Basic.textAreaInput) {
        errors[`Basic.textAreaInput`] = "* This field should not be empty."
    }

    return errors;
}

//Multiple Form model validation
const validateMultiForm = (values) =>{
    let errors = {};

    //ModelOne Validations
    if (!values.ModelOne.tabOneInput1) {
        errors[`ModelOne.tabOneInput1`] = "* Field #1 validation message."
    }

    if (!values.ModelOne.tabOneInput2) {
        errors[`ModelOne.tabOneInput2`] = "* Field #2 validation message."
    }

    //ModelTwo Validations
    if (!values.ModelTwo.tabTwoInput1) {
        errors[`ModelTwo.tabTwoInput1`] = "* Field #3 validation message."
    }

    if (!values.ModelTwo.tabTwoInput2) {
        errors[`ModelTwo.tabTwoInput2`] = "* Field #4 validation message."
    }

    //ModelThree
    if ('' === values.ModelThree.inputSelect) {
        errors[`ModelThree.inputSelect`] = "* Please select one."
    }

    return errors;
}

export {
    validateForm,
    validateMultiForm
}