import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import './style.jsx'
import { Formulario } from "./style.jsx"

export default function Form(){
    const history = useHistory()
    const formSchema = yup.object().shape({
        nomeUsuario: yup.string().required("Nome de usuario obrigatorio"),
        nomeCompleto: yup.string().required('Nome de completo obrigatorio'),
        email: yup.string().required("Email Obrigatorio").email("Email Invalido"),
        emailConfirm: yup.string().oneOf([yup.ref('email'), null], 'Os emails devem estar iguais'),
        senha: yup.string().required('Senha obrigatoria').matches('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$', 'Senha invalida, a sua senha deve conter 8 caracteres   @Aa1'),
        senhaConfirm: yup.string().oneOf([yup.ref('senha'),null], 'As senhas devem ser iguais')
      })
    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(formSchema)})
    const onSubmitFunction = (data) => history.push('/pessoa', {data})
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirm, setSenhaConfirm] = useState('')
    return <Formulario onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" name="nomeUsuario" id="nomeUsuario" {...register('nomeUsuario')} onChange={(e)=>setNomeUsuario(e.target.value)}/>
        <label htmlFor="nomeUsuario" className={nomeUsuario?'ativo':undefined}>Nome de usuario*</label>
        <div className="erro">{errors.nomeUsuario?.message}</div>
        <input type="text" name="nomeCompleto" id="nomeCompleto" {...register('nomeCompleto')} onChange={(e)=>setNomeCompleto(e.target.value)}/>
        <label htmlFor="nomeCompleto" className={nomeCompleto?'ativo':undefined}>Nome completo*</label>
        <div className="erro">{errors.nomeCompleto?.message}</div>
        <input type="text" name="email" id="email" {...register('email')} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="email" className={email?'ativo':undefined}>Email*</label>
        <div className="erro">{errors.email?.message}</div>
        <input type="text" name="emailConfirm" id="emailConfirm" {...register('emailConfirm')} onChange={(e)=>setEmailConfirm(e.target.value)}/>
        <label htmlFor="emailConfirm" className={emailConfirm?'ativo':undefined}>Confirme seu email*</label>
        <div className="erro">{errors.emailConfirm?.message}</div>
        <section>
            <div>
                <input type="password" name="senha" id="senha" {...register('senha')} onChange={(e)=>setSenha(e.target.value)}/>
                <label htmlFor="senha" className={senha?'ativo':undefined}>Senha*</label>
                <div className="erro">{errors.senha?.message}</div>
            </div>
            <div>
                <input type="password" name="senhaConfirm" id="senhaConfirm" {...register('senhaConfirm')} onChange={(e)=>setSenhaConfirm(e.target.value)}/>
                <label htmlFor="senhaConfirm" className={senhaConfirm?'ativo':undefined}>Confirme seu senha*</label>    
                <div className="erro">{errors.senhaConfirm?.message}</div>   
            </div>
        </section>
        <input type="submit" value="Enviar" id="enviar" />
    </Formulario>
}