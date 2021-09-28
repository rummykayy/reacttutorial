
import './App.css';

import ListCountry from "./ListCountry";
import ApiCalls from "./ApiCalls";
import {FunctionAPI} from "./FunctionAPI";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
        <ApiCalls/>
        </p>
       
      </header>
    </div>
  );
}

export default App;
