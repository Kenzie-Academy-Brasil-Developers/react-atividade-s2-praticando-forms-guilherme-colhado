import styled from 'styled-components'

export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: left;
    *{
        box-sizing: border-box;
    }    
    h3{
        text-align: center;
    }

    input{
        width: 100%;
        font-size: 25px;
        margin: 0;
        background-color: transparent;
        padding: 5px 20px;
        margin-top: 15px;
        color: aliceblue;
        border-radius: 10px;
    }
    textarea:focus, input:focus{
        outline: none;
        border-color: #5f95ff;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus{
        -webkit-box-shadow: 0 0 0px 1000px #282c34 inset;
        -webkit-color: aliceblue;
    }
    label{
        cursor: text;
        top: -40px;
        left: 15px;
        position: relative;
        font-size: 25px;
        margin: 0;
        padding: 0 10px;
        transition: all ease-in .25s;
        z-index: 1000;
        background-color: #282c34;
        width: max-content;
    }
    .ativo, input:focus + label{
        color: #5f95ff;
        font-size: 18px;
        top: -55px;
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
`