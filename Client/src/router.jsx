import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Admin from './screens/Admin';
import Cart from './screens/Car';
import Category from './screens/Category';
import Help from './screens/Help';
import Home from './screens/Home';
import ProductInfo from './screens/ProductInfo';
import User from './screens/User';
import Adresses from './screens/User/Adresses';
import PersonalData from './screens/User/PersonalData';
import Request from './screens/User/Requests';

const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
      <Route index path="/" exact component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/user" component={User} />
      <Route path="/admin" component={Admin} />
      <Route path="/product" component={ProductInfo} />
      <Route path="/cart" component={Cart} />
      <Route path="/help" component={Help} />
      <Route path="/user/adresses" component={Adresses} />
      <Route path="/user/personaldata" component={PersonalData} />
      <Route path="/user/request" component={Request} />

    </Switch>
    </BrowserRouter>

  )} 

  export default Routes;