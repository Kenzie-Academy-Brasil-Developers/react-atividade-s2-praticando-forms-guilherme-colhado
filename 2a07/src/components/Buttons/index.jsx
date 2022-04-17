import { useHistory } from 'react-router-dom' 
import { ButtonContainer } from './style'

export default function Buttons(){
    const history = useHistory()
    return <ButtonContainer>
        <button onClick={()=>history.push('/login')}>Login</button>
        <button onClick={()=>history.push('/cadastrar')}>Cadastrar</button>
    </ButtonContainer>
}