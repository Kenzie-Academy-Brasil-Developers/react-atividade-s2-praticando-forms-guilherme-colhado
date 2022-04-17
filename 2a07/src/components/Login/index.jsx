import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { LoginContainer } from './style'
import { useState } from "react"

export default function Login({users}){
    const history = useHistory()
    
    console.log(users)

    const verifica = (obj) => {
        const nome = users[users.map((user) => user.nomeUsuario).indexOf(obj.userMail)]
        const email = users[users.map((user) => user.email).indexOf(obj.userMail)]
        const senha = users[users.map((user) => user.senha).indexOf(obj.senha)]
        return nome && senha ? nome : email && senha ? email : undefined
    }

    const {register ,handleSubmit} = useForm()

    const submit = data => {
        if(verifica(data)){
            const user = verifica(data)
            history.push('/pessoa', {data: user})
        }else{
            window.alert('Não foi possivel')
        }
    }

    const [userMail, setUserMail] = useState('')
    const [senha, setSenha] = useState('')
    
    return  <LoginContainer onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
        <input type="text" name="login" id="login" {...register('userMail')} onChange={e=>setUserMail(e.target.value)}/>
        <label htmlFor="login" className={userMail?'ativo':undefined}>Nome de usuario</label>
        <input type="password" name="senha" id="senha" {...register('senha')} onChange={e=>setSenha(e.target.value)}/>
        <label htmlFor="senha" className={senha?'ativo':undefined}>Senha</label>
        <input type="submit" value="Logar" />
        <button onClick={()=>history.push('/cadastrar')}>Cria uma conta</button>
    </LoginContainer>
}

