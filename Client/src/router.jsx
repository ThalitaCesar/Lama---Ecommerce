import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Admin from './screens/Admin';
import Cart from './screens/Car';
import Category from './screens/Category';
import Home from './screens/Home';
import Payment from './screens/Payment';
import ProductInfo from './screens/ProductInfo';
import User from './screens/User';

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
      <Route path="/payment" component={Payment} />
    </Switch>
    </BrowserRouter>

  )} 

  export default Routes;