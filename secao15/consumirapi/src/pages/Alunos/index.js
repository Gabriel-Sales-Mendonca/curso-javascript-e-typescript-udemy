import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'
import { AlunoContainer, ProfilePicture, NovoAluno, Button } from './styled'
import Loading from '../../components/Loading'

export default function Alunos() {
    const [alunos, setAlunos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            const response = await axios.get('/alunos')
            setAlunos(response.data)
            setIsLoading(false)
        }

        getData()
    }, [])

    const handleDeletAsk = (e) => {
        e.preventDefault()
        const exclamation = e.currentTarget.nextSibling
        exclamation.setAttribute('display', 'block')
        e.currentTarget.remove()
    }

    const handleDelete = async (e, id, index) => {
        e.persist()
        
        try {
            setIsLoading(true)
            await axios.delete(`/alunos/${id}`)
            const novosAlunos = [ ...alunos ]
            novosAlunos.splice(index, 1)
            setAlunos(novosAlunos)
            setIsLoading(false)
        } catch(err) {
            const status = get(err, 'response.status', [])
            
            if(status === 401) {
                toast.error('Você precisa fazer login')
            } else {
                toast.error('Ocorreu um erro ao excluir aluno')
            }
            setIsLoading(false)
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <h1>Alunos</h1>

            <Button>
                <NovoAluno to='/aluno/'>Novo Aluno</NovoAluno>
            </Button>
            
            <AlunoContainer>
                {alunos.map((aluno, index) => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {get(aluno, 'Photos[0].url', false) ? (
                                <img src={aluno.Photos[0].url} alt='' />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </ProfilePicture>

                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>

                        <Link to={`/aluno/${aluno.id}/edit`} >
                            <FaEdit size={16} />
                        </Link>
                        <Link onClick={handleDeletAsk} to={`/aluno/${aluno.id}/delete`} >
                            <FaWindowClose size={16} />
                        </Link>

                        <FaExclamation onClick={e => handleDelete(e, aluno.id, index)} size={16} display="none" cursor="pointer" />
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    )
}