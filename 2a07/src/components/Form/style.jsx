import styled from 'styled-components'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    *{
        box-sizing: border-box;
    }
    h3{
        margin: 0;
        text-align: center;
        width: 100%;
    }
    section{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100% ;
    }

    section div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 49%;
    }

    section div input{
            width: 100%;
    }

    input{
        font-size: 25px;
        margin: -20px 0;
        background-color: transparent;
        padding: 5px 20px;
        margin-top: 15px;
        color: aliceblue;
        border-radius: 10px;
    }
    > input{
        width: 100%;
    }
    textarea:focus, input:focus{
        outline: none;
        border-color: #5f95ff;
    }
    label{
        cursor: text;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus{
        -webkit-box-shadow: 0 0 0px 1000px #282c34 inset;
        -webkit-color: aliceblue;
    }
    label{
        top: -20px;
        left: 15px;
        position: relative;
        font-size: 25px;
        margin: 0;
        padding: 0 10px;
        transition: all ease-in .25s;
        z-index: 1000;
        background-color: #282c34;
    }
    .ativo, input:focus + label{
        color: #5f95ff;
        font-size: 18px;
        top: -35px;
    }

    .erro{
        position: relative;
        top: -10px;
        transition: all ease-in .25s;
        width: 100%;
        text-align: left;
    }

    input:focus + label + .erro, .ativo + .erro{
        top: -5px;
    }

    #enviar{
        background-color: #324191;
        border: none;
    }

    
    button{
        margin-top: 30px;
        background-color: transparent;
        font-size: 25px;
        color: white;
        border: none;
        cursor: pointer;
        width: 100%;
        text-align: end;
        &:hover{
            text-decoration: underline;
            color: #5f95ff;
        }
    }

    @media screen and (max-width: 726px) {
        width: 98%;

        section{
            flex-direction: column;
        }
        section div{
            width: 100%;
        }
    }
`