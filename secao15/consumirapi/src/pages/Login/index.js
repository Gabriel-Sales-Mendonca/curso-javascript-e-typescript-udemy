import React, { useState } from 'react'
import { isEmail } from 'validator'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/Loading'

export default function Login(props) {
    const dispatch = useDispatch()
    let isLoading = useSelector((state) => state.auth.isLoading)

    const prevPath = get(props, 'location.state.prevPath', '/')

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        let formErrors = false

        if(!isEmail(email)) {
            formErrors = true
            toast.error('Email inválido.')
        }

        if(password.length < 6 || password.length > 50) {
            formErrors = true
            toast.error('Senha inválida.')
        }

        if(formErrors) return

        dispatch(actions.loginRequest({email, password, prevPath}))
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <h1>Login</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    Email:
                    <input name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Seu email' />
                </label>
                <label htmlFor='password'>
                    Senha:
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Sua senha' />
                </label>

                <button type='submit'>Acessar</button>
            </Form>
        </Container>
    )
}