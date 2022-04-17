import {useHistory} from 'react-router-dom'
import { Container } from './style'

export default function Pessoa(){
    const history = useHistory()
    console.log(history)
    return <Container>
        <p>Nome de Usuario: {history.location.state.data.nomeUsuario}</p>
        <p>Nome Completo: {history.location.state.data.nomeCompleto}</p>
        <p>Email: {history.location.state.data.email}</p>
        <p>senha: {history.location.state.data.senha}</p>
        <button onClick={()=>history.push('/')}>Sair</button>
    </Container>
}