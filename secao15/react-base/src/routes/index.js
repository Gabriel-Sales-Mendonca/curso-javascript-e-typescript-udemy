import React from 'react'
import { Switch, useLocation } from 'react-router-dom'

import MyRoute from './MyRoute'
import Login from '../pages/Login'
import Page404 from '../pages/Page404/index'

export default function Routes() {
    const location = useLocation()

    return (
        <React.StrictMode>
            <Switch location={location}>
                <MyRoute exact path='/' component={Login} />
                <MyRoute path='/exit' component={Page404} />
                <MyRoute path='*' component={Page404} />
            </Switch>
        </React.StrictMode>
    )
}