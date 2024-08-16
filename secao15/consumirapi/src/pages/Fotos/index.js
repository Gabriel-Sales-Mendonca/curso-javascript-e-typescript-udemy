import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { Container } from '../../styles/GlobalStyles'
import Loading from '../../components/Loading'
import { Title, Form } from './styled'
import axios from '../../services/axios'
import history from '../../services/history'
import * as actions from '../../store/modules/auth/actions'

export default function Fotos({ match }) {
    const dispatch = useDispatch()

    const id = get(match, 'params.id', '')
    
    const [isLoading, setIsLoading] = useState(false)
    const [foto, setFoto] = useState('')

    useEffect(() => {
        try {
            async function getFoto() {
                setIsLoading(true)
                const { data } = await axios.get(`/alunos/${id}`)
                const fotoUrl = get(data, 'Photos[0].url', '')
                setFoto(fotoUrl)
                setIsLoading(false)
            }

            getFoto()
        } catch(e) {
            toast.error('Erro ao obter imagem')
            setIsLoading(false)
            history.push('/')
        }
    }, [])

    const handleChange = async (e) => {
        const file = e.target.files[0]
        
        if(file) {
            const fotoUrl = URL.createObjectURL(file)
            setFoto(fotoUrl)
        }

        const formData = new FormData()
        formData.append('alunos_id', id)
        formData.append('photo', file)

        try {
            setIsLoading(true)

            await axios.post('/photos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            setIsLoading(false)

            toast.success('Foto enviada com SUCESSO!')
        } catch(e) {
            setIsLoading(false)

            const { status } = get(e, 'response', '')
            toast.error('Erro ao enviar foto')

            if(status === 401) dispatch(actions.loginFailure())
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading}/>

            <Title>
                Fotos

                {foto ? <p>Clique na imagem para escolher uma NOVA IMAGEM</p> : ''}
            </Title>

            <Form>
                <label htmlFor='foto'>
                    {foto ? <img src={foto} alt='' /> : 'Selecionar'}
                    <input type='file' id='foto' onChange={handleChange} />
                </label>
            </Form>
        </Container>
    )
}

Fotos.propTypes = {
    match: PropTypes.shape({}).isRequired,
}