/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Form from './components/Form'
import Pessoa from './components/Pessoa'
import Buttons from './components/Buttons';
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState(localStorage.getItem('users')?localStorage.getItem('users'):[])
  useEffect(()=>{
    if(localStorage.getItem('users')){
      localStorage.setItem('users', users)     
    }
  },[])
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Buttons/>
        </Route>
        <Route exact path='/cadastrar'>
          <Form users={users} setUsers={setUsers}/>
        </Route>
        <Route exact path='/login'>
          <Login users={users}/>
        </Route>
        <Route exact path='/pessoa'>
          <Pessoa/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
