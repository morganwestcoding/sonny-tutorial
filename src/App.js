import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = e => {
    console.log(`this is the input ${input}`);
    setTodos([...todos, input])
  };

  return (
    <div className='app'>
      <h1>Welcome to my todo list</h1>
      <input value={input} onChange={e => setInput(e.target.value)} type='text'/>

      <button onClick={addTodo}>Add todo</button>

      <h2>List the Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App
