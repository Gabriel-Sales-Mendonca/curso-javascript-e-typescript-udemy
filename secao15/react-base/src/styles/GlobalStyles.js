import styled, { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import { primaryColor, primaryDarkColor } from '../config/colors'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: ${primaryColor};
    }

    ul {
        list-style: none;
    }
`

export const Container = styled.section`
    max-width: 50%;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`