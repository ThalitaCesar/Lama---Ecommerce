import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Admin from './screens/Admin';
import Cart from './screens/Car';
import Category from './screens/Category';
import Help from './screens/Help';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Login/Register/register';
import ProductInfo from './screens/ProductInfo';
import User from './screens/User';
import Adresses from './screens/User/Adresses';
import PersonalData from './screens/User/PersonalData';
import Request from './screens/User/Requests';
import SearchProducts from './screens/SearchProducts';
import {useAuth} from './services/isAutenticated';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          render={(props) =>
            isAuthenticated ? <Redirect to="/" /> : <Login {...props} />
          }
        />
        <Route path="/register" component={Register} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/" exact component={Home} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/category" component={Category} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/user" component={User} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/admin" component={Admin} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/product" component={ProductInfo} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/cart" component={Cart} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/help" component={Help} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/user/adresses" component={Adresses} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/user/personaldata" component={PersonalData} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/user/request" component={Request} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/search" component={SearchProducts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

