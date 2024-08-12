import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'
import Loading from '../../components/Loading'
import * as actions from '../../store/modules/auth/actions'

export default function Register() {
    const dispatch = useDispatch()
    const id = useSelector(state => state.auth.user.id)
    const nomeStored = useSelector(state => state.auth.user.nome)
    const emailStored = useSelector(state => state.auth.user.email)
    const isLoading = useSelector(state => state.auth.isLoading)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    React.useEffect(() => {
        if(!id) return

        setNome(nomeStored)
        setEmail(emailStored)
    }, [id, nomeStored, emailStored])

    async function handleSubmit(e) {
        e.preventDefault()
        let formErrors = false
        
        if(nome.length < 3 || nome.length > 255) {
            formErrors = true
            toast.error('O campo NOME deve ter entre 3 a 255 caracteres.')
        }

        if(!isEmail(email)) {
            formErrors = true
            toast.error('Email inválido.')
        }
        
        if(!id && (password.length < 6 || password.length > 50)) {
            formErrors = true
            toast.error('O campo SENHA deve ter entre 6 a 50 caracteres.')
        }

        if(formErrors) return

        dispatch(actions.registerRequest({ id, nome, email, password }))
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor='nome'>
                    Nome:
                    <input name='nome' id='nome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Seu nome' />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Seu email' />
                </label>
                <label htmlFor='password'>
                    Senha:
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Sua senha' />
                </label>

                <button type='submit'>{id ? 'Salvar dados' : 'Criar minha conta'}</button>
            </Form>
        </Container>
    )
}