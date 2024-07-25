import React from 'react'
import { Link } from 'react-router-dom'

import { List } from './styled'

export default function Menu() {
    return (
        <List>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/posts/10'>Posts Específicos</Link></li>
            </ul>
        </List>
    )
}