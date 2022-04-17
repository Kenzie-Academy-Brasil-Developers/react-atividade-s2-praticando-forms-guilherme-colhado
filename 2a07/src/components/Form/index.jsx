import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react'
import './style.jsx'
import { Formulario } from "./style.jsx"

export default function Form({users, setUsers}){
    const history = useHistory()
    
    const [lengthAtual, setLengthAtual] = useState(users.length)

    useEffect(()=>{
        if(users.length>lengthAtual){
            history.push('/pessoa', {data: users[users.length-1]})
        }
    }, [users])
    
    const formSchema = yup.object().shape({
        nomeUsuario: yup.string().required("Nome de usuario obrigatorio"),
        nomeCompleto: yup.string().required('Nome de completo obrigatorio'),
        email: yup.string().required("Email Obrigatorio").email("Email Invalido"),
        emailConfirm: yup.string().oneOf([yup.ref('email'), null], 'Os emails devem estar iguais'),
        senha: yup.string().required('Senha obrigatoria').matches('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$', 'Senha invalida, a sua senha deve conter 8 caracteres   @Aa1'),
        senhaConfirm: yup.string().oneOf([yup.ref('senha'),null], 'As senhas devem ser iguais')
    })
    
    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(formSchema)})
   
    
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirm, setSenhaConfirm] = useState('')
    
    const verifica = (array, email, nomeUsuario) => {
        const vNome = array.map(indice => indice.nomeUsuario).includes(nomeUsuario)
        const vEmail = array.map(indice => indice.email).includes(email)
        console.log(vEmail)
        console.log(vNome)
        return (!vNome && !vEmail)
    }

    const onSubmitFunction = (data) => {
        if(!users || verifica(users, data.email.toLowerCase(), data.nomeUsuario.toLowerCase())){
            setUsers(previusValue => [...previusValue, {
                nomeUsuario: data.nomeUsuario,
                nomeCompleto: data.nomeCompleto,
                email: data.email,
                senha: data.senha
            }])
        }else{
            window.alert('Nome de usuario ou email ja existe')
        }
    }

    return <Formulario onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Cadastro</h3>
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
        <button onClick={()=>history.push('/login')}>Ja possuo uma conta!!</button>
    </Formulario>
}