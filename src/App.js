import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Screens/Home/Home';
import Error404 from './Screens/Error404/Error404';
import Detalle from "./Screens/Detalle/Detalle";
function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route component = {Home} path = '/' exact = {true}/>
        <Route component = {Detalle} path = '/detalle/:id' />
        <Route component = {Error404} path = '' />
      </Switch>
    </div>
  );
}

export default App;
