import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
      </Switch> */}
      
    </div>
  );
}

export default App;
