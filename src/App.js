import React, { useEffect } from 'react'
import "./App.css";

function App() {

useEffect(() => {
  const fetchJoke = async () => 
    await fetch(
      `https://api.chucknorris.io/jokes/random`
      ).then(res => res.json())
      .then(data => {
      console.log(data);
    });

    fetchJoke();
}, []);


  return (
    <div className='app'>
      <center>
        <h1>The Joke Generator</h1>
        <button>Generate Joke</button>
      </center>
    </div>
  )
}

export default App
