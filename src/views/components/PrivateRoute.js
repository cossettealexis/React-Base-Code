import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authOperations } from '../containers/Login/state';
import MainHeader from './MainHeader';
import { LOGIN_ROUTE } from '../containers/Login/routes';

class PrivateRoute extends Component {
    render() {
        return this.props.isAuthenticated ?
            <div>
                <MainHeader {...this.props} />
                <Route path={this.props.path} component={this.props.component} />
            </div>
            : (
                <Redirect to={{
                    pathname: LOGIN_ROUTE,
                    state: {
                        from: this.props.location
                    }
                }} />
            )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.account
    }
};

const mapDispatchToProps = {
    logoutUser: authOperations.logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);