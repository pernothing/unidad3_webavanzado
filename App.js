import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Registro from './components/Registro';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registro" component={Registro} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
