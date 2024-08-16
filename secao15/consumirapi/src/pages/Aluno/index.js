import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { isEmail, isInt, isFloat } from 'validator'
import { useDispatch } from 'react-redux'
import { FaUserCircle, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Container } from '../../styles/GlobalStyles'
import { Form, ProfilePricture, Title } from './styled'
import Loading from '../../components/Loading'
import axios from '../../services/axios'
import history from '../../services/history'
import * as actions from '../../store/modules/auth/actions'

export default function Aluno({ match }) {
    const dispatch = useDispatch()

    const id = get(match, 'params.id', 0)
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [foto, setFoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!id) return
        
        async function getData() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`/alunos/${id}`)
                const Foto = get(data, 'Photos[0].url', '')
                
                setFoto(Foto)

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

    const handleSubmit = async (e) => {
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

        if(formErrors) return

        try {
            if(id) {
                setIsLoading(true)
                await axios.put(`/alunos/${id}`, {
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    idade: idade,
                    peso: peso,
                    altura: altura
                })
                setIsLoading(false)
                toast.success('Aluno(a) editado(a) com SUCESSO!')
            } else {
                setIsLoading(true)
                await axios.post('/alunos', {
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    idade: idade,
                    peso: peso,
                    altura: altura
                })
                setIsLoading(false)
                history.push('/')
                toast.success('Aluno(a) criado(a) com SUCESSO!')
            }
        } catch(e) {
            const status = get(e, 'response.status', 0)
            const data = get(e, 'response.data', {})
            const errors = get(data, 'errors', [])

            if(errors.length > 0) {
                errors.map(error => toast.error(error))
            } else {
                toast.error('Erro desconhecido')
            }

            if(status === 401) dispatch(actions.loginFailure())
        }
    }

    return (
        <Container>
            <Title>
                {id ? (<h1>Editar aluno</h1>) : (<h1>Criar aluno</h1>)}
            </Title>
            
            <Loading isLoading={isLoading} />

            <ProfilePricture>
                {foto ? (
                    <img src={foto} alt={nome} />
                ) : (
                    <FaUserCircle size={180} />
                )}
                <Link to={`/fotos/${id}`}>
                    <FaEdit size={24} />
                </Link>
            </ProfilePricture>

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