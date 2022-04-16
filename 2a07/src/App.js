import './App.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Form from './components/Form'
import Pessoa from './components/Pessoa'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Form/>
        </Route>
        <Route exact path='/pessoa'>
          <Pessoa/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
