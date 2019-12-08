import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home} from './Home/Home'

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" component={Home} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default Routes
