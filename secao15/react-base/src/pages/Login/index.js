import React from 'react'

import { Title } from './styled'
import { Container } from '../../styles/GlobalStyles'

export default function Login() {
    return (
        <Container>
            <Title>
                Login,
                <small>Olá</small>
            </Title>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Enviar</button>
        </Container>
    )
}