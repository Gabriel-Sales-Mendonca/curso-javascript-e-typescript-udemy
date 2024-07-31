import React from 'react'
import { Switch, useLocation } from 'react-router-dom'

import MyRoute from './MyRoute'
import Alunos from '../pages/Alunos'
import Aluno from '../pages/Aluno'
import Fotos from '../pages/Fotos'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Page404 from '../pages/Page404/index'

export default function Routes() {
    const location = useLocation()

    return (
        <React.StrictMode>
            <Switch location={location}>
                <MyRoute exact path='/' component={Alunos} isClosed={false} />
                <MyRoute path='/aluno:id/edit' component={Aluno} isClosed={true} />
                <MyRoute path='/aluno' component={Aluno} isClosed={true} />
                <MyRoute path='/fotos:id' component={Fotos} isClosed={true} />
                <MyRoute path='/login' component={Login} isClosed={false} />
                <MyRoute path='/register' component={Register} isClosed={false} />
                <MyRoute path='*' component={Page404} />
            </Switch>
        </React.StrictMode>
    )
}