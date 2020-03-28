import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticared } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticared() ? (
        <Component{...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World</h1>}/>
      <PrivateRoute path="/app" component={() => <h1>Você esta Logado</h1>}></PrivateRoute>
    </Switch>
  </BrowserRouter>
)

export default Routes;
