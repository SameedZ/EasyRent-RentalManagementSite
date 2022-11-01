import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import ProductCatalog from '../pages/ProductCatalog'
import AddProduct from '../pages/addproduct'
import RemoveProduct from '../pages/removeproduct'
import UpdateProduct from '../pages/updateproduct'
import LaunchComplaint from '../pages/launchcomplaint'
import ViewComplaint from '../pages/viewcomplaint'
import Return from '../pages/returns'
import Booking from '../pages/booking'
import Rentproduct from '../pages/rentproduct'
import ProcessPayment from '../pages/processpayment'
import Login from '../pages/login';

const Routes = () => {
    return (
        <Switch>
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/productcatalog' component={ProductCatalog}/>
            <Route path='/addproduct' component={AddProduct} />  
            <Route path='/removeproduct' component={RemoveProduct} />  
            <Route path='/updateproduct' component={UpdateProduct} />                
            <Route path='/launchcomplaint' component={LaunchComplaint} />  
            <Route path='/viewcomplaint' component={ViewComplaint} />              
            <Route path='/returns' component={Return} /> 
            <Route path='/booking' component={Booking} />  
            <Route path='/rentproduct' component={Rentproduct} />      
            <Route path='/processpayment' component={ProcessPayment} />         
        </Switch>
    );
}

export default Routes
