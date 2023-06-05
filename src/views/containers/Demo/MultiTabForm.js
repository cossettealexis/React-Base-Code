import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import FormTemplate from '../../components/FormTemplate';
import { demoSelectors } from './state';

class MultiTabForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    handleSubmitOne = (values) => {
        alert(JSON.stringify(values));
    }

    handleSubmitTwo = (values) => {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <Container>
                {/* TOP DOWN NESTED FORM */}
                <br/><h3><u>Nested Form</u></h3>
                <Card>
                    <FormTemplate
                        {...this.props}
                        nested={true}
                        validate={demoSelectors.validateMultiForm}
                        formButtons={[
                            {variant: 'success', label: 'Submit', submit: true}
                        ]}
                        handleSubmit={this.handleSubmitOne}
                    />
                </Card>

                {/* TABBED NESTED FORM */}
                <br/><h3><u>Tabbed Form</u></h3>
                <Card>
                    <FormTemplate
                        {...this.props}
                        tabbed={true}
                        validate={demoSelectors.validateMultiForm}
                        formButtons={[
                            {variant: 'success', label: 'Submit', submit: true}
                        ]}
                        handleSubmit={this.handleSubmitOne}
                    />
                </Card>
            </Container >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        multiFormInputs: state.demo.nestedForm,
        selectInput: state.demo.selectInput
    };
}

export default connect(mapStateToProps)(MultiTabForm);