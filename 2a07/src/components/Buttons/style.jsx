import styled from 'styled-components'

export const ButtonContainer = styled.div`
    display: grid;
    width: 50%;
    grid-template-columns: 1fr 1fr;
    button{
        font-size: 25px;
        width: 95%;
        margin: 0 auto;
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
`