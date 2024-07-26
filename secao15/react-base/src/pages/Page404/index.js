import React from 'react'
import { toast } from 'react-toastify'

import { Container } from '../../styles/GlobalStyles'

export default function Page404() {
    toast.error('Você está na 404 Page')

    return (
        <Container>
            <h1>Essa página não existe!</h1>
        </Container>
    )
}