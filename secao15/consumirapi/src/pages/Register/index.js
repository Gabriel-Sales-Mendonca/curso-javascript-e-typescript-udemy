import React, { useState } from 'react'

import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function Register() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <h1>Crie sua conta</h1>

            <Form>
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
                    <input name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Sua senha' />
                </label>

                <button type='submit'>Criar minha conta</button>
            </Form>
        </Container>
    )
}