import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    "Take the dogs out for a walk",
    "Take the trash out",
  ]);
  return (
    <div className='app'>
      <h1>Welcome to my todo list</h1>
      <input type='text'/>
      <button>Add todo</button>

      <h2>List the Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App
