import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Title = styled.h1`
    text-align: center;

    p {
        font-size: 18px;
        font-weight: normal;
    }
`

export const Form = styled.form`
    label {
        width: 180px;
        height: 180px;
        display: flex;
        background-color: #eee;
        border: 5px dashed ${colors.primaryColor};
        margin: 30px auto;
        cursor: pointer;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            width: 180px;
            height: 180px;
        }
    }
    
    input {
        display: none;
    }
`