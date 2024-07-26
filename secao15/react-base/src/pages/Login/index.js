import React from 'react'
import { toast } from 'react-toastify'

import { Title } from './styled'
import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'

export default function Login() {
    toast.success('Você está em Home Page')
    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos')
            console.log(response)
        }

        getData()
    }, [])

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