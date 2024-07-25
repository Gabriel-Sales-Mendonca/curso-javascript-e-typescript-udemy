import React from 'react'
import { useParams } from 'react-router-dom'

export default function Posts() {
    const params = useParams()
    const { id } = params

    return (
        <>
            <h1>Posts {id}</h1>
        </>
    )
}