import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { isEmail, isInt, isFloat } from 'validator'

import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'
import Loading from '../../components/Loading'
import axios from '../../services/axios'

export default function Aluno({ match }) {
    const id = get(match, 'params.id', 0)
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!id) return
        
        async function getData() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`/alunos/${id}`)
                const Foto = get(data, 'Photos[0].url', '')

                setNome(data.nome)
                setSobrenome(data.sobrenome)
                setEmail(data.email)
                setIdade(data.idade)
                setPeso(data.peso)
                setAltura(data.altura)

                setIsLoading(false)
            } catch(e) {
                setIsLoading(false)
                const status = get(e, 'response.status', 0)
                const errors = get(e, 'response.data.errors', [])

                if(status === 400) errors.map(error => toast.error(error))
            }
        }

        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        let formErrors = false

        if(nome.length < 3 || nome.length > 255) {
            formErrors = true
            toast.error('Nome precisa ter entre 3 e 255 caracteres.')
        }

        if(sobrenome.length < 3 || sobrenome.length > 255) {
            formErrors = true
            toast.error('Sobrenome precisa ter entre 3 e 255 caracteres.')
        }

        if(!isEmail(email)) {
            formErrors = true
            toast.error('Email inválido.')
        }

        if(!isInt(String(idade))) {
            formErrors = true
            toast.error('Idade inválida.')
        }

        if(!isFloat(String(peso))) {
            formErrors = true
            toast.error('Peso inválido.')
        }

        if(!isFloat(String(altura))) {
            formErrors = true
            toast.error('Altura inválida.')
        }
    }

    return (
        <Container>
            <h1>Aluno</h1>

            <Loading isLoading={isLoading} />
            <Form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                <label>Sobrenome:</label>
                <input type='text' placeholder='Sobrenome' value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
                <label>Email:</label>
                <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <label>Idade:</label>
                <input type='number' placeholder='Idade' value={idade} onChange={e => setIdade(e.target.value)} />
                <label>Peso:</label>
                <input type='number' placeholder='Peso' value={peso} onChange={e => setPeso(e.target.value)} />
                <label>Altura:</label>
                <input type='number' placeholder='Altura' value={altura} onChange={e => setAltura(e.target.value)} />

                <button>Enviar</button>
            </Form>
        </Container>
    )
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
}