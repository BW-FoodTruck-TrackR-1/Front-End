import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register.js'
function App() {
const[state, setState] = useState([])
const use =(object) =>{
  setState([...state, object])
}


  return (
    <div className="App">
    
     <Register use={use} />
    </div>
  );
}

export default App;
