import React, { Component } from "react";
import { authOperations } from './state'
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, FormLabel, Container, Card } from "react-bootstrap";
import { Redirect, withRouter } from "react-router-dom";
import '../../../includes/custom/css/login.css';
import { ROOT } from "../../../config/settings";
import { bindActionCreators } from 'redux'

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      logged: false,
      errorMessage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return 0 < this.state.email.length && 0 < this.state.password.length;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.email, this.state.password)
      .then((result) => {
        if (0 >= result.length) {
          this.setState({ errorMessage: "Incorrect username/password." });
        }
      });

  }

  render() {
    // Change the redirect to the main page of your app
    if (this.props.isAuthenticated) {
      return <Redirect to={ROOT} />;
    }

    return (
      <Container className="login-container">
        <Card className="login-card">
          <center><h2>Authentication Demo</h2></center>
          <center><h5>{this.state.errorMessage}</h5></center>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl
                size="lg"
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                size="lg"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              size="lg"
              disabled={!this.validateForm()}
              onClick={this.handleSubmit}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    loginUser: authOperations.loginUser
  }, 
  dispatch
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginScreen));