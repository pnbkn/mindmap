import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from './Home/Home'
import { Login } from './Home/Login';
import { Register } from './Home/Register';

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/login' component = { Login } />
                <Route exact path='/register' component = { Register } />
                <Route path='/' component={Home} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default Routes
