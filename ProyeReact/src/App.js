import logo from './logo.svg';
import './App.css';
import Modal from "./ModImport";
import { useEffect, useState } from 'react';
import { nominalTypeHack, string } from 'prop-types';

function App() {
  //const url = 'https://jsonplaceholder.typicode.com/todos'
  
  var data1;

  
  
  const url = 'http://localhost:5000/api/students'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    .then(res => res.json())
    .then(json => {
      data1 = json;
    })
    console.log(data1)
    setTodos(data1)

    sessionStorage.setItem("Pochoclos", JSON.stringify(data1));
 
  }
 
  useEffect(() => {
    fetchApi()
  },[])
  return (
    
    <div className="App">
      
      <Modal label="Simple" label2="Modulo de intercambio React Node"/>
      {!todos? 'Cargando ....' :
      todos.map((todo, index) =>{
        return <li>{todo.name}</li>
      })}
    </div>
    
  );
}




export default App;
