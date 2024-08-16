import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Title = styled.div`
    display: flex;
    justify-content: center;
`

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
    input {
        height: 40px;
        padding: 0px 10px;
        margin-bottom: 20px;
        border: 1px solid #CDCDCD;
        border-radius: 4px;
        font-size: 18px;
    }

    button {
        font-size: 18px;
    }
`

export const ProfilePricture = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px;
    position: relative;

    img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        position: absolute;
        bottom: 0;
        color: #fff;
        background-color: ${colors.primaryColor};
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
`