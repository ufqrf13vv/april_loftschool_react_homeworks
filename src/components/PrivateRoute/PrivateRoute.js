import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
    render() {
        const {component: Component, isAuthorized} = this.props;

        return (
            isAuthorized
                ? <Component {...this.props} />
                : <Redirect to="/login" />
        );
    }
}

export default AuthHOC(PrivateRoute);
