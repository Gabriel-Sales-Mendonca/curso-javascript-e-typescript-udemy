import React from 'react'
import { toast } from 'react-toastify'

import { Title } from './styled'
import { Container } from '../../styles/GlobalStyles'

export default function Login() {
    toast.success('Você está em Home Page')

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