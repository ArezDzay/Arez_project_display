import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Login from './component/Login/Login'
import Cart from './component/Cart/Cart'
import Order from './component/Order/Order'
import NotFound from './NotFound'

export default class Router extends React.Component {
    render(){
        return(
            <BrowserRouter basename={ process.env.PUBLIC_URL }>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/order' component={Order}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
