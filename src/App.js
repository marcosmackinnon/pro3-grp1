import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Screens/Home/Home';
import Error404 from './Screens/Error404/Error404';
import Detalle from "./Screens/Detalle/Detalle";
import searchResults from './Screens/searchResults/searchResults';
import VerMas from './Screens/VerMas/VerMas';
import Favoritos from './Screens/Favoritos/Favoritos';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route component = {Home} path = '/' exact = {true}/> 
        <Route component = {Detalle} path = '/detalle/:id' />
        <Route component = {searchResults} path = '/search-results/:query' />
        <Route component = {VerMas} path = '/vermas/:tipo' />
        <Route component = {Favoritos} path = '/favorites' />
        <Route component = {Error404} path = '' />
      </Switch>
    </div>
  );
}

export default App;
