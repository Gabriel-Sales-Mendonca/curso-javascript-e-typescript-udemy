import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Login from '../pages/Login'
import Page404 from '../pages/Page404/index'

export default function Routes() {
    const location = useLocation()

    return (
        <React.StrictMode>
            <Switch location={location}>
                <Route exact path='/' component={Login} />
                <Route path='/exit' component={Page404} />
                <Route path='*' component={Page404} />
            </Switch>
        </React.StrictMode>
    )
}