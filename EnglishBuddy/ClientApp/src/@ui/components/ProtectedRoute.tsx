import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAppSelector} from '../../@core/app-store/hooks';

const ProtectedRoute = ({component, ...rest}: any) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const routerComponent = (props: any) => {
    return React.createElement(component, props);
    if (isAuthenticated) {
      return React.createElement(component, props);
    } else {
      return <Redirect to='/'/>;
    }
  };

  return <Route {...rest}
                render={routerComponent}/>;
};

export default ProtectedRoute;
