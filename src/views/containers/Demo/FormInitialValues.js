import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import FormTemplate from '../../components/FormTemplate';
import ApiService from '../../../utils/apiService';

class FormInitialValues extends Component {

    state = { initialFormValue: null, toggle: false }

    componentDidMount() {
        ApiService.get("http://localhost:3030/initialForm")
            .then((result) => {
                //Make sure to copy the exact shape of your reducer data
                this.setState({
                    initialFormValue:{
                        Initial:{
                            initialOne: result.data.valueOne,
                            initialTwo: result.data.valueTwo,
                            inputSelect: result.data.valueThree,
                            initialFour: result.data.valueFour,
                            multiCheckbox: result.data.valueFive,
                            radioInput: result.data.valueSix
                        }
                }})
            })
    }

    handleSubmit = (values) =>{
        alert(JSON.stringify(values));
    }
    
    render() {
        return (
            <Container>
                <Card>
                    <h3>Form with Initial Value (API Call)</h3>
                    <FormTemplate 
                        {...this.props} 
                        initialValues={this.state.initialFormValue} 
                        editMode={true} //add this to indicate edit mode and check initial values
                        formButtons={[
                            {variant: "success", label: "Submit", submit: true}
                        ]}
                        handleSubmit={this.handleSubmit}
                    />
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formInputs: state.demo.initialForm,
        selectInput: state.demo.selectInput,
        checkboxInput: state.demo.checkboxInput,
        radioInput: state.demo.radioInput
    }
}

export default connect(mapStateToProps)(FormInitialValues);