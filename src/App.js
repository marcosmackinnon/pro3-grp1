import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Screens/Home/Home';
import Error404 from './Screens/Error404/Error404';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route component = {Home} path = '/' exact = {true}/>
        <Route component = {Error404} path = '' />

       


       



      </Switch>
    </div>
  );
}

export default App;
