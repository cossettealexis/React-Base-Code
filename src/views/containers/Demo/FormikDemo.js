import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import { demoSelectors } from './state';
import { connect } from 'react-redux';
import FormTemplate from '../../components/FormTemplate';

class FormikDemo extends Component {
    state = { errors: {} }

    handleSubmit = (values) => {
        console.log(values)
        alert(`File: ` + values.Basic.uploadFile + `\nForm Values: ${JSON.stringify(values)}`);
    }

    render() {
        return (
            <Container>
                <Card>
                    <h4>Formik Demo</h4>
                    <FormTemplate
                        {...this.props}
                        validate={demoSelectors.validateForm}
                        handleSubmit={this.handleSubmit}
                        formButtons={[
                            { variant: "success", label: "Display State", submit: true },
                            { variant: "primary", label: "Dummy Button", onClick: () => alert("Cancel clicked") }
                        ]}
                    />
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formInputs: state.demo.basicForm,
        selectInput: state.demo.selectInput,
        checkboxInput: state.demo.checkboxInput,
        radioInput: state.demo.radioInput
    }
}

export default connect(mapStateToProps)(FormikDemo);