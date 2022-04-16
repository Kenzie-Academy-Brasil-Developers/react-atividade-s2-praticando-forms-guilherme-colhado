import styled from 'styled-components'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    *{
        box-sizing: border-box;
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
        margin: 0;
        background-color: transparent;
        padding: 5px;
        margin-top: 15px;
        color: aliceblue;
    }
    > input{
        width: 100%;
    }
    textarea:focus, input:focus{
        outline: none;
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
        top: -40px;
        left: 7px;
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
        top: -55px;
    }

    .erro{
        position: relative;
        top: -30px;
        transition: all ease-in .25s;
        width: 100%;
        text-align: left;
    }

    input:focus + label + .erro, .ativo + .erro{
        top: -20px;
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