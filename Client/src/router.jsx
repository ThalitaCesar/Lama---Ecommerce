import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { GlobalContext } from './context/GlobalState';
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
import { isAuthenticated } from './services/isAutenticated';

const PrivateRoute = ({ component: Component, ...rest }) => {

const {tokenLogin} = useContext(GlobalContext)

  return (
    <Route
      {...rest}
      render={() => (tokenLogin ? <Component /> : <Redirect to={{ pathname: '/login' }} />)}
    />
  );
};

const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
      <Route
          path="/login"
          render={() => (isAuthenticated() ? <Redirect to="/" /> : <Login />)}
        />
      <Route path="/register" component={Register}/>
      <PrivateRoute index path="/" exact component={Home} />
      <PrivateRoute path="/category" component={Category} />
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/product" component={ProductInfo} />
      <PrivateRoute path="/cart" component={Cart} />
      <PrivateRoute path="/help" component={Help} />
      <PrivateRoute path="/user/adresses" component={Adresses} />
      <Route path="/user/personaldata" component={PersonalData} />
      <Route path="/user/request" component={Request} />

    </Switch>
    </BrowserRouter>

  )} 

  export default Routes;